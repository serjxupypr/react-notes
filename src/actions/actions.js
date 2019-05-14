let todoId = 1;

export const addTodoAction = text => ({
  type: 'ADD_TODO',
  id: todoId++,
  text,
  completed: false
});

export const ToggleTodoAction = id => (
  {
    type: 'TOGGLE_TODO',
    id
  }
)