interface Props {
  className?: string;
  children?: React.ReactNode;
};

export const Video = ({ className }: Props) => {
  return (
    <div >
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M13.75 9.16641L17.9236 7.08008C18.2077 6.93812 18.545 6.95332 18.8151 7.12023C19.0853 7.28715 19.2498 7.58201 19.25 7.89958V14.0999C19.2498 14.4175 19.0853 14.7123 18.8151 14.8793C18.545 15.0462 18.2077 15.0614 17.9236 14.9194L13.75 12.8331V9.16641Z" stroke="#4B465C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M13.75 9.16641L17.9236 7.08008C18.2077 6.93812 18.545 6.95332 18.8151 7.12023C19.0853 7.28715 19.2498 7.58201 19.25 7.89958V14.0999C19.2498 14.4175 19.0853 14.7123 18.8151 14.8793C18.545 15.0462 18.2077 15.0614 17.9236 14.9194L13.75 12.8331V9.16641Z" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2.75" y="5.5" width="11" height="11" rx="2" stroke="#4B465C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2.75" y="5.5" width="11" height="11" rx="2" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};