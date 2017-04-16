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

export const updateName = (recipe, name) => recipe.set('name', name);
