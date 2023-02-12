import './App.css'
import Bargraph from './bargraph/Bargraph';
import Earnings from './earnings/Earnings';
import HomeData from './home_data/HomeData';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';


 function App() {

  return (

<div className="app">
  
<Navbar/>

<Earnings/>

<HomeData/>

<Bargraph/>


<Footer/>
</div>



  );
}


export default App;
