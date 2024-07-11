import React from "react";
import { Card, CardContent, Button, ButtonGroup, Skeleton } from "@mui/joy";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export default function TopTasks({ ...props }) {
  return (
    <>
      <Card variant="outlined">
        <CardContent sx={{ justifyContent: "center" }}>
          <ButtonGroup
            variant="outlined"
            orientation="vertical"
            aria-label="vertical outlined button group"
            spacing="0.5rem"
          >
            {props.type === "business" ? (
              <Button size="lg" key="one" endDecorator={<KeyboardArrowRight />}>
                Business rates
              </Button>
            ) : props.type === "resident" ? (
              <>
                <Button
                  size="lg"
                  key="one"
                  endDecorator={<KeyboardArrowRight />}
                >
                  Missed bins
                </Button>
                <Button
                  size="lg"
                  key="two"
                  endDecorator={<KeyboardArrowRight />}
                >
                  Bulky item collection
                </Button>
                <Button
                  size="lg"
                  key="three"
                  endDecorator={<KeyboardArrowRight />}
                >
                  Apply for a blue badge
                </Button>
                <Button
                  size="lg"
                  key="four"
                  endDecorator={<KeyboardArrowRight />}
                >
                  Bin delivery, exchange or removal
                </Button>
              </>
            ) : (
              <>
                <Button loading loadingPosition="start" color="primary">
                  Loading...
                </Button>
              </>
            )}
          </ButtonGroup>
        </CardContent>
      </Card>
    </>
  );
}
