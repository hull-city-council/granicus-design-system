import React, { useState } from 'react';
import { CssVarsProvider, useTheme } from '@mui/joy/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Button,
  Box,
  List,
  ListItem,
  ListItemDecorator,
  ListItemContent,
  ListSubheader,
  Typography,
  Stack
} from "@mui/joy";
import { Collapse } from '@mui/material';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRightRounded';

export default function TopTasks({ ...props }) {

  const [tasksExpanded, setTasksExpanded] = useState(false);
  const [accountsExpanded, setAccountsExpanded] = useState(false);

  const joyTheme = useTheme({
    palette: {
      mode: "light"
    }
  });

  const materialTheme = createTheme();


  const tasks = [
    {
      name: "Bulky item collection",
      url: "/service/Bulky_item_collection"
    },
    {
      name: "Bin delivery, exchange or removal",
      url: "/service/Bin_delivery__exchange_or_removal"
    },
    {
      name: "Apply for a blue badge",
      url: "/service/Blue_badge_application"
    },
    {
      name: "Missed bins",
      url: "/service/Report_a_Missed_Bin"
    }

  ];

  const accounts = [
    {
      name: "Council Tax",
      description: "Council Tax, Housing Benefits and Business Rates",
      url: "https://www.hullcc.gov.uk/myrevsandbens/scripts/OPENPortal-Live.wsc/common/login.p",
    },
    {
      name: "myHousing",
      description: "Homesearch and Hull City Council tenants",
      url: "https://hullcc.engagehousing.app/",
    },
    {
      name: "Education Portal",
      description: "School applications for parents/guardians",
      url: "https://hull.cloud.servelec-synergy.com/Synergy/Live/SynergyWeb/",
    },
    {
      name: "Hull Libraries",
      description: "Library memberships",
      url: "https://hull.ent.sirsidynix.net.uk/client/en_GB/default/?#",
    },
    {
      name: "Jobs Portal",
      description: "Job vacancies and applications",
      url: "https://www.hullcc.gov.uk/jobs/Index.aspx",
    },
    {
      name: "Hull Theatres and Halls",
      description: "Make and manage bookings",
      url: "https://www.hulltheatres.co.uk/account/signin",
    },
    {
      name: "Leisure and Sports",
      description: "Book activities and manage memberships",
      url: "https://hcandl.legendonlineservices.co.uk/enterprise/account/login",
    },
    {
      name: "Planning Portal",
      description: "Planning applications and comments",
      url: "https://www.hullcc.gov.uk/padcbc/publicaccess-live/login.jsp",
    },
  ];

  const links = [
    {
      name: "Latest Updates",
      description: "Sign up for email updates and manage preferences",
      url: "https://public.govdelivery.com/accounts/UKHULL/subscriber/new"
    },
    {
      name: "Have Your Say",
      description: "Get involved and contribute to the future of Hull",
      url: "https://yoursay.hull.gov.uk/"
    },
    {
      name: "My Nearest",
      description: "Find local services and facilities as well as maps, including public rights of way and cycle routes",
      url: "https://maps.hull.gov.uk/myhull.aspx?action=SetAddress&UniqueId=0000" + `${props.uprn}`
    }
  ];

  const subHeadingStyle = {
    textTransform: "none",
    fontSize: "1.2rem",
    letterSpacing: "unset",
    fontWeight: "bold",
    marginBottom: 2
  }

  return (
    <>
        <CssVarsProvider theme={joyTheme}>
          <ThemeProvider theme={materialTheme}>
            <Collapse in={tasksExpanded} collapsedSize={240} sx={{ position: 'relative', fontFamily: '"Arial", "sans-serif"' }}>
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
                      <ListItem component="a" href={task.url} key={task.name} sx={{ textDecoration: "none",  justifyContent: "space-between" }}>
                          {task.name}
                          <ListItemDecorator>
                            <KeyboardArrowRight fontSize="xl3" />
                          </ListItemDecorator>
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
              <Button onClick={() => setTasksExpanded(true)} variant="outlined" color="neutral" sx={{ fontFamily: '"Arial", "sans-serif"', borderRadius: 12, backgroundColor: "#fff" }}>View more</Button>
            </Box>
            <Collapse in={accountsExpanded} collapsedSize={280} sx={{ position: 'relative', fontFamily: '"Arial", "sans-serif"' }}>
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
                  <Stack spacing={1}>
                    {accounts.map((account) => {
                      return (
                        <ListItem component="a" href={account.url} key={account.name} sx={{ textDecoration: "none", justifyContent: "space-between" }}>
                            <ListItemContent>
                              <Typography sx={{ fontWeight: "bold" }}>{account.name}</Typography>
                              <Typography sx={{ color: "#555E68" }}>
                                {account.description}
                              </Typography>
                            </ListItemContent>
                            <ListItemDecorator>
                              <KeyboardArrowRight fontSize="xl3" />
                            </ListItemDecorator>
                        </ListItem>
                      );
                    })}
                  </Stack>
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
              <Button onClick={() => setAccountsExpanded(true)} variant="outlined" color="neutral" sx={{ fontFamily: '"Arial", "sans-serif"', borderRadius: 12, backgroundColor: "#fff" }}>View more</Button>
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
                <Stack spacing={1}>
                  {links.map((link) => {
                    return (
                      <ListItem component="a" href={link.url} key={link.name}  sx={{ textDecoration: "none", justifyContent: "space-between" }}>
                          <ListItemContent>
                            <Typography sx={{ fontWeight: "bold" }}>{link.name}</Typography>
                            <Typography sx={{ color: "#555E68" }}>
                              {link.description}
                            </Typography>
                          </ListItemContent>
                          <ListItemDecorator>
                            <KeyboardArrowRight fontSize="xl3" />
                          </ListItemDecorator>
                      </ListItem>
                    );
                  })}
                </Stack>
              </List>
            </Box>
          </ThemeProvider>
        </CssVarsProvider>
    </>
  );
}