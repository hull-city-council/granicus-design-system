import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/joy";

export default function ImageCard({ ...props }) {
  return (
    <>
      <Card
        variant="plain"
        sx={(theme) => ({
          boxShadow: theme.shadow.md,
          width: "100%",
          flexGrow: 1,
          minHeight: 200,
          backgroundImage:
            "url('https://fs-filestore-eu.s3.eu-west-1.amazonaws.com/hull/images/myaccount-bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        })}
      >
        {" "}
        <CardContent sx={{ justifyContent: "center" }}>
          <Typography level="h2" fontWeight={"normal"} sx={{ mb: 0 }}>
            {props.accountname},
          </Typography>
          <Typography level="h1" fontWeight={"normal"} sx={{ mt: 0 }}>
            Welcome to{" "}
            <Typography level="h1" sx={{ fontWeight: "bold" }}>
              myAccount
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
              >
                Your requests
              </Button>
            </Grid>
            <Grid>
              <Button
                color="danger"
                size="lg"
                variant="soft"
                component="a"
                href="/MyServices"
              >
                All forms
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
