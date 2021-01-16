import React from 'react';
import { graphql } from 'gatsby';
import RecipeList from '../components/RecipeList';
import SEO from '../components/SEO';

export default function RecipesPage({ data, pageContext }) {
  const recipes = data.recipes.nodes;
  return (
    <>
      <SEO title="Recipe List" />
      <RecipeList recipes={recipes} />
    </>
  );
}

export const query = graphql`
  query RecipesQuery {
    recipes: allRecipe {
      nodes {
        title
        id
        photoUrl
        slug
        source
        prepTime
        cookTime
        totalTime
        course
        cuisine
        ingredients
        directions
      }
    }
  }
`;
