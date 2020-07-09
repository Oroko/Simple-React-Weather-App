import React, { Component } from "react";
import classes from "./App.module.css";
import assetMapping from "../../assets/assetMapping.json";
import Card from "../../elements/Card/Card";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
/**import SearchBar from '../../components/SearchBar/SearchBar';*/
import Preview from "../../components/Preview/Preview";
import ErrorNotice from "../../components/ErrorNotice/ErrorNotice";

/**<Preview />
   <ErrorNotice />
   <assetMapping />
   These are temporarily placed in the Div to bypass the compile error and test if they are viewable in the browser
     */

class App extends Component {
  render() {
    return (
      <div className={classes.AppWrapper}>
        <Header />
        <SearchBar />
        <Preview />
        <Card />
        <assetMapping />
        <ErrorNotice />
        <Footer />
      </div>
    );
  }
}

export default App;
