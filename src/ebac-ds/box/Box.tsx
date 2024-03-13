import React from "react";
import { BoxProps } from "../types/Box";

function Box({
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
}: BoxProps) {
  const mhorizontal = marginHorizontal ? `mh${marginHorizontal}` : "";
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
  const bg = backgroundColor ? `bg-${backgroundColor}` : "";

  return (
    <div
      className={` ${mhorizontal} ${mvertical} ${mleft} ${mright} ${mtop} ${mbottom} ${f} ${p} ${pb} ${pl} ${pr} ${pt} ${align} ${just} ${displayBox} ${dir} ${bg} `}
      style={{ ...props.style, gap: gap || 0, top: 0 }}
    >
      {props.children}
    </div>
  );
}
export default Box;
