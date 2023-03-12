
import './App.css';
import Home from './component/home/Home';
import Header from './component/header/Header';
import Footer from './component/footer/Footer'
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TourDetails from './component/TourDetails/TourDetails';
import db from "./data/db.json"

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/city/:id"  element={<TourDetails data={db}/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
