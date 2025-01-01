import style from "./../../../../../Style/studentPanel.module.css";

import { NavLink } from "react-router-dom";
import Chart from 'react-apexcharts'
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";

const MiddleStatusDashboard = ({percentage}) => {


  var options = {
    plotOptions: {
      radialBar: {
        hollow: {
          size: "65%"
        },
        dataLabels: {
          showOn: "always",
          name: {
            offsetY: -10,
            show: false,
            color: "#888",
            fontSize: "13px"
          },
          value: {
            color: "#111",
            fontSize: "30px",
            show: true
          }
        }
      }
    },
  
    stroke: {
      lineCap: "round",
    },
    labels: ["Progress"]
  };
  let series = [Number(percentage)]

  return (


    <div className={style.middleStatusDashboard}>
        <Chart series={series} width={250} options={options} type='radialBar'/>
    </div>
  )
}

export { MiddleStatusDashboard }