import React from 'react';
import { Container } from 'react-bootstrap';
import parse from 'html-react-parser';

function AboutUs({ aboutRes }) {
  // console.log(aboutRes);
  return (
    <Container className="my-5 text-center">
      <h1 className="">{aboutRes?.content?.title}</h1>
      <p className="lead">
        {aboutRes?.content?.paragraph && parse(aboutRes.content?.paragraph)}
      </p>
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
