import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './componentes/Layout/Header/Header'
import Footer from './componentes/Layout/Footer/Footer'

import Home from './componentes/Pages/Home/Home'
import Login from './componentes/Pages/Login/Login'
import EsqueceuSenha from './componentes/Pages/EsqueceuSenha/EsqueceuSenha'
import Cadastro from './componentes/Pages/Cadastro/Cadastro'
import Perfil from './componentes/Pages/Perfil/Perfil'
import Sair from './componentes/Pages/Home/Home'

import MCadastroVacina from './componentes/Pages/ModalCadastroVacina/MCadastroVacina'

function App() {
  return (    
    <Router>
      <Header />

      <Routes>        
          <Route exact path='/' element={<Home />} />

          <Route path='/login' element={<Login />} />

          <Route path='/EsqueceuSenha' element={<EsqueceuSenha />} />

          <Route path='/cadastro' element={<Cadastro />} />

          <Route path='/perfil' element={<Perfil />} />

          <Route path='/sair' element={<Sair />} />   
               
      </Routes>  

      <MCadastroVacina/>   

      <Footer />
    </Router>
  )
}

export default App;
