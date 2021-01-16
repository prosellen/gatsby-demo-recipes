import React from 'react';
import { Link } from 'gatsby';
import { MdAvTimer, MdAccessTime, MdTimelapse } from 'react-icons/md';
import styled from 'styled-components';

const SingleRecipeStyles = styled.div`
  margin: 0.5rem 0 1.25rem;
`;

function SingleRecipe({ recipe }) {
  return (
    <SingleRecipeStyles>
      <Link to={`/recipes/${recipe.slug}`}>
        <h2>{recipe.title}</h2>
      </Link>
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
    </SingleRecipeStyles>
  );
}

export default function RecipeList({ recipes }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <SingleRecipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
