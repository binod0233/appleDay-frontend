import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Stack,
  Breadcrumb,
  Ratio,
} from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import parse from 'html-react-parser';
import { CardComponent } from '../../component/Common/CardComponent';
function Product({ productRes }) {
  return (
    <Container>
      {/* <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/shop">
        Product</Breadcrumb.Item>
        <Breadcrumb.Item active>iPhone</Breadcrumb.Item>
      </Breadcrumb> */}
      <h1 className="text-dark my-5">All Products</h1>
      <Row xs={2} md={3} lg={4}>
        {productRes.map((item, idx) => (
          <Col key={idx}>
            <Card className="h-100 bg-transparent border border-0 align-item?.attributes-center">
              <Link href={`/product/${item?.attributes?.slug}`}>
                <Ratio aspectRatio={100}>
                  <Image
                    src={
                      item?.attributes?.image?.data !== null &&
                      item?.attributes?.image?.data[0]?.attributes?.url
                    }
                    className="px-md-5 py-md-2 img-fluid"
                    alt=""
                    width="180"
                    height="130"
                  />
                </Ratio>
              </Link>

              <Card.Body className="text-center">
                <h6>{item?.attributes?.title}</h6>
                <p className="text-muted">{item?.attributes?.title}</p>
                <p className="text-muted">Rs {item?.attributes?.price}</p>
                <Button
                  variant="newColor"
                  href="https://www.facebook.com/appleday"
                  target="_blank"
                  rel="noreferrer"
                >
                  Buy Now
                </Button>{' '}
              </Card.Body>
            </Card>
          </Col>
        ))}
        {/* <CardComponent data={productRes} /> */}
      </Row>
    </Container>
  );
}

export default Product;

export const getStaticProps = async () => {
  const categories = await fetch(
    'https://xphone-backend.onrender.com/api/categories?populate=deep'
  );
  const categoriesData = await categories.json();

  return {
    props: { productRes: categoriesData?.data },
    revalidate: 1,
  };
};
