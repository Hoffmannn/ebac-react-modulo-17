import React from "react";
import "./Button.css";
import { ButtonProps } from "../types/Button";

function Button({
  label,
  onClick,
  mh,
  mv,
  ml,
  mr,
  mt,
  mb,
  p,
  isDisabled,
  ...props
}: Required<ButtonProps>) {
  const mhorizontal = mh ? `mh${mh}` : "";
  const mvertical = mv ? `mv${mv}` : "";
  const mleft = ml ? `ml${ml}` : "";
  const mright = mr ? `mr${mr}` : "";
  const mtop = mt ? `mt${mt}` : "";
  const mbottom = mb ? `mb${mb}` : "";

  const padding = p ? `pa${p}` : "pa2";

  const disabledStyles = isDisabled
    ? { cursor: "not-allowed", opacity: "0.5" }
    : {};

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`bg-lightest-blue ${
        isDisabled ? "" : "button"
      } ${mhorizontal} ${mvertical} ${mleft} ${mright} ${mtop} ${mbottom} ${padding}`}
      style={disabledStyles}
    >
      {label && label}
      {props.children}
    </button>
  );
}

export default Button;
