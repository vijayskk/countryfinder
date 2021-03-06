import './App.css';
import { FeedRefreshProvider } from './contexts/FeedRefreshContext';
import { RegionContextProvider } from './contexts/RegionContext';
import { SearchTermProvider } from './contexts/SearchTermContext';
import FeedPage from './pages/FeedPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DetailsPage from './pages/DetailsPage';


function App() {
  return (
    <SearchTermProvider>
      <FeedRefreshProvider>
        <RegionContextProvider>
          <div className="App">
            <Router>
              <Switch>
                <Route exact path="/" component={FeedPage} />
                <Route exact path="/details" component={DetailsPage} />
              </Switch>
            </Router>
          </div>
        </RegionContextProvider>
      </FeedRefreshProvider>
    </SearchTermProvider>
  );
}

export default App;
