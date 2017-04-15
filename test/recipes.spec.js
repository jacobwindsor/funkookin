import { expect } from 'chai';
import { create } from '../src/recipes';
import { Map, List } from 'immutable';

describe('recipes', () => {
  it('Should create a recipe', () => {
    const recipe = create('jam roly-poly', ['jam', 'suet', 'custard']);
    const shouldBe = Map({
      name: 'jam roly-poly',
      ingredients: List(['jam', 'suet', 'custard']),
    });
    expect(recipe.equals(shouldBe)).to.be.true;
  });
});
