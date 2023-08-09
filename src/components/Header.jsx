// eslint-disable-next-line no-unused-vars
import {
  AppBar,
  Button,
  Container,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [age, setAge] = useState("");

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "static",
        padding: "30px 0px",
      }}
    >
      <AppBar
        color="transparent"
        sx={{
          width: "100%",
          boxShadow: "none",
          borderBottom: "1px solid #E8E8E8",
          padding: "2px 0px",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link href="#">
            <img width={120} height={35} src={logo} alt="logo" />
          </Link>

          <Stack direction="row" spacing={2}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">Language</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                label="Language"
                onChange={(event) => setAge(event.target.value)}
              >
                <MenuItem value={"en"}>EN</MenuItem>
                <MenuItem value={"nl"}>NL</MenuItem>
                <MenuItem value={"bn"}>BN</MenuItem>
              </Select>
            </FormControl>

            <Button variant="outlined" className="customBtn">
              Login
            </Button>
          </Stack>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
