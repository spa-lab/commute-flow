
// http://maps.humanities.manchester.ac.uk:8090/geoserver/commute-flow/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=commute-flow:commute-flow-thin-epsg-4326&cql_filter=rc = 102003570&outputFormat=application/json
//
// mapLayer
//   _layers
//     26
//       defaultOptions
//       feature
//         properties
//           C
//       options
//       _leaflet_id = 26


/**
 * The Spatial object provides properties and methods related to spatial operations.
 *
 * @type {} /// TODO: Make a new one here.
 */
var Spatial = {

  /**
   * The map of the application.
   */
  map: null,

  /**
   * The options used to create the map.
   */
  mapOptions: {
    center: [52.95, -2.8],
    zoom: 7,
    minZoom: 6,
    maxZoom: 18
  },

  /**
   * The ranges of codes used to denote MSOAs.
   */
  msoaCodeRanges: {
    England: { min: 100000000, max: 199999999 },
    Wales: { min: 200000000, max: 299999999 }
  },

  /**
   * The parts of urls needed in order to query the remote geospatial server so as to get commute flows in vector format.
   */
  flowVectorsUrlParts: {
    baseUrl: 'http://maps.humanities.manchester.ac.uk:8090/geoserver/commute-flow/ows?',
    parametersUrl: 'service=WFS&version=1.0.0&request=GetFeature&typeName=',
    filterParameterUrl: '&cql_filter=rc',
    outputFormatParameterUrl: '&outputFormat=application/json'
  },

  /**
   * The names of queryable layers in the remote geospatial server.
   */
  geoServerLayerNames: {
    commuteFlowFilteredLayerName: 'commute-flow:commute-flow-thin-filtered-epsg-4326',
    commuteFlowLayerName: 'commute-flow:commute-flow-thin-epsg-4326',
    commuteFlowPointsLayerName: 'commute-flow-thin-points-epsg-4326',
    msoaLayerName: 'commute-flow:msoa-qc-epsg-3857'
  },

  leafletProviderBaseLayers: {
    OpenStreetMap: {
      Mapnik: 'OpenStreetMap.Mapnik',
      BlackAndWhite: 'OpenStreetMap.BlackAndWhite',
      DE: 'OpenStreetMap.DE',
      France: 'OpenStreetMap.France',
      HOT: 'OpenStreetMap.HOT'
    },
    OpenTopoMap: 'OpenTopoMap',
    Thunderforest: {
      OpenCycleMap: 'Thunderforest.OpenCycleMap',
      Transport: 'Thunderforest.Transport',
      TransportDark: 'Thunderforest.TransportDark',
      SpinalMap: 'Thunderforest.SpinalMap',
      Landscape: 'Thunderforest.Landscape',
      Outdoors: 'Thunderforest.Outdoors',
      Pioneer: 'Thunderforest.Pioneer',
    },
    OpenMapSurfer: {
      Roads: 'OpenMapSurfer.Roads',
      Grayscale: 'OpenMapSurfer.Grayscale',
      AdminBounds: 'OpenMapSurfer.AdminBounds'
    },
    Hydda: {
      Full: 'Hydda.Full',
      Base: 'Hydda.Base',
      RoadsAndLabels: 'RoadsAndLabels'
    },
    MapBox: 'MapBox',
    Stamen: {
      Toner: 'Stamen.Toner',
      TonerBackground: 'Stamen.TonerBackground',
      TonerLite: 'Stamen.TonerLite',
      Watercolor: 'Stamen.Watercolor',
      Terrain: 'Stamen.Terrain',
      TerrainBackground: 'Stamen.TerrainBackground',
      TopOSMRelief: 'Stamen.TopOSMRelief',
      TonerHybrid: 'Stamen.TonerHybrid',
      TonerLines: 'Stamen.TonerLines',
      TonerLabels: 'Stamen.TonerLabels',
      TopOSMFeatures: 'Stamen.TopOSMFeatures'
    },
    Esri: {
      WorldStreetMap: 'Esri.WorldStreetMap',
      DeLome: 'Esri.DeLome',
      WorldTopoMap: 'Esri.WorldTopoMap',
      WorldImagery: 'Esri.WorldImagery',
      WorldTerrain: 'Esri.Terrain',
      WorldShadedRelief: 'Esri.WorldShadedRelief',
      WorldPhysical: 'Esri.WorldPhysical',
      OceanBaseMap: 'Esri.OceanBaseMap',
      NatGeoWorldMap: 'Esri.NatGeoWorldMap',
      WorldGrayCanvas: 'Esri.WorldGrayCanvas'
    },
    HERE: {
      normalDay: 'HERE.normalDay',
      basicMap: 'HERE.basicMap',
      hybridDay: 'HERE.hybridDay'
    },
    MibMap: 'MibMap',
    CartoDB: {
      Positron: 'CartoDB.Positron',
      PositronNoLabels: 'CartoDB.PositronNoLabels',
      PositronOnlyLabels: 'CartoDB.PositronOnlyLabels',
      DarkMatter: 'CartoDB.DarkMatter',
      DarkMatterNoLabels: 'CartoDB.DarkMatterNoLabels',
      DarkMatterOnlyLabels: 'CartoDB.DarkMatterOnlyLabels'
    },
    HikeBike: {
      HikeBike: 'HikeBike.HikeBike',
      HillShading: 'HikeBike.HillShading'
    },
    BasemapAT: {
      basemap: 'BasemapAT.basemap',
      grau: 'BasemapAT.grau',
      overlay: 'BasemapAT.overlay',
      highdpi: 'BasemapAT.highdpi',
      orthophoto: 'BasemapAT.orthophoto'
    },
    NASAGIBS: {
      ModisTerraTrueColorCR: 'NASAGIBS.ModisTerraTrueColorCR',
      ModisTerraBands367CR: 'NASAGIBS.ModisTerraBands367CR',
      ViirsEarthAtNight2012: 'NASAGIBS.ViirsEarthAtNight2012',
      ModisTerraLSTDay: 'NASAGIBS.ModisTerraLSTDay',
      ModisTerraSnowCover: 'NASAGIBS.ModisTerraSnowCover',
      ModisTerraAOD: 'NASAGIBS.ModisTerraAOD',
      ModisTerraChlorophyll: 'NASAGIBS.ModisTerraChlorophyll'
    },
    NLS: 'NLS',
    OpenSeaMap: 'OpenSeaMap',
    OpenWeatherMap: {
      Clouds: 'OpenWeatherMap.Clouds',
      Pressure: 'OpenWeatherMap.Pressure',
      Wind: 'OpenWeatherMap.Wind'
    }
  },

  /**
   * The map layers used in the application.
   * TODO: Remove some of these layers.
   */
  mapLayers: {
    LeafletProvidersBaseMap: { index: 0, type: ':baseLayer', name: 'Base Map', mapLayer: null },
    MSOAs: {
      index: 1,
      type: ':geoJSONLayer',
      name: 'MSOAs',
      mapLayer: null,
      geoJSON: null,
      featureToLayerDictionary: {},
      commuteFlowsDictionary: {}
    },
    // MSOAsWithBaseMap: {
    //   index: 2,
    //   type: ':geoJSONLayer',
    //   name: 'MSOAs with OpenStreetMap',
    //   mapLayer: null,
    //   geoJSON: null,
    // },
    // WmsFlows: {
    //   index: 3,
    //   type: ':wmsLayer',
    //   name: 'WMS Flows',
    //   mapLayer: null,
    //   url: 'http://maps.humanities.manchester.ac.uk:8090/geoserver/ows?'
    // },
    HighlightedMSOA: { index: 4, type: ':geoJSONLayer', name: 'Highlighted MSOA', mapLayer: null, geoJSON: null },
    CommuteFlows: { index: 5, type: ':geoJSONLayer', name: 'Commute Flows', mapLayer: null, geoJSON: null},
    HighlightedFlow: { index: 6, type: ':geoJSONLayer', name: 'Highlighted Flow', mapLayer: null, geoJSON: null }
    // MSOAsChoropleth: {
    //   index: 7,
    //   type: ':choroplethDataLayer',
    //   name: 'MSOAs Choropleth',
    //   mapLayer: null,
    //   geoJSON: null,
    //   data: {
    //     "type": "FeatureCollection",
    //     "totalFeatures": 1,
    //     "features": [
    //       {
    //         "type": "Feature",
    //         "id": "commute-flow-thin-filtered-epsg-4326.0",
    //         "geometry": { "type": "MultiLineString", "coordinates": [] },
    //         "geometry_name": "the_geom",
    //         "properties": { "pk": 0, "rc": 0, "wc": 0, "tp": 0, "g": 0, "qd": 0, "md": 0 }
    //       }
    //     ],
    //     "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:EPSG::4326" } }
    //   }
    // },
    // MSOAsChoroplethWithBaseMap: {
    //   index: 8,
    //   type: ':choroplethDataLayer',
    //   name: 'MSOAs Choropleth with OpenStreetMap',
    //   mapLayer: null,
    //   geoJSON: null,
    //   data: null
    // }
  },

  /**
   * The properties used to render the commute flows.
   * TODO: Change max: 50
   */
  commuteFlowsRenderingProperties: {
    totalPersons: { min: 6, max: 50 /*1906*/, minWidth: 1, maxWidth: 10 }
  },

  /**
   * A FeatureCollection GeoJSON object used to initialize a GeoJSON layer.
   */
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

  /**
   * All the styles used in the application.
   */
  styles: {

    /**
     * The style used to render MSOAs.
     */
    msoaStyle: {
      stroke: true,
      color: '#282828',
      weight: 0.5,
      opacity: 1,
      fill: true,
      fillColor: '#515151',
      fillOpacity: 1
      //lineCap: 'round',  // butt | round | square | inherit
      //lineJoin: 'round'  // miter | round | bevel | inherit
    },

    /**
     * The style used to render MSOAs when the basemap layer is visible.
     */
    msoaWithBaseMapStyle: {
      stroke: true,
      color: '#4169E1',
      weight: 0.5,
      opacity: 1,
      fill: true,
      fillOpacity: 0.01
      //lineCap: 'round',  // butt | round | square | inherit
      //lineJoin: 'round'  // miter | round | bevel | inherit
    },

    /**
     * The style used to highlight the current MSOA.
     */
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

    /**
     * The style used to highlight the current MSOA when the basemap layer is visible.
     */
    highlightedMSOAWithBaseMapStyle: {
      stroke: true,
      color: '#4169E1',
      dashArray: '',
      weight: 5,
      opacity: 1,
      fillOpacity: 0.4
      //lineCap: 'round',  // butt | round | square | inherit
      //lineJoin: 'round'  // miter | round | bevel | inherit
    },

    /**
     * The styles used to render the MSOAs in which commute flows start from or end to.
     */
    polygonCommuteFlowStyles: {
      baseOptions: { stroke: true, color: '#282828', weight: 2, opacity: 1, fill: true, fillOpacity: 1 },

      //'#d53e4f'
      "11": { fillColor: '#1705d6' },
      "12": { fillColor: '#1705d6' },
      "13": { fillColor: '#1705d6' },
      "14": { fillColor: '#1705d6' },
      "15": { fillColor: '#1705d6' },
      //'#f46d43'
      "21": { fillColor: '#11ea44' },
      "22": { fillColor: '#11ea44' },
      "23": { fillColor: '#11ea44' },
      //'#fdae61'
      "31": { fillColor: '#cc4704' },
      "32": { fillColor: '#cc4704' },
      "33": { fillColor: '#cc4704' },
      "34": { fillColor: '#cc4704' },
      "35": { fillColor: '#cc4704' },
      //'#fee08b'
      "41": { fillColor: '#6b2ed4' },
      "42": { fillColor: '#6b2ed4' },
      "43": { fillColor: '#6b2ed4' },
      //'#ffffbf'
      "51": { fillColor: '#d60003' },
      "52": { fillColor: '#d60003' },
      "53": { fillColor: '#d60003' },
      "54": { fillColor: '#d60003' },
      "55": { fillColor: '#d60003' },
      //'#e6f598'
      "61": { fillColor: '#23cfb8' },
      "62": { fillColor: '#23cfb8' },
      "63": { fillColor: '#23cfb8' },
      "64": { fillColor: '#23cfb8' },
      "65": { fillColor: '#23cfb8' },
      //'#abdda4'
      "71": { fillColor: '#e1de00' },
      "72": { fillColor: '#e1de00' },
      "73": { fillColor: '#e1de00' },
      "74": { fillColor: '#e1de00' },
      "75": { fillColor: '#e1de00' },
      //'#66c2a5'
      "81": { fillColor: '#de079a' },
      "82": { fillColor: '#de079a' },
      "83": { fillColor: '#de079a' },
      "84": { fillColor: '#de079a' },
      "85": { fillColor: '#de079a' },
      //'#3288bd'
      "91": { fillColor: '#1fcd5f' },
      "92": { fillColor: '#1fcd5f' },
      "93": { fillColor: '#1fcd5f' },
      "94": { fillColor: '#1fcd5f' }
    },

    /**
     * The styles used to render the commute flow lines.
     */
    lineCommuteFlowStyles: {
      baseOptions: { stroke: true, opacity: 0.7 },

      //'#d53e4f'
      "11": { color: '#1705d6' },
      "12": { color: '#1705d6' },
      "13": { color: '#1705d6' },
      "14": { color: '#1705d6' },
      "15": { color: '#1705d6' },
      //'#f46d43'
      "21": { color: '#11ea44' },
      "22": { color: '#11ea44' },
      "23": { color: '#11ea44' },
      //'#fdae61'
      "31": { color: '#cc4704' },
      "32": { color: '#cc4704' },
      "33": { color: '#cc4704' },
      "34": { color: '#cc4704' },
      "35": { color: '#cc4704' },
      //'#fee08b'
      "41": { color: '#6b2ed4' },
      "42": { color: '#6b2ed4' },
      "43": { color: '#6b2ed4' },
      //'#ffffbf'
      "51": { color: '#d60003' },
      "52": { color: '#d60003' },
      "53": { color: '#d60003' },
      "54": { color: '#d60003' },
      "55": { color: '#d60003' },
      //'#e6f598'
      "61": { color: '#23cfb8' },
      "62": { color: '#23cfb8' },
      "63": { color: '#23cfb8' },
      "64": { color: '#23cfb8' },
      "65": { color: '#23cfb8' },
      //'#abdda4'
      "71": { color: '#e1de00' },
      "72": { color: '#e1de00' },
      "73": { color: '#e1de00' },
      "74": { color: '#e1de00' },
      "75": { color: '#e1de00' },
      //'#66c2a5'
      "81": { color: '#de079a' },
      "82": { color: '#de079a' },
      "83": { color: '#de079a' },
      "84": { color: '#de079a' },
      "85": { color: '#de079a' },
      //'#3288bd'
      "91": { color: '#1fcd5f' },
      "92": { color: '#1fcd5f' },
      "93": { color: '#1fcd5f' },
      "94": { color: '#1fcd5f' }
    }

  },

  /**
   * Gets a commute flow layer name.
   *
   * @param  {number} group - The group code of the flows.
   * @param  {string} epsgCode - The EPSG code of the layer.
   */
  getCommuteFlowLayerName: function(group, epsgCode) {
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

    //Spatial.createBaseMapLayer(Spatial.leafletProviderBaseLayers.CartoDB.DarkMatter);
    //Spatial.createBaseMapLayer(Spatial.leafletProviderBaseLayers.CartoDB.DarkMatterNoLabels);
    //Spatial.createBaseMapLayer(Spatial.leafletProviderBaseLayers.CartoDB.DarkMatterOnlyLabels);
    //Spatial.createBaseMapLayer(Spatial.leafletProviderBaseLayers.Hydda.Full);
    //Spatial.createBaseMapLayer(Spatial.leafletProviderBaseLayers.OpenMapSurfer.Grayscale);
    // Spatial.createBaseMapLayer(Spatial.leafletProviderBaseLayers.OpenMapSurfer.Roads);
    Spatial.createBaseMapLayer(Spatial.leafletProviderBaseLayers.OpenStreetMap.BlackAndWhite);
    //Spatial.createBaseMapLayer(Spatial.leafletProviderBaseLayers.Thunderforest.TransportDark);
    Spatial.createMSOAsLayer();
    //Spatial.createMSOAsChoroplethLayer();

    Spatial.createCommuteFlowsMapLayer();

  },

  /**
   * Creates the BaseMap layer.
   *
   * @param baseLayerName - The name of the basemap layer.
   */
  createBaseMapLayer: function(baseLayerName) {
    Spatial.mapLayers.LeafletProvidersBaseMap.mapLayer = L.tileLayer.provider(baseLayerName);
  },

  /**
   * Creates the MSOAs layer.
   */
  createMSOAsLayer: function() {
    Spatial.mapLayers.MSOAs.geoJSON = AppData.msoaQcGeoJson;

    Spatial.mapLayers.MSOAs.mapLayer = L.geoJson(Spatial.mapLayers.MSOAs.geoJSON, {
      style: Spatial.styles.msoaStyle,

      /**
       * Define the behaviour of each feature.
       *
       * @param feature - The feature whose behaviour will be defined.
       * @param layer - The internal layer of each feature.
       */
      onEachFeature: function(feature, layer) {
        layer.on({
          // mouseover: function() {
          //   if (baseMapViewModel.baseMapValue == ':baseMap') {
          //     layer.setStyle(Spatial.styles.highlightedMSOAWithBaseMapStyle);
          //   }
          //   else {
          //     layer.setStyle(Spatial.styles.highlightedMSOAStyle);
          //   }
          //
          //   if (!L.Browser.ie && !L.Browser.opera) {
          //     layer.bringToFront();
          //   }
          //
          //   Spatial.mapLayers.CommuteFlows.mapLayer.bringToFront();
          //
          //   currentMsoaViewModel.updateView(feature.properties.C, feature.properties.NM, feature.properties.NMW);
          // },
          // mouseout: function() {
          //   if (baseMapViewModel.baseMapValue == ':none') {
          //     layer.defaultOptions.style = Spatial.styles.msoaStyle;
          //   }
          //   else {
          //     layer.defaultOptions.style = Spatial.styles.msoaWithBaseMapStyle;
          //   }
          //
          //   Spatial.mapLayers.MSOAs.mapLayer.resetStyle(layer);
          //   //Spatial.mapLayers.MSOAs.mapLayer.setStyle(layer.defaultOptions.style);
          //   Spatial.mapLayers.CommuteFlows.mapLayer.bringToFront();
          //
          //   currentMsoaViewModel.updateView(null, '', '');
          // },
          click: function() {
            Spatial.flowVectorsUrlParts.filterParameterUrl = toggleRW2WRCommuteFlowsViewModel.filterArgument + feature.properties.C;

            API.getCommuteFlows(Spatial.geoServerLayerNames.commuteFlowFilteredLayerName);
          },
          dblclick: function() {
            // TODO: This is a problem. A click event is fired before the double click. We need to change this behaviour.
            Spatial.map.fitBounds(layer.getBounds());
          }
        });
      }
      // onEachFeature: function(feature, layer) {
      //   Spatial.mapLayers.MSOAs.featureToLayerDictionary[feature.properties.C] = layer._layer_id;
      // }
      // filter: function(feature, layer) {
      //   return feature.properties.rc == 102003570;
      // }
    });

    Spatial.mapLayers.MSOAs.mapLayer.addTo(Spatial.map);
    Spatial.mapLayers.MSOAs.mapLayer.bringToFront();

    // Loop through all the features and create the feature to layer dictionary.
    for (var key in Spatial.mapLayers.MSOAs.mapLayer._layers) {
      if (Spatial.mapLayers.MSOAs.mapLayer._layers.hasOwnProperty(key)) {
        Spatial.mapLayers.MSOAs.featureToLayerDictionary[Spatial.mapLayers.MSOAs.mapLayer._layers[key].feature.properties.C] = key;
      }
    }

  },

  /**
   * Creates the MSOAs choropleth layer.
   */
  createMSOAsChoroplethLayer: function() {
    Spatial.mapLayers.MSOAsChoropleth.mapLayer = new L.ChoroplethDataLayer(AppData.msoaQcGeoJson, {
      recordsLayer: 'features',
      locationMode: L.LocationModes.GEOJSON,
      layerOptions: {
        color: '#282828',
        weight: 0.5,
        opacity: 1,
        fill: true,
        fillColor: '#515151',
        fillOpacity: 1,
        gradient: false
      }
    });

    // Spatial.mapLayers.MSOAs.mapLayer = L.geoJson(Spatial.mapLayers.MSOAs.geoJSON, {
    //   style: Spatial.styles.msoaStyle,
    //   onEachFeature: function(feature, layer) {
    //     layer.on({
    //       mouseover: function() {
    //         if (baseMapViewModel.baseMapValue == ':baseMap') {
    //           layer.setStyle(Spatial.styles.highlightedMSOAWithBaseMapStyle);
    //         }
    //         else {
    //           layer.setStyle(Spatial.styles.highlightedMSOAStyle);
    //         }
    //
    //         if (!L.Browser.ie && !L.Browser.opera) {
    //           layer.bringToFront();
    //         }
    //
    //         Spatial.mapLayers.CommuteFlows.mapLayer.bringToFront();
    //
    //         currentMsoaViewModel.updateView(feature.properties.C, feature.properties.NM, feature.properties.NMW);
    //       },
    //       mouseout: function() {
    //
    //         if (baseMapViewModel.baseMapValue == ':none') {
    //           layer._options.style = Spatial.styles.msoaStyle;
    //         }
    //         else {
    //           layer._options.style = Spatial.styles.msoaWithBaseMapStyle;
    //         }
    //
    //         Spatial.mapLayers.MSOAs.mapLayer.resetStyle(layer);
    //         Spatial.mapLayers.CommuteFlows.mapLayer.bringToFront();
    //
    //         currentMsoaViewModel.updateView(null, '', '');
    //       },
    //       click: function() {
    //         var rc = feature.properties.C;
    //         var groups = '';
    //
    //         if (checkedGroupsViewModel.checkedGroups.length != 9 && checkedGroupsViewModel.checkedGroups.length != 0) {
    //           // Not all groups have been selected.
    //           var groupsArray = [];
    //
    //           for (i = 0; i < checkedGroupsViewModel.checkedGroups.length; i++) {
    //             var gn = checkedGroupsViewModel.checkedGroups[i];
    //             groupsArray.push(gn * 10 + 1);
    //             groupsArray.push(gn * 10 + 2);
    //             groupsArray.push(gn * 10 + 3);
    //             groupsArray.push(gn * 10 + 4);
    //             groupsArray.push(gn * 10 + 5);
    //           }
    //
    //           var inSequence = '';
    //
    //           for (i = 0; i < groupsArray.length - 1; i++) {
    //             var gs = groupsArray[i];
    //             inSequence += gs + ', ';
    //           }
    //
    //           var gs = groupsArray[groupsArray.length - 1];
    //
    //           inSequence += gs;
    //
    //           groups = ' AND g IN (' + inSequence + ')';
    //         }
    //
    //         Spatial.vectorFlowsFilterParameterUrl = '&cql_filter=rc = ' + rc + groups;
    //
    //
    //         API.getCommuteFlows(Spatial.commuteFlowFilteredLayerName);
    //         //getFlowsExt(Spatial.commuteFlowFilteredLayerName);
    //
    //
    //         //F.execute(API.getFlows(Spatial.commuteFlowFilteredLayerName)).then(Spatial.renderCommuteFlowsMapLayer(F.result));
    //
    //
    //
    //
    //
    //         //Spatial.vectorFlowsFilterParameterUrl = '&cql_filter=rc = 102003570 AND g BETWEEN 20 AND 25';
    //
    //         //vectorFilterUrl = "&cql_filter=rc=" + rc;
    //         //getFlows(0);
    //       },
    //       dblclick: function() {
    //         Spatial.map.fitBounds(layer.getBounds());
    //       }
    //     });
    //   }
    //   // onEachFeature: function(feature, layer) {
    //   //   var popupDiv = '<div><table><tbody>' +
    //   //                  '<tr><th>Primary Key: </th><td>' + feature.properties.NM + '</td></tr>' +
    //   //                  '<tr><th>Residential Code: </th><td>' + feature.properties.NMW + '</td></tr>' +
    //   //                  '<tr><th>Workplace Code: </th><td>' + feature.properties.C + '</td></tr>' +
    //   //                  '</tbody></table></div>';
    //
    //   //   layer.bindPopup(popupDiv);
    //   // }
    //   // filter: function(feature, layer) {
    //   //   return feature.properties.rc == 102003570;
    //   // }
    // });

    Spatial.mapLayers.MSOAsChoropleth.mapLayer.addTo(Spatial.map);
    Spatial.mapLayers.MSOAsChoropleth.mapLayer.bringToFront();

  },

  /**
   * Creates the commute flows map layer.
   */
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

  /**
   * Renders the commute flows map layer.
   *
   * @param geoJson - The commute flows in GeoJSON format. That should be most probably a FeatureCollection.
   */
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
          opacity: 0.7
        };

        switch(feature.properties.g) {
          case 11:
          case 12:
          case 13:
          case 14:
          case 15:
            flowStyle.color = '#1705d6'; //'#d53e4f'; //
            break;
          case 21:
          case 22:
          case 23:
            flowStyle.color = '#11ea44'; //'#f46d43'; //
            break;
          case 31:
          case 32:
          case 33:
          case 34:
          case 35:
            flowStyle.color = '#cc4704'; //'#fdae61'; //
            break;
          case 41:
          case 42:
          case 43:
            flowStyle.color = '#6b2ed4'; //'#fee08b'; //
            break;
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
            flowStyle.color = '#d60003'; //'#ffffbf'; //
            break;
          case 61:
          case 62:
          case 63:
          case 64:
          case 65:
            flowStyle.color = '#23cfb8'; //'#e6f598'; //
            break;
          case 71:
          case 72:
          case 73:
          case 74:
          case 75:
            flowStyle.color = '#e1de00'; //'#abdda4'; //
            break;
          case 81:
          case 82:
          case 83:
          case 84:
          case 85:
            flowStyle.color = '#de079a'; //'#66c2a5'; //
            break;
          case 91:
          case 92:
          case 93:
          case 94:
            flowStyle.color = '#1fcd5f'; //'#3288bd'; //
            break;
        }

        var w = Spatial.commuteFlowsRenderingProperties.totalPersons.minWidth
          +
          (feature.properties.tp - Spatial.commuteFlowsRenderingProperties.totalPersons.min)
          *
          (Spatial.commuteFlowsRenderingProperties.totalPersons.maxWidth - Spatial.commuteFlowsRenderingProperties.totalPersons.minWidth)
          /
          (Spatial.commuteFlowsRenderingProperties.totalPersons.max - Spatial.commuteFlowsRenderingProperties.totalPersons.min);

        flowStyle.weight = w;

        return flowStyle;

      });

      Spatial.mapLayers.CommuteFlows.mapLayer.eachLayer(function(layer) {
        var popupDiv = '<div><table><tbody>' +
          '<tr><th>Primary Key: </th><td>' + layer.feature.properties.pk + '</td></tr>' +
          '<tr><th>Residential Code: </th><td>' + layer.feature.properties.rc + '</td></tr>' +
          '<tr><th>Workplace Code: </th><td>' + layer.feature.properties.wc + '</td></tr>' +
          '<tr><th>Total Persons: </th><td>' + layer.feature.properties.tp + '</td></tr>' +
          '<tr><th>Group: </th><td>' + layer.feature.properties.g + '</td></tr>' +
          '<tr><th>QCL Distance: </th><td>' + layer.feature.properties.qd + '</td></tr>' +
          '<tr><th>MSOA Distance (km): </th><td>' + layer.feature.properties.md + '</td></tr>' +
          '</tbody></table></div>';

        layer.bindPopup(popupDiv);
      });
    }

  },

  /**
   * Toggles the BaseMap layer on/off.
   *
   * @param baseMapValue - The baseMapValue indicates whether the BaseMap layer will be rendered or not.
   *                       Expected values are: :baseMap | :none
   */
  toggleBaseMapLayer: function(baseMapValue) {

    if (baseMapValue == ':baseMap') {
      Spatial.mapLayers.LeafletProvidersBaseMap.mapLayer.addTo(Spatial.map);
      Spatial.mapLayers.LeafletProvidersBaseMap.mapLayer.bringToBack();

      Spatial.mapLayers.MSOAs.mapLayer.options.style = Spatial.styles.msoaWithBaseMapStyle;
      Spatial.mapLayers.MSOAs.mapLayer.setStyle(Spatial.styles.msoaWithBaseMapStyle);
    }
    else {
      Spatial.map.removeLayer(Spatial.mapLayers.LeafletProvidersBaseMap.mapLayer);

      Spatial.mapLayers.MSOAs.mapLayer.options.style = Spatial.styles.msoaStyle;
      Spatial.mapLayers.MSOAs.mapLayer.setStyle(Spatial.styles.msoaStyle);
    }

  }

};

