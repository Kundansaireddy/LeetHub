import styles from "./Header.module.css";
// import { FaCode } from "react-icons/fa";
const Header = (props) => {
  return (
    <div className={styles.app__navbar}>
      <span className={styles.leethub}>&nbsp;LeetHub</span>
    </div>
  );
};
export default Header;
