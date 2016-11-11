import React, {Component} from 'react';
import { Link } from 'react-router';

//  for active links

class NavigationComponent extends Component {
  render() {
    return (
      <div className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a href="../" className="navbar-brand">Nasteroids</a>
          <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div className="navbar-collapse collapse" id="navbar-main">
          <ul className="nav navbar-nav">
            <li>
              <Link activeClassName="active" to='/'>Home</Link>
            </li>
            <li>
              <Link activeClassName="active" to='/about'>About</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="http://nasa.com/" target="_blank">Powered by Nasa NeoWS</a></li>
          </ul>
        </div>
      </div>
    </div>


      /*
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>          
        </ul>
      </nav>
      */
    );
  }
}

export default NavigationComponent;