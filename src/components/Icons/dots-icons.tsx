interface Props {
  className?: string;
  children?: React.ReactNode;
};

export const VerticalDots = ({ className }: Props) => {
  return (
    <div >
      <svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10.9999" cy="10.9997" r="0.916667" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="10.9999" cy="10.9997" r="0.916667" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="10.9999" cy="17.4167" r="0.916667" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="10.9999" cy="17.4167" r="0.916667" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <ellipse cx="10.9999" cy="4.58366" rx="0.916667" ry="0.916667" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <ellipse cx="10.9999" cy="4.58366" rx="0.916667" ry="0.916667" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  );
}

export const MessageDots = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <g id="message-dots">
          <g id="Path">
            <path d="M3.33325 18.2035V7.37012C3.33325 5.98941 4.45254 4.87012 5.83325 4.87012H14.1666C15.5473 4.87012 16.6666 5.98941 16.6666 7.37012V12.3701C16.6666 13.7508 15.5473 14.8701 14.1666 14.8701H6.66659L3.33325 18.2035" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.33325 18.2035V7.37012C3.33325 5.98941 4.45254 4.87012 5.83325 4.87012H14.1666C15.5473 4.87012 16.6666 5.98941 16.6666 7.37012V12.3701C16.6666 13.7508 15.5473 14.8701 14.1666 14.8701H6.66659L3.33325 18.2035" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <g id="Path_2">
            <path d="M9.99992 9.86953V9.87786" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.99992 9.86953V9.87786" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <g id="Path_3">
            <path d="M6.66667 9.86953V9.87786" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.66667 9.86953V9.87786" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <g id="Path_4">
            <path d="M13.3334 9.86953V9.87786" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.3334 9.86953V9.87786" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export const HorizonDots = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
        <title>elipsis-h</title>
        <desc>Created with sketchtool.</desc>
        <g id="web-app" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="elipsis-h" fill="#000000">
            <path d="M18,14 C16.8954305,14 16,13.1045695 16,12 C16,10.8954305 16.8954305,10 18,10 C19.1045695,10 20,10.8954305 20,12 C20,13.1045695 19.1045695,14 18,14 Z M6,14 C4.8954305,14 4,13.1045695 4,12 C4,10.8954305 4.8954305,10 6,10 C7.1045695,10 8,10.8954305 8,12 C8,13.1045695 7.1045695,14 6,14 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z" id="Shape">
            </path>
          </g>
        </g>
      </svg>
    </div>
  );
}

export const Dot = () => {
  return (
    <div>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Dot">
          <circle cx="9" cy="9" r="6" fill="#FF9F43"/>
          <circle cx="9" cy="9" r="7.5" stroke="#FF9F43" stroke-opacity="0.16" stroke-width="3"/>
        </g>
      </svg>
    </div>
  );
}