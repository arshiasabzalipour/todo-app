import { TodoCard } from "./TodoCard";
export function TodoList(props) {
  const { todos } = props;
  const tab = "All";
  const filterTodoList =
        tab === "Completed"
      ? todos
      : tab === "Completed"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);

  return (
    <div>
      {filterTodoList.map((todo, todoIndex) => {
        return (
          <TodoCard 
            key={todoIndex} 
            todoIndex={todoIndex} 
            todo={todo} 
          />
        );
      })}
    </div>
  );
}
