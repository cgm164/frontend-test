import useProducts from "../../core/products/useProducts";
import ProductList from "../../ui/Product/Product.list";
import SearchInput from "../../ui/SearchInput/SearchInput";
import "./ProductList.page.css";

const ProductListPage = () => {
  const { products, handleFilter } = useProducts();

  return (
    <main className="product-list-page container">
      <div className="product-list-page__header">
        <span className="product-list-page__info">
          {products.length} productos
        </span>
        <SearchInput onChange={handleFilter} />
      </div>
      <ProductList items={products} />
    </main>
  );
};

export default ProductListPage;
