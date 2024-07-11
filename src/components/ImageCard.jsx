import React from "react";
import { Card, CardContent, Typography, Button, Grid, Box } from "@mui/joy";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useTheme } from "@mui/joy/styles";

export default function ImageCard({ ...props }) {
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews, [
    { interval: 10000 },
  ]);

  const images = [
    {
      label: "Save £££ and sign up for our commercial waste services",
      imgPath: "https://www.hull.gov.uk/images/Bins_and_recycling_landing.jfif",
    },
    {
      label: "Psssst, did you know? we offer pest control services",
      imgPath:
        "https://images.unsplash.com/photo-1540366244940-9dce0a570312?auto=format&fit=crop&w=400&h=250&q=60",
    },
  ];
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

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
          <Grid container spacing={1}>
            <Grid xs={6}>
              <Typography level="h2" fontWeight={"normal"} sx={{ mb: 0 }}>
                {props.accountname},
              </Typography>
              <Typography level="h1" fontWeight={"normal"} sx={{ mt: 0 }}>
                Welcome to{" "}
                <Typography level="h1" sx={{ fontWeight: "bold" }}>
                  myAccount
                </Typography>
              </Typography>
            </Grid>
            <Grid xs={6} sx={{ mb: -25 }}>
              <Box
                sx={(theme) => ({
                  boxShadow: theme.shadow.md,
                  maxWidth: 450,
                  flexGrow: 1,
                })}
              >
                <Paper
                  square
                  elevation={0}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: 50,
                    pl: 2,
                    bgcolor: "background.default",
                  }}
                >
                  <Typography>{images[activeStep].label}</Typography>
                </Paper>
                <AutoPlaySwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={activeStep}
                  onChangeIndex={handleStepChange}
                  enableMouseEvents
                >
                  {images.map((step, index) => (
                    <div key={step.label}>
                      {Math.abs(activeStep - index) <= 2 ? (
                        <Box
                          component="img"
                          sx={{
                            height: 200,
                            display: "block",
                            maxWidth: 500,
                            overflow: "hidden",
                            width: "100%",
                          }}
                          src={step.imgPath}
                          alt={step.label}
                        />
                      ) : null}
                    </div>
                  ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                  steps={maxSteps}
                  position="static"
                  activeStep={activeStep}
                  nextButton={
                    <Button
                      size="small"
                      onClick={handleNext}
                      color="danger"
                      disabled={activeStep === maxSteps - 1}
                    >
                      Next
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowLeft />
                      ) : (
                        <KeyboardArrowRight />
                      )}
                    </Button>
                  }
                  backButton={
                    <Button
                      size="small"
                      color="danger"
                      onClick={handleBack}
                      disabled={activeStep === 0}
                    >
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowRight />
                      ) : (
                        <KeyboardArrowLeft />
                      )}
                      Back
                    </Button>
                  }
                />
              </Box>
            </Grid>
          </Grid>
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
