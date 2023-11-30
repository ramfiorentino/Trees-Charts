import React, { useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import 'echarts-gl';

function Page() {
  useEffect(() => {
    // Load simplex-noise from CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/simplex-noise@2.4.0/simplex-noise.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Adjust this data based on the percentage of trees by m2
      const treePercentageData = [
        { city: 'Oslo', percentage: 72 },
        // Add more entries for other locations...
      ];

      const noise = new window.SimplexNoise();

      const seriesData = treePercentageData.map(({ city, percentage }, index) => ({
        name: city,
        value: [index, 0, percentage],
      }));

      const option = {
        xAxis3D: {
          type: 'category',
          data: treePercentageData.map(({ city }) => city),
        },
        yAxis3D: {
          type: 'value',
        },
        zAxis3D: {
          type: 'value',
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
          },
        ],
      };

      // You can log the option to see how it looks like
      console.log(option);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  const option = {
    xAxis3D: {
      type: 'category',
      data: ['Oslo'], // You can add more cities here
    },
    yAxis3D: {
      type: 'value',
    },
    zAxis3D: {
      type: 'value',
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
        data: [{ name: 'Oslo', value: [0, 0, 72] }],
        shading: 'lambert',
        emphasis: {
          label: {
            show: false,
          },
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: '400px' }} />;
};

export default Page;
