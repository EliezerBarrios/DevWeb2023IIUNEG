import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  function toCandidate() {
    navigate("registerEmail/candidato");
  }

  function toEmpleador() {
    navigate("registerEmail/empleador");
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
      </Box>
      <Box sx={{ background: "#23354E", p: 6 }}>
        <Typography
          variant="h2"
          fontWeight={600}
          color={"#fff"}
          textAlign={"center"}
        >
          ¡Únete ahora!
        </Typography>
        <Typography color={"#fff"} textAlign={"center"} mt={2}>
          Registrate como
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            mt: 4,
          }}
        >
          <Box width={250}>
            <Button
              variant="contained"
              sx={{ p: 4, borderRadius: 5 }}
              fullWidth
              onClick={() => navigate("/registerEmail/candidato")}
            >
              Candidato
            </Button>
          </Box>
          <Box width={250}>
            <Button
              variant="contained"
              sx={{ p: 4, borderRadius: 5 }}
              fullWidth
              onClick={() => navigate("/registerEmail/empleador")}
            >
              Empleado
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { Landing };
