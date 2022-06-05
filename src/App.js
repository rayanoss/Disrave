import Home from './pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NextMovie from './pages/NextMovie';
import NavBar from './components/NavBar';
import List from './pages/List';
import {useRef} from 'react';
import Request from './pages/Request';
import MovieInfo from './pages/MovieInfo';

function App() {
  const body = useRef(null);

  return (
    <div className="App" ref={body}>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path='prochain-film' element={<NextMovie />} />
            <Route path='liste-films' element={<List body={body}/>} />
            <Route path='film/:id' element={<MovieInfo />} />
            <Route path='ajouter-un-film' element={<Request />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
