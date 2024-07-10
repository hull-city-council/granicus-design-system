import React from "react";
import { Card, CardContent, Button, ButtonGroup, Stack, Grid } from "@mui/joy";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export default function TopTasks({ ...props }) {
  return (
    <>
      <Card
        variant="outlined"
        color="danger"
        sx={(theme) => ({
          width: "100%",
          flexGrow: 1,
          minHeight: 200,
        })}
      >
        <CardContent sx={{ justifyContent: "center" }}>
          <ButtonGroup
            variant="soft"
            color="danger"
            orientation="vertical"
            aria-label="vertical outlined button group"
            spacing="0.5rem"
            fullWidth
          >
            {props.isbusiness && (
              <Button
                size="lg"
                key="one"
                fullWidth
                endDecorator={<KeyboardArrowRight />}
              >
                Business rates
              </Button>
            )}
            {!props.isbusiness && (
              <>
                <Button
                  size="lg"
                  key="one"
                  fullWidth
                  endDecorator={<KeyboardArrowRight />}
                >
                  Missed bins
                </Button>
                <Button size="lg" key="two" fullWidth>
                  Bulky item collection
                </Button>
                <Button size="lg" key="three" fullWidth>
                  Apply for a blue badge
                </Button>
                <Button size="lg" key="four" fullWidth>
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
