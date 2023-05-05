// Types
import { IRootReducer } from '../../redux/types/types';

// Styles
import './MainHomePage.css';

// Components
import TableList from '../TableList/TableList';
import Categories from '../Categories/Categories';
import Input from '../UI/Input/Input';
import { useSelector } from 'react-redux';
import { ICategoriesList } from '../../config/interface/interface';

const MainHomePage = () => {
  const categoriesSiteList = useSelector(
    (state: ICategoriesList) => state.categories
  );

  const state = useSelector((state: IRootReducer) => state);
  console.log(state);

  return (
    <div className="home-page-main">
      <Input type="date" width="124px" style={{ marginLeft: 'auto' }} />
      <div className="home-page-main-elements">
        <Categories
          categories={categoriesSiteList}
          className={'categories-big'}
        />
        <TableList tableItems={state.tableItems} tableList={state.tableList} />
      </div>
    </div>
  );
};

export default MainHomePage;
