import React, { useState, useEffect, useMemo } from "react";
import { Alert, Avatar, Accordion, AccordionGroup, AccordionDetails, accordionDetailsClasses, AccordionSummary, accordionSummaryClasses, ListItemContent, FormControl, FormLabel, Switch, Select, Option, Button, Input, Typography } from "@mui/joy";
import { CssVarsProvider, useTheme } from "@mui/joy/styles";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import createCache from '@emotion/cache';
import { StyledEngineProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import { DataGrid } from "@mui/x-data-grid";
import ReportIcon from "@mui/icons-material/Report";
import { Box, LinearProgress, Stack } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import DoneIcon from "@mui/icons-material/Done";
import { getUpcomingBinCollections, SubscribeToCollectionEmails } from "../lookups";

export default function UpcomingBinCollections({ container, ...props }) {

    const joyTheme = useTheme({
        palette: {
            mode: "light"
        },
    });

    const materialTheme = createTheme({
        palette: {
            mode: "light"
        },
    });

    const cache = useMemo(() => createCache({
        container,
        key: "css",
        prepend: true,
        stylisPlugins: []
    }), [container]);

    const [tableData, setTableData] = useState();
    const [eventData, setEventData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isSubscribedToReminders, setIsSubscribedToReminders] = useState();
    const [reminderOn, setReminderOn] = useState();
    const [reminderTime, setReminderTime] = useState(null);
    const [isStateDisabled, setIsStateDisabled] = useState(false);
    const [subScribeButtonLoading, setSubScribeButtonLoading] = useState(false);

    const reminderTimes = {
        before: [
            { text: '4pm', value: '16:00:00' },
            { text: '5pm', value: '17:00:00' },
            { text: '6pm', value: '18:00:00' },
            { text: '7pm', value: '19:00:00' },
            { text: '8pm', value: '20:00:00' },
            { text: '9pm', value: '21:00:00' },
            { text: '10pm', value: '22:00:00' },
            { text: '11pm', value: '23:00:00' }
        ],
        onTheDay: [
            { text: '4am', value: '04:00:00' },
            { text: '5am', value: '05:00:00' },
            { text: '6am', value: '06:00:00' },
            { text: '7am', value: '07:00:00' }
        ]
    };

    useEffect(() => {
        if (props.sid && props.uprn) {
            async function fetchCollectionData() {
                const collectionData = await getUpcomingBinCollections(props.sid, props.uprn);
                const rows = [];
                collectionData.collection_days.map((item, index) =>
                    rows.push({
                        id: index,
                        type: item.collection_type,
                        date: new Date(item.next_collection_date).toLocaleDateString("en-GB", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        }),
                    }),
                );
                setTableData(rows);
                setEventData(collectionData?.events.street_event);
                setIsLoading(false);
            }
            fetchCollectionData();
        }
    }, [props.sid, props.uprn])

    async function subscribe(event, uprn, ucrn) {
        event.preventDefault();
        setIsStateDisabled(true);
        setSubScribeButtonLoading(true);

        try {
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const response = await SubscribeToCollectionEmails(formJson, uprn, ucrn);

            if (response.status != 200) {
                throw new Error('Subscription failed');
            }

            PNotify.info({
                title: 'Confirm your subscription',
                text: 'We have emailed you, please confirm your email address.'
            });

            setIsStateDisabled(true);
            setSubScribeButtonLoading(false);
        } catch (error) {
            // On error - reset states and show alert
            setIsStateDisabled(false);
            setSubScribeButtonLoading(false);
            PNotify.error({
                title: 'Failed to subscribe',
                text: 'Please try again later.'
            });
        }
    }

    return (
        <>
            <CacheProvider value={cache}>
                <StyledEngineProvider injectFirst>
                    <CssVarsProvider theme={joyTheme} colorSchemeNode={container}
                        disableNestedContext>
                        <ThemeProvider theme={materialTheme}>
                            {eventData && (
                                <Alert
                                    sx={{ alignItems: "flex-start", mb: 3 }}
                                    startDecorator={<ReportIcon />}
                                    variant="soft"
                                    color="danger"
                                >
                                    <div>
                                        <div>
                                            Missed bins on{" "}
                                            <span style={{ textTransform: "capitalize" }}>
                                                {eventData?.events.street_name}
                                            </span>
                                        </div>
                                        <Typography level="body-sm" color="danger">
                                            {eventData?.events.message}
                                        </Typography>
                                    </div>
                                </Alert>
                            )}
                            {props.uprn.length > 0 ? (
                                <Box sx={{ width: "100%" }} boxShadow={1}>
                                    <DataGrid
                                        sx={{
                                            background: "#fff",
                                            height: "265px",
                                            ".MuiDataGrid-columnHeaderTitle": {
                                                fontWeight: "bold !important",
                                                overflow: "visible !important",
                                            }
                                        }}
                                        hideFooter={true}
                                        rows={tableData}
                                        disableColumnMenu
                                        columns={[
                                            {
                                                field: "type",
                                                headerClassName: "super-app-theme--header",
                                                headerName: "Bin Colour",
                                                minWidth: 100,
                                                flex: 1,
                                                renderCell: (params) => {
                                                    const blue = params.value === "Blue Bin";
                                                    const black = params.value === "Black Bin";
                                                    const brown = params.value === "Brown Bin";
                                                    const green = params.value === "GreenCaddy";
                                                    return (
                                                        <>
                                                            <Stack direction="row" alignItems="center" spacing={1}>
                                                                <Avatar
                                                                    variant="soft"
                                                                    color={
                                                                        blue
                                                                            ? "primary"
                                                                            : black
                                                                                ? "neutral"
                                                                                : brown
                                                                                    ? "warning"
                                                                                    : green
                                                                                        ? "success"
                                                                                        : "default"
                                                                    }
                                                                >
                                                                    <DeleteOutlineIcon />
                                                                </Avatar>
                                                                <Typography level="body-md">{params.value}</Typography>
                                                            </Stack>
                                                        </>
                                                    );
                                                },
                                            },
                                            { field: "date", headerName: "Date", minWidth: 100, flex: 1 },
                                        ]}
                                        slots={{
                                            loadingOverlay: LinearProgress,
                                        }}
                                        loading={isLoading}
                                    />
                                    <AccordionGroup
                                        variant="plain"
                                        transition="0.2s"
                                        sx={{
                                            borderRadius: 'md',
                                            [`& .${accordionDetailsClasses.content}.${accordionDetailsClasses.expanded}`]:
                                            {
                                                paddingBlock: '1rem',
                                            },
                                            [`& .${accordionSummaryClasses.button}`]: {
                                                paddingBlock: '1rem',
                                            },
                                        }}
                                    >
                                        <Accordion>
                                            <AccordionSummary>
                                                <Avatar color="danger">
                                                    <MarkEmailUnreadIcon />
                                                </Avatar>
                                                <ListItemContent>
                                                    <Typography level="title-md">Email preferences</Typography>
                                                    <Typography level="body-sm">
                                                        Subscribe to weekly reminder emails
                                                    </Typography>
                                                </ListItemContent>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                {!props.uuid ? (
                                                    <form onSubmit={(event) => subscribe(event, props.uprn, props.ucrn)}>
                                                        <Stack spacing={1.5}>
                                                            <FormControl orientation="horizontal" sx={{ gap: 1 }}>
                                                                <FormLabel>Weekly email reminder</FormLabel>
                                                                <Switch size="lg" color="danger" variant="soft" disabled={isStateDisabled} onChange={() => setIsSubscribedToReminders((isSubscribedToReminders) => !isSubscribedToReminders)} />
                                                            </FormControl>
                                                            {isSubscribedToReminders && (
                                                                <>

                                                                    <FormLabel>Email address</FormLabel>
                                                                    <Input id="input-field-email" name="email" disabled={true} size="lg" value={props.email} type="email" />
                                                                    <FormLabel id="select-field-send-on-label" htmlFor="select-field-send-on">
                                                                        Remind me
                                                                    </FormLabel>
                                                                    <Select id="select-field-send-on" name="send_on" placeholder="When to send the email..." disabled={isStateDisabled} size="lg" onChange={(event, newValue) => setReminderOn(newValue)}>
                                                                        <Option value={1}>The day before the collection</Option>
                                                                        <Option value={0}>On the day of collection</Option>
                                                                    </Select>

                                                                    {reminderOn !== null && reminderOn !== undefined && (
                                                                        <>
                                                                            <FormLabel id="select-field-time-label" htmlFor="select-field-time">
                                                                                Send at
                                                                            </FormLabel>
                                                                            <Select id="select-field-time" name="send_at" placeholder="Select a time..." disabled={isStateDisabled} size="lg" onChange={(event, newValue) => setReminderTime(newValue)}>
                                                                                {reminderOn === 1
                                                                                    ? reminderTimes.before.map(time => (
                                                                                        <Option key={time.value} value={time.value}>{time.text}</Option>
                                                                                    ))
                                                                                    : reminderTimes.onTheDay.map(time => (
                                                                                        <Option key={time.value} value={time.value}>{time.text}</Option>
                                                                                    ))
                                                                                }
                                                                            </Select>
                                                                        </>
                                                                    )}

                                                                    {reminderTime && (
                                                                        <Button fullWidth loading={subScribeButtonLoading} disabled={isStateDisabled} size="lg" color="danger" type="submit">{isStateDisabled ? "Email sent" : "Subscribe"}</Button>
                                                                    )}
                                                                </>
                                                            )}

                                                            {/* <FormControl orientation="horizontal" sx={{ gap: 1 }}>
                                <FormLabel>Collection issues</FormLabel>
                                <Switch size="sm" />
                            </FormControl> */}
                                                        </Stack>
                                                    </form>
                                                ) : (
                                                    <Alert
                                                        sx={{ alignItems: "flex-start", mb: 3 }}
                                                        startDecorator={<DoneIcon />}
                                                        variant="soft"
                                                        color="success"
                                                    >
                                                        <div>
                                                            You are subscribed to receive weekly bin reminders. <a href={`https://prod-248.westeurope.logic.azure.com/workflows/fb257102e10f4f8f9bbd84a2d3f78716/triggers/manual/paths/invoke/uuid/${props.uuid}?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=v2Mt8VwmaoqE63MjjnTSNqn8CR7P3HKcinwaz68d6D8`} title="unsubscribe to bin collection reminders">Unsubscribe</a>
                                                        </div>
                                                    </Alert>
                                                )

                                                }
                                            </AccordionDetails>
                                        </Accordion>
                                    </AccordionGroup>
                                </Box>
                            ) : {}}
                        </ThemeProvider>
                    </CssVarsProvider>
                </StyledEngineProvider>
            </CacheProvider>
        </>
    )
}