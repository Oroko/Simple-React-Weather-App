import React, { Component } from "react";
import classes from './App.module.css';
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className={classes.AppWrapper}>
        <Header />
        <Footer />
        
      </div>
    );
  }
}

export default App;
