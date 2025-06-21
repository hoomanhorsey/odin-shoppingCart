function setSort(value, setSortStatus) {
  if (value === "priceAscending") {
    setSortStatus("priceAscending");
  } else {
    setSortStatus("priceDescending");
  }
}

function ProductSort({ setSortStatus }) {
  return (
    <>
      <h4>Sort by</h4>
      <select
        name="sort"
        id="sort"
        onChange={(e) => setSort(e.target.value, setSortStatus)}
      >
        <option value="priceAscending">Price - Ascending</option>
        <option value="priceDescending">Price - Descending</option>
      </select>
      _
    </>
  );
}
export { ProductSort };
