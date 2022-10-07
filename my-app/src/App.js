// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from './components/AddInventory';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Inventory Management System</h1>

      <AddProduct/>
      
      </header>
    </div>
  );
}

export default App;
