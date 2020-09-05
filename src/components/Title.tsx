import React from "react";

type TitleProps = {
  title: String;
  variant?: "blue" | "black" | "white" | "green" | "red";
};
export default function Title({ title = "", variant = "black" }: TitleProps) {
  return <h1 className={`line ${variant}`}>{title}</h1>;
}
