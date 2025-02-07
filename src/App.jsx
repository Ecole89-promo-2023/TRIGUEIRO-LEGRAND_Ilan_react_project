import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CardInfoPage from './pages/CardInfoPage';
import Home from "./pages/Home";
import CardByNamePage from './pages/CardByNamePage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/card/:id' element={<CardInfoPage />} />
        <Route path='/card' element={<CardByNamePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;