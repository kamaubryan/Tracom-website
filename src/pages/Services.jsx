// Services.jsx
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
const Services = () => {
  return (
    <Container>
      <Header>
        <Title>Our Services</Title>
        <Subtitle>Empowering You with Essential Coding Skills</Subtitle>
      </Header>
      <Content>
        <Section>
          <SectionTitle>What We Offer</SectionTitle>
          <p>
            Tracom Academy provides a variety of services designed to support
            your learning journey and help you become a proficient coder. Here’s
            a glimpse of what we offer:
          </p>
        </Section>

        <Section>
          <SectionTitle>1. Comprehensive Courses</SectionTitle>
          <p>Our courses cover a wide range of topics, including:</p>
          <List>
            <ListItem>Web Development</ListItem>
            <ListItem>Data Science</ListItem>
            <ListItem>Mobile App Development</ListItem>
            <ListItem>Cloud Computing</ListItem>
            <ListItem>Machine Learning</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>2. Personalized Mentorship</SectionTitle>
          <p>
            Each student is paired with a mentor who provides personalized
            guidance, helping you navigate challenges and achieve your learning
            goals.
          </p>
        </Section>

        <Section>
          <SectionTitle>3. Hands-On Projects</SectionTitle>
          <p>
            We emphasize practical experience. You’ll work on real-world
            projects that build your portfolio and enhance your skills.
          </p>
        </Section>

        <Section>
          <SectionTitle>4. Community Support</SectionTitle>
          <p>
            Join a vibrant community of learners. Engage in discussions, ask
            questions, and collaborate on projects through our online forums.
          </p>
        </Section>

        <Section>
          <SectionTitle>5. Career Services</SectionTitle>
          <p>
            We offer resume reviews, interview preparation, and job placement
            assistance to help you land your dream job in tech.
          </p>
        </Section>

        <Section>
          <SectionTitle>Get Started with Us!</SectionTitle>
          <p>
            Explore our services and take the first step towards a fulfilling
            career in coding. Contact us today for more information!
          </p>
        </Section>
      </Content>
      <Footer>
        <p>&copy; 2024 Tracom Academy. All Rights Reserved.</p>
      </Footer>
    </Container>
  );
};

export default Services;
