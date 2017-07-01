import React from 'react';
import renderer from 'react-test-renderer';
import Welcome from '../src/index.js';

describe('Welcome', () => {
  it('Welcome renders hello world', () => {
    const component = renderer.create(<Welcome />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});