//#region  Importing
  // Components
import AddForm from './components/AddForm'
import AddButton from './components/AddButton'
import TasksWindow from './components/TasksWindow'
import ShowTask from './components/ShowTask'
import EditTask from './components/EditTask'
import NotFound from './components/NotFound'
  // Routing
import 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
  // Styling
import './App.css'
  //state
  import { ToastProvider } from './context/toastContext'
  import { useState } from 'react'
  import { taskEditeContext } from './context/taskEditeContext'
//#endregion


function App() {
  
//#region States
const [todo ,setTodo]=useState({title: " ",content:" "});

//#endregion

  return (
    <div>
            <AddButton />
              <ToastProvider >
                <taskEditeContext.Provider value={{todo,setTodo}}>
                  <Routes>
                      <Route path='/add' element={<AddForm />}/>
                      <Route path='/show' element={<ShowTask />}/>
                      <Route path='/edite' element={ <EditTask />}/>
                      <Route path='/' element={<TasksWindow />}/>
                      <Route path='/completed' element={<TasksWindow />}/>
                      <Route path='/not_completed' element={<TasksWindow />}/>
                      <Route path='*' element={<NotFound />}/>
                  </Routes>
                </taskEditeContext.Provider>
              </ToastProvider>
    </div>

  )
}

export default App
