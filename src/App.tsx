import { ListTasks } from './components/ListTasks'
import { TaskForm } from './components/TaskForm'
import { TaskProvider } from './context/TasksContext'

function App() {

  return (
    <TaskProvider>
      <TaskForm />
      <ListTasks />
    </TaskProvider>
  )
}

export default App
