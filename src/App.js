import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Recipe from './components/Recipe';
import AddRecipe from './components/AddRecipe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipe' element={<Recipe />} />
          <Route path='/add' element={<AddRecipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
