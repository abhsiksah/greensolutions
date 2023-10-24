import React from "react";
import { Line, Bar } from "react-chartjs-2";

import { Card, CardHeader, CardBody, CardTitle } from "reactstrap";

import {
  chartExample2,
  chartExample3,
  chartExample4,
} from "../../variables/charts";

const Analytics = () => {
  return (
    <div style={{ width: "97%", padding: "20px" }}>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <div style={{ width: "32%" }}>
          <Card className="card-chart">
            <CardHeader>
              <h5 className="card-category">KILN 1 Performance</h5>
              <CardTitle tag="h3">
                <i className="tim-icons icon-bell-55 text-info" /> 763,215 units
                more consumption
              </CardTitle>
            </CardHeader>
            <CardBody>
              <div className="chart-area">
                <Line
                  data={chartExample2.data}
                  options={chartExample2.options}
                />
              </div>
            </CardBody>
          </Card>
        </div>
        <div style={{ width: "32%" }}>
          <Card className="card-chart">
            <CardHeader>
              <h5 className="card-category">KILN 2 Performance</h5>
              <CardTitle tag="h3">
                <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                3,500 units high
              </CardTitle>
            </CardHeader>
            <CardBody>
              <div className="chart-area">
                <Bar
                  data={chartExample3.data}
                  options={chartExample3.options}
                />
              </div>
            </CardBody>
          </Card>
        </div>
        <div style={{ width: "32%" }}>
          <Card className="card-chart">
            <CardHeader>
              <h5 className="card-category">KILN 3 Performance</h5>
              <CardTitle tag="h3">
                <i className="tim-icons icon-send text-success" /> 12,100 units
                less
              </CardTitle>
            </CardHeader>
            <CardBody>
              <div className="chart-area">
                <Line
                  data={chartExample4["data1"]}
                  options={chartExample4.options}
                />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
