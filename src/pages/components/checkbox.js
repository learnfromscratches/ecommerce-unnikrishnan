import Checkbox from "@mui/material/Checkbox";
import styles from "./checkbox.module.css";

const CustomCheckbox = props => {
  return (
    <div className={styles.customCheckbox} onChange={e=>{props.onCheckboxClick(e,props.filter)}}>
      <Checkbox />
      <p>{props.label}</p>
    </div>
  );
};

export default CustomCheckbox;