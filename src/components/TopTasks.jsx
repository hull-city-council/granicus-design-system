import React from "react";
import { Card, CardContent, Button, ButtonGroup, Stack, Grid } from "@mui/joy";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export default function TopTasks({ ...props }) {
  return (
    <>
      <Card
        variant="outlined"
        sx={(theme) => ({
          width: "100%",
          flexGrow: 1,
          minHeight: 200,
        })}
      >
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
            ) : (
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
            )}
          </ButtonGroup>
        </CardContent>
      </Card>
    </>
  );
}
