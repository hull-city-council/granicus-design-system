import  { useMemo } from "react";
import { CssVarsProvider, useTheme } from "@mui/joy/styles";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import InfoIcon from "@mui/icons-material/Info";
import WarningIcon from "@mui/icons-material/Warning";
import ReportIcon from "@mui/icons-material/Report";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Alert from "@mui/joy/Alert";
import Typography from "@mui/joy/Typography";

export default function FormAlert({ title, type, content, container }) {

  const cache = useMemo(() => createCache({ container, key: "css", prepend: true }), [container]);

  const theme = useTheme({
    palette: {
      mode: "light"
    },
  });



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
      <CacheProvider value={cache}>
        <CssVarsProvider theme={theme}>
          <Alert
            key={title}
            sx={(theme) => ({
              alignItems: "flex-start",
              p: 4,
              boxShadow: theme.shadow.md,
              "--joy-shadowChannel": theme.vars.palette.primary.mainChannel,
              "--joy-shadowRing": "inset 0 -3px 0 rgba(0 0 0 / 0.24)",
            })}
            startDecorator={getIcon(type)}
            variant="soft"
            size="lg"
            color={type}
          >
            <div>
              <Typography level="h4">{title}</Typography>
              <Typography level="body-md" color={type}>
                {content}
              </Typography>
            </div>
          </Alert>
        </CssVarsProvider>
      </CacheProvider>
    </>
  );
}
