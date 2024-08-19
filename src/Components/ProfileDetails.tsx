// ProfileDetails.js
import styled from 'styled-components';

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2e3a4e;
  border-radius: 10px;
  padding: 15px;
`;

const ProfileName = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #fff;
`;

const ProfileTitle = styled.p`
  font-size: 18px;
  color: #b0b0b0;
`;

const ProfileDetails = () => {
  return (
    <DetailsContainer>
      <ProfileName>John Doe</ProfileName>
      <ProfileTitle>Full-Stack Developer | Software Engineer</ProfileTitle>
      <ProfileTitle>Manila, Philippines</ProfileTitle>
    </DetailsContainer>
  );
};

export default ProfileDetails;
