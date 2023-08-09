// eslint-disable-next-line no-unused-vars
import {
  AlternateEmail,
  Facebook,
  Instagram,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import appleStore from "../assets/app.png";
import playStore from "../assets/play.png";

const Footer = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Container>
        <Stack spacing={2} direction={"row"} justifyContent={"space-between"}>
          <Stack>
            <Stack spacing={2} direction="row">
              <Link size="sm" href="#">
                <AlternateEmail />
              </Link>
              <Link size="sm" href="#">
                <Facebook />
              </Link>

              <Link size="sm" href="#">
                <Instagram />
              </Link>
              <Link size="sm" href="#">
                <YouTube />
              </Link>
              <Link size="sm" href="#">
                <LinkedIn />
              </Link>
            </Stack>

            <Typography
              variant="p"
              sx={{
                color: "#393939",
                opacity: 0.5,
                fontSize: 14,
                fontWeight: 400,
              }}
            >
              © Boon & Bliss b.v. 2022 - Privacy statement - Terms and
              Conditions - Cookie Declaration
            </Typography>
          </Stack>

          <Stack spacing={2} direction={"row"}>
            <Link href="#">
              <img width={190} alt="apple-store" src={appleStore} />
            </Link>
            <Link href="#">
              <img width={190} alt="play-store" src={playStore} />
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
