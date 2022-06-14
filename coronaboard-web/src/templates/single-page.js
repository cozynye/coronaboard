import React from "react"
import { css } from "@emotion/react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dashboard } from "../components/dashboard";
import { GlobalSlide } from "../components/global-slide";
import { GlobalChartSlide } from "../components/global-chart-slide";
import { KoreaChartSlide } from "../components/korea-chart-slide";
import { Navigation } from "../components/navigation";
import { Notice } from "../components/notice";

export default function SinglePage({ pageContext }) {
  const { dataSource } = pageContext;
  const {lastUpdated, globalStats, notice} = dataSource;


  const lastUpdatedFormatted = new Date(lastUpdated).toLocaleDateString();
console.log('single-page');
  return (
    <div id='top'>
      <div
        css={css`
          position: absolute;
          background-color: black;
          width: 100%;
          height: 300px;
          z-index: -99;
        `}
      />
        <h1
          css={css`
            padding-top : 48px;
            padding-bottom : 24px;
            color : white;
            text-align : center;
            font-size : 28px;
          `}
        >
          코로나19(COVID-19)
          <br/>
          실시간 상황판
          </h1>
          <p className="text-center text-white">
            마지막 업데이트 : {lastUpdatedFormatted}
          </p>
          <Dashboard globalStats={globalStats}/>
          {/* <Notice notice={notice} /> */}
          <Navigation/>
          <GlobalSlide id="global-slide" dataSource={dataSource}/>
          <GlobalChartSlide id="global-chart-slide" dataSource={dataSource}/>
          {/* <KoreaChartSlide id="korea-chart-slide" dataSource={dataSource}/> */}
          
     </div>
  )
}
