interface Props {
  className?: string;
  children?: React.ReactNode;
};

export const Search = ({ className }: Props) => {
  return (
    <div >
      <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="search">
          <g id="Oval">
            <circle cx="10.8333" cy="11.5365" r="7.58333" stroke="#4B465C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="10.8333" cy="11.5365" r="7.58333" stroke="white" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <g id="Path">
            <path d="M22.75 23.4531L16.25 16.9531" stroke="#4B465C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22.75 23.4531L16.25 16.9531" stroke="white" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}