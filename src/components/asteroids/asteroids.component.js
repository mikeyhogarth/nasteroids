import React, {Component} from 'react';
import AsteroidTableRow from './asteroid-table-row/asteroid-table-row.component';
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
          <div className='jumbotron'>
            <h1>Asteroids currently near Earth</h1>
            <p>Showing Near Earth Objects from <strong className='text-primary'>{this.state.day}</strong></p>
          </div>
          <table className='table table-striped table-hover'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Orbiting Body</th>
                <th>Estimated Diameter (miles)</th>
                <th>Absolute Magnitude</th>
              </tr>
            </thead>
            <tbody> 
              { 
                this.state.asteroids.map((asteroid) => {
                  return <AsteroidTableRow key={asteroid.neo_reference_id} asteroid={asteroid} />
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AsteroidsComponent;