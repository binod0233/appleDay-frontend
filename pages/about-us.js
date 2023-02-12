import React from 'react';
import { Container, Ratio } from 'react-bootstrap';
import parse from 'html-react-parser';
import Image from 'next/image';

function AboutUs({ aboutRes }) {
  // console.log(aboutRes);
  return (
    <Container className="my-5 text-center">
      <h1 className="">{aboutRes?.content?.title}</h1>
      <p className="lead">
        {aboutRes?.content?.paragraph && parse(aboutRes.content?.paragraph)}
      </p>
      <div>
        <Ratio aspectRatio={50}>
          <Image
            src={aboutRes?.image?.data?.attributes?.url}
            alt=""
            className="px-md-5 py-md-2 img-fluid"
            width="580"
            height="780"
            style={{ objectFit: 'cover' }}
          />
        </Ratio>
      </div>
    </Container>
  );
}

export default AboutUs;
export const getStaticProps = async () => {
  const about = await fetch(
    'https://xphone-backend.onrender.com/api/about-us?populate=deep'
  );
  const aboutData = await about.json();

  return {
    props: {
      aboutRes: aboutData?.data?.attributes,
    },
    revalidate: 1,
  };
};
