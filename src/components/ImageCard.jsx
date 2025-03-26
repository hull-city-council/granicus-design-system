import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@mui/joy";
import { CssVarsProvider, useTheme } from "@mui/joy/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ImageCard({ accountname, type }) {

  const theme = useTheme({
    palette: {
      mode: "light"
    },
  });

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
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid xs={12} md={12} lg={type === "business" ? 8 : 12}>
            <Card
              variant="plain"
              sx={(theme) => ({
                boxShadow: theme.shadow.md,
                flexGrow: 1,
                minHeight: 250,
                backgroundImage:
                  "url('https://fs-filestore-eu.s3.eu-west-1.amazonaws.com/hull/images/myaccount-bg.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 20
              })}
            >
              {" "}
              <CardContent sx={{ justifyContent: "center" }}>
                <Grid spacing={1}>
                  <Typography level="h2" fontWeight={"normal"} sx={{ mb: 0 }}>
                    {accountname},
                  </Typography>
                  <Typography level="h1" fontWeight={"normal"} sx={{ mt: 0 }}>
                    Welcome to{" "}
                    <Typography level="h1" sx={{ fontWeight: "bold" }}>
                      myAccount {type === "business" ? "Business" : ""}
                    </Typography>
                  </Typography>
                  <Grid container spacing={1} sx={{ mt: 2, width: "100%" }}>
                    <Grid>
                      <Button
                        variant="solid"
                        color="danger"
                        size="lg"
                        component="a"
                        href="/MyRequests"
                        endDecorator={<ArrowForwardIcon />}
                        sx={[
                          { ...buttonStyles }
                        ]}
                      >
                        Your requests
                      </Button>
                    </Grid>
                    <Grid>
                      <Button
                        color="neutral"
                        size="lg"
                        variant="soft"
                        component="a"
                        href="/MyServices"
                        sx={{ borderRadius: 12 }}
                      >
                        All forms
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CssVarsProvider>
    </>
  );
}