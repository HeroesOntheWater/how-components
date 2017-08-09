import React from 'react';
// import renderer from 'react-test-renderer'; // cutting react-test-renderer
import { Textbox } from '../src';
import { shallow } from 'enzyme';

describe('example sub describe', () => {
    it('Textbox renders hello world', () =>{
        let component;
        component = shallow(<Textbox />);  
        expect(component.find('div').length).toEqual(1);
    })
});