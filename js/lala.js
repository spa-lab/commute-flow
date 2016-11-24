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


// ================================================================================


var dataDiagram = echarts.init(document.getElementById('dataDiagram'));

// Stacked Column
option = {
  tooltip: {
    show: false, // if false then onhover on each stack - if true then on hover on each stack
    showContent: false,
    trigger: 'axis', // 'item' | 'axis'
    axisPointer: {
      type: 'cross' // 'line' | 'cross' | 'shadow'
    }
  },
  // calculable: true,
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
      data: [
        'Retail and Services',
        'Blue Collar Traits',
        'Non car commuting young professionals',
        'Admin / Secretary',
        'Part time service supporters',
        'Health and Education',
        'Skilled and manufacturing workers',
        'Professional and managerial workers',
        'Science, IT and Finance Professionals'
      ]
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
      }
    }
  ],
  color: [
    '#1705d6', '#1705d6', '#1705d6', '#1705d6', '#1705d6',
    '#11ea44', '#11ea44', '#11ea44',
    '#cc4704', '#cc4704', '#cc4704', '#cc4704', '#cc4704',
    '#6b2ed4', '#6b2ed4', '#6b2ed4',
    '#d60003', '#d60003', '#d60003', '#d60003', '#d60003',
    '#23cfb8', '#23cfb8', '#23cfb8', '#23cfb8', '#23cfb8',
    '#e1de00', '#e1de00', '#e1de00', '#e1de00', '#e1de00',
    '#de079a', '#de079a', '#de079a', '#de079a', '#de079a',
    '#1fcd5f', '#1fcd5f', '#1fcd5f', '#1fcd5f'
  ],
  series: [
    {
      name: 'g11 - Building Sales Execs',
      type: 'bar',
      stack: 's1',
      data: [ {
        value : 11,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#1705d6'
          },
          emphasis: {
            barBorderColor: 'DeepSkyBlue'
          }
        }
      }, '-', '-', '-', '-', '-', '-', '-', '-' ]
    },
    {
      name: 'g12 - Established in Sales and Customer Care',
      type: 'bar',
      stack: 's1',
      data: [ {
        value : 12,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#1705d6'
          },
          emphasis: {
            barBorderColor: 'DeepSkyBlue'
          }
        }
      }, '-', '-', '-', '-', '-', '-', '-', '-' ]
    },
    {
      name: 'g13 - Back Office Functions',
      type: 'bar',
      stack: 's1',
      data: [ {
        value : 13,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#1705d6'
          },
          emphasis: {
            barBorderColor: 'DeepSkyBlue'
          }
        }
      }, '-', '-', '-', '-', '-', '-', '-', '-' ]
    },
    {
      name: 'g14 - Multicultural Hospitality',
      type: 'bar',
      stack: 's1',
      data: [ {
        value : 14,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#1705d6'
          },
          emphasis: {
            barBorderColor: 'DeepSkyBlue'
          }
        }
      }, '-', '-', '-', '-', '-', '-', '-', '-' ]
    },
    {
      name: 'g15 - On the Shop Floor',
      type: 'bar',
      stack: 's1',
      data: [ {
        value : 15,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#1705d6'
          },
          emphasis: {
            barBorderColor: 'DeepSkyBlue'
          }
        }
      }, '-', '-', '-', '-', '-', '-', '-', '-' ]
    },

    {
      name: 'g21 - Multicultural Routine Logistics',
      type: 'bar',
      stack: 's1',
      data: [ '-', {
        value : 21,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#11ea44'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      }, '-', '-', '-', '-', '-', '-', '-' ]
    },
    {
      name: 'g22 - On the Production Line',
      type: 'bar',
      stack: 's1',
      data: [ '-', {
        value : 22,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#11ea44'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      }, '-', '-', '-', '-', '-', '-', '-' ]
    },
    {
      name: 'g23 - Skilled Trades in Mixed Economies',
      type: 'bar',
      stack: 's1',
      data: [ '-', {
        value : 23,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#11ea44'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      }, '-', '-', '-', '-', '-', '-', '-' ]
    },

    {
      name: 'g31 - Professionals Who Cycle',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', {
        value : 31,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#cc4704'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      }, '-', '-', '-', '-', '-', '-' ]
    },
    {
      name: 'g32 - Sustainable Hospitality',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', {
        value : 32,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#cc4704'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      }, '-', '-', '-', '-', '-', '-' ]
    },
    {
      name: 'g33 - Welfare Workers on the Bus',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', {
        value : 33,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#cc4704'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      }, '-', '-', '-', '-', '-', '-' ]
    },
    {
      name: 'g34 - Active Mixed Commuters',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', {
        value : 34,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#cc4704'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      }, '-', '-', '-', '-', '-', '-' ]
    },
    {
      name: 'g35 - All Aboard',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', {
        value : 35,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#cc4704'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      }, '-', '-', '-', '-', '-', '-' ]
    },

    {
      name: 'g41 - Civic Duties',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', '-', {
        value : 41,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#6b2ed4'
          },
          emphasis: {
            barBorderColor: 'DeepSkyBlue'
          }
        }
      }, '-', '-', '-', '-', '-' ]
    },
    {
      name: 'g42 - Professional Support Services',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', '-', {
        value : 42,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#6b2ed4'
          },
          emphasis: {
            barBorderColor: 'DeepSkyBlue'
          }
        }
      }, '-', '-', '-', '-', '-' ]
    },
    {
      name: 'g43 - Young Clericals',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', '-', {
        value : 43,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#6b2ed4'
          },
          emphasis: {
            barBorderColor: 'DeepSkyBlue'
          }
        }
      }, '-', '-', '-', '-', '-' ]
    },

    {
      name: 'g51 - Routine Care and Leisure',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', '-', '-', {
        value : 51,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#d60003'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      }, '-', '-', '-', '-' ]
    },
    {
      name: 'g52 - Multicultural Workers in Welfare',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', '-', '-', {
        value : 52,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#d60003'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      }, '-', '-', '-', '-' ]
    },
    {
      name: 'g53 - Mixed Roles in Hospitality',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', '-', '-', {
        value : 53,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#d60003'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      }, '-', '-', '-', '-' ]
    },
    {
      name: 'g54 - Here to Help',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', '-', '-', {
        value : 54,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#d60003'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      }, '-', '-', '-', '-' ]
    },
    {
      name: 'g55 - Established in Mixed Service Economies',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', '-', '-', {
        value : 55,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#d60003'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      }, '-', '-', '-', '-' ]
    },

    {
      name: 'g61 - Early Career Educators',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', '-', '-', '-', {
        value : 61,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#23cfb8'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      }, '-', '-', '-' ]
    },
    {
      name: 'g62 - Helping Hands in Education',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', '-', '-', '-', {
        value : 62,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#23cfb8'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      }, '-', '-', '-' ]
    },
    {
      name: 'g63 - Supporting Health and Wellbeing',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', '-', '-', '-', {
        value : 63,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#23cfb8'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      }, '-', '-', '-' ]
    },
    {
      name: 'g64 - Established Nurturers',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', '-', '-', '-', {
        value : 64,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#23cfb8'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      }, '-', '-', '-' ]
    },
    {
      name: 'g65 - Health and Wellbeing Professionals',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', '-', '-', '-', {
        value : 65,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#23cfb8'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      }, '-', '-', '-' ]
    },

    {
      name: 'g71 - Retail Relations',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', '-', '-', '-', '-', {
        value : 71,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#e1de00'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      }, '-', '-' ]
    },
    {
      name: 'g72 - Factory Settings',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', '-', '-', '-', '-', {
        value : 72,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#e1de00'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      }, '-', '-' ]
    },
    {
      name: 'g73 - Young Construction Crews',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', '-', '-', '-', '-', {
        value : 73,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#e1de00'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      }, '-', '-' ]
    },
    {
      name: 'g74 - Mixed Warehousing and Distribution',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', '-', '-', '-', '-', {
        value : 74,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#e1de00'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      }, '-', '-' ]
    },
    {
      name: 'g75 - Part-Time Traders, Movers and Makers',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', '-', '-', '-', '-', {
        value : 75,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#e1de00'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      }, '-', '-' ]
    },

    {
      name: 'g81 - Mixed Mid-Career Professionals',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', '-', '-', '-', '-', '-', {
        value : 81,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#de079a'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      }, '-' ]
    },
    {
      name: 'g82 - Managing the High Street',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', '-', '-', '-', '-', '-', {
        value : 82,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#de079a'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      }, '-' ]
    },
    {
      name: 'g83 - Manufacturing Execs',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', '-', '-', '-', '-', '-', {
        value : 83,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#de079a'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      }, '-' ]
    },
    {
      name: 'g84 - Early Career Professionals',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', '-', '-', '-', '-', '-', {
        value : 84,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#de079a'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      }, '-' ]
    },
    {
      name: 'g85 - Aspiring Flyers',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', '-', '-', '-', '-', '-',
        {
          value : 85,
          //tooltip:{},
          itemStyle: {
            normal: {
              color: '#de079a'
            },
            emphasis: {
              barBorderColor: 'DarkSlateBlue'
            }
          }
        }, '-' ]
    },

    {
      name: 'g91 - Early Career Innovators',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', '-', '-', '-', '-', '-', '-', {
        value : 91,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#1fcd5f'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      } ]
    },
    {
      name: 'g92 - Administering the City',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', '-', '-', '-', '-', '-', '-', {
        value : 92,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#1fcd5f'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      } ]
    },
    {
      name: 'g93 - Financial Execs',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', '-', '-', '-', '-', '-', '-', {
        value : 93,
        //tooltip:{},
        itemStyle: {
          normal: {
            color: '#1fcd5f'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      } ]
    },
    {
      name: 'g94 - Techs and Professionals in Welfare',
      type: 'bar',
      stack: 's1',
      data: [ '-', '-', '-', '-', '-', '-', '-', '-', {
        value : 94,
        //tooltip: {},
        itemStyle: {
          normal: {
            color: '#1fcd5f'
          },
          emphasis: {
            barBorderColor: 'DarkSlateBlue'
          }
        }
      } ]
    }
  ]
};

dataDiagram.setOption(option);

dataDiagram.on('click', function(params) {
  alert(params.value);
});

dataDiagram.on('mouseover', function(params) {
  console.log('mouseover: ' + params.value);
});





























