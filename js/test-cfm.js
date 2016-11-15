
var Spatial = {

  map: null,

  mapOptions: {
    center: [52.95, -2.8],
    zoom: 7,
    minZoom: 6,
    maxZoom: 18
  },

  vectorFlowsBaseUrl: 'http://maps.humanities.manchester.ac.uk:8090/geoserver/commute-flow/ows?',
  vectorFlowsParametersUrl: 'service=WFS&version=1.0.0&request=GetFeature&typeName=',
  vectorFlowsFilterParameterUrl: '&cql_filter=rc = 102003570 AND g BETWEEN 20 AND 25',
  vectorFlowsOutputFormatParameterUrl: '&outputFormat=application/json',

  commuteFlowFilteredLayerName: 'commute-flow:commute-flow-thin-filtered-epsg-4326',
  commuteFlowLayerName: 'commute-flow:commute-flow-thin-epsg-4326',
  msoaLayerName: 'commute-flow:msoa-qc-epsg-3857',

  mapLayers: {
    OpenStreetMap: {
      index: 0,
      type: 'baseLayer',
      name: 'OpenStreetMap',
      mapLayer: null,
      url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    },
    MSOAs: {index: 1, type: 'geoJSONLayer', name: 'MSOAs', mapLayer: null, geoJSON: null},
    MSOAsWithBaseMap: {index: 2, type: 'geoJSONLayer', name: 'MSOAs with OpenStreetMap', mapLayer: null, geoJSON: null},
    WmsFlows: {
      index: 3,
      type: 'wmsLayer',
      name: 'WMS Flows',
      mapLayer: null,
      url: 'http://maps.humanities.manchester.ac.uk:8090/geoserver/ows?'
    },
    HighlightedMSOA: {index: 4, type: 'geoJSONLayer', name: 'Highlighted MSOA', mapLayer: null, geoJSON: null},
    CommuteFlows: {index: 5, type: 'geoJSONLayer', name: 'Commute Flows', mapLayer: null, geoJSON: null},
    HighlightedFlow: {index: 6, type: 'geoJSONLayer', name: 'Highlighted Flow', mapLayer: null, geoJSON: null}
  },

  // TODO: Change max: 50
  commuteFlowsValues: {
    totalPersons: { min: 6, max: 50 /*1906*/, minWidth: 1, maxWidth: 10 }
  },

  dummyCommuteFlowJson: {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [52.95, -2.80], [53.00, -2.85]
          ]
        },
        properties: {
          prop0: 0
        }
      }
    ]
  },

  dummyStyle: function(feature) {
    return {
      stroke: true,
      // color: '#000000',
      // color: '#141414',
      //color: '#282828',
      weight: 10,
      opacity: 1,
      fill: true,
      fillColor: '#F00',
      fillOpacity: 1,
      //lineCap: 'round',  // butt | round | square | inherit
      //lineJoin: 'round'  // miter | round | bevel | inherit
    }
  },

  msoaStyle: {
    stroke: true,
    // color: '#000000',
    // color: '#141414',
    color: '#282828',
    weight: 0.5,
    opacity: 1,
    fill: true,
    // fillColor: '#343434',
    fillColor: '#515151',
    fillOpacity: 1,
    //lineCap: 'round',  // butt | round | square | inherit
    //lineJoin: 'round'  // miter | round | bevel | inherit
  },

  msoaWithBaseMapStyle: {
    stroke: true,
    // color: '#000000',
    // color: '#141414',
    color: '#4169E1',
    weight: 0.5,
    opacity: 1,
    fill: true,
    // fillColor: '#343434',
    //fillColor: '#515151',
    fillOpacity: 0.01,
    //lineCap: 'round',  // butt | round | square | inherit
    //lineJoin: 'round'  // miter | round | bevel | inherit
  },

  highlightedMSOAStyle: {
    stroke: true,
    color: '#000',
    dashArray: '',
    weight: 5,
    opacity: 1,
    fillOpacity: 0.4
    //lineCap: 'round',  // butt | round | square | inherit
    //lineJoin: 'round'  // miter | round | bevel | inherit
  },

  highlightedMSOAWithBaseMapStyle: {
    stroke: true,
    color: '#4169E1',
    dashArray: '',
    weight: 5,
    opacity: 1,
    //fill: true,
    // fillColor: '#343434',
    //fillColor: '#515151',
    fillOpacity: 0.4,
    //lineCap: 'round',  // butt | round | square | inherit
    //lineJoin: 'round'  // miter | round | bevel | inherit
  },

  /**
   * Gets a commute flow layer name.
   *
   * @param  {number} group - The group code of the flows.
   * @param  {string} epsgCode - The EPSG code of the layer.
   */
  getCommuteFlowLayerName(group, epsgCode) {
    return 'commute-flow:commute-flow-thin-' + group + '-epsg-' + epsgCode;
  },

  /**
   * Initializes the map.
   */
  initializeMap: function() {

    Spatial.map = L.map('map', {
      center: Spatial.mapOptions.center,
      zoom: Spatial.mapOptions.zoom,
      minZoom: Spatial.mapOptions.minZoom,
      maxZoom: Spatial.mapOptions.maxZoom
    });

    Spatial.createOpenStreetMapBaseMapLayer();
    Spatial.createMSOAsLayer();
    Spatial.createMSOAsWithBaseMapLayer();

    Spatial.createCommuteFlowsMapLayer();

  },

  /**
   * Initializes the map.
   */
  initializeMap2: function() {

    Spatial.map = L.map('map', {
      center: Spatial.mapOptions.center,
      zoom: Spatial.mapOptions.zoom,
      minZoom: Spatial.mapOptions.minZoom,
      maxZoom: Spatial.mapOptions.maxZoom
    });

    Spatial.createOpenStreetMapBaseMapLayer();
    Spatial.createMSOAsLayer2();

    Spatial.createCommuteFlowsMapLayer();

  },

  /**
   * Initializes the map.
   */
  initializeMap3: function() {

    Spatial.map = L.map('map', {
      center: Spatial.mapOptions.center,
      zoom: Spatial.mapOptions.zoom,
      minZoom: Spatial.mapOptions.minZoom,
      maxZoom: Spatial.mapOptions.maxZoom
    });

    Spatial.createOpenStreetMapBaseMapLayer();
    Spatial.createMSOAsLayer3();

    Spatial.createCommuteFlowsMapLayer();

  },


  /**
   * Creates the Leaflet OpenStreetMap layer.
   */
  createOpenStreetMapBaseMapLayer: function() {
    Spatial.mapLayers.OpenStreetMap.mapLayer = L.tileLayer.grayscale('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org/">OpenStreetMap</a> contributors'
    });
  },

  /**
   * Creates the MSOAs layer.
   */
  createMSOAsLayer: function() {
    Spatial.mapLayers.MSOAs.geoJSON = AppData.msoaQcGeoJson;

    Spatial.mapLayers.MSOAs.mapLayer = L.geoJson(Spatial.mapLayers.MSOAs.geoJSON, {
      style: Spatial.msoaStyle,
      onEachFeature: function(feature, layer) {
        layer.on({
          mouseover: function() {
            layer.setStyle(Spatial.highlightedMSOAStyle);

            if (!L.Browser.ie && !L.Browser.opera) {
              layer.bringToFront();
            }

            Spatial.mapLayers.CommuteFlows.mapLayer.bringToFront();

            currentMsoaViewModel.updateView(feature.properties.CODE, feature.properties.MSOA11NM, feature.properties.MSOA11NMW);
          },
          mouseout: function() {
            Spatial.mapLayers.MSOAs.mapLayer.resetStyle(layer);
            Spatial.mapLayers.CommuteFlows.mapLayer.bringToFront();

            currentMsoaViewModel.updateView(null, '', '');
          },
          click: function() {
            var rc = feature.properties.CODE;
            var groups = '';

            if (checkedGroupsViewModel.checkedGroups.length != 9 && checkedGroupsViewModel.checkedGroups.length != 0) {
              // Not all groups have been selected.
              var groupsArray = [];

              for (i = 0; i < checkedGroupsViewModel.checkedGroups.length; i++) {
                var gn = checkedGroupsViewModel.checkedGroups[i];
                groupsArray.push(gn * 10 + 1);
                groupsArray.push(gn * 10 + 2);
                groupsArray.push(gn * 10 + 3);
                groupsArray.push(gn * 10 + 4);
                groupsArray.push(gn * 10 + 5);
              }

              var inSequence = '';

              for (i = 0; i < groupsArray.length - 1; i++) {
                var gs = groupsArray[i];
                inSequence += gs + ', ';
              }

              var gs = groupsArray[groupsArray.length - 1];

              inSequence += gs;

              groups = ' AND g IN (' + inSequence + ')';
            }

            Spatial.vectorFlowsFilterParameterUrl = '&cql_filter=rc = ' + rc + groups;


            API.getCommuteFlows(Spatial.commuteFlowFilteredLayerName);
            //getFlowsExt(Spatial.commuteFlowFilteredLayerName);


            //F.execute(API.getFlows(Spatial.commuteFlowFilteredLayerName)).then(Spatial.renderCommuteFlowsMapLayer(F.result));





            //Spatial.vectorFlowsFilterParameterUrl = '&cql_filter=rc = 102003570 AND g BETWEEN 20 AND 25';

            //vectorFilterUrl = "&cql_filter=rc=" + rc;
            //getFlows(0);
          },
          dblclick: function() {
            Spatial.map.fitBounds(layer.getBounds());
          }
        });
      }
      // onEachFeature: function(feature, layer) {
      //   var popupDiv = '<div><table><tbody>' +
      //                  '<tr><th>Primary Key: </th><td>' + feature.properties.MSOA11NM + '</td></tr>' +
      //                  '<tr><th>Residential Code: </th><td>' + feature.properties.MSOA11NMW + '</td></tr>' +
      //                  '<tr><th>Workplace Code: </th><td>' + feature.properties.CODE + '</td></tr>' +
      //                  '</tbody></table></div>';

      //   layer.bindPopup(popupDiv);
      // }
      // filter: function(feature, layer) {
      //   return feature.properties.rc == 102003570;
      // }
    });

    Spatial.mapLayers.MSOAs.mapLayer.addTo(Spatial.map);
    Spatial.mapLayers.MSOAs.mapLayer.bringToFront();
  },

  createMSOAsLayer2: function() {
    Spatial.mapLayers.MSOAs.geoJSON = AppData.msoaQcGeoJson;

    Spatial.mapLayers.MSOAs.mapLayer = L.geoJson(Spatial.mapLayers.MSOAs.geoJSON, {
      style: Spatial.msoaStyle,
      onEachFeature: function(feature, layer) {
        layer.on({
          mouseover: function() {
            if (baseMapViewModel.baseMapValue == ':OpenStreetMap') {
              layer.setStyle(Spatial.highlightedMSOAWithBaseMapStyle);
            }
            else {
              layer.setStyle(Spatial.highlightedMSOAStyle);
            }

            if (!L.Browser.ie && !L.Browser.opera) {
              layer.bringToFront();
            }

            Spatial.mapLayers.CommuteFlows.mapLayer.bringToFront();

            currentMsoaViewModel.updateView(feature.properties.CODE, feature.properties.MSOA11NM, feature.properties.MSOA11NMW);
          },
          mouseout: function() {

            if (baseMapViewModel.baseMapValue == ':none') {
              layer._options.style.stroke = Spatial.msoaStyle.stroke;
              layer._options.style.color = Spatial.msoaStyle.color;
              layer._options.style.weight = Spatial.msoaStyle.weight;
              layer._options.style.opacity = Spatial.msoaStyle.opacity;
              layer._options.style.fill = Spatial.msoaStyle.fill;
              layer._options.style.fillColor = Spatial.msoaStyle.fillColor;
              layer._options.style.fillOpacity = Spatial.msoaStyle.fillOpacity;
            }
            else {
              layer._options.style.stroke = Spatial.msoaWithBaseMapStyle.stroke;
              layer._options.style.color = Spatial.msoaWithBaseMapStyle.color;
              layer._options.style.weight = Spatial.msoaWithBaseMapStyle.weight;
              layer._options.style.opacity = Spatial.msoaWithBaseMapStyle.opacity;
              layer._options.style.fill = Spatial.msoaWithBaseMapStyle.fill;
              layer._options.style.fillColor = null;
              layer._options.style.fillOpacity = Spatial.msoaWithBaseMapStyle.fillOpacity;
            }

            Spatial.mapLayers.MSOAs.mapLayer.resetStyle(layer);
            Spatial.mapLayers.CommuteFlows.mapLayer.bringToFront();

            currentMsoaViewModel.updateView(null, '', '');
          },
          click: function() {
            var rc = feature.properties.CODE;
            var groups = '';

            if (checkedGroupsViewModel.checkedGroups.length != 9 && checkedGroupsViewModel.checkedGroups.length != 0) {
              // Not all groups have been selected.
              var groupsArray = [];

              for (i = 0; i < checkedGroupsViewModel.checkedGroups.length; i++) {
                var gn = checkedGroupsViewModel.checkedGroups[i];
                groupsArray.push(gn * 10 + 1);
                groupsArray.push(gn * 10 + 2);
                groupsArray.push(gn * 10 + 3);
                groupsArray.push(gn * 10 + 4);
                groupsArray.push(gn * 10 + 5);
              }

              var inSequence = '';

              for (i = 0; i < groupsArray.length - 1; i++) {
                var gs = groupsArray[i];
                inSequence += gs + ', ';
              }

              var gs = groupsArray[groupsArray.length - 1];

              inSequence += gs;

              groups = ' AND g IN (' + inSequence + ')';
            }

            Spatial.vectorFlowsFilterParameterUrl = '&cql_filter=rc = ' + rc + groups;


            API.getCommuteFlows(Spatial.commuteFlowFilteredLayerName);
            //getFlowsExt(Spatial.commuteFlowFilteredLayerName);


            //F.execute(API.getFlows(Spatial.commuteFlowFilteredLayerName)).then(Spatial.renderCommuteFlowsMapLayer(F.result));





            //Spatial.vectorFlowsFilterParameterUrl = '&cql_filter=rc = 102003570 AND g BETWEEN 20 AND 25';

            //vectorFilterUrl = "&cql_filter=rc=" + rc;
            //getFlows(0);
          },
          dblclick: function() {
            Spatial.map.fitBounds(layer.getBounds());
          }
        });
      }
      // onEachFeature: function(feature, layer) {
      //   var popupDiv = '<div><table><tbody>' +
      //                  '<tr><th>Primary Key: </th><td>' + feature.properties.MSOA11NM + '</td></tr>' +
      //                  '<tr><th>Residential Code: </th><td>' + feature.properties.MSOA11NMW + '</td></tr>' +
      //                  '<tr><th>Workplace Code: </th><td>' + feature.properties.CODE + '</td></tr>' +
      //                  '</tbody></table></div>';

      //   layer.bindPopup(popupDiv);
      // }
      // filter: function(feature, layer) {
      //   return feature.properties.rc == 102003570;
      // }
    });

    Spatial.mapLayers.MSOAs.mapLayer.addTo(Spatial.map);
    Spatial.mapLayers.MSOAs.mapLayer.bringToFront();
  },

  createMSOAsLayer3: function() {
    Spatial.mapLayers.MSOAs.geoJSON = AppData.msoaQcGeoJson;

    Spatial.mapLayers.MSOAs.mapLayer = L.geoJson(Spatial.mapLayers.MSOAs.geoJSON, {
      style: Spatial.msoaStyle,
      onEachFeature: function(feature, layer) {
        layer.on({
          mouseover: function() {
            if (baseMapViewModel.baseMapValue == ':OpenStreetMap') {
              layer.setStyle(Spatial.highlightedMSOAWithBaseMapStyle);
            }
            else {
              layer.setStyle(Spatial.highlightedMSOAStyle);
            }

            if (!L.Browser.ie && !L.Browser.opera) {
              layer.bringToFront();
            }

            Spatial.mapLayers.CommuteFlows.mapLayer.bringToFront();

            currentMsoaViewModel.updateView(feature.properties.CODE, feature.properties.MSOA11NM, feature.properties.MSOA11NMW);
          },
          mouseout: function() {

            if (baseMapViewModel.baseMapValue == ':none') {
              layer._options.style = Spatial.msoaStyle;
            }
            else {
              layer._options.style = Spatial.msoaWithBaseMapStyle;
            }

            Spatial.mapLayers.MSOAs.mapLayer.resetStyle(layer);
            Spatial.mapLayers.CommuteFlows.mapLayer.bringToFront();

            currentMsoaViewModel.updateView(null, '', '');
          },
          click: function() {
            var rc = feature.properties.CODE;
            var groups = '';

            if (checkedGroupsViewModel.checkedGroups.length != 9 && checkedGroupsViewModel.checkedGroups.length != 0) {
              // Not all groups have been selected.
              var groupsArray = [];

              for (i = 0; i < checkedGroupsViewModel.checkedGroups.length; i++) {
                var gn = checkedGroupsViewModel.checkedGroups[i];
                groupsArray.push(gn * 10 + 1);
                groupsArray.push(gn * 10 + 2);
                groupsArray.push(gn * 10 + 3);
                groupsArray.push(gn * 10 + 4);
                groupsArray.push(gn * 10 + 5);
              }

              var inSequence = '';

              for (i = 0; i < groupsArray.length - 1; i++) {
                var gs = groupsArray[i];
                inSequence += gs + ', ';
              }

              var gs = groupsArray[groupsArray.length - 1];

              inSequence += gs;

              groups = ' AND g IN (' + inSequence + ')';
            }

            Spatial.vectorFlowsFilterParameterUrl = '&cql_filter=rc = ' + rc + groups;


            API.getCommuteFlows(Spatial.commuteFlowFilteredLayerName);
            //getFlowsExt(Spatial.commuteFlowFilteredLayerName);


            //F.execute(API.getFlows(Spatial.commuteFlowFilteredLayerName)).then(Spatial.renderCommuteFlowsMapLayer(F.result));





            //Spatial.vectorFlowsFilterParameterUrl = '&cql_filter=rc = 102003570 AND g BETWEEN 20 AND 25';

            //vectorFilterUrl = "&cql_filter=rc=" + rc;
            //getFlows(0);
          },
          dblclick: function() {
            Spatial.map.fitBounds(layer.getBounds());
          }
        });
      }
      // onEachFeature: function(feature, layer) {
      //   var popupDiv = '<div><table><tbody>' +
      //                  '<tr><th>Primary Key: </th><td>' + feature.properties.MSOA11NM + '</td></tr>' +
      //                  '<tr><th>Residential Code: </th><td>' + feature.properties.MSOA11NMW + '</td></tr>' +
      //                  '<tr><th>Workplace Code: </th><td>' + feature.properties.CODE + '</td></tr>' +
      //                  '</tbody></table></div>';

      //   layer.bindPopup(popupDiv);
      // }
      // filter: function(feature, layer) {
      //   return feature.properties.rc == 102003570;
      // }
    });

    Spatial.mapLayers.MSOAs.mapLayer.addTo(Spatial.map);
    Spatial.mapLayers.MSOAs.mapLayer.bringToFront();
  },

  /**
   * Creates the MSOAs layer that will is used when the OpenStreetMap is visible.
   */
  createMSOAsWithBaseMapLayer: function() {
    Spatial.mapLayers.MSOAsWithBaseMap.geoJSON = AppData.msoaQcGeoJson;

    // TODO: Should this be used ?? L.geoJson(Spatial.mapLayers.MSOAs.geoJSON instead of: Spatial.mapLayers.MSOAsWithBaseMap.GeoJson
    Spatial.mapLayers.MSOAsWithBaseMap.mapLayer = L.geoJson(Spatial.mapLayers.MSOAsWithBaseMap.geoJSON, {
      style: Spatial.msoaWithBaseMapStyle,
      onEachFeature: function(feature, layer) {
        layer.on({
          mouseover: function() {
            layer.setStyle(Spatial.highlightedMSOAWithBaseMapStyle);

            if (!L.Browser.ie && !L.Browser.opera) {
              layer.bringToFront();
            }

            Spatial.mapLayers.CommuteFlows.mapLayer.bringToFront();

            currentMsoaViewModel.updateView(feature.properties.CODE, feature.properties.MSOA11NM, feature.properties.MSOA11NMW);
          },
          mouseout: function() {
            Spatial.mapLayers.MSOAsWithBaseMap.mapLayer.resetStyle(layer);
            Spatial.mapLayers.CommuteFlows.mapLayer.bringToFront();

            currentMsoaViewModel.updateView(null, '', '');
          },
          click: function() {
            var rc = feature.properties.CODE;
            var groups = '';

            if (checkedGroupsViewModel.checkedGroups.length != 9 && checkedGroupsViewModel.checkedGroups.length != 0) {
              // Not all groups have been selected.
              var groupsArray = [];

              for (i = 0; i < checkedGroupsViewModel.checkedGroups.length; i++) {
                var gn = checkedGroupsViewModel.checkedGroups[i];
                groupsArray.push(gn * 10 + 1);
                groupsArray.push(gn * 10 + 2);
                groupsArray.push(gn * 10 + 3);
                groupsArray.push(gn * 10 + 4);
                groupsArray.push(gn * 10 + 5);
              }

              var inSequence = '';

              for (i = 0; i < groupsArray.length - 1; i++) {
                var gs = groupsArray[i];
                inSequence += gs + ', ';
              }

              var gs = groupsArray[groupsArray.length - 1];

              inSequence += gs;

              groups = ' AND g IN (' + inSequence + ')';
            }

            Spatial.vectorFlowsFilterParameterUrl = '&cql_filter=rc = ' + rc + groups;


            API.getCommuteFlows(Spatial.commuteFlowFilteredLayerName);
            //getFlowsExt(Spatial.commuteFlowFilteredLayerName);


            //F.execute(API.getFlows(Spatial.commuteFlowFilteredLayerName)).then(Spatial.renderCommuteFlowsMapLayer(F.result));





            //Spatial.vectorFlowsFilterParameterUrl = '&cql_filter=rc = 102003570 AND g BETWEEN 20 AND 25';

            //vectorFilterUrl = "&cql_filter=rc=" + rc;
            //getFlows(0);
          },
          //  click: function() {
          //    var rc = feature.properties.CODE;
          //    vectorFilterUrl = "&cql_filter=rc=" + rc;
          //    getFlows(0);
          //  },
          dblclick: function() {
            Spatial.map.fitBounds(layer.getBounds());
          }
        });
      }
      // onEachFeature: function(feature, layer) {
      //   var popupDiv = '<div><table><tbody>' +
      //                  '<tr><th>Primary Key: </th><td>' + feature.properties.MSOA11NM + '</td></tr>' +
      //                  '<tr><th>Residential Code: </th><td>' + feature.properties.MSOA11NMW + '</td></tr>' +
      //                  '<tr><th>Workplace Code: </th><td>' + feature.properties.CODE + '</td></tr>' +
      //                  '</tbody></table></div>';

      //   layer.bindPopup(popupDiv);
      // }
      // filter: function(feature, layer) {
      //   return feature.properties.rc == 102003570;
      // }
    });
  },

  createCommuteFlowsMapLayer: function() {
    Spatial.mapLayers.CommuteFlows.geoJSON = Spatial.dummyCommuteFlowJson;

    Spatial.mapLayers.CommuteFlows.mapLayer = L.geoJson(Spatial.mapLayers.CommuteFlows.geoJSON, {
      style: function(feature) {
        return {
          stroke: true,
          color: '#e31a1c',
          weight: 5,
          opacity: 1
        }
      },
      onEachFeature: function(feature, layer) {
        var popupDiv = '<div><table><tbody>' +
          '<tr><th>Primary Key: </th><td>' + feature.properties.pk + '</td></tr>' +
          '<tr><th>Residential Code: </th><td>' + feature.properties.rc + '</td></tr>' +
          '<tr><th>Workplace Code: </th><td>' + feature.properties.wc + '</td></tr>' +
          '<tr><th>Total Persons: </th><td>' + feature.properties.tp + '</td></tr>' +
          '<tr><th>Group: </th><td>' + feature.properties.g + '</td></tr>' +
          '<tr><th>QCL Distance: </th><td>' + feature.properties.qd + '</td></tr>' +
          '<tr><th>MSOA Distance (km): </th><td>' + feature.properties.md + '</td></tr>' +
          '</tbody></table></div>';

        layer.bindPopup(popupDiv);
      } /*,
       filter: function(feature, layer) {
       return feature.properties.rc == 102003570;
       }*/
    });

    Spatial.mapLayers.CommuteFlows.mapLayer.addTo(Spatial.map);
    Spatial.mapLayers.CommuteFlows.mapLayer.bringToFront();
  },

  renderCommuteFlowsMapLayer: function(geoJson) {

    Spatial.mapLayers.CommuteFlows.geoJSON = geoJson;

    Spatial.mapLayers.CommuteFlows.geoJSON.features.sort(function(a, b) {
      if (a.properties.tp > b.properties.tp) {
        return -1;
      }
      if (a.properties.tp < b.properties.tp) {
        return 1;
      }
      return 0;
    });

    Spatial.mapLayers.CommuteFlows.mapLayer.clearLayers();

    if (Spatial.mapLayers.CommuteFlows.geoJSON.features.length != 0) {
      Spatial.mapLayers.CommuteFlows.mapLayer.addData(Spatial.mapLayers.CommuteFlows.geoJSON);

      Spatial.mapLayers.CommuteFlows.mapLayer.setStyle(function(feature) {

        var flowStyle = {
          stroke: true,
          opacity: 0.6
        };

        switch(feature.properties.g) {
          case 11:
          case 12:
          case 13:
          case 14:
          case 15:
            flowStyle.color = '#1705d6';
            break;
          case 21:
          case 22:
          case 23:
            flowStyle.color = '#11ea44';
            break;
          case 31:
          case 32:
          case 33:
          case 34:
          case 35:
            flowStyle.color = '#cc4704';
            break;
          case 41:
          case 42:
          case 43:
            flowStyle.color = '#6b2ed4';
            break;
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
            flowStyle.color = '#d60003';
            break;
          case 61:
          case 62:
          case 63:
          case 64:
          case 65:
            flowStyle.color = '#23cfb8';
            break;
          case 71:
          case 72:
          case 73:
          case 74:
          case 75:
            flowStyle.color = '#e1de00';
            break;
          case 81:
          case 82:
          case 83:
          case 84:
          case 85:
            flowStyle.color = '#de079a';
            break;
          case 91:
          case 92:
          case 93:
          case 94:
            flowStyle.color = '#de079a';
            break;
        }

        var w = Spatial.commuteFlowsValues.totalPersons.minWidth
          +
          (feature.properties.tp - Spatial.commuteFlowsValues.totalPersons.min)
          *
          (Spatial.commuteFlowsValues.totalPersons.maxWidth - Spatial.commuteFlowsValues.totalPersons.minWidth)
          /
          (Spatial.commuteFlowsValues.totalPersons.max - Spatial.commuteFlowsValues.totalPersons.min);

        flowStyle.weight = w;

        return flowStyle;

      });

      Spatial.mapLayers.CommuteFlows.mapLayer.eachLayer(function(feature, layer) {
        var popupDiv = '<div><table><tbody>' +
          '<tr><th>Primary Key: </th><td>' + feature.properties.pk + '</td></tr>' +
          '<tr><th>Residential Code: </th><td>' + feature.properties.rc + '</td></tr>' +
          '<tr><th>Workplace Code: </th><td>' + feature.properties.wc + '</td></tr>' +
          '<tr><th>Total Persons: </th><td>' + feature.properties.tp + '</td></tr>' +
          '<tr><th>Group: </th><td>' + feature.properties.g + '</td></tr>' +
          '<tr><th>QCL Distance: </th><td>' + feature.properties.qd + '</td></tr>' +
          '<tr><th>MSOA Distance (km): </th><td>' + feature.properties.md + '</td></tr>' +
          '</tbody></table></div>';

        layer.bindPopup(popupDiv);
      });
    }

  },

  /**
   * Toggles the OpenStreetMap BaseMap layer on/off.
   */
  toggleOpenStreetMapBaseMapLayer(baseMapValue) {

    if (baseMapValue == ':OpenStreetMap') {
      Spatial.map.removeLayer(Spatial.mapLayers.MSOAs.mapLayer);
      Spatial.mapLayers.MSOAsWithBaseMap.mapLayer.addTo(Spatial.map);
      //Spatial.mapLayers.MSOAsWithBaseMap.mapLayer.bringToBack();

      Spatial.mapLayers.OpenStreetMap.mapLayer.addTo(Spatial.map);
      Spatial.mapLayers.OpenStreetMap.mapLayer.bringToBack();
    }
    else {
      Spatial.map.removeLayer(Spatial.mapLayers.MSOAsWithBaseMap.mapLayer);
      Spatial.mapLayers.MSOAs.mapLayer.addTo(Spatial.map);
      //Spatial.mapLayers.MSOAs.mapLayer.bringToBack();

      Spatial.map.removeLayer(Spatial.mapLayers.OpenStreetMap.mapLayer);
    }

  },

  /**
   * Toggles the OpenStreetMap BaseMap layer on/off.
   */
  toggleOpenStreetMapBaseMapLayer2(baseMapValue) {

    if (baseMapValue == ':OpenStreetMap') {
      //Spatial.mapLayers.MSOAs.mapLayer.options.style.stroke = Spatial.msoaWithBaseMapStyle.stroke;
      //Spatial.mapLayers.MSOAs.mapLayer.options.style.color = Spatial.msoaWithBaseMapStyle.color;
      //Spatial.mapLayers.MSOAs.mapLayer.options.style.weight = Spatial.msoaWithBaseMapStyle.weight;
      //Spatial.mapLayers.MSOAs.mapLayer.options.style.opacity = Spatial.msoaWithBaseMapStyle.opacity;
      //Spatial.mapLayers.MSOAs.mapLayer.options.style.fill = Spatial.msoaWithBaseMapStyle.fill;
      //Spatial.mapLayers.MSOAs.mapLayer.options.style.fillColor = null;
      //Spatial.mapLayers.MSOAs.mapLayer.options.style.fillOpacity = Spatial.msoaWithBaseMapStyle.fillOpacity;

      Spatial.mapLayers.MSOAs.mapLayer.setStyle(Spatial.msoaWithBaseMapStyle);
      Spatial.mapLayers.OpenStreetMap.mapLayer.addTo(Spatial.map);
      Spatial.mapLayers.OpenStreetMap.mapLayer.bringToBack();
    }
    else {
      Spatial.mapLayers.MSOAs.mapLayer.eachLayer(function(layer) {
        layer._options.style.stroke = Spatial.msoaStyle.stroke;
        layer._options.style.color = Spatial.msoaStyle.color;
        layer._options.style.weight = Spatial.msoaStyle.weight;
        layer._options.style.opacity = Spatial.msoaStyle.opacity;
        layer._options.style.fill = Spatial.msoaStyle.fill;
        layer._options.style.fillColor = Spatial.msoaStyle.fillColor;
        layer._options.style.fillOpacity = Spatial.msoaStyle.fillOpacity;
        Spatial.mapLayers.MSOAs.mapLayer.resetStyle(layer);
      });

      //Spatial.mapLayers.MSOAs.mapLayer.options.style.stroke = Spatial.msoaStyle.stroke;
      //Spatial.mapLayers.MSOAs.mapLayer.options.style.color = Spatial.msoaStyle.color;
      //Spatial.mapLayers.MSOAs.mapLayer.options.style.weight = Spatial.msoaStyle.weight;
      //Spatial.mapLayers.MSOAs.mapLayer.options.style.opacity = Spatial.msoaStyle.opacity;
      //Spatial.mapLayers.MSOAs.mapLayer.options.style.fill = Spatial.msoaStyle.fill;
      //Spatial.mapLayers.MSOAs.mapLayer.options.style.fillColor = Spatial.msoaStyle.fillColor;
      //Spatial.mapLayers.MSOAs.mapLayer.options.style.fillOpacity = Spatial.msoaStyle.fillOpacity;
      //
      //Spatial.mapLayers.MSOAs.mapLayer.setStyle(Spatial.msoaStyle);
      //Spatial.mapLayers.MSOAs.mapLayer.resetStyle(Spatial.mapLayers.MSOAs.mapLayer);
      //Spatial.mapLayers.MSOAs.mapLayer.resetStyle();
      Spatial.map.removeLayer(Spatial.mapLayers.OpenStreetMap.mapLayer);
    }

  },

  /**
   * Toggles the OpenStreetMap BaseMap layer on/off.
   */
  toggleOpenStreetMapBaseMapLayer3(baseMapValue) {

    if (baseMapValue == ':OpenStreetMap') {
      Spatial.mapLayers.OpenStreetMap.mapLayer.addTo(Spatial.map);
      Spatial.mapLayers.OpenStreetMap.mapLayer.bringToBack();

      Spatial.mapLayers.MSOAs.mapLayer.setStyle(Spatial.msoaWithBaseMapStyle);
    }
    else {
      Spatial.map.removeLayer(Spatial.mapLayers.OpenStreetMap.mapLayer);

      Spatial.mapLayers.MSOAs.mapLayer.setStyle(Spatial.msoaStyle);
    }

  }

};

