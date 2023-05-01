import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './componentes/Header/Header'
import Home from './componentes/Home/Home'
import Login from './componentes/Login/Login'
import Cadastro from './componentes/Cadastro/Cadastro'
import Perfil from './componentes/Perfil/Perfil'
import Sair from './componentes/Home/Home'
import Footer from './componentes/Footer/Footer'


function App() {
  return (
    <Router>
      <Header/>

      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/cadastro'>
          <Cadastro/>
        </Route>
        <Route path='/perfil'>
          <Perfil/>
        </Route>
        <Route path='/sair'>
          <Sair/>
        </Route>
      </Switch>

      <Footer/>
    </Router>    
  )
}

export default App;
