import { translate } from "@/utils/animations";
import styles from "./style.module.scss";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          Artificial intelligence for business automation
        </motion.li>
      </ul>
    </div>
  );
}
