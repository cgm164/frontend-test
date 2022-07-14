import SearchIcon from "../icons/Search.icon";
import "./SearchInput.css";

/**
 * @param {{ onChange: (value: string) => void}} props
 */

const SearchInput = (props) => {
  const { onChange } = props;

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="search-input">
      <input type="text" placeholder="Buscar" onChange={handleChange} />
      <div className="search-input__search-icon-container">
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchInput;
