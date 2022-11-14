import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import blog from "./blog";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <header className="bg-gray-800 md:sticky top-0 z-10">
          <div className="App-header">
            <h1 className="headertext"><a href='/'>Home</a></h1>
            <h1 className="headertext"><a href='skills'>Skills</a></h1>
            <h1 className="headertext"><a href="blog">Blogs</a></h1>
          </div>
        </header>
        
        <Switch>
          <Route exact path='/' component={Navbar} />
          <Route path='/blog' component={blog} />

        </Switch>
      </div>
    </Router>
  );
}


export default App;
