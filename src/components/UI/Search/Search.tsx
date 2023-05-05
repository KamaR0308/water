import { ISearch } from '../../../config/interface/interface';

// Styles
import './Search.css';

const Search = ({
  onChange = () => {},
  title,
  style,
  defaultValue,
  ...props
}: ISearch) => {
  const handleForm = (e: any) => {
    return e.preventDefault();
  };

  return (
    <form className="form-search" onClick={(e: any) => handleForm(e)}>
      <label className="form-search-title">Поиск</label>
      <div className="form-confirm">
        <input
          title={title}
          className="search"
          placeholder={defaultValue}
          onChange={(event) => onChange(event.target.value)}
          {...props}
        />
        <button className="search-button">Поиск</button>
      </div>
    </form>
  );
};

export default Search;
