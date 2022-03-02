import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../Interface/Card';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    console.log('ExpenseItem evaluated by React');

    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    };

    return (
      <>
      <Card className="expense-item">
          <ExpenseDate date={props.date} />
          <div className="expense-item__description">
              <h2>{title}</h2>
              <div className="expense-item__price">£{props.amount}</div>              
          </div>
          <button onClick={clickHandler}>Update Title</button>
      </Card>
      </>
  );
}

export default ExpenseItem;