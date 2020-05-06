import React from 'react';
import styles from './App.module.css';

import {Cards, Chart} from './components';


class App extends React.Component {
  
  render() {

    return (
      <div className={styles.container}>
          <Cards/>
          <Chart/>
          
      </div>
    );
  }

}
  
export default App;