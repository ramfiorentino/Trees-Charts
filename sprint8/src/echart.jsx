import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ReactECharts from 'echarts-for-react';
import 'echarts-gl';

function Echart() {
  const [chartOption, setChartOption] = useState(null);
  const [loading, setLoading] = useState(true);
  const array1Data = useSelector((state) => state.data.array1);


  useEffect(() => {
    // Load simplex-noise from CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/simplex-noise@2.4.0/simplex-noise.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Adjust this data based on the percentage of trees by m2
      const treePercentageData = array1Data;

      // Generate series data with 3 rows along the y-axis
      const seriesData = treePercentageData.flatMap(({ city, percentage, coverKm2, totalKm2 }, index) => {
        return Array.from({ length: 3 }, (_, yIndex) => ({
          name: city,
          value: [index, yIndex, yIndex === 0 ? percentage : yIndex === 1 ? coverKm2 : totalKm2],
        }));
      });

      const option = {
        xAxis3D: {
          type: 'category',
          data: treePercentageData.map(({ city }) => city),
        },
        yAxis3D: {
          type: 'category',
          data: ['Tree cover %', 'Tree cover km²', 'City total km²'],
        },
        zAxis3D: {
          type: 'value',
          max: 500, // Adjust the maximum value
        },
        grid3D: {
          viewControl: {
            // autoRotate: true
          },
          light: {
            main: {
              shadow: true,
              quality: 'ultra',
              intensity: 1.5,
            },
          },
        },
        series: [
          {
            type: 'bar3D',
            data: seriesData,
            shading: 'lambert',
            emphasis: {
              label: {
                show: false,
              },
            },
            color: [
              '#208744',
            ]
          },
        ],
      };

      setChartOption(option);
      setLoading(false);
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <ReactECharts option={chartOption} style={{ width: '100%', height:'100%'}} className='max-w-full' />;
}

export default Echart;
