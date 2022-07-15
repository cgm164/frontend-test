import { Link } from "react-router-dom";
import { strToPath } from "../../core/utils/strToPath";

const ProductItem = (props) => {
  const { brand, model, price, imgUrl } = props;
  const productRoute = strToPath(`/${brand}-${model}`);

  return (
    <Link className="product-item" to={productRoute} state={{ ...props }}>
      <div className="product-item__img-container">
        <img src={imgUrl} alt={model} />
      </div>
      <div className="product-item__info-container">
        <div className="product-item__title-container">
          <span className="product-item__brand">{brand}</span>
          <h3 className="product-item__model">{model}</h3>
        </div>
        <span className="product-item__price">
          {price.length > 0 ? price : "--"}
          <small>€</small>
        </span>
      </div>
    </Link>
  );
};

export default ProductItem;
