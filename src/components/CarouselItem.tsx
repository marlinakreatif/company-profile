import React, { FunctionComponent } from "react";

type CarouselItemProps = {
  bg?: String;
};

export const CarouselItem: FunctionComponent<CarouselItemProps> = (props) => (
  <div>{props.children}</div>
);
