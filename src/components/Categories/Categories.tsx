// Global
import React from 'react';
import { useSelector } from 'react-redux';

// Interfaces
import { ICategoriesList } from '../../config/interface/interface';

// Components
import CategoryItem from '../CategoryItem/CategoryItem';

// Styles
import './Categories.css';

interface ICategories {
  categories: Array<{
    title: string;
    src: string;
  }>;
  className?: string;
}

const Categories = ({ className, categories }: ICategories) => {
  return (
    <div className={`categories ${className ? className : ''}`}>
      <span className="categories-title">Категории</span>
      <hr className="categories-title-line" />
      <div className="categories-list">
        {categories &&
          categories.map((category: any, i: number) => {
            return (
              <React.Fragment key={i}>
                <CategoryItem title={category.title} src={category.src} />
                <hr className="category-item-line" />
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
};

export default Categories;
