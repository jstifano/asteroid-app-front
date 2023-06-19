import React, { FunctionComponent } from "react";
import { ButtonType } from "./ButtonType"

/**
 * Component used to display the Search Button (Can be re-usable)
 * @param onClick Callback function that is used to react when the user clicks the button
 * @param children Children component/information passed through parent component
 * @returns Button JSX.Element
 */
const Button: FunctionComponent<ButtonType> = ({ children, onClick }) => {
  return (
    <button className="Button" onClick={() => onClick()}>
      {children}
    </button>
  );
};

export default Button;