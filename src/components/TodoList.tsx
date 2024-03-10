import React from "react";
import { Todo } from "../models/models";
import SingleTodo from "./SingleTodo";

interface props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  CompletedTodos: Array<Todo>;
}

const TodoList: React.FC<props> = ({
  todos,
  setTodos,
  CompletedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className="container">
      <div>
        <span className="todos__heading">Active Tasks</span>
        {todos?.map((todo, index) => (
          <SingleTodo
            index={index}
            todos={todos}
            todo={todo}
            key={todo.id}
            setTodos={setTodos}
          />
        ))}
      </div>

      <span className="todos__heading">Completed Tasks</span>
      {CompletedTodos?.map((todo, index) => (
        <SingleTodo
          index={index}
          todos={CompletedTodos}
          todo={todo}
          key={todo.id}
          setTodos={setCompletedTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
