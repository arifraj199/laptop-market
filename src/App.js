import logo from './logo.svg';
import './App.css';
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
