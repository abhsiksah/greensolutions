import React from "react";
import { Line, Bar } from "react-chartjs-2";
import classNames from "classnames";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

import {
  productionvstotalelecCPPONEdata,
  productionvstotalelecCPPTWOdata,
} from "../../variables/charts";

import "./graphsstyle.css";

const TotalElectricityGen = () => {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };

  return (
    <div style={{ width: "100%", paddingTop: "40px" }}>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <div style={{ width: "45%" }}>
          <Card className="card-chart">
            <CardHeader>
              <h5 className="card-category">KILN 1</h5>
              <CardTitle tag="h3">
                <i className="tim-icons icon-send text-success" /> Total
                Electricity Generation
              </CardTitle>
            </CardHeader>
            <CardBody>
              <div className="chart-area">
                <Line
                  data={productionvstotalelecCPPONEdata[bigChartData]}
                  options={productionvstotalelecCPPONEdata.options}
                />
              </div>
            </CardBody>
          </Card>
        </div>
        <div style={{ width: "45%" }}>
          <Card className="card-chart">
            <CardHeader>
              <h5 className="card-category">KILN 2 + KILN 3</h5>
              <CardTitle tag="h3">
                <i className="tim-icons icon-send text-success" /> Total
                Electricity Generation
              </CardTitle>
            </CardHeader>
            <CardBody>
              <div className="chart-area">
                <Line
                  data={productionvstotalelecCPPTWOdata[bigChartData]}
                  options={productionvstotalelecCPPTWOdata.options}
                />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <ButtonGroup
          className="btn-group-toggle float-right"
          data-toggle="buttons"
        >
          <Button
            tag="label"
            className={classNames("btn-simple", {
              active: bigChartData === "data1",
            })}
            color="info"
            id="0"
            size="sm"
            onClick={() => setBgChartData("data1")}
          >
            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
              JAN
            </span>
            <span className="d-block d-sm-none">
              <i className="tim-icons icon-single-02" />
            </span>
          </Button>
          <Button
            color="info"
            id="1"
            size="sm"
            tag="label"
            className={classNames("btn-simple", {
              active: bigChartData === "data2",
            })}
            onClick={() => setBgChartData("data2")}
          >
            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
              FEB
            </span>
            <span className="d-block d-sm-none">
              <i className="tim-icons icon-gift-2" />
            </span>
          </Button>
          <Button
            color="info"
            id="2"
            size="sm"
            tag="label"
            className={classNames("btn-simple", {
              active: bigChartData === "data3",
            })}
            onClick={() => setBgChartData("data3")}
          >
            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
              MAR
            </span>
            <span className="d-block d-sm-none">
              <i className="tim-icons icon-tap-02" />
            </span>
          </Button>
          <Button
            color="info"
            id="2"
            size="sm"
            tag="label"
            className={classNames("btn-simple", {
              active: bigChartData === "data4",
            })}
            onClick={() => setBgChartData("data4")}
          >
            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
              APR
            </span>
            <span className="d-block d-sm-none">
              <i className="tim-icons icon-tap-02" />
            </span>
          </Button>
          <Button
            color="info"
            id="2"
            size="sm"
            tag="label"
            className={classNames("btn-simple", {
              active: bigChartData === "data5",
            })}
            onClick={() => setBgChartData("data5")}
          >
            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
              MAY
            </span>
            <span className="d-block d-sm-none">
              <i className="tim-icons icon-tap-02" />
            </span>
          </Button>
          <Button
            color="info"
            id="2"
            size="sm"
            tag="label"
            className={classNames("btn-simple", {
              active: bigChartData === "data6",
            })}
            onClick={() => setBgChartData("data6")}
          >
            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
              JUN
            </span>
            <span className="d-block d-sm-none">
              <i className="tim-icons icon-tap-02" />
            </span>
          </Button>
          <Button
            color="info"
            id="2"
            size="sm"
            tag="label"
            className={classNames("btn-simple", {
              active: bigChartData === "data7",
            })}
            onClick={() => setBgChartData("data7")}
          >
            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
              JUL
            </span>
            <span className="d-block d-sm-none">
              <i className="tim-icons icon-tap-02" />
            </span>
          </Button>
          <Button
            color="info"
            id="2"
            size="sm"
            tag="label"
            className={classNames("btn-simple", {
              active: bigChartData === "data8",
            })}
            onClick={() => setBgChartData("data8")}
          >
            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
              AUG
            </span>
            <span className="d-block d-sm-none">
              <i className="tim-icons icon-tap-02" />
            </span>
          </Button>
          <Button
            color="info"
            id="2"
            size="sm"
            tag="label"
            className={classNames("btn-simple", {
              active: bigChartData === "data9",
            })}
            onClick={() => setBgChartData("data9")}
          >
            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
              SEP
            </span>
            <span className="d-block d-sm-none">
              <i className="tim-icons icon-tap-02" />
            </span>
          </Button>
          <Button
            color="info"
            id="2"
            size="sm"
            tag="label"
            className={classNames("btn-simple", {
              active: bigChartData === "data10",
            })}
            onClick={() => setBgChartData("data10")}
          >
            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
              OCT
            </span>
            <span className="d-block d-sm-none">
              <i className="tim-icons icon-tap-02" />
            </span>
          </Button>
          <Button
            color="info"
            id="2"
            size="sm"
            tag="label"
            className={classNames("btn-simple", {
              active: bigChartData === "data11",
            })}
            onClick={() => setBgChartData("data11")}
          >
            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
              NOV
            </span>
            <span className="d-block d-sm-none">
              <i className="tim-icons icon-tap-02" />
            </span>
          </Button>
          <Button
            color="info"
            id="2"
            size="sm"
            tag="label"
            className={classNames("btn-simple", {
              active: bigChartData === "data12",
            })}
            onClick={() => setBgChartData("data12")}
          >
            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
              DEC
            </span>
            <span className="d-block d-sm-none">
              <i className="tim-icons icon-tap-02" />
            </span>
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default TotalElectricityGen;
