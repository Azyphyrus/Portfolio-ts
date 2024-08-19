import styled from 'styled-components';

const Card = styled.div`
  background-color: #2e2e3f;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const SkillIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

const SkillInfo = styled.div`
  flex: 1;
`;

const SkillLevel = styled.div`
  font-size: 14px;
  color: #ccc;
`;

const LevelIndicator = styled.div`
  background-color: #1e1e2f;
  border-radius: 5px;
  padding: 5px 10px;
  color: #fff;
  font-size: 12px;
  display: inline-block;
  margin-top: 8px;
`;

interface SkillCardProps {
  icon: string;       // Assuming icon is a URL or path to the image
  skillName: string;
  skillLevel: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, skillName, skillLevel }) => {
  return (
    <Card>
      <SkillIcon src={icon} alt={`${skillName} Icon`} />
      <SkillInfo>
        <SkillLevel>{skillName}</SkillLevel>
        <LevelIndicator>{skillLevel}</LevelIndicator>
      </SkillInfo>
    </Card>
  );
};

export default SkillCard;
