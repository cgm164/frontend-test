import React from "react";
import useDebounce from "../debounce";
import { useQuery } from "../storage";
import { fetcher } from "../utils/fetcher";

/**
 * Return array of products from storage.
 * @returns {{
 *    handleFilter: (filter: string) => void,
 *    products: {
 *       brand: string,
 *       model: string,
 *       price: string,
 *       imgUrl: string,
 *       id: string
 *   }[]
 * }}
 */
const useProducts = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const debounceSearchTerm = useDebounce(searchTerm, 500);
  const { data } = useQuery(
    "https://front-test-api.herokuapp.com/api/product",
    fetcher
  );

  const filterProductBySearchTerm = (product) => {
    if (debounceSearchTerm === "") return true;
    const searchTermLowerCase = debounceSearchTerm.toLowerCase();

    return (
      product.brand?.toLowerCase().includes(searchTermLowerCase) ||
      product.model?.toLowerCase().includes(searchTermLowerCase)
    );
  };

  const products = React.useMemo(
    () => (data || []).filter(filterProductBySearchTerm),
    [debounceSearchTerm, data]
  );

  return {
    handleFilter: setSearchTerm,
    products,
  };
};

export default useProducts;
