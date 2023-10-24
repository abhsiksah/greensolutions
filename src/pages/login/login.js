import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Unstable_Grid2 as Grid,
  Box,
  Button,
  FormHelperText,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";

const Login = () => {
  const [method, setMethod] = React.useState("email");
  const formik = useFormik({
    initialValues: {
      email: "demo@devias.io",
      password: "Password123!",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      console.log(values);
    },
  });

  const handleMethodChange = React.useCallback((event, value) => {
    setMethod(value);
  }, []);

  const handleSkip = () => {
    console.log("skiping");
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flex: "1 1 auto",
        }}
      >
        <Grid container sx={{ flex: "1 1 auto" }}>
          <Grid
            xs={12}
            lg={6}
            sx={{
              backgroundColor: "background.paper",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Box
              sx={{
                backgroundColor: "background.paper",
                alignItems: "center",
                display: "flex",
                height: "100vh",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  maxWidth: 550,
                  px: 3,
                  py: "100px",
                }}
              >
                <div>
                  <Stack spacing={1} sx={{ mb: 3 }}>
                    <Typography variant="h4">Login</Typography>
                  </Stack>
                  <Tabs
                    onChange={handleMethodChange}
                    sx={{ mb: 3 }}
                    value={method}
                  >
                    <Tab label="Email" value="email" />
                    <Tab label="Phone Number" value="phoneNumber" />
                  </Tabs>
                  {method === "email" && (
                    <form noValidate onSubmit={formik.handleSubmit}>
                      <Stack spacing={3}>
                        <TextField
                          error={
                            !!(formik.touched.email && formik.errors.email)
                          }
                          fullWidth
                          helperText={
                            formik.touched.email && formik.errors.email
                          }
                          label="Email Address"
                          name="email"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          type="email"
                          value={formik.values.email}
                        />
                        <TextField
                          error={
                            !!(
                              formik.touched.password && formik.errors.password
                            )
                          }
                          fullWidth
                          helperText={
                            formik.touched.password && formik.errors.password
                          }
                          label="Password"
                          name="password"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          type="password"
                          value={formik.values.password}
                        />
                      </Stack>
                      <FormHelperText sx={{ mt: 1 }}>
                        Optionally you can skip.
                      </FormHelperText>
                      {formik.errors.submit && (
                        <Typography
                          color="error"
                          sx={{ mt: 3 }}
                          variant="body2"
                        >
                          {formik.errors.submit}
                        </Typography>
                      )}
                      <Button
                        fullWidth
                        size="large"
                        sx={{ mt: 3 }}
                        type="submit"
                        variant="contained"
                      >
                        Continue
                      </Button>
                      <Button
                        fullWidth
                        size="large"
                        sx={{ mt: 3 }}
                        onClick={handleSkip}
                      >
                        Skip authentication
                      </Button>
                    </form>
                  )}
                  {method === "phoneNumber" && (
                    <form noValidate onSubmit={formik.handleSubmit}>
                      <Stack spacing={3}>
                        <TextField
                          error={
                            !!(
                              formik.touched.password && formik.errors.password
                            )
                          }
                          fullWidth
                          helperText={
                            formik.touched.password && formik.errors.password
                          }
                          label="Mobile Number"
                          name="Mobile Number"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          type="Mobile Number"
                          value={"9962258240"}
                        />
                      </Stack>
                      <FormHelperText sx={{ mt: 1 }}>
                        Optionally you can skip.
                      </FormHelperText>
                      {formik.errors.submit && (
                        <Typography
                          color="error"
                          sx={{ mt: 3 }}
                          variant="body2"
                        >
                          {formik.errors.submit}
                        </Typography>
                      )}
                      <Button
                        fullWidth
                        size="large"
                        sx={{ mt: 3 }}
                        type="submit"
                        variant="contained"
                      >
                        Continue
                      </Button>
                      <Button
                        fullWidth
                        size="large"
                        sx={{ mt: 3 }}
                        onClick={handleSkip}
                      >
                        Skip authentication
                      </Button>
                    </form>
                  )}
                </div>
              </Box>
            </Box>
          </Grid>
          <Grid
            xs={12}
            lg={6}
            sx={{
              alignItems: "center",
              background:
                "radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)",
              color: "white",
              display: "flex",
              justifyContent: "center",
              "& img": {
                maxWidth: "100%",
              },
            }}
          >
            <Box sx={{ p: 3 }}>
              <Typography
                align="center"
                color="inherit"
                sx={{
                  fontSize: "24px",
                  lineHeight: "32px",
                  mb: 1,
                }}
                variant="h1"
              >
                Welcome to{" "}
                <Box component="a" sx={{ color: "#15B79E" }} target="_blank">
                  Energy Solutions
                </Box>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Login;
