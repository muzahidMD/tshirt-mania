import { Route, Routes } from 'react-router-dom';
import './App.css';
import Grandpa from './component/Grandpa/Grandpa';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import OrderReview from './component/OrderReview/OrderReview';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/orderreview' element={<OrderReview />}></Route>
        <Route path='/grandpa' element={<Grandpa />} />
      </Routes>
    </div>
  );
}

export default App;
