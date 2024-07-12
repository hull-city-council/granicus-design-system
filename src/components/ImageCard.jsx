import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  CardCover,
  IconButton,
} from "@mui/joy";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useTheme } from "@mui/joy/styles";

export default function ImageCard({ ...props }) {
  const images = [
    {
      label: "Save £££ and sign up for our commercial waste services",
      imgPath: "https://www.hull.gov.uk/images/Bins_and_recycling_landing.jfif",
      link: "https://www.hull.gov.uk/services/commercial-waste",
    },
    {
      label: "Psssst, did you know? we offer pest control services",
      imgPath:
        "https://images.unsplash.com/photo-1540366244940-9dce0a570312?auto=format&fit=crop&w=400&h=250&q=60",
      link: "https://www.hull.gov.uk/services/pest-control",
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
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={12} md={12} lg={8}>
          <Card
            variant="plain"
            sx={(theme) => ({
              boxShadow: theme.shadow.md,
              width: "100%",
              flexGrow: 1,
              minHeight: 250,
              backgroundImage:
                "url('https://fs-filestore-eu.s3.eu-west-1.amazonaws.com/hull/images/myaccount-bg.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            })}
          >
            {" "}
            <CardContent sx={{ justifyContent: "center" }}>
              <Grid spacing={1}>
                <Typography level="h2" fontWeight={"normal"} sx={{ mb: 0 }}>
                  {props.accountname},
                </Typography>
                <Typography level="h1" fontWeight={"normal"} sx={{ mt: 0 }}>
                  Welcome to{" "}
                  <Typography level="h1" sx={{ fontWeight: "bold" }}>
                    myAccount {props.type === "business" ? "Business" : ""}
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
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={12} lg={4}>
          <Card sx={{ minHeight: "250px" }}>
            <CardCover>
              <img
                src={images[activeStep].imgPath}
                srcSet={images[activeStep].imgPath}
                loading="lazy"
                alt={images[activeStep].label}
              />
            </CardCover>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
              }}
            />
            <CardContent sx={{ justifyContent: "flex-end" }}>
              <Typography level="title-lg" sx={{ pb: 1 }} textColor="#fff">
                {images[activeStep].label}
              </Typography>
              <Button
                color="danger"
                size="md"
                component="a"
                href={images[activeStep].link}
              >
                Find out more
              </Button>
              <MobileStepper
                sx={{
                  backgroundColor: "transparent",
                  mb: -1,
                  "& .MuiMobileStepper-dot": {
                    backgroundColor: "darkgray",
                  },
                  "& .MuiMobileStepper-dotActive": {
                    backgroundColor: "red",
                  },
                }}
                classes={{ progress: { color: "red" } }}
                steps={maxSteps}
                variant="dots"
                position="static"
                activeStep={activeStep}
                nextButton={
                  <IconButton
                    variant={activeStep === maxSteps - 1 ? "plain" : "soft"}
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </IconButton>
                }
                backButton={
                  <IconButton
                    variant={activeStep === 0 ? "plain" : "soft"}
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                  </IconButton>
                }
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
