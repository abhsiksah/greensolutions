import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  Box,
  Button,
  Container,
  IconButton,
  Modal,
  Switch,
  Tooltip,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { TableSearch } from "../../components/search/SearchComponent";
import { useNavigate } from "react-router-dom";
// import { status } from "./Data";
import { AppDispatch, RootState } from "../../store/store";
import "./style.css";
import { MdDeleteForever, MdOutlineAddBox } from "react-icons/md";

import { FaEdit } from "react-icons/fa";
import { changeStatus, deleteData } from "../../domain/AppSlice";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
};

export interface DeleteFeesPayload {
  data: { EncryptedDoctorClinicId: string };
  callback: Function;
}

export interface SearchFeePayload {
  SearchText: string;
  status: number | string;
  PageSize: number | string;
  PageNumber: number | string;
}

export interface GetDoctorServicesAndFeesPayload {
  data: { EncryptedDoctorClinicId: string };
  callback: Function;
}

export interface UpdateDocFeeStatusPayload {
  data: { encryptedDoctorClinicId: string; status: number };
  callback: Function;
}

const Table = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { tableData }: any = useSelector(
    (state: RootState) => state.globalAppState
  );
  const [open, setOpen] = useState(false);
  const [deletId, setDeletId] = useState("");
  const [searchText, setSearchText] = useState("");
  const [statusState, setStatusState] = useState<number | string>("");
  const [pageState, setPageState] = useState({
    page: 1,
    pageSize: 20,
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setDeletId("");
  };
  //please optimize this as this is calling 2 times in staging
  //   useEffect(() => {
  //     dispatch(
  //       getFeesListing({
  //         SearchText: searchText,
  //         status: statusState === 2 ? "" : statusState,
  //         PageSize: pageState.pageSize,
  //         PageNumber: pageState.page,
  //       })
  //     );
  //   }, [pageState]);

  useEffect(() => {
    return () => {
      setStatusState("");
      setSearchText("");
    };
  }, []);

  const onSearch = (value: string) => {
    setSearchText(value);
  };

  const columns: GridColDef[] = [
    {
      field: "doctorFirstName",
      headerName: "Doctor Name",
      width: 500,
      minWidth: 250,
      maxWidth: 400,
      renderCell: (params: any) => {
        const currentRow = params.row;
        return <p>{currentRow.doctorFirstName}</p>;
      },
    },
    {
      field: "clinicName",
      headerName: "Clinic Name",
      width: 200,
      minWidth: 250,
      maxWidth: 350,
    },
    {
      field: "Status",
      headerName: "Status",
      width: 200,
      minWidth: 250,
      maxWidth: 350,
      renderCell: (params: any) => {
        const handleToggle = () => {
          let { id, Status } = params.row;
          let payload;
          if (Status === 0) {
            payload = { id, Status: 1 };
            dispatch(changeStatus(payload));
          } else if (Status === 1) {
            payload = { id, Status: 0 };
            dispatch(changeStatus(payload));
          }
        };

        const checkstate = () => {
          const currentRow = params.row;
          // return currentRow?.status;
          if (currentRow?.Status === 1) {
            return true;
          } else if (currentRow?.Status === 0) {
            return false;
          } else {
            return true;
          }
        };
        return (
          <Stack direction="row" spacing={2}>
            <Switch
              size={"small"}
              checked={checkstate()}
              onChange={handleToggle}
              inputProps={{ "aria-label": "controlled" }}
            />
            <span>{checkstate() ? "Active" : "Inactive"}</span>
          </Stack>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 340,
      sortable: false,
      // disableClickEventBubbling: false,

      renderCell: (params: any) => {
        const onClick = (e: any) => {
          const currentRow = params.row;
          setDeletId(currentRow.id);
          handleOpen();
        };

        return (
          <Stack direction="row" spacing={2} alignItems="center">
            <Tooltip title="Delete">
              <IconButton color="error" size="small" onClick={onClick}>
                <span>
                  <MdDeleteForever size={20} />
                </span>
              </IconButton>
            </Tooltip>
          </Stack>
        );
      },
    },
  ];

  const onClickHandle = () => {
    navigate(`/form`);
  };

  const statusChange = (value: any) => {
    if (value === 2) {
      setStatusState("");
    } else {
      setStatusState(value);
    }
    setStatusState(value);

    // dispatch(changeStatus());
  };

  return (
    <Box>
      <Container maxWidth={false}>
        <Box py={2}>
          <Box component="main">
            <Stack spacing={3}>
              <Stack direction="row" justifyContent="space-between" spacing={4}>
                <Stack spacing={1}>
                  <Typography variant="h4">Data Grid</Typography>
                </Stack>
                <div>
                  <Button
                    style={{ width: "90px" }}
                    variant="contained"
                    onClick={onClickHandle}
                  >
                    <span style={{ marginRight: "3px" }}>
                      <FaPlus size={10} />
                    </span>{" "}
                    Add
                  </Button>
                </div>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <div
          style={{ height: "77vh", width: "100%", backgroundColor: "white" }}
        >
          <DataGrid
            rows={tableData}
            columns={columns}
            density={"standard"}
            disableColumnMenu={true}
            components={{
              Toolbar: TableSearch,
              NoRowsOverlay: () => (
                <Stack
                  height="100%"
                  alignItems="center"
                  justifyContent="center"
                >
                  No Records Available
                </Stack>
              ),
            }}
            disableSelectionOnClick={true}
            rowsPerPageOptions={[]}
            page={pageState.page - 1}
            pageSize={pageState.pageSize}
            paginationMode="server"
            onPageChange={(newPage) => {
              setPageState((old) => ({ ...old, page: newPage + 1 }));
            }}
            componentsProps={{
              toolbar: {
                onSearchFn: onSearch,
                statusData: [],
                statusState: statusState,
                statusChange: statusChange,
                searchText: searchText,
                setSearchText: setSearchText,
                componentName: "Doctor",
              },
            }}
          />
        </div>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="delete-modal-container">
            <div className="button-delete-modal-container">
              <DeleteForeverIcon
                style={{
                  fontSize: "100px",
                  color: "#d32f2f",
                }}
              />
            </div>
            <Typography variant="h5">
              Are you sure you want to delete?
            </Typography>
            <div className="button-delete-modal-container">
              <Button
                style={{ width: "90px" }}
                variant="contained"
                onClick={() => {
                  dispatch(deleteData(deletId));
                  handleClose();
                }}
              >
                Confirm
              </Button>
              <Button
                style={{ width: "90px" }}
                variant="outlined"
                onClick={handleClose}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </Box>
  );
};
export default Table;
