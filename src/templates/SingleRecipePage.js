import React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { MdAvTimer, MdAccessTime, MdTimelapse } from 'react-icons/md';

const RecipeGrid = styled.div``;

export default function SingleRecipePage({ data: { recipe } }) {
  return (
    <>
      <RecipeGrid>
        <div>
          <img src={recipe.photoUrl} alt={recipe.title} width="200" />
        </div>
        <div>
          <h2>{recipe.title}</h2>
          <h3>
            {recipe.course}, {recipe.cuisine}
          </h3>
          <div>
            <span>
              <MdAvTimer alt="Preperation Time" /> {recipe.prepTime}
            </span>
            <span>
              <MdAccessTime /> {recipe.cookTime}
            </span>
            <span>
              <MdTimelapse /> {recipe.totalTime}
            </span>
          </div>
          <div>
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Direction</h3>
            <ul>
              {recipe.directions.map((direction) => (
                <li>{direction}</li>
              ))}
            </ul>
          </div>
          <p />
          <ul />
        </div>
      </RecipeGrid>
    </>
  );
}

// This needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    recipe(slug: { eq: $slug }) {
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
`;
