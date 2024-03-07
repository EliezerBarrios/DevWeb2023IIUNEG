import styled from "styled-components";

/* Styles */
const Skills = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #e0e0e0;
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;
const Nameskill = styled.h2``;
/* Styles */

const Skill = ({ skill }) => {
  return (
    <Skills>
      <Img src={skill.imgUrl} />
      <Nameskill> {skill.nameSkill}</Nameskill>
    </Skills>
  );
};

export default Skill;
