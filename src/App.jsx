import {Header} from "./components/Header"
import {Tabs} from "./components/Tabs"
import {TodoList} from "./components/TodoList"
import {TodoInput} from "./components/TodoInput"
import {TodoCard} from "./components/TodoCard"
  

function App() {
  const todos = [
    {input: 'hello! Add your first todo!', complete: true},
    {input: 'Get the groceries' , complete: false},
    {input: 'learn how to web design', complete: false},
    {input: 'say hi to gran gran' , complete: true}
  ]
  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <TodoList todos={todos} />
      <TodoInput />
      <TodoCard />

    </>
  )
}

export default App
