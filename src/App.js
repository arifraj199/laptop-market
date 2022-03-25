
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';

function App() {
  return (
    <div>
      <div className='title-container'>
            <Header></Header>
      </div>
      <Products></Products>
    </div>
  );
}

export default App;
