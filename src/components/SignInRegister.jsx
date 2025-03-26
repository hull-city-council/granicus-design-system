import React from "react";
import { CssVarsProvider, useTheme } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import {
  Stack,
  Card,
  Button,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  Avatar,
  AccordionGroup,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/joy";
import { ListItemAvatar, ListItemText } from "@mui/material";
import { grey } from "@mui/material/colors";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from "@mui/icons-material/Check";

export default function SignInRegister({ benefits, signinurl, registerurl }) {

  const theme = useTheme({
    palette: {
      mode: "light"
    },
  });

  const benefitsObject = benefits.split(",");
  const otherAccounts = [
    {
      accounts: [
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
      ],
    },
  ];

  const buttonStyles = {
    fontWeight: 600,
    borderRadius: 12,
    '&:hover': {
      '& .MuiButton-endDecorator': { transform: 'translate(4px, 0px)' },
    },
    '& span': { transition: '0.15s' },
  };

  return (
    <>
        <CssVarsProvider theme={theme}>
          <CssBaseline />
          <Stack spacing={2}>
            <Card variant="outlined" sx={{ backgroundColor: "white" }}>
              <Typography level="h2">Sign in to your account</Typography>
              <Typography>
                Sign up or sign in to your account to access our online services.
              </Typography>
              <List>
                <Stack spacing={2}>
                  {benefitsObject.map((benefit, index) => (
                    <ListItem key={index}>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: grey[200] }}>
                          <CheckIcon sx={{ color: grey[500] }} />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={benefit} />
                    </ListItem>
                  ))}
                </Stack>
              </List>
              <Button
                endDecorator={<ArrowForwardIcon />}
                color="danger"
                size="lg"
                component="a"
                href={signinurl}
                sx={[
                  { ...buttonStyles }
                ]}
              >
                Sign in
              </Button>
              <Button
                color="danger"
                variant="outlined"
                size="lg"
                component="a"
                href={registerurl}
                sx={{ borderRadius: 12 }}
              >
                Sign up
              </Button>
              <AccordionGroup sx={{ mt: 2 }}>
                <Accordion>
                  <AccordionSummary>
                    Other Hull City Council Online Accounts
                  </AccordionSummary>
                  <AccordionDetails>
                    {otherAccounts[0].accounts.map((account, index) => (
                      <ListItem component="a" href={account.url} key={index} sx={{ textDecoration: "none" }}>
                        <ListItemButton>
                          <ListItemContent>
                            <Typography level="title-sm">{account.name}</Typography>
                            <Typography level="body-sm" noWrap>
                              {account.description}
                            </Typography>
                          </ListItemContent>
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </AccordionGroup>
            </Card>
          </Stack>
        </CssVarsProvider>
    </>
  );
}
