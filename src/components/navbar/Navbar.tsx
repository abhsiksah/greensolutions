import { Avatar, Box, Stack, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const TOP_NAV_HEIGHT = 64;

const Navbar = () => {
  const state = useSelector((state): any => state);

  return (
    <>
      <Box component="header" sx={{}}>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 3,
          }}
        >
          <Stack alignItems="center" direction="row" spacing={2}>
            {/* <TextField
              label="Search"
              variant="standard"
              focused
              inputProps={{
                style: {
                  color: "white",
                },
              }}
            /> */}
          </Stack>
          <Stack alignItems="center" direction="row" spacing={3}>
            <Typography
              variant="h6"
              sx={{ fontFamily: "cursive", fontSize: "15px" }}
            >
              {state.globalAppState?.userInfo?.Role === "2"
                ? "Hello Etti Khanna"
                : "Hello Etti Khanna"}
            </Typography>

            <Avatar
              sx={{
                cursor: "pointer",
                height: 40,
                width: 40,
              }}
              src={"https://picsum.photos/200/300"}
            >
              GD
            </Avatar>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Navbar;
