import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Questions from './components/Questions/Questions';

function App() {
  return (
    <div>
      <div className='title-container'>
          <Header></Header>
      </div>
      <Products></Products>
      <Questions></Questions>
    </div>
  );
}

export default App;
