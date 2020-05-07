import React from         'react';
import styles from        './App.module.css';

import {Cards} from       './components';

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
        <h1 className="title">Covid19 Uganda | Status</h1>
        <Cards data={data} />

        <h3 className="title">Contact Ministry of Health Today</h3>
        <p className="title">0800 100 066 OR 0800203033</p>
        <h4>Report Any Emergencies</h4>
        <p>0782909153 | 0772460297 | 0772469323</p>
      </div>
    );
  }

}
  
export default App;