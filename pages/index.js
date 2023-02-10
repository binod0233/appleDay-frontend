import React, { useState } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import parse from 'html-react-parser';

import {
  Container,
  Accordion,
  Button,
  Row,
  Stack,
  Col,
  Card,
} from 'react-bootstrap';
import Link from 'next/link';
import CardComponent from '../component/Common/CardComponent';
export default function Home({ productRes, homeRes }) {
  const [key, setKey] = useState('Recent');
  // console.log(productRes);

  return (
    <div>
      <Carousel fade>
        {homeRes?.slider?.map((item, idx) => (
          <Carousel.Item key={item?.id}>
            <div className="ratio ratio-21x9">
              <Image
                src={item?.image?.data?.attributes?.url}
                // src="/slider3.jpg"
                className="d-block mx-lg-auto img-fluid "
                alt=""
                width="1000"
                height="800"
                // layout="responsive"
                style={{ objectFit: 'scale' }}
              />{' '}
            </div>
            <Carousel.Caption>
              <h6>{item?.title}</h6>
              <p>{item?.paragraph && parse(item.paragraph)}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Container>
        <Row className="my-5">
          <Col md={3}>
            <ListGroup defaultActiveKey="#link1" className=" ">
              <ListGroup.Item action href="#" className="bg-primary">
                <i className="bi bi-list"></i>
                <strong className="ms-1"> All Models </strong>
              </ListGroup.Item>
              <ListGroup.Item action className="ps-4 " href="#link2">
                <i className="bi bi-phone"></i> iPhone 14
              </ListGroup.Item>
              <ListGroup.Item action className="ps-4 " href="#link3">
                <i className="bi bi-phone"></i> iPhone 13
              </ListGroup.Item>{' '}
              <ListGroup.Item action className="ps-4 " href="#link4">
                <i className="bi bi-phone"></i> iPhone 12
              </ListGroup.Item>{' '}
              <ListGroup.Item action className="ps-4 " href="#link5">
                <i className="bi bi-phone"></i> iPhone 11
              </ListGroup.Item>{' '}
              <ListGroup.Item action className="ps-4 " href="#link6">
                <i className="bi bi-phone"></i> iPhone X
              </ListGroup.Item>
              <ListGroup.Item action className="ps-4 " href="#link7">
                <i className="bi bi-phone"></i> iPhone 8
              </ListGroup.Item>
              <ListGroup.Item action className="ps-4 " href="#link8">
                <i className="bi bi-phone"></i> iPhone 7
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={9}>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="Recent" title="Recent">
                <Row xs={2} md={2} lg={3} className="g-4 h-100">
                  {/* {productRes.map((item, idx) => {
                    return (
                      <Col key={idx} className="h-100">
                        <Card className="bg-transparent border border-0 align-item-center h-100 ">
                          <Image
                            src={
                              item?.attributes?.image?.data !== null &&
                              item?.attributes?.image?.data[0]?.attributes?.url
                            }
                            className="d-block mx-lg-auto img-fluid "
                            alt=""
                            width="200"
                            height="150"
                          />
                          <Card.Body className="text-center">
                            <h6>{item?.attributes?.title}</h6>
                            <p className="text-muted">
                              {item?.attributes?.title}
                            </p>
                            <p className="text-muted">
                              {item?.attributes?.price}
                            </p>
                            <Button variant="newColor">Buy Now</Button>{' '}
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })} */}
                  <CardComponent data={productRes} />
                </Row>
              </Tab>
              <Tab eventKey="recomendation" title="Recomendation">
                <Row xs={2} lg={3}>
                  {/* {productRes.map((item, idx) => (
                    <Col key={idx}>
                      <Card className="bg-transparent border border-0 align-item-center">
                        <Image
                          src={
                            item?.attributes?.image?.data !== null &&
                            item?.attributes?.image?.data[0]?.attributes?.url
                          }
                          className="d-block mx-lg-auto img-fluid "
                          alt=""
                          width="200"
                          height="150"
                        />
                        <Card.Body className="text-center">
                          <h6>{item?.attributes?.title}</h6>
                          <p className="text-muted">
                            {item?.attributes?.title}
                          </p>
                          <p className="text-muted">
                            {item?.attributes?.price}
                          </p>
                          <Button variant="newColor">Buy Now</Button>{' '}
                        </Card.Body>
                      </Card>
                    </Col>
                  ))} */}
                  <CardComponent data={productRes} />
                </Row>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
      <section className="py-5 bg-light ">
        <Container>
          <Row className="text-center g-2">
            <h2>Slogan</h2>
            <p className="lead">Best Mobile Phone Seller In Nepal</p>
          </Row>
        </Container>
      </section>
      <Container>
        <Row className="my-5 ">
          <h2 className="text-center my-2">Models</h2>
          <Tabs
            defaultActiveKey="iphone-14"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="iphone-14" title="iPhone 14">
              <Row xs={2} md={3} lg={4}>
                <CardComponent data={productRes} />
              </Row>
            </Tab>
            <Tab eventKey="iphone-13" title=" iPhone 13">
              <Row xs={2} md={3} lg={4}>
                <CardComponent data={productRes} />
              </Row>
            </Tab>
            <Tab eventKey="iphone-12" title="iphone 12">
              <Row xs={2} md={3} lg={4}>
                <CardComponent data={productRes} />
              </Row>
            </Tab>
            <Tab eventKey="iphone-11" title="iphone 11">
              <Row xs={2} md={3} lg={4}>
                <CardComponent data={productRes} />
              </Row>
            </Tab>
            <Tab eventKey="iphone-x" title="iphone X">
              <Row xs={2} md={3} lg={4}>
                <CardComponent data={productRes} />
              </Row>
            </Tab>
            <Tab eventKey="iphone-8" title="iphone 8">
              <Row xs={2} md={3} lg={4}>
                <CardComponent data={productRes} />
              </Row>
            </Tab>
            <Tab eventKey="iphone-7" title="iphone 7">
              <Row xs={2} md={3} lg={4}>
                <CardComponent data={productRes} />
              </Row>
            </Tab>
          </Tabs>
        </Row>

        <Row className="g-3 my-5 ">
          <h2 className="text-center">FAQ</h2>
          <Accordion defaultActiveKey="0" className="col-md-8 offset-md-2">
            {homeRes?.faq?.map((item, idx) => (
              <Accordion.Item eventKey={item?.id} key={item?.id}>
                <Accordion.Header>{item?.title}</Accordion.Header>
                <Accordion.Body>
                  {item?.paragraph && parse(item.paragraph)}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Row>
        <h2 className="text-center my-3 ">Our Location</h2>

        <Row className="my-md-3">
          <div className="ratio ratio-21x9">
            <iframe
              width="100%"
              height="600"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=27.680335,%2085.340617+(Apple%20Day)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/distance-area-calculator.html">
                measure area map
              </a>
            </iframe>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export const getStaticProps = async () => {
  const categories = await fetch(
    'https://xphone-backend.onrender.com/api/categories?populate=deep'
  );
  const categoriesData = await categories.json();

  const home = await fetch(
    'https://xphone-backend.onrender.com/api/home?populate=deep'
  );
  const homeData = await home.json();

  return {
    props: {
      productRes: categoriesData?.data,
      homeRes: homeData?.data?.attributes,
    },
    revalidate: 1,
  };
};
