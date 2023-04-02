import {
  Card,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  SvgIcon,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { HiSearch } from "react-icons/hi";
import { InputSearch } from "./InputSearch";
import { QuickSearchToolbarProps } from "./types";

export const SearchComponent = () => (
  <Card sx={{ p: 2 }}>
    <OutlinedInput
      defaultValue=""
      fullWidth
      placeholder="Search customer"
      startAdornment={
        <InputAdornment position="start">
          <SvgIcon color="action" fontSize="small">
            <HiSearch />
          </SvgIcon>
        </InputAdornment>
      }
      sx={{ maxWidth: 500 }}
    />
  </Card>
);

export const TableSearch = (props: QuickSearchToolbarProps) => {
  const { componentName = "", NStatus } = props;
  return (
    <Box p={2} display={"flex"} alignItems={"center"}>
      <div>
        <InputSearch
          onSearchFn={props.onSearchFn}
          componentName={componentName}
        />
      </div>
      <Box mx={2}>
        <TextField
          // component={TextField}
          type="text"
          name="status"
          label={`Filter By ${
            NStatus ? "JA Status" : "Status"
          }`}
          select
          variant="outlined"
          fullWidth
          value={props.statusState}
          onChange={(e) => props.statusChange(e.target.value)}
          style={{ minWidth: "180px" }}
          size="small"
        >
          {props.statusData.map((option: any) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      {NStatus ? (
        <Box>
          <TextField
            // component={TextField}
            type="text"
            name="JAstatus"
            label={`Filter By Status`}
            select
            variant="outlined"
            fullWidth
            value={props.NStatusValue}
            onChange={(e) => props.handleNStatus(e.target.value)}
            style={{ minWidth: "180px" }}
            size="small"
          >
            {props.NstatusData.map((option: any) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
};
