import React from "react";
import useDebounce from "../debounce";
import { useQuery } from "../storage";
import { fetcher } from "../utils/fetcher";

const useProducts = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const debounceSearchTerm = useDebounce(searchTerm, 500);
  const { data } = useQuery(
    "https://front-test-api.herokuapp.com/api/product",
    fetcher
  );

  const filterProductBySearchTerm = React.useCallback((product) => {
    if (debounceSearchTerm === "") return true;
    const searchTermLowerCase = debounceSearchTerm.toLowerCase();

    return (
      product.brand?.toLowerCase().includes(searchTermLowerCase) ||
      product.model?.toLowerCase().includes(searchTermLowerCase)
    );
  }, [debounceSearchTerm]);

  const products = React.useMemo(
    () => (data || []).filter(filterProductBySearchTerm),
    [data, filterProductBySearchTerm]
  );

  return {
    handleFilter: setSearchTerm,
    products,
  };
};

export default useProducts;
