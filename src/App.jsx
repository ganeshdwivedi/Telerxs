import './App.css'
import { Outlet, RouterProvider } from 'react-router-dom'
import router from './router/Router'


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
