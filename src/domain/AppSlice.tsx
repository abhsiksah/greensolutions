import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { TableData } from "./Data";
import { AddServiceAndFeeCollection } from "../pages/form-and-table/Form";

interface TableDataStruct {
  doctorFirstName: string;
  clinicName: string;
  Status: number;
  id: number;
}

interface AppState {
  tableData: TableDataStruct[] | [];
  dashboardData: [] | AddServiceAndFeeCollection;
}

const initialState: AppState = {
  tableData: TableData,
  dashboardData: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    deleteData: (state, { payload }) => {
      console.log(payload);
    },
    addOnTableData: (state, { payload }) => {
      state.dashboardData = payload.data;
      let Template = {
        clinicName: payload.data.clinicName,
        doctorFirstName: payload.data.doctorFirstName,
        Status: 1,
        id: state.tableData.length,
      };
      state.tableData = [...state.tableData, Template];
      payload.callback();
    },
    changeStatus: (state, { payload }) => {
      let ChangedStateTable = state.tableData.map((e): any => {
        if (e.id === payload.id) {
          return { ...e, Status: payload.Status };
        }
        return e;
      });
      state.tableData = ChangedStateTable;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(authLogin.fulfilled, (state, { payload }: any) => {
  //     state.userInfo = payload.userInfo;
  //     state.authToken = payload.authToken;
  //     state.refreshToken = payload.refreshToken;
  //     state.expiryTime = payload.expiryTime;
  //     state.isAuthenticated = payload.authToken ? true : false;
  //     state.isLoading = false;
  //   });
  //   builder.addCase(refreshUserData.fulfilled, (state, { payload }: any) => {
  //     state.authToken = payload.authToken;
  //     state.refreshToken = payload.refreshToken;
  //     state.expiryTime = payload.expiryTime;
  //   });
  //   builder.addCase(authLogin.rejected, (state, { payload }) => {
  //     state.isLoading = false;
  //   });
  //   builder.addCase(authLogin.pending, (state, { payload }) => {
  //     state.isLoading = true;
  //   });
  // },
});

export const appSliceReducer = appSlice.reducer;
export const { addOnTableData, deleteData, changeStatus } = appSlice.actions;
export const globalSelector = (state: RootState) => state.globalAppState;
