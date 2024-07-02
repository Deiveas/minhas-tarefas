import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EstiloGlobal, { Container } from './styles'
import store from './store'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Footer from './containers/Footer/Footer'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
      <Footer />
    </Provider>
  )
}

export default App
