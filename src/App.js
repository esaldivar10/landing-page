import Navbar from './componentes/navbar.js';
import Footer from './componentes/footer.js';
import Main from './componentes/main.js';
// import Card from './componentes/card.js';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/> {/*agrego el main donde tiene todo lo demas :)*/}
      <Footer/>
    </div> 
  );
}

export default App;
