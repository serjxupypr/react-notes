export const TodosReducer = (store = [], action) => {
    switch(action.type) {
      case 'ADD_TODO':
        return [
          ...store,
          {
            id: action.id,
            text: action.text,
            completed: action.completed,
          }
        ]
      case 'TOGGLE_TODO':
        return store.map( item => (
            item.id == action.id
            ? {
              ...item,
              completed: !item.completed
            }
            : item
          )

        )
      
      default: 
        return store
    }
  }