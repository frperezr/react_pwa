import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => 
  /**
  if (true) {
    throw new Error('Nooooo!');
  }
  * */
   (
    <div>
      {robots.map(robot => (
        <Card
          key={robot.id}
          id={robot.id}
          name={robot.name}
          email={robot.email}
        />
      ))}
    </div>
  )
;

export default CardList;
