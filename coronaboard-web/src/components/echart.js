import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';

export function Echart(props){
    const { wrapperCss, option} = props;
    const chartRef = useRef(null);

    useEffect(()=>{
        const chartInstance = echarts.init(chartRef.current);
        chartInstance.setOption(option);

        // 의존하는 상태 값이 바뀌거나 컴포넌트가 DOM에서 제거 될때 리소스를 정리하기 위한 클린업 함수
        return ()=>{
            chartInstance.dispose();
        };
    }, [option]);

    return <div css={wrapperCss} ref={chartRef}/>;
}