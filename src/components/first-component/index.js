// @flow
import React from 'react';
import * as jest from 'jest';

export class Welcome extends React.Component {
  render() {
    return (
      <div>Hello world</div>
    );
  }
}

function square(n: number): number {
  return n * n;
}

square("5"); // Error!