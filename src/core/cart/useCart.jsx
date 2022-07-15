import { useQuery, useMutation } from "../storage";
import { postFetcher } from "../utils/fetcher";

const useCart = () => {
  const { data: cart } = useQuery(
    "https://front-test-api.herokuapp.com/api/cart"
  );
  const { mutate: mutateCart } = useMutation(
    "https://front-test-api.herokuapp.com/api/cart",
    postFetcher
  );

  return { cart: cart || { count: 0 }, addToCart: mutateCart };
};

export default useCart;
