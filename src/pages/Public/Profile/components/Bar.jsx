import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: min-content;
  gap: 80px;
  position: relative;
  margin-bottom: 30px;
`;

const Line = styled.div`
  position: absolute;
  height: 4px;
  width: 98%;
  background-color: #909090;
  top: 50%;
  border-radius: 10px;
`;

const Ball = styled.div`
  height: 30px;
  width: 30px;
  background: #909090;
  border-radius: 50%;
  position: relative;
`;

const BallText = styled.p`
  position: absolute;
  top: 110%;
  color: #909090;
  font-weight: 700;
`;

const Bar = ({ proficiency }) => {
  const [flag, setFlag] = useState(proficiency); // Inicializa el flag con la prop proficiency
  const levels = ["basico", "intermedio", "avanzado", "nativo"];

  useEffect(() => {
    setFlag(proficiency);
  }, [proficiency]);

  return (
    <Container>
      <Line />
      {levels.map((level, index) => (
        <Ball
          key={index}
          style={{ background: flag === level ? "#FFD700" : "#909090" }}
        >
          <BallText style={{ color: flag === level ? "#000" : "#909090" }}>
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </BallText>
        </Ball>
      ))}
    </Container>
  );
};

export default Bar;
