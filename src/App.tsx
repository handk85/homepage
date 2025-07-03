import React from "react";
import {
  Container,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  IconButton,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";

function App(props: any) {
  const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"), {
    noSsr: true,
  });
  const [open, setOpen] = React.useState(!isMobile);

  React.useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  const links = [
    { name: "Home", link: "/" },
    { name: "Experience", link: "/experience" },
    { name: "Publications", link: "/publications" },
    { name: "Teaching", link: "/teaching" },
    { name: "Service", link: "/service" },
    { name: "Timeline", link: "/timeline" },
    { name: "Trivia", link: "/trivia" },
  ];

  const theme = createTheme({
    typography: {
      fontSize: 16,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {isMobile && (
        <IconButton
          onClick={() => setOpen(!open)}
          style={{
            position: "absolute",
            display: "block",
            top: 0,
            left: 0,
          }}
        >
          <Menu />
        </IconButton>
      )}
      <Box sx={{ display: "flex" }}>
        <Drawer
          open={open}
          style={{ width: "200px" }}
          variant={isMobile ? "temporary" : "persistent"}
          onClose={() => setOpen(!open)}
        >
          <List component="nav">
            <ListItem>
              <ListItemButton
                href="/"
                target="_self"
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <ListItemText>
                  <Typography variant="h6">DongGyun Han</Typography>
                  {!isMobile && (
                    <>
                      <Typography>Lecturer</Typography>
                      <Typography>@RHUL</Typography>
                    </>
                  )}
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider />
            {links.map((l) => {
              return (
                <ListItem key={l.name}>
                  <ListItemButton href={l.link} target="_self">
                    <ListItemText primary={l.name} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Drawer>
        <Container>
          <>
            <div style={{ minHeight: "87vh", paddingTop: "4vh" }}>
              {props.children}
            </div>
            <footer style={{ marginTop: "1rem", marginBottom: "2rem" }}>
              <Divider sx={{ my: 2 }} />
              <Typography>
                Copyright &copy; {new Date().getFullYear()} DongGyun Han. All
                rights reserved. The&nbsp;
                <a href="https://github.com/handk85/homepage">
                  source code of this homepage
                </a>
                &nbsp;is available at GitHub. Please feel free to extend it for
                your own homepage.
              </Typography>
            </footer>
          </>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
