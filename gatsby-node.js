// import path, { resolve } from 'path';
import fetch from 'isomorphic-fetch';

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
    // Create a node for each recipe
    const nodeMeta = {
      id: createNodeId(`recipe-${recipe.id}`),
      parent: null,
      children: [],
      internal: {
        type: 'Recipe',
        mediaType: 'application/json',
        contentDigest: createContentDigest(recipe),
      },
    };

    // Create a node for that recipe
    actions.createNode({
      ...recipe,
      ...nodeMeta,
    });
  }
}

// Create nodes that we can later query with GraphQL
export async function sourceNodes(params) {
  await Promise.all([fetchRecipesAndTurnIntoNodes(params)]);
}

export async function createPages(params) {
  // await Promise.all([turnRecipesIntoPages(params)]);
}
