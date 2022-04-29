import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home';
import AddEdit from './Pages/AddEdit';
import View from './Pages/View';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position='top-center'/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/addcontact' element={<AddEdit/>}></Route>
          <Route path='/update/:id' element={<AddEdit/>}></Route>
          <Route path='/view/:id' element={<View/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
