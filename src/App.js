import React from 'react';
import styles from './App.module.css';

import {Cards} from './components';

import { fetchData } from './api';


class App extends React.Component {
  state = {
    data:{},
  }

  async componentDidMount (){
    const fetchedData = await fetchData();

    this.setState({data:fetchedData});
  }
  
  render() {

    const {data} = this.state;

    return (
      <div className={styles.container}>
          <Cards data={data}/>
          
          <h4>Footer</h4>
          
      </div>
    );
  }

}
  
export default App;