import React from 'react';
import renderer from 'react-test-renderer';
import { Welcome } from '../src';
import axe from 'axe-core';

describe('Welcome', () => {

  describe('example sub describe', () => {
    let component;
    it('Welcome renders hello world', () => {
      component = renderer.create(<Welcome />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });

    it('should be accessible', () => {
      axe.run(component, (err, { violations }) => {
        expect(violations).toHaveLength(0);
      });
    })

    it('should be 5', () => {
      expect(5).toBe(5);
    });
  })

});