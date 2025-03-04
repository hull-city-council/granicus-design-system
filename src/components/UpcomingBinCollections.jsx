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
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (props.sid && props.uprn) {
            async function fetchCollectionData() {
                const collectionData = await getUpcomingBinCollections(props.sid, props.uprn);
                setTableData(collectionData);
                setIsLoading(false);
            }
            fetchCollectionData();
        }
    }, [props.uprn])

    return (
        <>
            {props.sid && props.uprn.length > 0(
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
            )}
        </>
    )
}