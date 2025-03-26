import React, { useState, useEffect } from "react";
import { CssVarsProvider, useTheme } from "@mui/joy/styles";
import { Box, Button, Typography, Sheet, Stack } from "@mui/joy";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { getFeaturedNewsItems } from "../lookups";


export default function FeaturedNews() {
    const theme = useTheme();
    const [newsData, setNewsData] = useState();

    const buttonStyles = {
        borderRadius: 12,
        '&:hover': {
            '& .MuiButton-endDecorator': { transform: 'translate(4px, 0px)' },
        },
        '& span': { transition: '0.15s' },
    };

    useEffect(() => {
        async function getNewsItems() {
            const newsData = await getFeaturedNewsItems();
            setNewsData(newsData);
        }
        getNewsItems();
    }, []);

    return (
        <>
            {newsData && (
                <CssVarsProvider theme={theme}>
                    <Sheet
                        variant="soft"
                        sx={[
                            {
                                p: '1rem 1rem',
                                borderRadius: 'md',
                                overflow: 'clip',
                                background: "#fff"
                            },
                        ]}
                    >
                        <Stack direction="column" spacing={2}
                            sx={{
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                            <div>
                                <img src={newsData.image_url} width={"100%"} alt={newsData.title} />
                            </div>
                            <div>
                                <Typography level="h1" component="h2">
                                    {newsData.title}
                                </Typography>
                                <Typography sx={{ mt: 3, mb: 3 }}>
                                    {newsData.description}
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                    <Button
                                        color="danger"
                                        component="a"
                                        target="_blank"
                                        href={newsData.link_url}
                                        endDecorator={<ArrowForwardIcon fontSize="md" />}
                                        sx={{ ...buttonStyles }}
                                    >
                                        Read more
                                    </Button>
                                </Box>
                            </div>
                        </Stack>
                    </Sheet>
                </CssVarsProvider>
            )}
        </>
    );
}