import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import WarningIcon from "@mui/icons-material/Warning";
import ReportIcon from "@mui/icons-material/Report";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Alert, Typography } from "@mui/joy";

export default function FormAlert({ ...props }) {
  function getIcon(type) {
    switch (type) {
      case "success":
        return <CheckCircleIcon />;
      case "warning":
        return <WarningIcon />;
      case "danger":
        return <ReportIcon />;
      case "neutral":
        return <InfoIcon />;
    }
  }
  return (
    <>
      <Alert
        key={props.title}
        sx={{ alignItems: "flex-start" }}
        startDecorator={getIcon(props.type)}
        variant="soft"
        size="lg"
        color={props.type}
      >
        <div>
          <Typography level="h5">{props.title}</Typography>
          <Typography level="body-md" color={props.type}>
            {props.content}
          </Typography>
        </div>
      </Alert>
    </>
  );
}
