const SearchBox = ({ searchChange, onSearchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg--lightest-blue"
        type="search"
        placeholder="find a robot"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
