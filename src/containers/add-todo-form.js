import React from 'react';
import { connect } from 'react-redux';
import { addTodoAction } from '../actions/actions'

const AddTodoForm = ({dispatch}) => {
  let input;

  return (
    <form onSubmit={
      (e) => {
        e.preventDefault();

        if(!input.value.trim()) return;

        dispatch(addTodoAction(input.value.trim()));
        input.value = '';
      }
    }>
      <input
      type="text"
      placeholder="add todo"

      ref={node => {input = node}}
      />
      <button>Add Todo</button>
    </form>
  )
}

export default connect()(AddTodoForm)