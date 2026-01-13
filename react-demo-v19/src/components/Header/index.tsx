import SvgIcon from '../SvgIcon';
import { useStyle } from './style';
import Logo from '@/assets/logo.svg';
export default function Header() {
  const { styles } = useStyle();

  return (
    <div className={styles.header}>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className={styles.menus}>
        <div className="menu-item">Home</div>
        <div className="menu-item">About</div>
        <div className="menu-item">Services</div>
        <div className="menu-item">Contact</div>
      </div>
      <div className={styles.profile}>
        <div className="seetings">
          <SvgIcon name="setting" size={32}></SvgIcon>
        </div>
        <button className="connect-wallet-button">
          <SvgIcon name="wallet" size={16}></SvgIcon>
          Connect Wallet
        </button>
      </div>
    </div>
  );
}
