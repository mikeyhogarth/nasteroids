import React, {Component} from 'react';
import { Link } from 'react-router';
import { fetchAsteroids } from '../../services/nasaNeoWS.service'; 
const _  = require('lodash');

class AsteroidComponent extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = { asteroid: {} };
  }

  componentDidMount() {
    fetchAsteroids().then(r => {
      const day = _.keys(r.near_earth_objects)[0];
      const asteroid = r.near_earth_objects[day]
        .filter(a => a.neo_reference_id === this.props.params.neo_reference_id)[0]
      this.setState({ asteroid: asteroid });
    });
  }

  render() {
    return (
      <div className='row'>
        <div className='col-12'>
          <div className='jumbotron'>
            <h1>{this.state.asteroid.name}</h1>
            <p><Link to='/' className="btn btn-primary btn-sm">Back To Asteroids</Link></p>
          </div>

          
        </div>
      </div>
    );
  }
}

export default AsteroidComponent;