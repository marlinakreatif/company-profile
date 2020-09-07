import React from "react";

type TitleProps = {
  title: String;
  variant?: "blue" | "black" | "white" | "green" | "red" | "gold";
};
export default function Title({
  title = "Title Is Null",
  variant = "gold",
}: TitleProps) {
  return <h1 className={`line ${variant}`}>{title}</h1>;
}
