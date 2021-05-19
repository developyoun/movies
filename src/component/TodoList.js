import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
  insertTodo,
  finishTodo,
  deleteTodo
} from "../redux/ducks/todos";

const TodoList = () => {
  const [text, setText] = useState("");
	const { todos } = useSelector((state) => state.todoList);
	const dispatch = useDispatch();
  
  const onSubmit = useCallback(() => {
    dispatch(insertTodo(text));
    setText("");
  }, [text, dispatch]);

  const onFinish = useCallback(idx => dispatch(finishTodo(idx)), [dispatch])
  console.log(todos)
	return (
    <div>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={onSubmit}>제출</button>
      {todos.map(val => (
        <div key={val.id}>
          {val.input}<button onClick={() => onFinish(val.id)}>종료</button>
        </div>
      ))}
    </div>
  )
};
export default TodoList;
