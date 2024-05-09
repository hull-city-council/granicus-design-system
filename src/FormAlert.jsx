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
        return <CheckCircleIcon sx={{ fontSize: 32 }} />;
      case "warning":
        return <WarningIcon sx={{ fontSize: 32 }} />;
      case "danger":
        return <ReportIcon sx={{ fontSize: 32 }} />;
      case "neutral":
        return <InfoIcon sx={{ fontSize: 32 }} />;
    }
  }
  return (
    <>
      <Alert
        key={props.title}
        sx={(theme) => ({
          alignItems: "flex-start",
          p: 4,
          boxShadow: theme.shadow.md,
          "--joy-shadowChannel": theme.vars.palette.primary.mainChannel,
          "--joy-shadowRing": "inset 0 -3px 0 rgba(0 0 0 / 0.24)",
        })}
        startDecorator={getIcon(props.type)}
        variant="soft"
        size="lg"
        color={props.type}
      >
        <div>
          <Typography level="h4">{props.title}</Typography>
          <Typography level="body-md" color={props.type}>
            {props.content}
          </Typography>
        </div>
      </Alert>
    </>
  );
}
