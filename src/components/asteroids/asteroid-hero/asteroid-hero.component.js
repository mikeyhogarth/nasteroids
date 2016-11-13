import React, {Component} from 'react';

class AsteroidHeroComponent extends Component {
  render() {
    return (
      <div className='jumbotron'>
        <h1>Asteroids currently near Earth</h1>
        <p>Showing Near Earth Objects from <strong className='text-primary'>{this.props.day}</strong>.</p>
      </div>
    );
  }
}

export default AsteroidHeroComponent;