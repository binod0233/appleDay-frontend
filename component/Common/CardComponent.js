import React from 'react';
import {
  Container,
  Accordion,
  Button,
  Row,
  Stack,
  Col,
  Card,
  Ratio,
} from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

function CardComponent({ data }) {
  return (
    <>
      {data.map((item, idx) => (
        <Col key={idx}>
          <Card className="h-100 bg-transparent border border-0 align-item?.attributes-center">
            <Link href={`/product/${item?.attributes?.slug}`}>
              <div style={{ width: '100%', height: 'auto' }}>
                <Ratio aspectRatio={100}>
                  <Image
                    src={
                      item?.attributes?.image?.data !== null &&
                      item?.attributes?.image?.data[0]?.attributes?.url
                    }
                    alt=""
                    className="px-md-5 py-md-2 img-fluid"
                    width="580"
                    height="780"
                    style={{ objectFit: 'cover' }}
                  />
                </Ratio>
              </div>
            </Link>

            <Card.Body className="text-center">
              <h6>{item?.attributes?.model}</h6>
              <p className="text-muted">{item?.attributes?.title}</p>
              <p className="text-muted">Rs {item?.attributes?.price}</p>
              <Button
                variant="newColor"
                href="https://www.facebook.com/profile.php?id=100090084823379"
                target="_blank"
                rel="noreferrer"
              >
                Buy Now
              </Button>{' '}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
}

export default CardComponent;
