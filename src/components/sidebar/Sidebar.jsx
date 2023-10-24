import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { useLocation } from "react-router-dom";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PollIcon from '@mui/icons-material/Poll';
import MenuIcon from "@mui/icons-material/Menu";
import InsightsIcon from '@mui/icons-material/Insights';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "./style.css";



const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));



const Sidebar = () => {
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const location = useLocation();
  const { pathname } = location;
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={{
              marginTop: 3,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon style={{ color: "white" }} />
          </IconButton>

          <IconButton
            onClick={handleDrawerClose}
            style={{ display: !open && "none" }}
          >
            <ChevronLeftIcon
              sx={{
                color:"white",
                ...(!open && { display: "none" }),
              }}
            />
          </IconButton>
        </DrawerHeader>
        <Divider
          sx={{
            ...(!open && { display: "none" }),
          }}
        />

        <div className="sidebar-container">
          <div
            onClick={() => {
              navigate("./Analytics");
            }}
            className={
              pathname.split("/").includes("Analytics")
                ? "sidebar-container-items active-sidebar"
                : "sidebar-container-items"
            }
          >
            <span style={{ marginLeft: !open && "1rem" }}>
              <InsightsIcon />
            </span>
            <span style={{ display: !open && "none" }}>Analytics</span>
          </div>{" "}
          <div
            onClick={() => {
              navigate("./POT");
            }}
            className={
              pathname.split("/").includes("POT")
                ? "sidebar-container-items active-sidebar"
                : "sidebar-container-items"
            }
          >
            <span style={{ marginLeft: !open && "1rem" }}>
              <PollIcon />
            </span>
            <span style={{ display: !open && "none" }}>Production Over Time</span>
          </div>
          <div
            onClick={() => {
              navigate("./TEG");
            }}
            className={
              pathname.split("/").includes("TEG")
                ? "sidebar-container-items active-sidebar"
                : "sidebar-container-items"
            }
          >
            <span style={{ marginLeft: !open && "1rem" }}>
              <PollIcon />
            </span>
            <span style={{ display: !open && "none" }}>Total Electricity Generation</span>
          </div>
          <div
            onClick={() => {
              navigate("./NEP");
            }}
            className={
              pathname.split("/").includes("NEP")
                ? "sidebar-container-items active-sidebar"
                : "sidebar-container-items"
            }
          >
            <span style={{ marginLeft: !open && "1rem" }}>
              <PollIcon />
            </span>
            <span style={{ display: !open && "none" }}>Net Electricity Period</span>
          </div>
          <div
            onClick={() => {
              navigate("./ECONSUM");
            }}
            className={
              pathname.split("/").includes("ECONSUM")
                ? "sidebar-container-items active-sidebar"
                : "sidebar-container-items"
            }
          >
            <span style={{ marginLeft: !open && "1rem" }}>
              <PollIcon />
            </span>
            <span style={{ display: !open && "none" }}>Electricity Consumption</span>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Sidebar;
