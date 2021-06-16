import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ReadingList from './ReadingList';
import Home from './Home';
import Stats from './Stats'
import CompletedList from './CompletedList'


function Navigation() {
    const navBar = (
        <Router>
            <div className="nav-bar">
                <ul>
                    <Link to='/home' ><img src={'../rooster.png'} alt="a rooster" /></Link>
                    <Link to='/home' ><li>Home</li></Link>
                    <Link to='/readinglist'><li>Reading List</li></Link>
                    <Link to='/completed' ><li>Completed List</li></Link>
                    <Link to='/stats' ><li>Stats</li></Link>
                    
                </ul>
            </div>
            <Switch>
                <Route path='/stats' component={Stats} />
                <Route path='/completed' component={CompletedList} />
                <Route path='/readinglist' component={ReadingList} />
                <Route path='/home' component={Home} />
                <Route path='/' component={Home} />

            </Switch>

        </Router>
    )

    return navBar
}

export default Navigation