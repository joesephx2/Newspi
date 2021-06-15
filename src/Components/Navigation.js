import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ReadingList from './ReadingList';
import Home from './Home';


function Navigation() {
    console.log('Navigation()');
    const navBar = (
        <Router>
            <div className="nav-bar">
                <ul>
                    <Link to='/home' ><img src={'../rooster.png'} alt="a rooster" /></Link>
                    <Link to='/home' ><li>Home</li></Link>
                    <Link to='/readinglist'><li>Reading List</li></Link>
                </ul>
            </div>
            <Switch>
                <Route path='/readinglist' component={ReadingList} />
                <Route path='/home' component={Home} />
                <Route path='/' component={Home} />

            </Switch>

        </Router>
    )

    return navBar
}

export default Navigation