
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CreateEventPage from './pages/CreateEvent/CreateEventPage'
import EventDetailsPage from './pages/EventDetails/EventDetailsPage'
import LandingPage from './pages/Landing/LandingPage'
// import { createBrowserHistory } from 'history';

function App() {
	// const history = createBrowserHistory();
	// history={history}
  return (
		<Router >
        <Routes>
          <Route exact path="/"  element={<LandingPage />} />
          <Route path="/create" element={<CreateEventPage />} />
          <Route path="/event" element={<EventDetailsPage />}/>
        </Routes>
    </Router>
  );
}

export default App;
