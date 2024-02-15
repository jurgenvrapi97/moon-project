
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import NavComponent from './component/NavComponent'
import HomeComponent from './component/HomeComponent';
import DetailsComponent from './component/DetailsComponent';

function App() {
  return (
   
    <BrowserRouter>
      <NavComponent/>
     <Routes>
        <Route path="/" element={<HomeComponent/>} />
        <Route path="/detail/:id" element={<DetailsComponent/>} />
      </Routes>  
      
    </BrowserRouter>
  
  );
}

export default App;

