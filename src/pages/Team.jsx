// Team.jsx
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

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const TeamMember = styled.div`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
`;

const MemberImage = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const MemberName = styled.h4`
  margin: 10px 0 5px;
`;

const MemberRole = styled.p`
  font-style: italic;
  color: #555;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #0077cc;
  color: white;
`;

// Team Member Data
const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Lead Instructor",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    profileLink: "#", // Replace with actual link
  },
  {
    name: "Bob Smith",
    role: "Web Development Coach",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    profileLink: "#", // Replace with actual link
  },
  {
    name: "Charlie Brown",
    role: "Data Science Mentor",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    profileLink: "#", // Replace with actual link
  },
  {
    name: "Diana Prince",
    role: "Mobile Development Expert",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    profileLink: "#", // Replace with actual link
  },
];

// Main Component
const Team = () => {
  return (
    <Container>
      <Header>
        <Title>Meet Our Team</Title>
        <Subtitle>Dedicated Professionals Committed to Your Success</Subtitle>
      </Header>
      <Content>
        <Section>
          <SectionTitle>Our Instructors</SectionTitle>
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamMember key={index}>
                <a
                  href={member.profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MemberImage src={member.image} alt={member.name} />
                  <MemberName>{member.name}</MemberName>
                  <MemberRole>{member.role}</MemberRole>
                </a>
              </TeamMember>
            ))}
          </TeamGrid>
        </Section>
      </Content>
      <Footer>
        <p>&copy; 2024 Tracom Academy. All Rights Reserved.</p>
      </Footer>
    </Container>
  );
};

export default Team;
