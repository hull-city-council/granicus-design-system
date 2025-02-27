import React, { useMemo } from 'react';
import { CssVarsProvider, useTheme } from '@mui/joy/styles';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import {
  Card,
  CardContent,
  Button,
  ButtonGroup,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemDecorator,
  ListSubheader
} from "@mui/joy";
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRightRounded';

export default function TopTasks({ type, container }) {

  const cache = useMemo(() => createCache({ container, key: "css", prepend: true }), [container]);

  const theme = useTheme({
    palette: {
      mode: "light"
    },
  });

  const buttonStyles = {
    borderRadius: 99,
    '&:hover': {
      '& .MuiButton-endDecorator': { transform: 'translate(4px, 0px)' },
    },
    '& span': { transition: '0.15s' },
  };

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
    letterSpacing: "unset"
  }

  return (
    <>
      <CacheProvider value={cache}>
        <CssVarsProvider theme={theme}>
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
            <List size="lg" variant="outlined">
              <ListSubheader sx={[{...subHeadingStyle}]} variant="soft">Tasks</ListSubheader>
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
              <ListSubheader sx={[{...subHeadingStyle}]} variant="soft">Other accounts</ListSubheader>
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
              <ListSubheader sx={[{...subHeadingStyle}]} variant="soft">Useful links</ListSubheader>
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

          {/* <Card variant="plain">
            <CardContent sx={{ justifyContent: "center" }}>
              <ButtonGroup
                variant="outlined"
                orientation="vertical"
                aria-label="vertical outlined button group"
                spacing="0.5rem"
              >
                {type === "business" ? (
                  <>
                    <Button
                      size="lg"
                      key="one"
                      endDecorator={<KeyboardArrowRight fontSize="xl3" />}
                    >
                      Business rates
                    </Button>
                    <Button
                      size="lg"
                      key="two"
                      endDecorator={<KeyboardArrowRight fontSize="xl3" />}
                    >
                      Commercial waste
                    </Button>
                    <Button
                      size="lg"
                      key="three"
                      endDecorator={<KeyboardArrowRight fontSize="xl3" />}
                    >
                      Business support
                    </Button>
                  </>
                ) : type === "resident" ? (
                  <>
                    {tasks.map((task) => {
                      return (<Button
                        size="lg"
                        key="one"
                        endDecorator={<KeyboardArrowRight fontSize="xl3" />}
                        sx={[
                          { ...buttonStyles }
                        ]}
                      >
                        {task.name}
                      </Button>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <Button loading loadingPosition="start" color="primary">
                      Loading...
                    </Button>
                  </>
                )}
              </ButtonGroup>
            </CardContent>
          </Card> */}
        </CssVarsProvider>
      </CacheProvider>
    </>
  );
}
