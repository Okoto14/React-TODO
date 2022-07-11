import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  // 追加TODOの入力欄
  const [todoText, setTodoText] = useState("");

  // 未完了TODOの配列
  const [incompleteTodos, setIncompleteTodos] = useState(["あああ", "いいい"]);
  // 完了TODOの配列
  const [completeTodos, setCompleteTodos] = useState(["aaaaa"]);

  // 追加TODOの入力欄の値を変更する
  const onChangeTodoText = (event) => {
    return setTodoText(event.target.value);
  };

  // 追加ボタン押下時のイベント
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  // 削除ボタン押下時のイベント
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    /**
     * splice関数
     * 第一引数：何番目の要素
     * 第二引数:第一引数からいくつ削除するか
     */
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  // 完了ボタン押下時のイベント
  const onClickComplete = (index) => {
    const newInCompleteTodos = [...incompleteTodos];
    newInCompleteTodos.splice(index, 1);

    const newCompleteaTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newInCompleteTodos);
    setCompleteTodos(newCompleteaTodos);
  };

  // 戻すボタン押下時のイベント
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newInCompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newInCompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p className="todo-message">{todo}</p>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p className="todo-message">{todo}</p>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
