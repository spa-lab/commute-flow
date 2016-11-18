var dataDiagram = echarts.init(document.getElementById('dataDiagram'));

let option = {
  tooltip: {
    show: true,
    showContent: false,
    trigger: 'axis', // 'item' | 'axis'
    axisPointer: {
      type: 'shadow' // 'line' | 'cross' | 'shadow'
    }
  },
  xAxis: [
    {
      type: 'category',
      show: true,
      axisTick: {
        show: true,
        interval: 0
      },
      axisLabel: {
        show: false
      },
      data: []
    }
  ],
  yAxis: [
    {
      type: 'value',
      show: true
    },
    {
      type: 'value',
      show: true,
      splitLine:{
        show: false
      },
    }
  ],
  series: [
    {
      name: 'Supergoups',
      type: 'bar',
      data: [],
      yAxisIndex: 0
    }
  ]
};

// Check if the scatter diagram is visible.
if (statisticsViewModel.isMSOAScatterDiagramVisible) {
  option.series.push({
    name: 'MSOAs',
    type: 'scatter',
    tooltip: {
      show: true,
      showContent: true,
      trigger: 'item', // 'item' | 'axis'
      axisPointer: {
        type: 'shadow' // 'line' | 'cross' | 'shadow'
      },
      formatter: '{a} : {c}'
    },
    data: [],
    yAxisIndex: 1
  });
}

// Check if the statistics marker lines are visible.
if (statisticsViewModel.isStatisticsMarkerLinesVisible) {
  option.series[0].markLine = this.averageMarkLineStyle;
}

// Add the bars and scatter points if any.
for (let sgKey in Classification.superGroups) {
  if (Classification.superGroups.hasOwnProperty(sgKey)) {

    let baseMap = toggleBaseMapViewModel.currentBaseMap;

    // Add the name of the bar.
    option.xAxis[0].data.push(Classification.superGroups[sgKey].name);

    // Add the value and style of the bar.
    option.series[0].data.push({
      value :  Statistics.superGroups[sgKey].sum,
      itemStyle: {
        normal: {
          color: Classification.superGroups[sgKey].styles[baseMap].diagramStyle.normal.color,
          label: {
            show: true,
            position: 'bottom',
            textStyle: {
              color: Classification.superGroups[sgKey].styles[baseMap].diagramStyle.normal.textColor
            }
          }
        },
        emphasis: {
          barBorderColor: Classification.superGroups[sgKey].styles[baseMap].diagramStyle.emphasis.barBorderColor,
          label: {
            textStyle: {
              color: Classification.superGroups[sgKey].styles[baseMap].diagramStyle.emphasis.textColor,
              fontWeight: 'bold'
            }
          }
        }
      }
    });

    // Make sure that the scatter point label is positioned on top.
    this.scatterDiagramStyle.normal.label.position = 'top';

    // Add the value and style of the scatter point.
    if (statisticsViewModel.isMSOAScatterDiagramVisible) {
      option.series[1].data.push({
        value: Statistics.superGroups[sgKey].count,
        itemStyle: this.scatterDiagramStyle
      });
    }

  }
}

dataDiagram.setOption(option);

dataDiagram.on('click', function(params) {
  alert(params.value); // TODO: Add the data diagram click code.
});

dataDiagram.on('mouseover', function(params) {
  console.log('mouseover: ' + params.value); // TODO: Add the data diagram mouseover code.
});
