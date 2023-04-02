import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";

export const InputSearch = ({
  timeDelay = 1000,
  onSearchFn,
  componentName="",
  ...props
}: any): JSX.Element => {
  const handleChange = (e: any) => {
    onSearchFn(e.target.value);
  };

  //debounce function
  function debounce(fn: any, delay: number) {
    let timer: any;
    return function (...args: any) {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  return (
    <div className="search">
      <TextField
        variant="outlined"
        onChange={debounce(handleChange, timeDelay)}
        placeholder={`Search By ${componentName} Name`}
        size="small"
        InputProps={{
          startAdornment: <SearchIcon fontSize="small" />,
          //   endAdornment: (
          //     <IconButton
          //       title="Clear"
          //       aria-label="Clear"
          //       size="small"
          //       style={{ visibility: props.value ? "visible" : "hidden" }}
          //       onClick={props.clearSearch}
          //     >
          //       <ClearIcon fontSize="small" />
          //     </IconButton>
          //   ),
        }}
      />
    </div>
  );
};
