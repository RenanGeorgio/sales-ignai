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
            <circle cx="10.8333" cy="11.5365" r="7.58333" stroke="#4B465C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <circle cx="10.8333" cy="11.5365" r="7.58333" stroke="white" stroke-opacity="0.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <g id="Path">
            <path d="M22.75 23.4531L16.25 16.9531" stroke="#4B465C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22.75 23.4531L16.25 16.9531" stroke="white" stroke-opacity="0.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}