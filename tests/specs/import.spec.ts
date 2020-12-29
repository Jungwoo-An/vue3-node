import { expect } from 'chai';

describe('Import .vue file', () => {
  it('should be able to import .vue file', () => {
    const Test = require('../fixtures/Test.vue');

    expect(Test.name).to.be.eq('Test');
    expect(typeof Test.render).to.be.eq('function');
  });
});
