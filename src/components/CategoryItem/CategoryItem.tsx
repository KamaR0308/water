import { Link } from 'react-router-dom';
import { ICategory } from '../../config/interface/interface';

// Styles
import './CategoryItem.css';

const CategoryItem = ({ title, src }: ICategory) => {
  return (
    <>
      <div className="category-item">
        <Link className="category-item-title" to={src}>
          {title}
        </Link>
      </div>
    </>
  );
};

export default CategoryItem;
