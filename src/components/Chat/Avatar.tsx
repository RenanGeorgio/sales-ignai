import "./Avatar.module.scss";

interface AvatarProps {
  size: "thirty-eight" | "twenty-six" | "forty-eight" | "seventy-two" | "thirty-two" | "sixty-four";
  className?: string;
  backgroundClassName?: string
  avatar: string;
};

export const Avatar = ({
  size,
  className,
  backgroundClassName,
  avatar = "https://c.animaapp.com/luvsX3DA/img/avatar-1@2x.png",
}: AvatarProps) => {
  return (
    <div className={`avatar ${size} ${className}`}>
      <div className="overlap-group">
        <div className={`background ${backgroundClassName}`}>
          <div className="overlay" />
        </div>
        <img
          className="img"
          alt="Avatar"
          src={
            size === "thirty-two"
              ? avatar
              : size === "thirty-eight"
              ? "https://c.animaapp.com/luvsX3DA/img/avatar-2@2x.png"
              : size === "forty-eight"
              ? "https://c.animaapp.com/luvsX3DA/img/avatar-3@2x.png"
              : size === "sixty-four"
              ? "https://c.animaapp.com/luvsX3DA/img/avatar-4@2x.png"
              : size === "seventy-two"
              ? "https://c.animaapp.com/luvsX3DA/img/avatar-5@2x.png"
              : "https://c.animaapp.com/luvsX3DA/img/avatar@2x.png"
          }
        />
      </div>
    </div>
  );
}