import { useLocation } from "react-router-dom";
import useCart from "../../core/cart/useCart";
import { useProduct } from "../../core/products";
import ProductDetail from "../../ui/Product/Product.detail";

const ProductDetailsPage = () => {
  const { state } = useLocation();
  const { data } = useProduct(state?.id);
  const { addToCart } = useCart();

  if (!data) return <div></div>;

  return (
    <main className="container">
      <ProductDetail {...data} onAddToCart={addToCart} />
    </main>
  );
};

export default ProductDetailsPage;
