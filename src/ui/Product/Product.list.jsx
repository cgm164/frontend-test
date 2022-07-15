import ProductItem from "./Product.item";
import './Product.list.css';

const ProductList = (props) => {
  const { items } = props;
  return (
    <div className="product-list">
      {items.map((item) => (
        <ProductItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ProductList;
