import React from 'react'
import Todo from './Todo'
function TodoList({ todos, setTodos, filteredTodos}) {
    
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {filteredTodos.map(todo => (
                        <Todo setTodos={setTodos} text={todo.text} key={todo.id} todo={todo} todos={todos}/>
                   ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList
