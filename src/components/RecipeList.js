import React from 'react';
import { Link } from 'gatsby';
import { MdAvTimer, MdAccessTime, MdTimelapse } from 'react-icons/md';
import styled from 'styled-components';

const SingleRecipeStyles = styled.div`
  margin: 0.5rem 0 1.25rem;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, minmax(35px, 130px)) 1fr;
    gap: 0.5rem;
    align-items: center;

    li {
      text-align: left;
      vertical-align: middle;
    }
  }
`;

const RecipeListStles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

function SingleRecipe({ recipe }) {
  return (
    <SingleRecipeStyles>
      <Link to={`/recipes/${recipe.slug}`}>
        <h2>{recipe.title}</h2>
      </Link>
      <h3>
        {recipe.course} ({recipe.cuisine})
      </h3>
      <ul>
        <li>
          <MdAvTimer alt="Preperation Time" /> <span>Prep:</span>{' '}
          {recipe.prepTime}
        </li>
        <li>
          <MdAccessTime alt="Cook Time" /> <span>Cook:</span> {recipe.cookTime}
        </li>
        <li>
          <MdTimelapse alt="Total Time" /> <span>Total:</span>{' '}
          {recipe.totalTime}
        </li>
      </ul>
    </SingleRecipeStyles>
  );
}

export default function RecipeList({ recipes }) {
  return (
    <div>
      <RecipeListStles>
        {recipes.map((recipe) => (
          <SingleRecipe key={recipe.id} recipe={recipe} />
        ))}
      </RecipeListStles>
    </div>
  );
}
