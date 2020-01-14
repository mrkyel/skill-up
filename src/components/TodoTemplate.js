import React, { useState } from "react";
import "../css/TodoTemplate.scss";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

const TodoTemplate = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트의 기초 알아보기",
      checked: true
    },
    {
      id: 2,
      text: "컴포넌트 스타일링해 보기",
      checked: true
    },
    {
      id: 3,
      text: "일정 관리 앱 만들어 보기",
      checked: false
    }
  ]);
  return (
    <>
      <div className="TodoTemplate">
        <div className="app-title">일정 관리</div>
        <div className="content">{children}</div>
        <TodoInsert />
        <TodoList todos={todos} />
      </div>
    </>
  );
};

export default TodoTemplate;
