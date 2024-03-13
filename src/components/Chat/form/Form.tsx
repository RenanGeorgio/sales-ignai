import "./style.css";

interface FormProps {
  size: "default" | "large" | "small";
  icon: "none" | "right" | "left";
  state: "default" | "hover" | "focus" | "placeholder" | "readonly" | "focus-filled";
  className?: string;
  text: string;
};

export const Form = ({
  size,
  icon,
  state,
  className,
  text = "Placeholder"
}: FormProps) => {
  return (
    <div className={`form size-3-${size} state-0-${state} icon-${icon} ${className}`}>
      {
        (
          (icon === "left" && state === "default") ||
          (icon === "right" && state === "default") ||
          state === "focus-filled" ||
          state === "focus" ||
          state === "hover" ||
          state === "placeholder" ||
          state === "readonly"
        ) && (
          <div className="div-3">
              <>
                <div className="text-6">{text}</div>
              </>
          </div>
        )
      }
    </div>
  );
}