/**
 * The API object provides the methods to retrieve data from remote servers.
 *
 * @type {{getCommuteFlows: API.getCommuteFlows}}
 */
var API = {

  /**
   * Gets the commute flows from the remote server.
   *
   * @param lyrName - The name of the layer.
   */
  getCommuteFlows: function(lyrName) {

    var url = Spatial.flowVectorsUrlParts.baseUrl +
      Spatial.flowVectorsUrlParts.parametersUrl +
      lyrName +
      Spatial.flowVectorsUrlParts.filterParameterUrl +
      Spatial.flowVectorsUrlParts.outputFormatParameterUrl;

    $.ajax({
      url: url,
      type: 'GET',
      crossDomain: true,
      dataType: 'json',
      success: function(result) {
        Spatial.renderCommuteFlowsMapLayer(result);
      },
      error: function(xhr, status, error) {
        Popup.showError(error, status, 'Error getting commute flows');
      }
    });

  }

};

// ================================================================================
//  View Models.

/**
 * The baseMapViewModel provides the data and logic to toggle the OpenStreetMap BaseMap layer on and off.
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
var baseMapViewModel = new Vue({
  el: '#toggleBaseMapCheckBox',
  data: {
    baseMapLayerName: 'Basemap',
    baseMapValue: ':none'
  },
  methods: {
    /**
     * Toggles the OpenStreetMap BaseMap layer on and off.
     */
    toggleBaseMap: function() {
      if (this.baseMapValue == ':none') {
        this.baseMapValue = ':baseMap';
      }
      else {
        this.baseMapValue = ':none';
      }

      Spatial.toggleBaseMapLayer(this.baseMapValue);
    }
  }
});

