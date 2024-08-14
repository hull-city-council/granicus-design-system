import React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
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
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import CheckIcon from "@mui/icons-material/Check";

export default function SignInRegister({ ...props }) {
  const benefits = props.benefits.split(",");
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
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Stack spacing={2}>
        <Card variant="outlined">
          <Typography level="h2">Sign in to your account</Typography>
          <Typography>
            Sign up or sign in to your account to access our online services.
          </Typography>
          <List>
            {benefits.map((benefit, index) => (
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
            endDecorator={<KeyboardArrowRight />}
            color="danger"
            size="lg"
            component="a"
            href={props.signinurl}
          >
            Sign in
          </Button>
          <Button
            color="danger"
            variant="outlined"
            size="lg"
            component="a"
            href={props.registerurl}
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
  );
}
