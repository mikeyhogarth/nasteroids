import React, {Component} from 'react';
import { Link } from 'react-router';
import './asteroid-table-row.style.css';

class AsteroidTableRowComponent extends Component {
  render() {
    return (
        <tr>
          <td>
            <Link to={`/asteroid/${this.props.asteroid.neo_reference_id}`}>
              { this.props.asteroid.name }
            </Link>
            { 
              this.props.asteroid.is_potentially_hazardous_asteroid &&
              <span className="label label-danger hazard-warning">Potentially Hazardous</span>
            }
          </td>
          <td>
            { this.props.asteroid.close_approach_data[0].orbiting_body }
          </td>
          <td> 
            { this.props.asteroid.estimated_diameter.meters.estimated_diameter_min }
          </td>
          <td>
            { this.props.asteroid.absolute_magnitude_h }
          </td>
        </tr>
    );
  }
}

export default AsteroidTableRowComponent;