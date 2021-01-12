import React from 'react';
import { Link } from 'gatsby';
import { MdAvTimer, MdAccessTime, MdTimelapse } from 'react-icons/md';

function SingleRecipe({ recipe }) {
  return (
    <div>
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
    </div>
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
