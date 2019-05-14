import React from 'react';
import { connect } from 'react-redux';
import { ToggleTodoAction } from '../actions/actions';

const TodoItem = ({dispatch, data}) =>  (
  <li 
  key={data.id}
  onClick={ () => {
    dispatch(ToggleTodoAction(data.id));
    }
  }
  style={{
    textDecoration: data.completed ? 'line-through' : 'none'
  }}
  >
    {data.text}
  </li>
)

export default connect()(TodoItem);