import React, { useState, useEffect } from "react";
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails, {
    accordionDetailsClasses,
} from '@mui/joy/AccordionDetails';
import AccordionSummary, {
    accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';
import ListItemContent from '@mui/joy/ListItemContent';
import { DataGrid } from "@mui/x-data-grid";
import Avatar from "@mui/joy/Avatar";
import Typography from "@mui/joy/Typography";
import ReportIcon from "@mui/icons-material/Report";
import Alert from "@mui/joy/Alert";
import { Box, LinearProgress, Stack } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import { getUpcomingBinCollections, SubscribeToCollectionEmails } from "../lookups";
import { Checkbox, FormControl, FormHelperText, FormLabel, Switch, Select, Option, Button } from "@mui/joy";

export default function UpcomingBinCollections({ ...props }) {
    const [tableData, setTableData] = useState();
    const [eventData, setEventData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isSubscribedToReminders, setIsSubscribedToReminders] = useState();
    const [reminderOn, setReminderOn] = useState();
    const [reminderTime, setReminderTime] = useState(null);
    const [subscribeButtonDisabledState, setSubscribeButtonDisabledState] = useState(false);
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

    async function subscribe(event, uprn) {
        event.preventDefault();
        setSubscribeButtonDisabledState(true);
        setSubScribeButtonLoading(true);
    
        try {
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const response = await SubscribeToCollectionEmails(formJson, uprn);
    
            if (!response.ok) {
                throw new Error('Subscription failed');
            }
    
            const subscribeButton = event.currentTarget.querySelector('button[type="submit"]');
            if (subscribeButton) {
                subscribeButton.remove();
            }
        } catch (error) {
            // On error - reset states and show alert
            setSubscribeButtonDisabledState(false);
            setSubScribeButtonLoading(false);
            alert('Failed to subscribe to collection emails. Please try again.');
        }
    }

    return (
        <>
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
                            height: "500px",
                            ".MuiDataGrid-columnHeaderTitle": {
                                fontWeight: "bold !important",
                                overflow: "visible !important",
                            },
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: '#C41C1C'
                            }
                        }}
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
                                <Stack spacing={1.5}>
                                    <form onSubmit={(event) => subscribe(event, uprn)}>
                                        <FormControl orientation="horizontal" sx={{ gap: 1 }}>
                                            <FormLabel>Weekly email reminder</FormLabel>
                                            <Switch size="lg" color="danger" variant="soft" onChange={() => setIsSubscribedToReminders((isSubscribedToReminders) => !isSubscribedToReminders)} />
                                        </FormControl>
                                        {isSubscribedToReminders && (
                                            <>
                                                <FormLabel id="select-field-send-on-label" htmlFor="select-field-send-on">
                                                    Remind me
                                                </FormLabel>
                                                <FormLabel>Email address</FormLabel>
                                                <Input id="input-field-email" name="email" size="lg" value={props.email} type="email" />
                                                <Select id="select-field-send-on" name="send_on" onChange={(event, newValue) => setReminderOn(newValue)}>
                                                    <Option value={1}>The day before the collection</Option>
                                                    <Option value={0}>On the day of collection</Option>
                                                </Select>

                                                {reminderOn !== null && reminderOn !== undefined && (
                                                    <>
                                                        <FormLabel id="select-field-time-label" htmlFor="select-field-time">
                                                            Send at
                                                        </FormLabel>
                                                        <Select id="select-field-time" name="send_at" onChange={(event, newValue) => setReminderTime(newValue)}>
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
                                                    <Button loading={subScribeButtonLoading} disabled={subscribeButtonDisabledState} size="lg" color="danger" type="submit">Subscribe</Button>
                                                )}
                                            </>
                                        )}

                                        {/* <FormControl orientation="horizontal" sx={{ gap: 1 }}>
                                <FormLabel>Collection issues</FormLabel>
                                <Switch size="sm" />
                            </FormControl> */}
                                    </form>
                                </Stack>
                            </AccordionDetails>
                        </Accordion>
                    </AccordionGroup>
                </Box>
            ) : {}}
        </>
    )
}