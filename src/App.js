import React from 'react';
import "./App.css";
import Home from './pages/home/Home';
import Details_news from "./components/most/Details_news";
import About from './components/footer/about/About';
import RecentDetail from './components/recent/Page';
import CategoryPage from './pages/category_page/CategoryPage';
import Search from './components/search/Search';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/news/:newsId" component={Details_news} />
      </Switch>
      <Switch>
        <Route path="/recent/:recentId" component={RecentDetail} />
      </Switch>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Switch>
        <Route exact path="/about" component={About} />
      </Switch>
      <Switch>
        <Route exact path="/search" component={Search} />
      </Switch>
      <Switch>
        <Route exact path="/categoryPages/:categories" component={CategoryPage} />
      </Switch>
    </Router>
  );
}

export default App;
