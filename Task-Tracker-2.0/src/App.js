import  React,{useState} from 'react'
import Header from './rendered-components/header'
import Tasks from './rendered-components/Tasks'
import AddTask from './function-components/AddTask'
import { Toggle } from './function-components/Toggle';
import { useDarkMode } from './styles/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from './styles/GlobalStyles';
import  { ThemeProvider } from 'styled-components';




const App = () => {
  const [theme ,toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  //To show or not show initial add task drop down
  const [showAddTask, setShowAddTask] = useState(false)
  //Initial data to be shown on screen
  const [tasks , setTasks] = useState([
    {
        id : 1,
        text :  'appointment',
        day : 'tuesday' ,
        reminder : true ,
    },
    {
        id : 2,
        text :  'school',
        day : 'friday' ,
        reminder : false ,
    },
    {
        id : 3,
        text :  'sleep',
        day : 'thursday' ,
        reminder : true ,
    }
])


const addTask = (task) => {
  const id = Math.floor(Math.random*1000)+1
  const NewTask =  {id ,...task}
  setTasks([...tasks,NewTask])
}

const DeleteTask = (id)=>{
  setTasks(tasks.filter((task)=> task.id!==id))
}

const Reminder = (id) =>{
  setTasks(tasks.map((task)=> 
  task.id === id  ? {...task , reminder : !task.reminder } : task))
}
const m =()=>{
  setShowAddTask(showAddTask=> !showAddTask)
  
}



  return (
    <ThemeProvider theme={themeMode}>
      
      <div className='container'>
        <GlobalStyles />
        
        
        <Header
          onAdd={m }
          showAdd={showAddTask}
        />
      { showAddTask && <AddTask onAdd = {addTask}/> }
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {DeleteTask} OnToggle  = {Reminder}/> : 
      <h2>You Are Right On Schedule !</h2>}
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
    
   
  )
}


export default App

