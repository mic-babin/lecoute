import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Image from "./styled-components/image";
import { motion } from "framer-motion";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAbout {
        name
        title
        description1 {
          description1
        }
        description2 {
          description2
        }
        featured {
          gatsbyImageData(quality: 100, placeholder: BLURRED)
        }
      }
    }
  `);
  const { name, title, description1, description2, featured } =
    data.contentfulAbout;

  return (
    <>
      <ScrollTo id="a-propos"></ScrollTo>
      <Section className="container">
        <div className="row">
          <div className="col-xxl-6 col-lg-4 d-flex align-items-center">
            {featured && (
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.3,
                  type: "spring",
                }}
                viewport={{ once: true }}
              >
                <FeaturedImage
                  alt="featured"
                  image={getImage(featured.gatsbyImageData)}
                />
              </motion.div>
            )}
          </div>
          <div className="col-xxl-6 col-lg-8 d-flex flex-column align-items-start justify-content-center ps-lg-5 pb-0 pb-lg-5 pt-5 mt-5 ">
            {(title || name) && (
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 200, opacity: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.2,
                  type: "spring",
                }}
                viewport={{ once: true }}
              >
                <H2 className="ps-lg-5">
                  {name} <DarkText>{title}</DarkText>
                </H2>
              </motion.div>
            )}
            {description1 && (
              <motion.p
                className="kicker py-4 ps-lg-5"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.3,
                  type: "spring",
                }}
                viewport={{ once: true }}
              >
                {description1.description1}
              </motion.p>
            )}
            {description2 && (
              <motion.p
                className="kicker py-4 ps-lg-5"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.4,
                  type: "spring",
                }}
                viewport={{ once: true }}
              >
                {description2.description2}
              </motion.p>
            )}
          </div>
        </div>
      </Section>
    </>
  );
};

const FeaturedImage = styled(Image)`
  box-shadow: 50px 50px 0px rgba(57, 82, 102, 0.25);
`;

const DarkText = styled.span`
  color: #293039;
`;
const H2 = styled.h2`
  font-size: 36px !important;
  @media only screen and (max-width: 400px) {
    font-size: 36px !important;
  }
`;

const ScrollTo = styled.div`
  transform: translateY(-110px);
`;

const Section = styled.section`
  overflow: hidden;
`;

export default About;
