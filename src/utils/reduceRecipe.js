/**
 * Reduce the number of attributes in the object and split ingredients and directions
 * @param {object} fullRecipe The full recipe
 * @returns {object} The recipe with limited fields
 */
export default function reduceRecipe(fullRecipe) {
  const {
    title,
    id,
    photoUrl,
    slug,
    source,
    prepTime,
    cookTime,
    totalTime,
    course,
    cuisine,
    ingredients,
    directions,
  } = fullRecipe;

  return {
    title,
    id,
    photoUrl,
    slug,
    source,
    prepTime,
    cookTime,
    totalTime,
    course: course !== '' ? course : 'Misc',
    cuisine: cuisine !== '' ? cuisine : 'Misc',
    ingredients: ingredients.split('\n'),
    directions: directions.split('\n'),
  };
}
