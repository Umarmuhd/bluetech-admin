import React from "react";
import { Line } from "react-chartjs-2";

const state = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Bookings",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [10, 9, 11, 6, 0, 15, 8, 7, 7, 19, 17, 17, 16],
    },
  ],
};

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Line
          data={state}
          options={{
            title: {
              display: true,
              text: "Average Booking per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}
