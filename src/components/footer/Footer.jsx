import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#424242"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Socials</Box>
              <Box>
                <Link href="/" color="white">
                  Facebook
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Twitter
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Instagram
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Pinterest
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  FAQ
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Store Locator
                </Link>
              </Box>
              <Box>
                <Link href="/" color="whitesmoke">
                  Privacy policy
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Joshua Towolawi &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
