import { Avatar, Box, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useSelector } from "react-redux";

const TOP_NAV_HEIGHT = 64;

const Navbar = () => {
  const state = useSelector((state): any => state);

  return (
    <>
      <Box
        component="header"
        sx={{
          backdropFilter: "blur(6px)",
          backgroundColor: (theme) =>
            alpha(theme.palette.background.default, 0.8),
          position: "sticky",
          top: 0,
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2,
          }}
        >
          <Stack alignItems="center" direction="row" spacing={2}></Stack>
          <Stack alignItems="center" direction="row" spacing={2}>
            <Typography variant="h6">
              {state.globalAppState?.userInfo?.Role === "2" ? "Admin" : "User"}
            </Typography>

            <Avatar
              sx={{
                cursor: "pointer",
                height: 40,
                width: 40,
              }}
              src="/assets/avatars/avatar-anika-visser.png"
            >
              A
            </Avatar>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Navbar;
