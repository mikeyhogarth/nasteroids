import React, {Component} from 'react';
import AsteroidHero from './asteroid-hero/asteroid-hero.component';
import AsteroidTable from './asteroid-table/asteroid-table.component';
import { fetchAsteroids } from '../../services/nasaNeoWS.service'; 
const _  = require('lodash');

class AsteroidsComponent extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = { asteroids: [], day: null };
  }
  
  componentDidMount() {
    fetchAsteroids(new Date(), new Date()).then(r => {
      const day = _.keys(r.near_earth_objects)[0];
      this.setState({
        day: day,
        asteroids: r.near_earth_objects[day]
      });
    });
  }

  render() {
    return (
      <div className='row'>
        <div className='col-12'>
          <AsteroidHero day={this.state.day} />
          <AsteroidTable asteroids={this.state.asteroids} />
        </div>
      </div>
    );
  }
}

export default AsteroidsComponent;