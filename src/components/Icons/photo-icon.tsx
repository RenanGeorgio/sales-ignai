interface Props {
  className?: string;
  children?: React.ReactNode;
};

export const Photo = ({ className }: Props) => {
  return (
    <div >
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="photo">
          <g id="Path">
            <path d="M13.7499 7.33333H13.7591" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.7499 7.33333H13.7591" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <g id="Rectangle">
            <rect x="3.66675" y="3.66699" width="14.6667" height="14.6667" rx="3" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <rect x="3.66675" y="3.66699" width="14.6667" height="14.6667" rx="3" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <g id="Path_2">
            <path d="M3.66675 13.7495L7.33341 10.0828C8.18427 9.26407 9.23256 9.26407 10.0834 10.0828L14.6667 14.6661" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.66675 13.7495L7.33341 10.0828C8.18427 9.26407 9.23256 9.26407 10.0834 10.0828L14.6667 14.6661" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <g id="Path_3">
            <path d="M12.8333 12.8335L13.7499 11.9168C14.6008 11.0981 15.6491 11.0981 16.4999 11.9168L18.3333 13.7501" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.8333 12.8335L13.7499 11.9168C14.6008 11.0981 15.6491 11.0981 16.4999 11.9168L18.3333 13.7501" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}