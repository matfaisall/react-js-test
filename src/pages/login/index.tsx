import { useAppContext } from "../../context/AppContext";
import NavigationBar from "../../components/navbar";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { generateRandomString } from "../../utils/generateRandomString";

const Login = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAppContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(auth);
    if (!auth.email || !auth.password) {
      alert("Email and password are required");
      return;
    }
    const token = generateRandomString(32);
    localStorage.setItem("token", token);
    navigate("/home");
  };

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
        <Paper elevation={3} style={{ padding: "2rem", width: "400px" }}>
          <Typography variant="h4" gutterBottom align="center">
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={auth.email}
              onChange={e => setAuth({ ...auth, email: e.target.value })}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={auth.password}
              onChange={e => setAuth({ ...auth, password: e.target.value })}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "1rem" }}
            >
              Login
            </Button>
          </form>
          <Typography
            variant="caption"
            align="right"
            style={{ marginTop: "1rem" }}
            color="error"
          >
            You can enter any email and password here to get a token and access
            the home page.
          </Typography>
        </Paper>
      </Box>
    </div>
  );
};

export default Login;
