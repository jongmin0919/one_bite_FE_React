import './App.css';
import { Routes, Route, Link, useNavigate, useSearchParams } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/Notfound';
import Edit from './pages/Edit';
import { getEmotionImage } from "./util/get-emotion-image";
import Button from "./components/Button";

function App() {
  const nav = useNavigate();
  
  return (
    <>
    <Button/>
    <div>
        <img src={getEmotionImage(1)} alt="" />
        <img src={getEmotionImage(2)} alt="" />
        <img src={getEmotionImage(3)} alt="" />
        <img src={getEmotionImage(4)} alt="" />
        <img src={getEmotionImage(5)} alt="" />
    </div>
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/new"}>New</Link>
      <Link to={"/diary"}>Diary</Link>
      <Link to={"/edit"}>Edit</Link>
    </div>
    <button onClick={() => {nav("/new")}}>
      New 페이지로 이동  
    </button>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/diary/:id" element={<Diary />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
    </>
  )
}

export default App;
