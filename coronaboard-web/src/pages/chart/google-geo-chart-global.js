import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container} from 'react-bootstrap';
import {Chart} from 'react-google-charts';

export default function GoogleTableChart(){
    // const data = [
    //     ['Country', 'Confirmed'],
    //     ['United States', 34321093],
    //     ['India', 2960033],
    //     ['Brazil', 1700],
    //     ['France', 5779103],
    //     ['Turkey', 5330447],
    // ];

    const data = [
        ['City', 'City', '확진자', '사망자'],
        ['KR-11','서울', 47890, 507],
        ['KR-26', '부산', 6034, 100],
        ['KR-27', '대구',10517, 222 ],
    ];


    const options = {
        colorAxis : {minValue : 0, maxValue : 50000, colors : ['#ffffff', '#710000']},
        region : 'KR', // 국가 코드 or 대륙 코드
        resolution : 'provinces',
    }

    return (
        <Container>
            <Chart
                chartType='GeoChart'
                width='100%'
                height='100%'
                data={data}
                options={options}
            />
        </Container>
    )
}