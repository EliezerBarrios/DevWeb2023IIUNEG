import { Box, Typography } from "@mui/material";

const Landing = () => {
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
    </Box>
  );
};

export { Landing };
