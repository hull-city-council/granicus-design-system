import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Avatar from "@mui/joy/Avatar";
import Typography from "@mui/joy/Typography";
import ReportIcon from "@mui/icons-material/Report";
import Alert from "@mui/joy/Alert";
import { Box, LinearProgress, Stack } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { getUpcomingBinCollections } from "../lookups";

export default function UpcomingBinCollections({ ...props }) {
    const [tableData, setTableData] = useState();
    const [eventData, setEventData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        if (props.sid && props.uprn) {
            async function fetchCollectionData() {
                try {
                    setIsLoading(true);
                    const collectionData = await getUpcomingBinCollections(props.sid, props.uprn);
                    
                    if (!collectionData?.collection_days) {
                        throw new Error('No collection data available');
                    }
    
                    const rows = collectionData.collection_days.map((item, index) => ({
                        id: index,
                        type: item.collection_type,
                        date: new Date(item.next_collection_date).toLocaleDateString("en-GB", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        }),
                    }));
    
                    setTableData(rows);
                    setEventData(collectionData?.events?.street_event);
                    setError(null);
                } catch (err) {
                    setError(err.message);
                    setTableData([]);
                    setEventData(null);
                } finally {
                    setIsLoading(false);
                }
            }
            fetchCollectionData();
        }
    }, [props.sid, props.uprn]);

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
                <Box sx={{ height: 400, width: "100%" }} boxShadow={1}>
                    <DataGrid
                        sx={{
                            ".MuiDataGrid-columnHeaderTitle": {
                                fontWeight: "bold !important",
                                overflow: "visible !important",
                            },
                        }}
                        rows={tableData}
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
                </Box>
            ) : {}}
        </>
    )
}