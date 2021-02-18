import './assets/css/App.css';
import Navbar from './Componentes/Navbar';
import Footer from './Componentes/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="page-container">
        <div className="content-wrap">
          <h1>CONTENT FOR FOOTER</h1>
          <h1>CONTENT FOR FOOTER</h1>
          <h1>CONTENT FOR FOOTER</h1>
          <h1>CONTENT FOR FOOTER</h1>
          <h1>CONTENT FOR FOOTER</h1>
          <h1>CONTENT FOR FOOTER</h1>
          <h1>CONTENT FOR FOOTER</h1>
          <h1>CONTENT FOR FOOTER</h1>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
