import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {Echart} from '../../components/echart';
import { css } from '@emotion/react';


export default function BarChart(){
    const labelOptions = {
        show : true,
        position : 'top',
    };

    const series = [
        {
          name: '확진',
          type: 'bar', // line, pie
          color: '#e2431e',
          label: labelOptions,
          data: [743, 556, 485, 454, 602],
        },
        {
          name: '격리해제',
          type: 'bar',
          color: '#6f9654',
          label: labelOptions,
          data: [474, 499, 599, 551, 762],
        },
      ];

      const chartOption = {
        title: {
          text: '대한민국 코로나 19 추이',
          left: 'center',
        },
        legend: {
          data: series.map((x) => x.name),
          bottom: 20,
        },
        xAxis: {
          data: ['6.5', '6.6', '6.7', '6.8', '6.9'],
        },
        yAxis: {},
        tooltip: {
          trigger: 'axis',
        },
        series,
        animation: false,
      };

      return (
        <Container>
          {/* ❺ 차트가 그려질 영역의 크기와 정의해둔 차트 옵션을 컴포넌트에 전달 */}
          <Echart
            wrapperCss={css`
              width: 100%;
              height: 400px;
            `}
            option={chartOption}
          />
        </Container>
      );
}