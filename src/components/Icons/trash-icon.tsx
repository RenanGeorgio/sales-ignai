interface Props {
  className?: string;
  children?: React.ReactNode;
};

export const Trash = ({ className }: Props) => {
  return (
    <div >
      <svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="trash">
          <path id="Path" d="M3.6665 6.41634H18.3332" stroke="#A8AAAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path id="Path_2" d="M9.16683 10.083V15.583" stroke="#A8AAAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path id="Path_3" d="M12.8333 10.083V15.583" stroke="#A8AAAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path id="Path_4" d="M4.5835 6.41699L5.50016 17.417C5.50016 18.4295 6.32097 19.2503 7.3335 19.2503H14.6668C15.6794 19.2503 16.5002 18.4295 16.5002 17.417L17.4168 6.41699" stroke="#A8AAAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path id="Path_5" d="M8.25 6.41667V3.66667C8.25 3.16041 8.66041 2.75 9.16667 2.75H12.8333C13.3396 2.75 13.75 3.16041 13.75 3.66667V6.41667" stroke="#A8AAAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </g>
      </svg>
    </div>
  );
}