/**
 * The toggleRW2WRCommuteFlowsViewModel provides the data and logic to toggle the type of query (RW or WR) submitted to
 * the remote server in order to get the commute flows.
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
var toggleRW2WRCommuteFlowsViewModel = new Vue({
  el: '#toggleRW2WRCommuteFlowsButtons',
  data: {
    queryField: 'rc',
    filterArgument: '&cql_filter=rc='
  },
  methods: {
    /**
     * Toggles the filter argument that will be used to submit the commute flows query.
     *
     * @param fieldName - The name of the field that will be used to construct the filter argument.
     */
    setFilterArgument: function(fieldName) {
      this.queryField = fieldName;
      this.filterArgument = '&cql_filter=' + this.queryField + '=';
    }
  }
});

/**
 * The checkedGroupsViewModel provides the data and logic to define which commute flow groups will be requested.
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
var checkedGroupsViewModel = new Vue({
  el: '#checkedGroups',
  data: {
    checkedGroups: []
  },
  methods: {
    /**
     * Selects all the commute flow groups.
     */
    selectAllGroups: function() {
      this.checkedGroups = [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
    }
  }
});

/**
 * The currentMsoaViewModel provides the data and logic to render information related to the current MSOA on the web page.
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
var currentMsoaViewModel = new Vue({
  el: '#currentMsoaCallout',
  data: {
    currentMsoaCode: 0,
    currentMsoa11Nm: '',
    currentMsoa11Nmw: ''
  },
  methods: {
    /**
     * Updates the view with the information of the current MSOA.
     *
     * @param code - The code of the MSOA.
     * @param nm - The name of the MSOA.
     * @param nmw - The name of the MSOA in Welsh.
     */
    updateView: function(code, nm, nmw) {
      if (code < Spatial.msoaCodeRanges.Wales.min) {
        this.currentMsoaCode = code;
        this.currentMsoa11Nm = nm;
        this.currentMsoa11Nmw = '';
      }
      else {
        this.currentMsoaCode = code;
        this.currentMsoa11Nm = nm;
        this.currentMsoa11Nmw = nmw;
      }

    }
  }
});


// ================================================================================

Spatial.initializeMap();

// ================================================================================