var API = {

  /**
   * Gets the commute flows from the remote server.
   *
   * @param lyrName - The name of the layer.
   */
  getCommuteFlows: function(lyrName) {

    var url = Spatial.vectorFlowsBaseUrl +
      Spatial.vectorFlowsParametersUrl +
      lyrName +
      Spatial.vectorFlowsFilterParameterUrl +
      Spatial.vectorFlowsOutputFormatParameterUrl;

    $.ajax({
      url: url,
      type: 'GET',
      crossDomain: true,
      dataType: 'json',
      success: function(result) {
        Spatial.renderCommuteFlowsMapLayer(result);
      },
      error: function(xhr, status, error) {
        alert(
          'An error has occured while getting commute flows' + '\r\n\r\n' +
          'Status: ' + status + '\r\n' +
          'Message: ' + error.message + '\r\n\r\n'
        );
      }
    });

  }

};



var baseMapViewModel = new Vue({
  el: '#toggleBaseMapCheckBox',
  data: {
    baseMapLayerName: 'OpenStreetMap Basemap',
    baseMapValue: ':none'
  },
  methods: {
    toggleBaseMap: function() {
      if (this.baseMapValue == ':none') {
        this.baseMapValue = ':OpenStreetMap';
      }
      else {
        this.baseMapValue = ':none';
      }

      //Spatial.toggleOpenStreetMapBaseMapLayer(this.baseMapValue);
      //Spatial.toggleOpenStreetMapBaseMapLayer2(this.baseMapValue);
      Spatial.toggleOpenStreetMapBaseMapLayer3(this.baseMapValue);
    }
  }
})

var checkedGroupsViewModel = new Vue({
  el: '#checkedGroups',
  data: {
    checkedGroups: []
  },
  methods: {
    selectAllGroups: function() {
      this.checkedGroups = [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
    }
  }
})

var currentMsoaViewModel = new Vue({
  el: '#currentMsoaCallout',
  data: {
    currentMsoaCode: 0,
    currentMsoa11Nm: '',
    currentMsoa11NmW: ''
  },
  methods: {
    updateView: function(code, nm, nmw) {
      this.currentMsoaCode = code;
      this.currentMsoa11Nm = nm;
      this.currentMsoa11NmW = nmw;
    }
  }
})




// ================================================================================

//Spatial.initializeMap();
//Spatial.initializeMap2();
Spatial.initializeMap3();

// ================================================================================






