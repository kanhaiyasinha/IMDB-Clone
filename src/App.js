
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Watchlist from './components/Watchlist';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      {/* Read more about react-router-dom here: https://reactrouter.com/en/main/start/tutorial */}
      <BrowserRouter>{/* Those things which will be continued to whole website will be in BrowserRouter */}
        <Navbar />
        <Routes> {/* This will contain multiple route  */}
          <Route /* This will contain 2 Things Path of the Route, Elements in object form which would be there in the path*/
            path="/" 
            element = {
              <>
                <Banner />
                <Movies />
              </>
            }
          />
          <Route
            path="/watchlist"
            element = {
              <Watchlist />
            }
          />          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
