import ErrorImg from '../../assets/Error.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <h5>Hello I'm 명수</h5>
        <h1>test Dev</h1>
        <div className={styles.subText}>Frontend Developer</div>
        {/* <CTA /> */}
        <div className="me">
          <img src={ErrorImg} alt="ME" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        {/* <HeaderSocials /> */}
      </div>
    </header>
  );
};

export default Header;
