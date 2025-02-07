import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CardInfoPage from './pages/CardInfoPage';
import CardListPage from "./pages/CardListPage";
import CardByNamePage from './pages/CardByNamePage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path="/cards" element={<CardListPage />} />
        <Route path='/card/:id' element={<CardInfoPage />} />
        <Route path='/card' element={<CardByNamePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;