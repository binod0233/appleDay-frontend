import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Stack,
  Breadcrumb,
  Carousel,
} from 'react-bootstrap';
import Image from 'next/image';
import parse from 'html-react-parser';
const SpecificBlog = ({ productRes }) => {
  console.log(productRes);
  return (
    <Container>
      <Row xs={1} md={2} className="my-3">
        <Col>
          {/* <Image
            src={
              productRes?.attributes?.image?.data !== null &&
              productRes?.attributes?.image?.data[0]?.attributes?.url
            }
            className="d-block mx-lg-auto img-fluid "
            alt=""
            width="500"
            height="450"
            // layout="responsive"
          /> */}
          <Carousel fade>
            {productRes?.attributes?.image?.data.map((item, idx) => (
              <Carousel.Item key={item?.id}>
                <div className="ratio ratio-1x1">
                  <Image
                    // src={
                    //   productRes?.attributes?.image?.data !== null &&
                    //   productRes?.attributes?.image?.data[0]?.attributes?.url
                    // }
                    src={item?.attributes?.url}
                    // src="/slider3.jpg"
                    className="d-block mx-lg-auto img-fluid "
                    alt=""
                    width="800"
                    height="500"
                  />{' '}
                </div>
                <Carousel.Caption>
                  <h6>{item?.title}</h6>
                  <p>{item?.paragraph && parse(item.paragraph)}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col className="mt-2">
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/product">Shop</Breadcrumb.Item>
            <Breadcrumb.Item active>iPhone</Breadcrumb.Item>
          </Breadcrumb>
          <Stack className="g-3 ">
            <h1>{productRes?.attributes?.title}</h1>
            <p> 64GB, Black</p>
            <p>Rs {productRes?.attributes?.price}</p>
            <p>Quantity: 1</p>
          </Stack>
          <Button variant="newColor">Buy Now</Button>{' '}
        </Col>
      </Row>
      <h2 className="text-center">Description</h2>
      <Row>{productRes && parse(productRes?.attributes?.description)}</Row>
    </Container>
  );
};

export async function getStaticPaths() {
  const product = await fetch(
    'https://xphone-backend.onrender.com/api/categories'
  );
  const allProduct = await product.json();
  return {
    paths: allProduct.data.map((product) => ({
      params: {
        slug: product.attributes.slug,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const categories = await fetch(
    `https://xphone-backend.onrender.com/api/categories/${params.slug}?populate=deep`
  );
  const categoriesData = await categories.json();

  return {
    props: { productRes: categoriesData?.data },
    revalidate: 1,
  };
}

export default SpecificBlog;
