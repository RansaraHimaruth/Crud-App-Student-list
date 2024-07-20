import Home from './pages/Home/Home'
import { useRoutes } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import Create from './pages/Create'
import Read from './pages/Read'
import Update from './pages/Update'

function App() {

  const routes = [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/create',
      element: <Create />
    },
    {
      path: '/read/:id',
      element: <Read />
    },
    {
      path: '/edit/:id',
      element: <Update />
    },
  ]

  let element = useRoutes(routes)
  return (
    <div>{element}</div>
  )
}

export default App
