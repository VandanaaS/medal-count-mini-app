import styles from '../styles/Flag.module.css'

type FlagProps = {
    countryIndex: number;
};

export default function Flag({ countryIndex }: FlagProps) {
     const offset = -countryIndex * 16;
  return (
    <div
      className={styles.flag}
      style={{ backgroundPosition: `0 ${offset}px` }}
      role="img"
      aria-label="flag"
    />
  );
}