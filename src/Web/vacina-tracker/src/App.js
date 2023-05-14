import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Header from './componentes/Layout/Header/Header';
import Footer from './componentes/Layout/Footer/Footer';

import Cadastro from './componentes/Pages/Cadastro/Cadastro'
import EsqueceuSenha from './componentes/Pages/EsqueceuSenha/EsqueceuSenha'
import Home from './componentes/Pages/Home/Home'
import Login from './componentes/Pages/Login/Login'
import MeusMembros from './componentes/Pages/MeusMembros/MeusMembros'
import MCadastroMembro from './componentes/Pages/ModalCadastroMembro/MCadastroMembro'
import MCadastroVacina from './componentes/Pages/ModalCadastroVacina/MCadastroVacina'
import Perfil from './componentes/Pages/Perfil/Perfil'
import PoliticaTermos from './componentes/Pages/PoliticaTermos/PoliticaTermos'

import VacinasCadastradas from './componentes/Pages/VacinasCadastradas/VacinasCadastradas'
import Sair from './componentes/Pages/Home/Home'

function HeaderRouter() {
  const location = useLocation();
  const shouldRenderHeader = location.pathname !== '/';

  return shouldRenderHeader ? <Header /> : null;
}

function App() {
  
  return (
    <Router>
      <HeaderRouter />

      <Routes>
        <Route exact path='/' element={<Home />} />

        <Route path='/Login' element={<Login />} />

        <Route path='/EsqueceuSenha' element={<EsqueceuSenha />} />

        <Route path='/Cadastro' element={<Cadastro />} />

        <Route path='/Perfil' element={<Perfil />} />

        <Route path='/MeusMembros' element={<MeusMembros />} />

        <Route path='/MCadastroMembro' element={<MCadastroMembro />} />

        <Route path='/MCadastroVacina' element={<MCadastroVacina />} />

        <Route path='/VacinasCadastradas' element={<VacinasCadastradas />} />

        <Route path='/PoliticaTermos' element={<PoliticaTermos />} />

        <Route path='/Sair' element={<Sair />} />

      </Routes>      

      <Footer />
    </Router>
  );
}

export default App;
