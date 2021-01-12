import path, { resolve } from 'path';
import fetch from 'isomorphic-fetch';
import slugify from 'slugify';
import reduceRecipe from './src/utils/reduceRecipe';

async function turnRecipesIntoPages({ graphql, actions }) {
  // Get the template for this page
  const recipeTemplate = path.resolve('./src/templates/SingleRecipePage.js');

  // Query all recipes
  const { data } = await graphql(`
    query {
      recipes: allRecipe {
        nodes {
          slug
        }
      }
    }
  `);

  // Loop over each recipes and create a page for each recipe
  data.recipes.nodes.forEach((recipe) => {
    actions.createPage({
      // What is the URL for this new page??
      path: `recipes/${recipe.slug}`,
      component: recipeTemplate,
      context: {
        slug: recipe.slug,
      },
    });
  });
}

async function fetchRecipesAndTurnIntoNodes({
  actions,
  createNodeId,
  createContentDigest,
}) {
  // Fetch recipes from backend and get the JSON
  const res = await fetch('https://api.sampleapis.com/recipes/recipes');
  const recipes = await res.json();

  // Loop through all recipes
  for (const recipe of recipes) {
    // Only pick a subset of attributes from the recipe to write to the node
    const reducedRecipe = reduceRecipe(recipe);

    // Each recipe needs a slug for the URL ... which isn't provided by the API
    reducedRecipe.slug = slugify(reducedRecipe.title).toLocaleLowerCase();

    // Create a node for each recipe
    const nodeMeta = {
      id: createNodeId(`recipe-${reducedRecipe.id}`),
      parent: null,
      children: [],
      internal: {
        type: 'Recipe',
        mediaType: 'application/json',
        contentDigest: createContentDigest(reducedRecipe),
      },
    };

    // Create a node for that recipe
    actions.createNode({
      ...reducedRecipe,
      ...nodeMeta,
    });
  }
}

// Create nodes that we can later query with GraphQL
export async function sourceNodes(params) {
  await Promise.all([fetchRecipesAndTurnIntoNodes(params)]);
}

// createPages is run after sourceNodes, so the nodes for the recipes above will already be created
export async function createPages(params) {
  await Promise.all([turnRecipesIntoPages(params)]);
}
