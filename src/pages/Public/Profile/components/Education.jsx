import { Typography } from "@mui/material";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  // margin-top: 10px;
`;

const Box = styled.div`
  border: 1px solid #e0e0e0;
  padding: 20px;
  border-radius: 10px;
`;

const TypeDiv = styled.div`
  display: inline-block;
  background-color: #00f;
  color: white;
  padding: 10px;
  border-radius: 20px;
`;
const Education = ({ education, cursos }) => {
  return (
    <div>
      <p className="heading">EDUCATION</p>
      <Grid>
        {education.map((edu, index) => {
          return (
            <Box key={index}>
              <Typography mb={1} color={"blue"}>
                {edu.initialdate} - {edu.finaldate}
              </Typography>
              <Typography fontWeight={700} fontSize={24} mb={1}>
                {edu.title}
              </Typography>
              <Typography color={"#abaaaa"} mb={1}>
                {edu.institution}
              </Typography>
              <TypeDiv>{edu.type}</TypeDiv>
            </Box>
          );
        })}
      </Grid>

      <p className="sub-heading">Cursos o Talleres</p>
      <Grid>
        {cursos.map((edu, index) => {
          return (
            <Box key={index}>
              <Typography mb={1} color={"blue"}>
                {edu.initialdate} - {edu.finaldate}
              </Typography>
              <Typography fontWeight={700} fontSize={24} mb={1}>
                {edu.title}
              </Typography>
              <Typography color={"#abaaaa"} mb={1}>
                {edu.institution}
              </Typography>
              <TypeDiv>{edu.type}</TypeDiv>
            </Box>
          );
        })}
      </Grid>
    </div>
  );
};

export default Education;
