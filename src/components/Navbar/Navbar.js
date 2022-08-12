import styles from "./navbar.module.css";
import Input from "../Input/Input";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Input />
    </div>
  );
}

export default Navbar;
