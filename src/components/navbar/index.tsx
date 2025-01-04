import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(true);

  const isExistToken = localStorage.getItem("token");

  useEffect(() => {
    if (!isExistToken) {
      navigate("/");
      localStorage.removeItem("token");
    } else {
      console.log("Token exist");
      setShowLogin(false);
    }
  }, [isExistToken, navigate]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "gray" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={() => {
              navigate("/");
              localStorage.removeItem("token");
            }}
            style={{ cursor: "pointer" }}
          >
            News
          </Typography>
          {showLogin && (
            <Button color="inherit" onClick={() => navigate("/")}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
