import React from "react";

import classes from "./Temperature.module.css";

const temperature = (props) => {
  return (
    <div className={classes.TemperatureWrapper}>
      {Math.round(props.degrees* (9.0 / 5.0) + 32)}
      <span className={classes.TemperatureSymbol}>°F</span>
    </div>
  );
};

export default temperature;
