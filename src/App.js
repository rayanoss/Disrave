import Home from './pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NextMovie from './pages/NextMovie';
import NavBar from './components/NavBar';
import List from './pages/List';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path='prochain-film' element={<NextMovie />} />
            <Route path='liste-films' element={<List />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
