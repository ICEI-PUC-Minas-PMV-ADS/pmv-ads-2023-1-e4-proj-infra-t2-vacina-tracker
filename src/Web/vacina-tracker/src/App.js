import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './componentes/Pages/Home/Home'
import Login from './componentes/Pages/Login/Login'
import Cadastro from './componentes/Pages/Cadastro/Cadastro'
import Perfil from './componentes/Pages/Perfil/Perfil'
import Sair from './componentes/Pages/Home/Home'

import Header from './componentes/Layout/Header/Header'
import Footer from './componentes/Layout/Footer/Footer'

function App() {
  return (
    <Router>
      <Header />

      <Routes>        
          <Route exact path='/' element={<Home />} />

          <Route path='/login' element={<Login />} />

          <Route path='/cadastro' element={<Cadastro />} />

          <Route path='/perfil' element={<Perfil />} />

          <Route path='/sair' element={<Sair />} />        
      </Routes>      

      <Footer />
    </Router>
  )
}

export default App;
