import React, {Component} from 'react';
import AsteroidTableRow from '../asteroid-table-row/asteroid-table-row.component';

class AsteroidTableComponent extends Component {
  render() {
    return (
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
            this.props.asteroids.map((asteroid) => {
              return <AsteroidTableRow key={asteroid.neo_reference_id} asteroid={asteroid} />
          })}
        </tbody>
      </table>
    );
  }
}

export default AsteroidTableComponent;