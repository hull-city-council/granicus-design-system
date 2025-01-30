import React, { useMemo } from "react";
import { CssVarsProvider, useTheme } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import {
  Stack,
  Card,
  Button,
  Typography,
  List,
  ListItem,
  ListItemButton,
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

export default function SignInRegister({ benefits, signinurl, registerurl, container }) {

  const theme = useTheme({
    palette: {
      mode: "light"
    },
  });

  const cache = useMemo(() => createCache({ container, key: "css", prepend: true }), [container]);

  const benefitsObject = benefits.split(",");
  const otherAccounts = [
    {
      accounts: [
        {
          name: "Council tax",
          url: "https://www.hullcc.gov.uk/myrevsandbens/scripts/OPENPortal-Live.wsc/common/login.p",
        },
        {
          name: "Housing",
          url: "https://hullcc.engagehousing.app/",
        },
        {
          name: "School portal",
          url: "https://hull.cloud.servelec-synergy.com/Synergy/Live/SynergyWeb/",
        },
        {
          name: "Libraries",
          url: "https://hull.ent.sirsidynix.net.uk/client/en_GB/default/?#",
        },
        {
          name: "Job vacancies",
          url: "https://www.hullcc.gov.uk/jobs/Index.aspx",
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
      <CacheProvider value={cache}>
        <CssVarsProvider theme={theme}>
          <CssBaseline />
          <Stack spacing={2}>
            <Card variant="outlined" sx={{backgroundColor: "white"}}>
              <Typography level="h2">Sign in to your account</Typography>
              <Typography>
                Sign up or sign in to your account to access our online services.
              </Typography>
              <List>
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
                      <ListItem component="a" href={account.url} key={index}>
                        <ListItemButton>{account.name}</ListItemButton>
                      </ListItem>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </AccordionGroup>
            </Card>
          </Stack>
        </CssVarsProvider>
      </CacheProvider>
    </>
  );
}
