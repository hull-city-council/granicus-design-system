import React, { useMemo, useState } from 'react';
import { CssVarsProvider, useTheme } from '@mui/joy/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import {
  Button,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemDecorator,
  ListSubheader,
} from "@mui/joy";
import { Collapse } from '@mui/material';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRightRounded';

export default function TopTasks({ type, container }) {

  const [tasksExpanded, setTasksExpanded] = useState(false);
  const [accountsExpanded, setAccountsExpanded] = useState(false);

  const cache = useMemo(() => createCache({ container, key: "css", prepend: true }), [container]);

  const joyTheme = useTheme({
    palette: {
      mode: "light"
    }
  });

  const materialTheme = createTheme();


  const tasks = [
    {
      name: "Bulky item collection",
      url: ""
    },
    {
      name: "Bin delivery, exchange or removal",
      url: ""
    },
    {
      name: "Apply for a blue badge",
      url: ""
    },
    {
      name: "Missed bins",
      url: ""
    },
    {
      name: "Missed bins",
      url: ""
    },
    {
      name: "Missed bins",
      url: ""
    }

  ];

  const accounts = [
    {
      name: "Council tax",
      url: ""
    },
    {
      name: "myHousing",
      url: ""
    },
    {
      name: "Parking",
      url: ""
    },
    {
      name: "Leisure",
      url: ""
    },
    {
      name: "Schools",
      url: ""
    },
    {
      name: "Schools",
      url: ""
    }
  ];

  const links = [
    {
      name: "Sign up for email updates",
      url: ""
    },
    {
      name: "Have your say",
      url: ""
    },
    {
      name: "Find your nearest",
      url: ""
    }
  ];

  const subHeadingStyle = {
    textTransform: "none",
    fontSize: "1.2rem",
    letterSpacing: "unset",
    fontWeight: "bold"
  }

  return (
    <>
      <CacheProvider value={cache}>
        <CssVarsProvider theme={joyTheme}>
          <ThemeProvider theme={materialTheme}>
            <Collapse in={tasksExpanded} collapsedSize={240} sx={{ position: 'relative',  fontFamily: '"Arial", "sans-serif"' }}>
              <Box
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 2,
                  flexWrap: 'wrap',
                  '& > *': { minWidth: 0, flexBasis: 200 },
                }}
              >
                <List size="lg">
                  <ListSubheader sx={[{ ...subHeadingStyle }]} variant="soft">Tasks</ListSubheader>
                  {tasks.map((task) => {
                    return (
                      <ListItem key={task.name} >
                        <ListItemButton sx={{ justifyContent: "space-between" }}>
                          {task.name}
                          <ListItemDecorator>
                            <KeyboardArrowRight fontSize="xl3" />
                          </ListItemDecorator>
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
              <Box sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: tasksExpanded ? 0 : 70,
                background: 'linear-gradient(to bottom, transparent, white)'
              }}></Box>
            </Collapse>
            <Box sx={{
              marginTop: -5,
              width: '100%',
              display: tasksExpanded ? 'none' : 'flex',
              justifyContent: 'center',
            }}>
              <Button onClick={() => setTasksExpanded(true)} variant="outlined" color="neutral" sx={{ fontFamily: '"Arial", "sans-serif"', borderRadius: 12, }}>View more</Button>
            </Box>
            <Collapse in={accountsExpanded} collapsedSize={240} sx={{ position: 'relative', fontFamily: '"Arial", "sans-serif"' }}>
              <Box
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 2,
                  flexWrap: 'wrap',
                  '& > *': { minWidth: 0, flexBasis: 200 },
                }}
              >
                <List size="lg">
                  <ListSubheader sx={[{ ...subHeadingStyle }]} variant="soft">Other accounts</ListSubheader>
                  {accounts.map((account) => {
                    return (
                      <ListItem key={account.name}>
                        <ListItemButton sx={{ justifyContent: "space-between" }}>
                          {account.name}
                          <ListItemDecorator>
                            <KeyboardArrowRight fontSize="xl3" />
                          </ListItemDecorator>
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
              <Box sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: accountsExpanded ? 0 : 70,
                background: 'linear-gradient(to bottom, transparent, white)'
              }}></Box>
            </Collapse>
            <Box sx={{
              marginTop: -5,
              width: '100%',
              display: accountsExpanded ? 'none' : 'flex',
              justifyContent: 'center',
            }}>
              <Button onClick={() => setAccountsExpanded(true)} variant="outlined" color="neutral" sx={{ fontFamily: '"Arial", "sans-serif"', borderRadius: 12 }}>View more</Button>
            </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 2,
                  flexWrap: 'wrap',
                  '& > *': { minWidth: 0, flexBasis: 200 },
                }}
              >
                <List size="lg" sx={{ fontFamily: '"Arial", "sans-serif"' }}>
                  <ListSubheader sx={[{ ...subHeadingStyle }]} variant="soft">Useful links</ListSubheader>
                  {links.map((link) => {
                    return (
                      <ListItem key={link.name}>
                        <ListItemButton sx={{ justifyContent: "space-between" }}>
                          {link.name}
                          <ListItemDecorator>
                            <KeyboardArrowRight fontSize="xl3" />
                          </ListItemDecorator>
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
          </ThemeProvider>
        </CssVarsProvider>
      </CacheProvider>
    </>
  );
}