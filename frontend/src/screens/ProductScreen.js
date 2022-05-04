import ProductsPage from '../components/product/ProductsPage';
import { useParams } from 'react-router-dom';

const ProductScreen = () => {
  let { type, equipmentType } = useParams();
  console.log('type :>> ', type);
  console.log('equipmentType :>> ', equipmentType);
  return (
    <>
      <ProductsPage />
    </>
  );
};

export default ProductScreen;
