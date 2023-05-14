import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './componentes/Layout/Header/Header'
import Footer from './componentes/Layout/Footer/Footer'
import Home from './componentes/Pages/Home/Home'
import Login from './componentes/Pages/Login/Login'
import EsqueceuSenha from './componentes/Pages/EsqueceuSenha/EsqueceuSenha'
import Cadastro from './componentes/Pages/Cadastro/Cadastro'
import Perfil from './componentes/Pages/Perfil/Perfil'
import MeusMembros from './componentes/Pages/MeusMembros/MeusMembros'
import VacinasCadastradas from './componentes/Pages/VacinasCadastradas/VacinasCadastradas'
import Sair from './componentes/Pages/Home/Home'

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

        <Route path='/MeusMembros' element={<MeusMembros />} />

        <Route path='/VacinasCadastradas' element={<VacinasCadastradas />} />

        <Route path='/sair' element={<Sair />} />

      </Routes>

      <Footer />
    </Router>
  )
}

export default App;
