import logo from './logo.svg';
import './App.css';
import Store from './components/Store';
import products from './data/products';

function App() {
  return (
    <Store products={products}/>
  );
}

export default App;
