import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import Footer from "./components/footer";
import Interactivity from "./components/interactivity";
import Fullpaper from "./components/fullpapers";
import Wip from "./components/wip";
import Competition from "./components/competition";
import Doctoral from "./components/doctoral";
import Rapid from "./components/rapid";
import Papertype from "./components/papertype";
import Menu from "./components/Menu";
import AdminPage from "./components/AdminPage";
import {useEffect, useState} from "react";

/**
 * app links page
 *
 * This page is the main links page. the use of this page allows all pages linked to connect together.
 * There is a fetch request which connects to almost all the pages within the return function.
 *
 * @returns {JSX.Element}
 * @constructor
 * @author Kelsey Andrews, John Rooksby
 */

function App() {

    const [papers, setPapers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const [update, setUpdate] = useState(0);

    const handleAuthenticated = (isAuthenticated) => {setAuthenticated(isAuthenticated)}

    useEffect( () => {
        fetch("http://unn-w20017168.newnumyspace.co.uk/year3/assignment/api/papers")
            .then(
                (response) => response.json()
            )
            .then(
                (json) => {
                    setPapers(json.data)
                    setLoading(false)
                }
            )
            .catch(
                (e) => {
                    console.log(e.message)
                }
            )
    }, [update]);

    const handleUpdate = () => {
        setUpdate(update + 1)
    }

  return(
      <div className="App">
          <Menu />
          <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/paper-type" element={<Papertype />} />
                  <Route path="/interactive" element={<Interactivity papers={papers} loading={loading}/>} />
                  <Route path="/fullpapers" element={<Fullpaper papers={papers} loading={loading}/>}  />
                  <Route path="/WiP" element={<Wip papers={papers} loading={loading}/>}  />
                  <Route path="/competition" element={<Competition papers={papers} loading={loading}/>}  />
                  <Route path="/doctoral" element={<Doctoral papers={papers} loading={loading}/>}  />
                  <Route path="/rapid" element={<Rapid papers={papers} loading={loading}/>}  />

              <Route path="/admin" element={<AdminPage papers={papers} authenticated={authenticated}
                                            handleAuthenticated={setAuthenticated}
                                            handleUpdate={handleUpdate}/>} />

              <Route path="*" element={<p>Not found</p>} />
          </Routes>
          <Footer />
      </div>
  );
}

export default App;
