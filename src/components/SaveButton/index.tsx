import React from "react";
import Dropdown from "../Dropdown";
import { saveDropdownItems } from "./constants";

function SaveButton() {
  return <Dropdown items={saveDropdownItems}>Guardar y salir</Dropdown>;
}

export default SaveButton;
