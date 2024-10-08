// About.jsx
import React from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  font-family: "Arial", sans-serif;
  color: #333;
  padding: 20px;
  background-color: #f4f4f4;
`;

const Header = styled.header`
  background-color: #0077cc;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
`;

const Subtitle = styled.h2`
  margin: 10px 0;
  font-weight: normal;
`;

const Content = styled.main`
  margin: 20px 0;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  border-bottom: 2px solid #0077cc;
  padding-bottom: 5px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 5px 0;
  padding: 10px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #0077cc;
  color: white;
`;

// Main Component
const About = () => {
  return (
    <Container>
      <Header>
        <Title>Welcome to Tracom Academy</Title>
        <Subtitle>Your Path to Mastering Coding Skills</Subtitle>
      </Header>
      <Content>
        <Section>
          <SectionTitle>About Us</SectionTitle>
          <p>
            At Tracom Academy, we believe that anyone can learn to code. Our
            mission is to provide accessible and high-quality coding education
            to aspiring developers of all levels. From beginners to advanced
            programmers, we have something for everyone.
          </p>
        </Section>

        <Section>
          <SectionTitle>Courses Offered</SectionTitle>
          <List>
            <ListItem>Intro to Programming</ListItem>
            <ListItem>Web Development Bootcamp</ListItem>
            <ListItem>Data Structures and Algorithms</ListItem>
            <ListItem>JavaScript Essentials</ListItem>
            <ListItem>React for Beginners</ListItem>
            <ListItem>Python for Data Science</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Why Choose Us?</SectionTitle>
          <p>
            - Expert instructors with real-world experience
            <br />
            - Hands-on projects to build your portfolio
            <br />
            - Flexible online courses that fit your schedule
            <br />- Community support and networking opportunities
          </p>
        </Section>

        <Section>
          <SectionTitle>Get Started Today!</SectionTitle>
          <p>
            Ready to embark on your coding journey? Sign up now and take the
            first step towards becoming a skilled developer!
          </p>
        </Section>
      </Content>
      <Footer>
        <p>&copy; 2024 Tracom Academy. All Rights Reserved.</p>
      </Footer>
    </Container>
  );
};

export default About;
