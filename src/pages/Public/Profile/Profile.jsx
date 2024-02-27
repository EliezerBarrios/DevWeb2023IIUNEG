import { Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { data } from "../../../../data";
import Skill from "./components/Skill.jsx";

import styled from "styled-components";
import IntroductionInfo from "./components/IntroductionInfo";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Idiomas from "./components/Idiomas.jsx";

/* STYLES */
const Container = styled.div`
  width: 1152px; // 80% de 1440px
  padding: 0 40px;
  margin: 40px auto 0 auto;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 100px;
  align-items: center;
  margin-bottom: 40px;
  @media (min-width: 900px) {
    gap: 200px;
  }
`;

const Logo = styled.p`
  font-size: 50px;
  font-weight: 800;
`;

const Input = styled.input`
  width: 100%;
  max-width: 723px;
  height: 40px;
  border-radius: 3.125rem;
  padding-left: 1.125rem;

  &::placeholder {
    color: #999;
  }
`;

const Button = styled.button`
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  max-width: 50px;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex: 1;
`;

const DataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex: 1;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 50px;
`;

const DivButtons = styled.div`
  display: flex;
  gap: 20px;
`;

const SkillContainer = styled.div`
  width: 25%;
`;

/* STYLES */

function Profile() {
  const [input, setInput] = useState("");

  const { skills } = data[0].general;

  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    // Verifica si la tecla presionada es Enter y el input no está vacío
    if (e.key === "Enter" && input.trim()) {
      setInput("");

      //reload --> delete this later
      navigate(0);
    }
  };
  return (
    <Container>
      <Nav>
        <Link to="/">
          <Logo>Logo</Logo>
        </Link>
        <Div>
          <Input
            placeholder="Buscar..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <DivButtons>
            <Button>N</Button>
            <Button>C</Button>
            <Button>L</Button>
          </DivButtons>
        </Div>
      </Nav>
      <DataContainer>
        <Data>
          <IntroductionInfo generalData={data[0].general} />
          <Experience experience={data[0].experience} />
          <Education education={data[0].education} cursos={data[0].cursos} />
          <Idiomas languages={data[0].languages} />
        </Data>

        <SkillContainer>
          <Typography fontSize={32} fontWeight={700}>
            Habilidades
          </Typography>
          {skills.map((data, index) => {
            return <Skill key={index} skill={data} />;
          })}
        </SkillContainer>
      </DataContainer>
    </Container>
  );
}

export default Profile;
