import { Box, Typography } from "@mui/material";
import { useNavigate , Link } from "react-router-dom";

import './Landing.css'

const Landing = () => {

  const navigate = useNavigate();

  function toCandidate() {
    navigate("registerEmail/candidato")
  }

  function toEmpleador() {
    navigate("registerEmail/empleador")
  }

  return (
    <Box>
      <Box
        sx={{
          minHeight: "75vh",
          background:
            "linear-gradient(#fff0, #B635D777, #23354E), url('/header-home.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          padding: 7,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography fontSize={40} fontWeight={600} width={"50%"} color={"#fff"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Typography fontSize={16} width={"50%"} color={"#fff"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Typography className="joinLabel" fontSize={40} fontWeight={600} width={"50%"} color={"#fff"}>
          ¡Únete ahora!
        </Typography>
        <Typography className="subJoinLabel" fontSize={16} fontWeight={600} width={"50%"} color={"#fff"}>
          Registrate como
        </Typography>
        <div>
          <button className="registerButton bA" onClick={toCandidate}>Candidato</button>
          <button className="registerButton bB" onClick={toEmpleador}>Empleador</button>
        </div>
      </Box>
    </Box>
  );
};

export { Landing };
