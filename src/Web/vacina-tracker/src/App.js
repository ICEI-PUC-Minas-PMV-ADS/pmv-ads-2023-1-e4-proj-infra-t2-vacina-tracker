import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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

      <Routes>
        <Route exact path='/' element={<Home/>}/>
                  
        <Route path='/login' element={<Login/>}/>
                  
        <Route path='/cadastro' element={<Cadastro/>}/>          
        
        <Route path='/perfil' element={<Perfil/>}/>          
        
        <Route path='/sair' element={<Sair/>}/>                  
      </Routes>

      <Footer/>
    </Router>    
  )
}

export default App;
