import path, { resolve } from 'path';
import fetch from 'isomorphic-fetch';
import slugify from 'slugify';
import reduceRecipe from './src/utils/reduceRecipe';

// Oh, hey there! This file gets run on startup and can be used to talk to the differen Gatsby Node APIs (https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/)

/**
 * This function is used to source data from an external API
 * Since there is no Gatsby plugin for this API that we could use, we will have to do the sourcing manually
 * Otherwise we could have just configured the plugin in `gatsby-config.js` and could have skipped this process
 */
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
    // Use a custom helper function to only pick a subset of attributes from the recipe to write to the node
    const reducedRecipe = reduceRecipe(recipe);

    // Each recipe needs a slug for the URL, which isn't provided by the API so we just create our own
    reducedRecipe.slug = slugify(reducedRecipe.title).toLocaleLowerCase();

    // Create a node for each recipe
    const nodeMeta = {
      id: createNodeId(`recipe-${reducedRecipe.id}`),
      parent: null,
      children: [],
      internal: {
        type: 'Recipe', // this is the name under which the data is added to GraphQL
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

/**
 * This function is used to create all the pages for the individual recipes using data queried by GraphQL
 */
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
      // We created the slug ourselfs and can use it here to create a URL for each page
      path: `recipes/${recipe.slug}`,
      component: recipeTemplate,
      context: {
        slug: recipe.slug,
      },
    });
  });
}

// Create nodes that we can later query with GraphQL
export async function sourceNodes(params) {
  await Promise.all([fetchRecipesAndTurnIntoNodes(params)]);
}

// createPages is run after sourceNodes, so the nodes for the recipes above will already be created
export async function createPages(params) {
  await Promise.all([turnRecipesIntoPages(params)]);
}
