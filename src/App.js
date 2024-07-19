import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout_Admin from './components/admin/admin__layout/layout_admin';
import Login from './login/login';

function App() {
  <BrowserRouter>
  <Routes>
    <Route path='/admin' element={<Layout_Admin/>}/>
    <Route path='/login' element={<Login/>}/>

  </Routes>
  </BrowserRouter>
}

export default App;
