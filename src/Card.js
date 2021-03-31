import React, { useRef } from "react";
import useOnScreen from "./useOnScreen";
import cx from "classnames";
import "./Card.css";

const Card = () => {
  const ref = useRef();
  const isIntersecting = useOnScreen(ref, {
    rootMargin: "-35% 0px -35% 0px",
    threshold: 1,
  });

  return (
    <div
      className={cx("card", { "--is-intersecting": isIntersecting })}
      ref={ref}
    />
  );
};

export default Card;
