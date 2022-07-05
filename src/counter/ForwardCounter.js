import useCounter from '../hooks/use-counter';
import React from 'react';
import Card from './Card';

const ForwardCounter = () => {

  const counter = useCounter();

  return (
    <Card>{counter}</Card>
  );
};

export default ForwardCounter;