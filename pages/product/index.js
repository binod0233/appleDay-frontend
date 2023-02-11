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
import CardComponent from '../../component/Common/CardComponent';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
function Product({ productRes }) {
  console.log(productRes);
  return (
    <Container>
      <h1 className="text-dark my-5">All Products</h1>

      <Row className="my-1 ">
        <Tabs
          defaultActiveKey="iphone"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="iphone" title="iPhone ">
            <Row xs={2} md={3} lg={4}>
              <CardComponent
                data={productRes?.filter(
                  (item) => item?.attributes?.category === 'iPhone'
                )}
              />
            </Row>
          </Tab>
          <Tab eventKey="apple-watch" title=" Apple Watch">
            <Row xs={2} md={3} lg={4}>
              <CardComponent
                data={productRes?.filter(
                  (item) => item?.attributes?.category === 'applewatch'
                )}
              />
            </Row>
          </Tab>
          <Tab eventKey="macbook" title="MacBook">
            <Row xs={2} md={3} lg={4}>
              <CardComponent
                data={productRes?.filter(
                  (item) => item?.attributes?.category === 'macbook'
                )}
              />
            </Row>
          </Tab>
          <Tab eventKey="airpod" title="Airpod">
            <Row xs={2} md={3} lg={4}>
              <CardComponent
                data={productRes?.filter(
                  (item) => item?.attributes?.category === 'airpod'
                )}
              />
            </Row>
          </Tab>
        </Tabs>
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
