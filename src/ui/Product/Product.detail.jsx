import React from "react";
import "./Product.detail.css";

const ProductDetail = (props) => {
  return (
    <div className="product-detail">
      <ProductDetailImage {...props} />
      <div className="product-detail__info">
        <ProductDetailDescription {...props} />
        <ProductDetailActions {...props} />
      </div>
    </div>
  );
};

const ProductDetailImage = (props) => {
  const { imgUrl, model } = props;
  return (
    <div className="product-detail__img-container">
      <img src={imgUrl} alt={model} />
    </div>
  );
};

const ProductDetailDescription = (props) => {
  const {
    brand,
    model,
    price,
    primaryCamera,
    cpu,
    battery,
    dimentions,
    displayResolution,
    os,
    ram,
    secondaryCmera,
    weight,
  } = props;
  return (
    <div className="product-detail__description-container">
      <h2 className="product-detail__description-title">Descripción</h2>
      <div className="product-detail__info">
        <div className="product-detail__info-container">
          <span className="product-detail__info-label">Marca</span>
          <span className="product-detail__info-value">{brand}</span>
        </div>
        <div className="product-detail__info-container">
          <span className="product-detail__info-label">Modelo</span>
          <span className="product-detail__info-value">{model}</span>
        </div>
        <div className="product-detail__info-container">
          <span className="product-detail__info-label">Precio</span>
          <span className="product-detail__info-value">{price}€</span>
        </div>
        <div className="product-detail__info-container">
          <span className="product-detail__info-label">CPU</span>
          <span className="product-detail__info-value">{cpu}</span>
        </div>
        <div className="product-detail__info-container">
          <span className="product-detail__info-label">RAM</span>
          <span className="product-detail__info-value">{ram}</span>
        </div>
        <div className="product-detail__info-container">
          <span className="product-detail__info-label">Peso</span>
          <span className="product-detail__info-value">{weight} g</span>
        </div>
        <div className="product-detail__info-container">
          <span className="product-detail__info-label">Sistema Operativo</span>
          <span className="product-detail__info-value">{os}</span>
        </div>
        <div className="product-detail__info-container">
          <span className="product-detail__info-label">
            Resolución de pantalla
          </span>
          <span className="product-detail__info-value">
            {displayResolution}
          </span>
        </div>
        <div className="product-detail__info-container">
          <span className="product-detail__info-label">Batería</span>
          <span className="product-detail__info-value">{battery}</span>
        </div>
        <div className="product-detail__info-container">
          <span className="product-detail__info-label">Cámaras</span>
          <div className="product-detail__info-sub-container">
            <span className="product-detail__info-sub-label">Primaria</span>
            <span className="product-detail__info-value">
              {primaryCamera?.join
                ? primaryCamera.join(", ")
                : primaryCamera ?? "--"}
            </span>
          </div>
          <div className="product-detail__info-sub-container">
            <span className="product-detail__info-sub-label">Secundaria</span>
            <span className="product-detail__info-value">
              {secondaryCmera.join
                ? secondaryCmera.join(", ")
                : secondaryCmera ?? "--"}
            </span>
          </div>
        </div>
        <div className="product-detail__info-container">
          <span className="product-detail__info-label">Dimensiones</span>
          <span className="product-detail__info-value">{dimentions}</span>
        </div>
      </div>
    </div>
  );
};

/**
 *
 * @param {{ options: {
 *               colors: { code: number, name: string }[],
 *               storages: { code: number, name: string }[]
 *           }}} props
 * @returns
 */
const ProductDetailActions = (props) => {
  const [isFormValid, setFormIsValid] = React.useState(false);
  const { options, onAddToCart, id } = props;
  const formRef = React.useRef(null);

  const handleFormChange = () => {
    if (!formRef.current) return;
    const isValid = formRef.current.checkValidity();
    setFormIsValid(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const formDataObj = {};
    for (const [key, value] of formData.entries()) {
      formDataObj[key] = value;
    }
    onAddToCart({ id, ...formDataObj });
  };

  return (
    <div className="product-detail__actions-container">
      <h2 className="product-detail__description-title">Comprar</h2>
      <form ref={formRef} onChange={handleFormChange} onSubmit={handleSubmit}>
        <div className="product-detail__actions-container__colors">
          <h4 className="product-detail__actions-container-title">Colores</h4>
          <div className="product-detail__actions-container__colors-container">
            {options.colors.map((color) => (
              <ProductDetailChip
                key={color.code}
                name="colorCode"
                label={color.name}
                value={color.code}
                defaultChecked={options.colors.length === 1}
                required
              />
            ))}
          </div>
        </div>
        <div className="product-detail__actions-container__storages">
          <h4 className="product-detail__actions-container-title">Almacenamiento</h4>
          <div className="product-detail__actions-container__storages-container">
            {options.storages.map((storage) => (
              <ProductDetailChip
                key={storage.code}
                name="storageCode"
                label={storage.name}
                value={storage.code}
                defaultChecked={options.storages.length === 1}
                required
              />
            ))}
          </div>
        </div>
        <button
          className="product-detail__actions-button"
          type="submit"
          disabled={!isFormValid}
        >
          AÑADIR
        </button>
      </form>
    </div>
  );
};

const ProductDetailChip = (props) => {
  const { label } = props;
  return (
    <label className="product-detail__chip-container">
      <input type="radio" className="product-detail__chip-input" {...props} />
      <div className="product-detail__chip-label">{label}</div>
    </label>
  );
};

export default ProductDetail;
