// ProfileCard.js
import styled from 'styled-components';
import ProfileImage from './ProfileImage';
import TagNGoal from './TaglineAndCareerGoal';
import AboutMe from './AboutSection';
import Goalsaspire from './goalaspire';
import Chronology from './EducationSection';


const BottomCardContainer = styled.div`
  max-width: 100%;
  background-color: #1f2937;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  margin-left: 0;
  margin-right: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  justify-content: center;
`;


const BottomSection = styled.div`

`;

const ProfileCard = () => {
  return (
    <>
          <ProfileImage />
      <BottomCardContainer>
        <BottomSection>
          <TagNGoal/>
          <AboutMe/>
          <Goalsaspire/>
          <Chronology/>
        </BottomSection>
      </BottomCardContainer>
    </>
  );
};

export default ProfileCard;
