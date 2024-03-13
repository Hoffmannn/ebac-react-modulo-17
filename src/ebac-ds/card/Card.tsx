import React from "react";
import { CardProps } from "../types/Card";
function Card({
  margin,
  marginHorizontal,
  marginVertical,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  padding,
  paddingLeft,
  paddingRight,
  paddingBottom,
  paddingTop,
  alignItems,
  display,
  justifyContent,
  flexDiretcion,
  gap,
  backgroundColor,
  fixed,
  ...props
}: CardProps) {
  const mhorizontal = marginHorizontal ? `mh${marginHorizontal}` : "mh2";
  const mvertical = marginVertical ? `mv${marginVertical}` : "";
  const mleft = marginLeft ? `ml${marginLeft}` : "";
  const mright = marginRight ? `mr${marginRight}` : "";
  const mtop = marginTop ? `mt${marginTop}` : "";
  const mbottom = marginBottom ? `mb${marginBottom}` : "";

  const p = padding ? `pa${padding}` : "pa2";
  const pb = paddingBottom ? `pb${paddingBottom}` : "";
  const pl = paddingLeft ? `pl${paddingLeft}` : "";
  const pr = paddingRight ? `pr${paddingRight}` : "";
  const pt = paddingTop ? `pt${paddingTop}` : "";

  const align = alignItems ? `items-${alignItems}` : "";
  const just = justifyContent ? `justify-${justifyContent}` : "";
  const displayBox = display ? `${display}` : "";
  const dir = flexDiretcion ? `flex-${flexDiretcion}` : "";
  const f = fixed ? "fixed" : "";
  const bg = backgroundColor ? `bg-${backgroundColor}` : "bg-white";

  return (
    <div
      className={` ${mhorizontal} ${mvertical} ${mleft} ${mright} ${mtop} ${mbottom} ${f} ${p} ${pb} ${pl} ${pr} ${pt} ${align} ${just} ${displayBox} ${dir} ${bg} `}
      style={{ ...props.style, borderWidth: 1, borderRadius: 5 }}
    >
      {props.children}
    </div>
  );
}

export default Card;
