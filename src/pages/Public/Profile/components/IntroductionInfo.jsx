import styled from "styled-components";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

/* STYLES */
const InfoContainer = styled.div`
  display: flex;
  gap: 30px;
`;

const ProfilePic = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
`;

const Resume = styled.div`
  width: 75%;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
`;

const Nombre = styled.h1`
  margin-bottom: 25px;
  font-weight: 800;
  font-size: 50px;
`;

const Desc = styled.div`
  margin-bottom: 25px;
`;

const Links = styled.div`
  border-top: 2px solid #e0e0e0;
`;

const Grid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 10px;
`;

/* STYLES */

const IntroductionInfo = ({ generalData }) => {
  const { name, description, github, email, webpage } = generalData;

  return (
    <InfoContainer>
      <ProfilePic>
        <Img src="profile-pic.jpg" />
      </ProfilePic>
      <Resume>
        <Nombre>{name}</Nombre>
        <Desc>{description}</Desc>

        <Links>
          <Grid>
            <Link to={github} target="_blank">
              <Typography color={"gray"} className="link-hover">
                {github}
              </Typography>
            </Link>
            <Typography color={"gray"} className="link-hover">
              {email}
            </Typography>
            <Link to={webpage} target="_blank">
              <Typography color={"gray"} className="link-hover">
                {webpage}
              </Typography>
            </Link>
            <Typography color={"gray"} className="link-hover">
              CV
            </Typography>
          </Grid>
        </Links>
      </Resume>
    </InfoContainer>
  );
};

export default IntroductionInfo;
