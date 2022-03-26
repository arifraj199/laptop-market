
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';

function App() {
  return (
    <div>
      <div className='title-container'>
          <h1>Laptop Market</h1>
          <p>Get your product</p>
      </div>
      <Products></Products>
    </div>
  );
}

export default App;
