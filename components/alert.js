import styles from "./alert.module.css";
import cn from "classnames";

const Alert = ({ children, type }) => {
  return (
    <div
      className={cn({
        [styles.success]: type === "success",
        [styles.error]: type === "error",
      })}
    >
      {children}
    </div>
  );
};

export default Alert;
