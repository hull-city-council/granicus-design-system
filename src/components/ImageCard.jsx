import React from "react";
import {
  Card,
  CardContent,
  CardCover,
  Typography,
  Button,
  Grid,
} from "@mui/joy";

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
        })}
      >
        <CardCover>
          <img
            src="https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&w=1080"
            srcSet="https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&w=1080&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </CardCover>
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
