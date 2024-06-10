import { Loader } from "lucide-react";
import React from "react";

import VisuallyHidden from "@/components/VisuallyHidden";

import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.wrapper}>
      <VisuallyHidden>Loading...</VisuallyHidden>
      <Loader size={48} className={styles.loader} />
    </div>
  );
};

export default Spinner;
