import PropTypes from "prop-types";
import React from "react";
// import { Lock11 } from "../../icons/Lock11";
// import { Lock22 } from "../../icons/Lock22";
// import { Lock23 } from "../../icons/Lock23";
// import { Lock35 } from "../../icons/Lock35";
// import { Lock36 } from "../../icons/Lock36";
// import { Lock7 } from "../../icons/Lock7";
import "./style.css";

export const Form = ({
  size,
  icon,
  state,
  className,
//   override = <Lock22 className="lock-2" />,
  text = "Placeholder",
}) => {
  return (
    <div className={`form size-3-${size} state-0-${state} icon-${icon} ${className}`}>
      {((icon === "left" && state === "default") ||
        (icon === "right" && state === "default") ||
        state === "focus-filled" ||
        state === "focus" ||
        state === "hover" ||
        state === "placeholder" ||
        state === "readonly") && (
        <div className="div-3">
         
            <>
              <div className="text-6">{text}</div>
              {/* <Lock36 className="lock-36" /> */}
            </>



        </div>
      )}
    </div>
  );
};

Form.propTypes = {
  size: PropTypes.oneOf(["default", "large", "small"]),
  icon: PropTypes.oneOf(["none", "right", "left"]),
  state: PropTypes.oneOf(["default", "hover", "focus", "placeholder", "readonly", "focus-filled"]),
  text: PropTypes.string,
};
