import React from 'react';
import { Route, Link } from 'react-router-dom';


class Header extends React.Component {
  render() {
    return (

        <header>
            <nav className="App-nav">
          <ul className="App-ul">
            <li className ="App-li"><Link to="/">Home</Link></li>
            <li className ="App-li"><Link to="boxscore">Live Games</Link></li>
            <li className ="App-li"><Link to="upcomingGames">Upcoming Games</Link></li>
            <li className ="App-li"><Link to="testcomp">Finished Games</Link></li>
            <li className ="App-li"><Link to="pastgames">Finished Games const</Link></li>
          </ul>
        </nav>
        </header>

    )
  }
}

export default Header;