import Footer from "../footer/Footer";
import Header from "../header/Header";
import Tours from "../tours/Tours";
import db from "../../data/db.json"
 

const Home =()=>{
    return (
        <div>
           <Header/>
           <Tours data={db}/>
           <Footer/>
        </div>
    )
}

export default Home ;