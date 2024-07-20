import Home from './pages/Home/Home'
import { useRoutes } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import Create from './pages/Create'

function App() {

  const routes = [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/',
      element: <Create />
    }
  ]

  let element = useRoutes(routes)
  return (
    <div>{element}</div>
  )
}

export default App
