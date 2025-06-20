import { useState } from 'react';
import { CssVarsProvider, useTheme } from '@mui/joy/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";
import ListSubheader from "@mui/joy/ListSubheader";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import { Collapse } from '@mui/material';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRightRounded';

export default function TopTasks({ ...props }) {

  const [tasksExpanded, setTasksExpanded] = useState(false);
  const [accountsExpanded, setAccountsExpanded] = useState(false);
  const [linksExpanded, setLinksExpanded] = useState(false);

  const joyTheme = useTheme({
    palette: {
      mode: "light"
    }
  });

  const materialTheme = createTheme();

  const tasks = {
    resident: [
      {
        name: "Make a payment",
        url: "https://www.hull.gov.uk/paying-council-bills"
      },
      {
        name: "Highway permit application",
        url: "/service/highway_permit_request"
      },
      {
        name: "Planning permission application",
        url: "https://www.planningportal.co.uk/app/landing-page"
      },
      {
        name: "Business rates general enquiry",
        url: "/service/Business_Rates_general_enquiry"
      }
    ],
    business: [
      {
        name: "Make a payment",
        url: "https://www.hull.gov.uk/paying-council-bills"
      },
      {
        name: "Business Rates",
        url: "/service/Business_Rates"
      },
      {
        name: "Planning applications",
        url: "/service/Planning_Applications"
      },
      {
        name: "Licences and permits",
        url: "/service/Licences_and_Permits"
      }
    ]
  };

  const accounts = {
    resident: [
      {
        name: "Council Tax",
        description: "Update your address, apply for discounts or exemptions, and check payment dates and amounts",
        url: "https://www.hullcc.gov.uk/myrevsandbens/scripts/OPENPortal-Live.wsc/common/login.p",
      },
      {
        name: "Council Housing",
        description: "Bid for council homes, book a council housing repair or access your rent account",
        url: "https://hullcc.engagehousing.app/",
      },
      {
        name: "Housing Benefit",
        description: "Check your payment history and find out when payments are due or tell us about a change in circumstances",
        url: "https://www.hullcc.gov.uk/myrevsandbens/scripts/OPENPortal-Live.wsc/common/login.p",
      },
      {
        name: "Education",
        description: "School applications, transfers and information on childcare",
        url: "https://hull.cloud.servelec-synergy.com/Synergy/Live/SynergyWeb/",
      },
      {
        name: "Hull Libraries",
        description: "Join the library or search our catalogue",
        url: "https://hull.ent.sirsidynix.net.uk/client/en_GB/default/?#",
      },
      {
        name: "Hull Leisure",
        description: "Book activities and manage memberships",
        url: "https://hcandl.legendonlineservices.co.uk/enterprise/account/login",
      },
      {
        name: "Planning",
        description: "Submit an application or find and comment on existing applications",
        url: "https://www.hullcc.gov.uk/padcbc/publicaccess-live/login.jsp",
      },
      {
        name: "Hull Theatres and Halls",
        description: "Find out what’s on and purchase tickets",
        url: "https://www.hulltheatres.co.uk/account/signin",
      },
      {
        name: "Jobs",
        description: "Search and apply for our latest vacancies and partner vacancies",
        url: "https://www.hullcc.gov.uk/jobs/Index.aspx",
      },
      {
        name: "Parking",
        description: "Apply for digital permits and pay for parking",
        url: "https://secure.mipermit.com/hull/Application/home.aspx",
      },
    ],
    business: [
      {
        name: "Business Rates",
        description: "Check your balance, make payments, update details and more",
        url: "https://www.hullcc.gov.uk/myrevsandbens/scripts/OPENPortal-Live.wsc/common/login.p"
      },
      {
        name: "Business Licences",
        description: "Apply for or manage your business licences",
        url: "https://www.hull.gov.uk/business-licences/account/signin"
      },
      {
        name: "Planning",
        description: "Submit an application or find and comment on existing applications",
        url: "https://www.hullcc.gov.uk/padcbc/publicaccess-live/login.jsp"
      }
    ]
  };

  const links = {
    resident: [
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
      },
      {
        name: "Community Directory",
        description: "Search for local groups, activities, services and more to support you in your everyday life",
        url: "https://hull-communitydirectory.powerappsportals.com/"
      },
    ],
    business: [
      {
        name: "Latest Business Updates",
        description: "Sign up for email updates and manage preferences",
        url: "https://public.govdelivery.com/accounts/UKHULL/signup/39993"
      },
      {
        name: "Grants and Funding",
        description: "Find funding schemes and grant opportunities",
        url: "https://investhull.co.uk/business-support/grants-and-funding"
      },
      {
        name: "Commercial Properties",
        description: "View our commercial portfolio opportunities",
        url: "https://www.hull.gov.uk/CommercialProperty/"
      },
      {
        name: "HEY Growth Hub",
        description: "Free and impartial information, advice and guidance for businesses",
        url: "https://heygrowthhub.com/"
      },
      {
        name: "Skills Bootcamp",
        description: "View bespoke training solutions to bridge existing skills gaps within high demand sectors",
        url: "https://www.hcctraining.ac.uk/skills-bootcamp-hull/"
      },
      {
        name: "Business and IP Centre",
        description: "Insights and access to free resources, training, and events",
        url: "https://www.hulllibraries.co.uk/business-support-intellectual-property/business-ip-centre"
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
      },
    ]
  };

  const topTasks = props.type === "business" ? tasks.business : tasks.resident;
  const otherAccounts = props.type === "business" ? accounts.business : accounts.resident;
  const usefulLinks = props.type === "business" ? links.business : links.resident;

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
                {topTasks.map((task) => {
                  return (
                    <ListItem component="a" href={task.url} key={task.name} sx={{ textDecoration: "none", justifyContent: "space-between" }}>
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
          <Collapse in={accountsExpanded} collapsedSize={340} sx={{ position: 'relative', fontFamily: '"Arial", "sans-serif"' }}>
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
                  {otherAccounts.map((account) => {
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
          <Collapse in={linksExpanded} collapsedSize={290} sx={{ position: 'relative', fontFamily: '"Arial", "sans-serif"' }}>
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
                  {usefulLinks.map((link) => {
                    return (
                      <ListItem component="a" href={link.url} key={link.name} target="_blank" sx={{ textDecoration: "none", justifyContent: "space-between" }}>
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
            <Box sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: linksExpanded ? 0 : 70,
              background: 'linear-gradient(to bottom, transparent, white)'
            }}></Box>
          </Collapse>
          <Box sx={{
            marginTop: -5,
            width: '100%',
            display: linksExpanded ? 'none' : 'flex',
            justifyContent: 'center',
          }}>
            <Button onClick={() => setLinksExpanded(true)} variant="outlined" color="neutral" sx={{ fontFamily: '"Arial", "sans-serif"', borderRadius: 12, backgroundColor: "#fff" }}>View more</Button>
          </Box>
        </ThemeProvider>
      </CssVarsProvider>
    </>
  );
}