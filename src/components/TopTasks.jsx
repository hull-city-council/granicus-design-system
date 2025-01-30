import React, { useMemo } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { Card, CardContent, Button, ButtonGroup } from "@mui/joy";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function TopTasks({ type, container }) {

  const cache = useMemo(() => createCache({ container, key: "css", prepend: true }), [container]);

  const buttonStyles = {
    borderRadius: 99,
    '&:hover': {
      '& .MuiButton-endDecorator': { transform: 'translate(4px, 0px)' },
    },
    '& span': { transition: '0.15s' },
  };

  return (
    <>
      <CacheProvider value={cache}>
        <CssVarsProvider>
          <Card variant="plain">
            <CardContent sx={{ justifyContent: "center" }}>
              <ButtonGroup
                variant="outlined"
                orientation="vertical"
                aria-label="vertical outlined button group"
                spacing="0.5rem"
              >
                {type === "business" ? (
                  <>
                    <Button
                      size="lg"
                      key="one"
                      endDecorator={<ArrowForwardIcon  />}
                    >
                      Business rates
                    </Button>
                    <Button
                      size="lg"
                      key="two"
                      endDecorator={<ArrowForwardIcon  />}
                    >
                      Commercial waste
                    </Button>
                    <Button
                      size="lg"
                      key="three"
                      endDecorator={<ArrowForwardIcon  />}
                    >
                      Business support
                    </Button>
                  </>
                ) : type === "resident" ? (
                  <>
                    <Button
                      size="lg"
                      key="one"
                      endDecorator={<ArrowForwardIcon  />}
                      sx={[
                        { ...buttonStyles }
                      ]}
                    >
                      Missed bins
                    </Button>
                    <Button
                      size="lg"
                      key="two"
                      endDecorator={<ArrowForwardIcon  />}
                      sx={[
                        { ...buttonStyles }
                      ]}
                    >
                      Bulky item collection
                    </Button>
                    <Button
                      size="lg"
                      key="three"
                      endDecorator={<ArrowForwardIcon  />}
                      sx={[
                        { ...buttonStyles }
                      ]}
                    >
                      Apply for a blue badge
                    </Button>
                    <Button
                      size="lg"
                      key="four"
                      endDecorator={<ArrowForwardIcon  />}
                      sx={[
                        { ...buttonStyles }
                      ]}
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
        </CssVarsProvider>
      </CacheProvider>
    </>
  );
}
