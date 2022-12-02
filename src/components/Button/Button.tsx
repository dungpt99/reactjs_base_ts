import React from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

const Button: React.FC = () => {
  return <div className={cx("wrapper")}>Button</div>;
};

export default Button;
