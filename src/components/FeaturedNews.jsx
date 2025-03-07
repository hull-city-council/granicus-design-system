import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { getFeaturedNewsItems } from "../lookups";
import { Stack } from '@mui/joy';


export default function FeaturedNews() {
    const theme = useTheme();
    const [newsData, setNewsData] = useState();
    const shade = (x) => theme.vars.palette["neutral"][x];
    const textColor = shade(700);

    const buttonStyles = {
        borderRadius: 99,
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
                <Sheet
                    variant="soft"
                    color="neutral"
                    invertedColors
                    sx={[
                        {
                            p: '3rem 3rem',
                            borderRadius: 'md',
                            overflow: 'clip'
                        },
                        { bgcolor: shade(100) }
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
                            <Typography level="h1" component="h2" sx={textColor}>
                                {newsData.title}
                            </Typography>
                            <Typography sx={{ mt: 1, mb: 2, ...textColor }}>
                                {newsData.description}
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                <Button
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
            )}
        </>
    );
}