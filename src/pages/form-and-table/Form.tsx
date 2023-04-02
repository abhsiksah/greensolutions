import {
  Button,
  CircularProgress,
  Container,
  Grid,
  MenuItem,
  Typography,
} from "@mui/material";
import { ErrorMessage, Field, FieldArray, Form as Form2, Formik } from "formik";
import { TextField } from "formik-mui";
import React, { useEffect, useState } from "react";
import { array, number, object, string } from "yup";
import { doctors, clinics } from "./Data";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import CustomSelect from "./CustomSelect";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import "./styles.css";
import { FaPlus } from "react-icons/fa";
import { addOnTableData } from "../../domain/AppSlice";

interface ServiceAndFeesArray {
  encryptedServicesIds: string[];
  fees: number | null;
}

export interface AddServiceAndFeeCollection {
  doctorFirstName: string;
  clinicName: string;
  publicHolidayFee: number | null;
  afterHoursFee: number | null;
  weekendFee: number | null;
  servicesAndFees: ServiceAndFeesArray[];
}

export interface AddDocServiceFeesPayload {
  data: AddServiceAndFeeCollection;
  callback: Function;
}

const emptyServiceObject: ServiceAndFeesArray = {
  encryptedServicesIds: [],
  fees: null,
};

export function Form() {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  let { id } = useParams();
  const [flowChecker, setFlowChecker] = useState("");
  const { globalAppState }: any = useSelector((state: RootState) => state);
  const triggerNavigateNormal = () => {
    return navigate(`/table`);
  };

  useEffect(() => {
    console.log("form mounted");
  }, []);

  let patternTwoDigisAfterComma = /^\d+(\.\d{0,2})?$/;

  return (
    <Box>
      <Container sx={{ width: "50%", p: 1, ml: 0 }}>
        <Typography variant="h4" color="goldenrod" mb={2} noWrap>
          Add New Entry
        </Typography>
        <Formik
          initialValues={{
            doctorFirstName: "",
            clinicName: "",
            publicHolidayFee: null,
            afterHoursFee: null,
            weekendFee: null,
            servicesAndFees: [
              {
                encryptedServicesIds: [],
                fees: null,
              },
            ],
          }}
          validationSchema={object({
            doctorFirstName: string().required("Please Select Doctor"),
            clinicName: string().required("Please Select Clinic"),
            publicHolidayFee: string()
              .test(
                "is-negative",
                "Public Holiday Fee Should Not Be Negative",
                (val: any) => {
                  if (Number(val) < 0) {
                    return false;
                  }
                  return true;
                }
              )
              .test(
                "out-of-bound-1",
                "Public Holiday Fee Must Be Greater Than Or Equal To 1",
                (val: any) => {
                  if (Number(val) < 1) {
                    return false;
                  }
                  return true;
                }
              )
              .test(
                "out-of-bound-100",
                "Public Holiday Fee Must Be Less Than Or Equal To 100",
                (val: any) => {
                  if (Number(val) > 100) {
                    return false;
                  }
                  return true;
                }
              )
              .test(
                "is-decimal",
                "Public Holiday Fee Should Contain Only 2 Decimal Points.",
                (val: any) => {
                  if (val != undefined) {
                    return patternTwoDigisAfterComma.test(val);
                  }
                  return true;
                }
              )
              .required("Please Enter Public Holiday Fee"),

            weekendFee: string()
              .test(
                "is-negative",
                "Weekend Fee Should Not Be Negative",
                (val: any) => {
                  if (Number(val) < 0) {
                    return false;
                  }
                  return true;
                }
              )
              .test(
                "out-of-bound-1",
                "Weekend Fee Must Be Greater Than Or Equal To 1",
                (val: any) => {
                  if (Number(val) < 1) {
                    return false;
                  }
                  return true;
                }
              )
              .test(
                "out-of-bound-100",
                "Weekend Fee Must Be Less Than Or Equal To 100",
                (val: any) => {
                  if (Number(val) > 100) {
                    return false;
                  }
                  return true;
                }
              )

              .test(
                "is-decimal",
                "Weekend Fee should Contain Only 2 decimal points.",
                (val: any) => {
                  if (val != undefined) {
                    return patternTwoDigisAfterComma.test(val);
                  }
                  return true;
                }
              )
              .required("Please Enter Weekend Fee"),

            afterHoursFee: string()
              .test(
                "is-negative",
                "After Hours Fee Should Not Be Negative",
                (val: any) => {
                  if (Number(val) < 0) {
                    return false;
                  }
                  return true;
                }
              )
              .test(
                "out-of-bound-1",
                "After Hours Fee Must Be Greater Than Or Equal To 1",
                (val: any) => {
                  if (Number(val) < 1) {
                    return false;
                  }
                  return true;
                }
              )
              .test(
                "out-of-bound-100",
                "After Hours Fee Must Be Less Than Or Equal To 100",
                (val: any) => {
                  if (Number(val) > 100) {
                    return false;
                  }
                  return true;
                }
              )
              .test(
                "is-decimal",
                "After Hours Fee should Contain Only 2 decimal points.",
                (val: any) => {
                  if (val != undefined) {
                    return patternTwoDigisAfterComma.test(val);
                  }
                  return true;
                }
              )
              .required("Please Enter After Hour Fee"),
            servicesAndFees: array()
              .of(
                object().shape({
                  encryptedServicesIds: array()
                    .required("required")
                    .min(1, "Please Select Atleast One Service"),
                  fees: string()
                    .test(
                      "is-negative",
                      " Fee Should Not Be Negative",
                      (val: any) => {
                        if (Number(val) < 0) {
                          return false;
                        }
                        return true;
                      }
                    )
                    .test(
                      "out-of-bound-1",
                      " Fee Must Be Greater Than Or Equal To 1",
                      (val: any) => {
                        if (Number(val) < 1) {
                          return false;
                        }
                        return true;
                      }
                    )
                    .test(
                      "out-of-bound-100",
                      " Fee Must Be Less Than Or Equal To 100",
                      (val: any) => {
                        if (Number(val) > 100) {
                          return false;
                        }
                        return true;
                      }
                    )
                    .test(
                      "is-decimal",
                      "Fees should Contain Only 2 decimal points.",
                      (val: any) => {
                        if (val != undefined) {
                          return patternTwoDigisAfterComma.test(val);
                        }
                        return true;
                      }
                    )
                    .required("Please Enter Fee"),
                })
              )
              .min(1, "Please Provide Atleast 1 Service"),
          })}
          onSubmit={(values: any, { setSubmitting }: any) => {
            setSubmitting(false);
            const payloadData: AddDocServiceFeesPayload = {
              //@ts-ignore
              callback: triggerNavigateNormal,
              data: values,
            };

            dispatch(addOnTableData(payloadData));
          }}
        >
          {({ values, errors, isSubmitting, isValid }: any) => (
            <Box
              ml={0}
              sx={{
                p: 3,
                height: "100%",
                ml: 0,
              }}
            >
              <Form2 autoComplete="off">
                <Grid container direction="column" spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      component={TextField}
                      type="text"
                      name="doctorFirstName"
                      id="doctorFirstName"
                      label="Select Doctor"
                      select
                      required
                      variant="outlined"
                      fullWidth
                      size="small"
                    >
                      {doctors.map((option: any) => (
                        <MenuItem key={option.id} value={option.name}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </Field>
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      component={TextField}
                      type="text"
                      name="clinicName"
                      id="clinicName"
                      label="Select Clinic"
                      select
                      required
                      variant="outlined"
                      fullWidth
                      size="small"
                    >
                      {clinics.map((option: any) => (
                        <MenuItem key={option.id} value={option.name}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </Field>
                  </Grid>
                  <div className="add-fee-header">
                    <Typography variant="h5" color="inherit" noWrap>
                      Flat Fees
                    </Typography>
                  </div>
                  <Grid item xs={12}>
                    <Field
                      component={TextField}
                      id="publicHolidayFee"
                      name="publicHolidayFee"
                      size="small"
                      label="Public Holiday Fees(%)"
                      fullWidth
                      required
                      type="number"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      component={TextField}
                      id="afterHoursFee"
                      name="afterHoursFee"
                      size="small"
                      label="After Hour Fees(%)"
                      fullWidth
                      required
                      type="number"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      component={TextField}
                      id="weekendFee"
                      name="weekendFee"
                      size="small"
                      label="Weekend Fees(%)"
                      fullWidth
                      required
                      type="number"
                      variant="outlined"
                    />
                  </Grid>
                  <div className="add-fee-header">
                    <Typography variant="h5" color="inherit" noWrap>
                      Service Fees
                    </Typography>
                  </div>

                  <FieldArray name="servicesAndFees">
                    {({ push, remove }) => (
                      <React.Fragment>
                        {values?.servicesAndFees?.map((_: any, index: any) => (
                          <div className="add-more-container">
                            <div className="remove-add-more-item">
                              <span
                                onClick={() => remove(index)}
                                style={{ cursor: "pointer" }}
                              >
                                X
                              </span>
                            </div>
                            <Grid container item key={index} spacing={2}>
                              <Grid item xs={12}>
                                <Field
                                  component={CustomSelect}
                                  type="text"
                                  name={`servicesAndFees[${index}].encryptedServicesIds`}
                                  id={`servicesAndFees[${index}].encryptedServicesIds`}
                                  placeholder="Pick a Candy*"
                                  options={[
                                    {
                                      value: "purple",
                                      label: "Purple",
                                      color: "#5243AA",
                                    },
                                    {
                                      value: "orange",
                                      label: "Orange",
                                      color: "#FF8B00",
                                    },
                                    {
                                      value: "yellow",
                                      label: "Yellow",
                                      color: "#FFC400",
                                    },
                                    {
                                      value: "green",
                                      label: "Green",
                                      color: "#36B37E",
                                    },
                                    {
                                      value: "forest",
                                      label: "Forest",
                                      color: "#00875A",
                                    },
                                    {
                                      value: "slate",
                                      label: "Slate",
                                      color: "#253858",
                                    },
                                    {
                                      value: "silver",
                                      label: "Silver",
                                      color: "#666666",
                                    },
                                  ]}
                                  className="custom-select"
                                  isMulti={true}
                                />
                                <ErrorMessage
                                  className="error-class-message"
                                  component="div"
                                  name={`servicesAndFees[${index}].encryptedServicesIds`}
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <Field
                                  fullWidth
                                  size="small"
                                  id={`servicesAndFees[${index}].fees`}
                                  name={`servicesAndFees[${index}].fees`}
                                  component={TextField}
                                  type="number"
                                  required
                                  label="Fees(%)"
                                />
                              </Grid>
                            </Grid>
                          </div>
                        ))}

                        <Grid item>
                          {typeof errors.servicesAndFees === "string" ? (
                            <Typography color="error">
                              {errors.servicesAndFees}
                            </Typography>
                          ) : null}
                        </Grid>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "end",
                            marginBottom: "20px",
                          }}
                        >
                          <Grid item>
                            <Button
                              disabled={isSubmitting}
                              variant="contained"
                              onClick={() => push(emptyServiceObject)}
                            >
                              <span style={{ marginRight: "3px" }}>
                                <FaPlus size={10} />
                              </span>
                              Add More
                            </Button>
                          </Grid>
                        </div>
                      </React.Fragment>
                    )}
                  </FieldArray>

                  <div className="clinic-management-add-footer">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Button
                        disabled={isSubmitting}
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          setFlowChecker("Normal");
                        }}
                        startIcon={
                          isSubmitting ? (
                            <CircularProgress size="0.9rem" />
                          ) : undefined
                        }
                      >
                        {isSubmitting ? "Submitting" : "Save"}
                      </Button>
                      {id && (
                        <Button
                          disabled={isSubmitting}
                          type="submit"
                          style={{ marginLeft: "15px" }}
                          variant="contained"
                          onClick={() => {
                            setFlowChecker("Special");
                          }}
                          color="primary"
                          startIcon={
                            isSubmitting ? (
                              <CircularProgress size="0.9rem" />
                            ) : undefined
                          }
                        >
                          {isSubmitting ? "Submitting" : "Save & Add Agreement"}
                        </Button>
                      )}

                      <Button
                        variant="outlined"
                        color="primary"
                        style={{ marginLeft: "15px" }}
                        onClick={() => {
                          triggerNavigateNormal();
                        }}
                      >
                        Cancel
                      </Button>
                    </Box>
                  </div>
                </Grid>
              </Form2>
            </Box>
          )}
        </Formik>
      </Container>
    </Box>
  );
}
