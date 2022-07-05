import useCounter from '../hooks/use-counter';
import React from 'react';
import Card from './Card';

const BackwardCounter = () => {

  const counter = useCounter(false);

  return (
    <Card>{counter}</Card>
  );
};

export default BackwardCounter;