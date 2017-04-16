import { expect } from 'chai';
import { create, updateName} from '../src/recipes';
import { Map, List } from 'immutable';

describe('recipes', () => {
  const recipe = create('jam roly-poly', ['jam', 'suet', 'custard']);
  it('Should create a recipe', () => {
    const shouldBe = Map({
      name: 'jam roly-poly',
      ingredients: List(['jam', 'suet', 'custard']),
    });
    expect(recipe.equals(shouldBe)).to.be.true;
  });

  it('should update the name', () => {
    const shouldBe = Map({
      name: 'Jacob\'s jam roly poly',
      ingredients: List(['jam', 'suet', 'custard']),
    });
    const updated = updateName(recipe, 'Jacob\'s jam roly poly');
    expect(updated.equals(shouldBe)).to.be.true;
    // No mutations to original recipe
    expect(updated.equals(recipe)).to.be.false;
  });
});
