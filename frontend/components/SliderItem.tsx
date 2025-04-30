import React from 'react';
import styles from './SliderItem.module.css';

type SliderItemProps = {
  item: { id: string; name: string; iconUrl: string };
  isSelected?: boolean;
  onClick?: () => void;
};

const SliderItem = ({ item, isSelected = false, onClick }: SliderItemProps) => (
  <div
    onClick={onClick}
    className={`${styles.sliderItem} ${isSelected ? styles.selected : ''}`}
  >
    <img src={item.iconUrl} alt={item.name} className={styles.image} />
    <div className={styles.name}>{item.name}</div>
  </div>
);

export default SliderItem;
