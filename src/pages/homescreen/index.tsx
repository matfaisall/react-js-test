import NavigationBar from "../../components/navbar";
import { Box, Button, Paper, Typography } from "@mui/material";
import SelectInputProvinces from "../../components/inputSelectProvinces";
import SelectInputCity from "../../components/inputSelectCity";

const HomeScreen = () => {
  console.log(import.meta.env.VITE_API_URL);
  return (
    <div>
      <NavigationBar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bgcolor="#f5f5f5"
      >
        <Paper
          elevation={3}
          style={{ padding: "2rem", width: "400px", borderRadius: "10px" }}
        >
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography variant="h5" gutterBottom align="center">
              Search Your Target
            </Typography>
            <SelectInputProvinces />
            <SelectInputCity />
            <Button variant="contained" fullWidth color="primary">
              Search
            </Button>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default HomeScreen;
