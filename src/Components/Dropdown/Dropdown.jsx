import React, { useState } from "react";
// Importing moduled css.
import styles from "./dropdown.module.css";

// FontAwsom import for angle down icon.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Dropdown = () => {
  // state is defined to show intial value in dropdown as "select".
  const [selectedValue, setSelectedValue] = useState("Select");
  // as asked in problen items array will pass data as dropdown options.
  const items = ["Car", "Bike", "Bus", "Truck"];

  // this function is to change dropdown data as well as hide the option container on click as asked in problem using JS.
  const handleClick = (data) => {
    const element = document.getElementById("optionContainer");
    setSelectedValue(data);
    element.style.visibility = "hidden";
  };

  // this function is to visible the optionContainer on hover as asked in problem using JS.
  const enableVisibility = () => {
    const element = document.getElementById("optionContainer");
    element.style.visibility = "visible";
  };

  // function to hide element on click .. not asked in problem.. implemented to pevent loading or selecting an item forcefully to hide option container
  const disableVisibility = () => {
    const element = document.getElementById("optionContainer");
    element.style.visibility = "hidden";
  };

  // return JSX code
  return (
    <div className={styles.dropdownContainer}>
      <div>
        <div
          className={styles.dropdownSelect}
          onMouseOver={enableVisibility}
          onClick={disableVisibility}
        >
          <p>{selectedValue}</p>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <div
          className={styles.optionContainer}
          id="optionContainer"
          onMouseOver={enableVisibility}
        >
          {items.map((data) => (
            <p
              className={styles.listItem}
              onClick={() => {
                handleClick(data);
              }}
            >
              {data}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
