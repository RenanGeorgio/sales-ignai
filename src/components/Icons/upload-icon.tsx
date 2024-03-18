interface Props {
  className?: string;
  children?: React.ReactNode;
};

export const Upload = ({ className, ...props }: Props) => {
  return (
    <svg
      className={"upload " + className}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.6665 19.833V22.1663C4.6665 23.455 5.71117 24.4997 6.99984 24.4997H20.9998C22.2885 24.4997 23.3332 23.455 23.3332 22.1663V19.833"
        stroke="#4B465C"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.6665 19.833V22.1663C4.6665 23.455 5.71117 24.4997 6.99984 24.4997H20.9998C22.2885 24.4997 23.3332 23.455 23.3332 22.1663V19.833"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.1665 10.5003L13.9998 4.66699L19.8332 10.5003"
        stroke="#4B465C"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.1665 10.5003L13.9998 4.66699L19.8332 10.5003"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9998 4.66699V18.667"
        stroke="#4B465C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9998 4.66699V18.667"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}