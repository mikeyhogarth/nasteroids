import React, { Component } from 'react';
import NavigationComponent from '../navigation/navigation.component';

class App extends Component {
  render() {
    return (      
      <div className="App">
        <NavigationComponent />
        <main className='container'>
          <div className='page-header' id='banner'>
            {this.props.children}
          </div>
        </main>
      </div>
    );
  }
}

export default App;