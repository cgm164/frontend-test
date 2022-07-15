import { useQuery } from "../storage";
import { fetcher } from "../utils/fetcher";

const useProduct = (id) => {
  const { data } = useQuery(
    id ? `https://front-test-api.herokuapp.com/api/product/${id}` : null,
    fetcher
  );

  return { data };
};

export default useProduct;
