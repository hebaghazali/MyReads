import './App.css';
import { Route, Routes } from 'react-router-dom';
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route exact path='/' element={<ListBooks />} />
        <Route exact path='/search' element={<SearchBooks />} />
      </Routes>
    </div>
  );
}

export default App;
