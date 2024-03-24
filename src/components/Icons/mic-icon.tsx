interface Props {
  className?: string;
  children?: React.ReactNode;
};

export const Mic = ({ className }: Props) => {
  return (
    <div >
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="microphone">
          <g id="Rectangle">
            <rect x="8.25" y="1.83301" width="5.5" height="10.0833" rx="2.75" stroke="#4B465C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="8.25" y="1.83301" width="5.5" height="10.0833" rx="2.75" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <g id="Path">
            <path d="M4.58325 9.16699C4.58325 12.7108 7.45609 15.5837 10.9999 15.5837C14.5437 15.5837 17.4166 12.7108 17.4166 9.16699" stroke="#4B465C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.58325 9.16699C4.58325 12.7108 7.45609 15.5837 10.9999 15.5837C14.5437 15.5837 17.4166 12.7108 17.4166 9.16699" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <g id="Path_2">
            <path d="M7.33325 19.2503H14.6666" stroke="#4B465C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.33325 19.2503H14.6666" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <g id="Path_3">
            <path d="M11.0001 15.583V19.2497" stroke="#4B465C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.0001 15.583V19.2497" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}