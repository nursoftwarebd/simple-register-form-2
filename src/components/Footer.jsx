// eslint-disable-next-line no-unused-vars
import { AlternateEmail, Facebook, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import appleStore from "../assets/app.png";
import playStore from "../assets/play.png";
import shape2 from "../assets/shape2.png";

const Footer = () => {
  return (
    <Box sx={{ width: "100%", borderTop: "1px solid #eee", paddingTop: "18px", position: "relative" }}>
      {/* shape */}
      <Box className="shape2">
        <img src={shape2} alt="" />
      </Box>

      <Container>
        <Stack
          spacing={2}
          sx={{ display: "flex", justifyContent: "space-between", flexDirection: { xs: "column", md: "row" }, alignItems: { xs: "center" } }}
        >
          {/* social icons */}
          <Stack spacing={2} direction="row">
            <Link
              size="sm"
              href="#"
              sx={{
                background: "#4c4c4c",
                color: "#fff",
                width: "32px",
                height: "26px",
                padding: "5px 3px",
                textAlign: "center",
                borderRadius: "50%",
              }}
            >
              <AlternateEmail />
            </Link>
            <Link
              size="sm"
              href="#"
              sx={{
                background: "#4c4c4c",
                color: "#fff",
                width: "32px",
                height: "26px",
                padding: "5px 3px",
                textAlign: "center",
                borderRadius: "50%",
              }}
            >
              <Facebook />
            </Link>

            <Link
              size="sm"
              href="#"
              sx={{
                background: "#4c4c4c",
                color: "#fff",
                width: "32px",
                height: "26px",
                padding: "5px 3px",
                textAlign: "center",
                borderRadius: "50%",
              }}
            >
              <Instagram />
            </Link>
            <Link
              size="sm"
              href="#"
              sx={{
                background: "#4c4c4c",
                color: "#fff",
                width: "32px",
                height: "26px",
                padding: "5px 3px",
                textAlign: "center",
                borderRadius: "50%",
              }}
            >
              <YouTube />
            </Link>
            <Link
              size="sm"
              href="#"
              sx={{
                background: "#4c4c4c",
                color: "#fff",
                width: "32px",
                height: "26px",
                padding: "5px 3px",
                textAlign: "center",
                borderRadius: "50%",
              }}
            >
              <LinkedIn />
            </Link>
          </Stack>

          {/* play & app store */}
          <Stack spacing={1} direction={"row"}>
            <Link href="#">
              <img width={150} alt="apple-store" src={appleStore} />
            </Link>
            <Link href="#">
              <img width={150} alt="play-store" src={playStore} />
            </Link>
          </Stack>
        </Stack>
        {/* copyright article */}
        <Typography
          variant="p"
          sx={{
            color: "#393939",
            opacity: 0.5,
            fontSize: 14,
            fontWeight: 400,
            display: { xs: "block", md: "inline" },
            textAlign: "center",
            margin: { xs: "20px 0" },
            width: "100%",
          }}
        >
          © Boon & Bliss b.v. 2022 - Privacy statement - Terms and Conditions - Cookie Declaration
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
