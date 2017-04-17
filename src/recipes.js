import { Map, List } from 'immutable';

/**
 * Create a recipe
 * @param name {string}
 * @param ingredients {array}
 */
export const create = (name, ingredients) =>
  Map({
    name,
    ingredients: List(ingredients),
  });

const set = recipe => recipe.set;

export const updateName = (recipe, name) => set(recipe)('name', name);
