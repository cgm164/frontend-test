import { useParams, useLocation } from 'react-router-dom';
import { useProduct } from '../../core/products';
import ProductItem from '../../ui/Product/Product.item';

const ProductDetailsPage = () => {
    const { state } = useLocation();
    const { data } = useProduct(state?.id);
    
    if (!data) return <div>Is loading...</div>

    return <div>{JSON.stringify(data)}</div>
}

export default ProductDetailsPage;