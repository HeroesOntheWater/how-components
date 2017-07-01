import React from 'react';
import * as jest from 'jest';

export default class Welcome extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      'Hello world'
    );
  }
}

function square(n) {
  return n * n;
}

square("thad"); // Error!