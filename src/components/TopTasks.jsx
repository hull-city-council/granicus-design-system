import React from "react";
import useFetch from "react-fetch-hook";
import { Card, CardContent, Button, ButtonGroup, Stack, Grid } from "@mui/joy";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export default function TopTasks({ ...props }) {
  const sid =
    typeof FS !== "undefined" && FS !== null
      ? (ref = FS.Auth) != null
        ? ref.session["auth-session"]
        : void 0
      : void 0;
  const { isLoading, data } = useFetch(
    "/apibroker/runLookup?id=668e832c15d16&repeat_against=&noRetry=true&getOnlyTokens=undefined&log_id=&app_name=AchieveForms&sid=" +
      sid,
    {
      method: "POST",
      body: JSON.stringify({
        formValues: {
          Section1: {
            ucrn: {
              type: "text",
              value: props.ucrn,
            },
          },
        },
      }),
    },
  );
  console.log(data);
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
          >
            {props.isbusiness && (
              <Button size="lg" key="one" endDecorator={<KeyboardArrowRight />}>
                Business rates
              </Button>
            )}
            {!props.isbusiness && (
              <>
                <Button
                  size="lg"
                  key="one"
                  endDecorator={<KeyboardArrowRight />}
                >
                  Missed bins
                </Button>
                <Button size="lg" key="two">
                  Bulky item collection
                </Button>
                <Button size="lg" key="three">
                  Apply for a blue badge
                </Button>
                <Button size="lg" key="four">
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
