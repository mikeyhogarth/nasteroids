import React, {Component} from 'react';
import './asteroid-table-row.style.css';

class AsteroidTableRowComponent extends Component {
  render() {
    return (
        <tr>
          <td>
            <a href='#'>
              { this.props.asteroid.name 
            }</a>
            { this.props.asteroid.is_potentially_hazardous_asteroid &&
               <span className="label label-danger hazard-warning">Potentially Hazardous</span>
            }
          </td>
          <td>{ this.props.asteroid.close_approach_data[0].orbiting_body }</td>
          <td>{ this.props.asteroid.estimated_diameter.miles.estimated_diameter_min }</td>
          <td>{ this.props.asteroid.absolute_magnitude_h }</td>
        </tr>
    );
  }
}

export default AsteroidTableRowComponent;