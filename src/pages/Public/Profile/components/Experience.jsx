import { Typography } from "@mui/material";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
`;

const Box = styled.div`
  border: 1px solid #e0e0e0;
  padding: 20px;
  border-radius: 10px;
`;

const Experience = ({ experience }) => {
  return (
    <div>
      <p className="heading">EXPERIENCIA</p>

      <Grid>
        {experience.map((exp, index) => {
          return (
            <Box key={index}>
              <Typography mb={1} color={"blue"}>
                {exp.initialdate} - {exp.finaldate}
              </Typography>
              <Typography fontWeight={700} fontSize={24} mb={1}>
                {exp.institution}
              </Typography>
              <Typography color={"#abaaaa"}>{exp.position}</Typography>
            </Box>
          );
        })}
      </Grid>
    </div>
  );
};

export default Experience;
