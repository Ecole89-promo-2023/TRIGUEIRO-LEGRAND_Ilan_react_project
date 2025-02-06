import Header from './components/Header';
import  Home  from "./pages/Home";
import { BrowserRouter, Route, Routes } from 'react-router';

function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
