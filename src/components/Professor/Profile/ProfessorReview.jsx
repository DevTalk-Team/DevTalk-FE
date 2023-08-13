import React, { useEffect, useState } from 'react';
import styles from './ProfessorReview.module.css';
import reviewData from '../../../model/ReviewDummyData';

const ProfessorReview = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredData, setFilteredData] = useState([]);
  const categories = ['all', 'android'];

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredData(reviewData);
    } else {
      const filtered = reviewData.filter((data) =>
        data.categories.includes(selectedCategory)
      );
      setFilteredData(filtered);
    }
  }, [selectedCategory, reviewData]);

  return (
    <div>
      <div className={styles.reviewHeader}>
        <p className={styles.subText}>후기 n개</p>
        <select
          className={styles.filter}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {filteredData.map((data) => {
        return (
          <div key={data.id} className={styles.reviewContent}>
            <p className={styles.mainText}>{data.title}</p>
            <p className={styles.normalText}>{data.content}</p>
            <div className={styles.reviewInfo}></div>
            <span className={styles.nameText}>{data.user}</span>
            <span className={styles.category}> | </span>
            {data.categories.map((category) => (
              <span className={styles.category}>#{category}</span>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default ProfessorReview;
