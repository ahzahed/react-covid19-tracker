import React, { Component, Fragment } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import logo from './images/logo.png'
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data,country } = this.state;
    return (
      <Fragment>
        <div className={styles.container}>
          <img src={logo} className={styles.image}/>
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country}/>
        </div>
      </Fragment>
    );
  }
}
export default App;
