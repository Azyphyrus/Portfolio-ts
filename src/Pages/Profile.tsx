import styled from 'styled-components';
import ProfileCard from '../Components/ProfileCard';

const MainContent = styled.div`
  gap: 15px;
`;

const Profile: React.FC = () => {
  return (
    <MainContent>
      <div>
        <ProfileCard />
      </div>
    </MainContent>
  );
};

export default Profile;
