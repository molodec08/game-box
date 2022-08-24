import {useDevice} from '../../hooks/useDevice';

export const Device = ({ desktop, mobile, children }) => {
  const { isMobile } = useDevice();

  return (isMobile && mobile) || (!isMobile && desktop) ? children : null;
};