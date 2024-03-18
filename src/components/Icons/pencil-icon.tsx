interface Props {
  className?: string;
  children?: React.ReactNode;
};

export const Pencil = ({ className }: Props) => {
  return (
    <div >
      <svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="pencil">
          <path id="Path" d="M3.6665 18.3333H7.33317L16.9582 8.70829C17.9707 7.69576 17.9707 6.05414 16.9582 5.04162C15.9456 4.0291 14.304 4.0291 13.2915 5.04162L3.6665 14.6666V18.3333" stroke="#A8AAAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path id="Path_2" d="M12.375 5.95801L16.0417 9.62467" stroke="#A8AAAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </g>
      </svg>
    </div>
  );
}