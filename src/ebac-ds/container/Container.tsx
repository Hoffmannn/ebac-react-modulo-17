import { ContainerProps } from "../types/Container";

const Container = ({
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
  paddingHorizontal,
  paddingVertical,
  alignItems,
  display,
  justifyContent,
  ...props
}: ContainerProps) => {
  const mhorizontal = marginHorizontal ? `mh${marginHorizontal}` : "";
  const mvertical = marginVertical ? `mv${marginVertical}` : "";
  const mleft = marginLeft ? `ml${marginLeft}` : "";
  const mright = marginRight ? `mr${marginRight}` : "";
  const mtop = marginTop ? `mt${marginTop}` : "";
  const mbottom = marginBottom ? `mb${marginBottom}` : "";

  const p = padding ? `pa${padding}` : "";
  const pb = paddingBottom ? `pb${paddingBottom}` : "";
  const pl = paddingLeft ? `pl${paddingLeft}` : "";
  const pr = paddingRight ? `pr${paddingRight}` : "";
  const pt = paddingTop ? `pt${paddingTop}` : "";
  const ph = paddingHorizontal ? `ph${paddingHorizontal}` : "ph4";
  const pv = paddingVertical ? `pv${paddingVertical}` : "ph2";

  const align = alignItems ? `items-${alignItems}` : "";
  const just = justifyContent ? `justify-${justifyContent}` : "";
  const displayBox = display ? `${display}` : "";

  return (
    <div
      className={` ${mhorizontal} ${mvertical} ${mleft} ${mright} ${mtop} ${mbottom} ${p} ${pb} ${pl} ${pr} ${pt} ${ph} ${pv} ${align} ${just} ${displayBox}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Container;
