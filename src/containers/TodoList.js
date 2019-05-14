import React from 'react';
import TodoItem from '../components/TodoItem'
import { connect } from 'react-redux';

const TodoList = ({store}) => {
  console.log(store);
  if (store.length == 0) {
    return (
      <div style={{
        margin: '20px 0'
      }}>
        No items yet...
      </div>
    )
  } else {
    return (
      <ul>
        {
          store.map(item => {
            return (
              <TodoItem key={item.id} data={item}/>
            )
          })
        }
      </ul>
    )
  }
};

const mapStateToProps = store => (
  {store}
);
  
export default connect(
  mapStateToProps,
  
)(TodoList);