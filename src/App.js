import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import BasketDetail from './pages/BasketDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route path="/" component={ProductList} />
      </div>
    </Router>
  );
}

export default App;
