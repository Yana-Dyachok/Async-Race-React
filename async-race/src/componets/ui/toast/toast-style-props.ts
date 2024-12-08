import { Slide, ToastPosition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './toast-custom-style.module.scss';

const toastProps = {
  position: 'top-left' as ToastPosition,
  bodyClassName: styles.toastBody,
  toastClassName: styles.toastWrapper,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'light',
  transition: Slide,
};
export default toastProps;