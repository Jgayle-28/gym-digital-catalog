import { Col, Row } from 'react-bootstrap';
import products from '../../products';
import ProductInfoCard from './ProductInfoCard';

const ProductsPage = ({ type = 'home' }) => {
  return (
    <section className='my-5'>
      <h1>{type} Equipment</h1>
      <Row>
        {products.map((p) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <ProductInfoCard product={p} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default ProductsPage;
