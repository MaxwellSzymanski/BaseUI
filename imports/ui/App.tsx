import React from 'react';
import { Button } from '.';

export const App = () => (
  <div className="p-10 justify-center flex flex-col items-center">
    <h1 className="">Welcome to Meteor!</h1>
    <Button label='Hello' onClick={() => alert("Hello")}/>
  </div>
);
