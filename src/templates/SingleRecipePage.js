import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { MdAvTimer, MdAccessTime, MdTimelapse } from 'react-icons/md';
import SEO from '../components/SEO';

const RecipeGrid = styled.div`
  display: grid;
  grid-template-columns: fit-content(300px) minmax(500px, 1fr);
  gap: 2rem;
  @media (max-width: 720px) {
    grid-auto-flow: column;
  }

  img {
    object-fit: cover;
  }
`;

const TimerGrid = styled.div`
  margin: 0 0 2rem;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, minmax(35px, 130px)) 1fr;
  /* justify-items: center;
  align-items: center; */
  place-items: center center;
  gap: 0.5rem;

  li {
    text-align: left;
    vertical-align: middle;
  }
`;

export default function SingleRecipePage({ data: { recipe } }) {
  return (
    <>
      <SEO title={`Receipe for ${recipe.title}`} />
      <RecipeGrid>
        <div>
          <img src={recipe.photoUrl} alt={recipe.title} maxwidth="300" />
        </div>
        <div>
          <h2>{recipe.title}</h2>
          <h3>
            {recipe.course}, {recipe.cuisine}
          </h3>
          <TimerGrid>
            <li>
              <MdAvTimer alt="Preperation Time" /> <span>Prep:</span>{' '}
              {recipe.prepTime}
            </li>
            <li>
              <MdAccessTime alt="Cook Time" /> <span>Cook:</span>{' '}
              {recipe.cookTime}
            </li>
            <li>
              <MdTimelapse alt="Total Time" /> <span>Total:</span>{' '}
              {recipe.totalTime}
            </li>
          </TimerGrid>
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
