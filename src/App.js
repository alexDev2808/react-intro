import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';


const defaultTODOs = [
  { text: "Aprender React", completed: false },
  { text: "Aprender Desarrollo Movil con Kotlin y Android Studio", completed: false },
  { text: "Aprender Python", completed: false },
  { text: "Aprender Ingles", completed: false },
]

function App() {
  return (
    <>

      <div className='app-container'>

        <h1>Lista de Tareas</h1>

        <TodoCounter completed={14} total={23} />
        <TodoSearch />

        <TodoList>
          {defaultTODOs.map(todo => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
          ))}
        </TodoList>


        <CreateTodoButton />
      </div>

    </>
  );
}



export default App;
