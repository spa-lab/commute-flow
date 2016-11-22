
// http://maps.humanities.manchester.ac.uk:8090/geoserver/commute-flow/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=commute-flow:commute-flow-thin-epsg-4326&cql_filter=rc = 102003570&outputFormat=application/json
//
// http://maps.humanities.manchester.ac.uk:8090/geoserver/commute-flow/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=commute-flow:commute-flow-thin-epsg-4326&cql_filter=wc = 102003570&outputFormat=application/json
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

// Colors

// #00eca8
// #0fa
// #254C31
// #346D45

// Badges for Information Display

// http://bootsnipp.com/snippets/9dZp
// http://bootsnipp.com/snippets/x3ZQ
// http://bootsnipp.com/snippets/1KVKr

// Anchor / Dock a div

// https://www.google.co.uk/search?q=dock+a+div+up+right+html&oq=dock+a+div+up+right+html+&aqs=chrome..69i57.29979j0j7&sourceid=chrome&ie=UTF-8
// http://stackoverflow.com/questions/3616572/how-to-position-a-div-in-bottom-right-corner-of-a-browser
// http://stackoverflow.com/questions/8460002/dock-div-to-right-issue
// http://stackoverflow.com/questions/526035/html-css-positioning-float-bottom
// http://stackoverflow.com/questions/14027257/html-dock-to-bottom
// http://stackoverflow.com/questions/2971401/how-to-anchor-a-div-to-the-bottom-of-a-page

// http://htmlcolorcodes.com/

// Color Palettes
// HEX
//
// #DAF7A6
// #FFC300
// #FF5733
// #C70039
// #900C3F
// #581845
// RGB
//
// rgb(218, 247, 166)
// rgb(255, 195, 0)
// rgb(255, 87, 51)
// rgb(199, 0, 57)
// rgb(144, 12, 63)
// rgb(88, 24, 69)
// HTML
//
// style="color:#DAF7A6;"
// style="color:#FFC300;"
// style="color:#FF5733;"
// style="color:#C70039;"
// style="color:#900C3F;"
// style="color:#581845;"
// CSS
//
// .color-1 {color: #DAF7A6;}
// .color-2 {color: #FFC300;}
// .color-3 {color: #FF5733;}
// .color-4 {color: #C70039;}
// .color-5 {color: #900C3F;}
// .color-6 {color: #581845;}
// SCSS
//
// $color-1: #DAF7A6;
// $color-2: #FFC300;
// $color-3: #FF5733;
// $color-4: #C70039;
// $color-5: #900C3F;
// $color-6: #581845;

//Vue.directive('echarts', require('../libs/vue-echarts-0.1.0/echarts'));

var BaseMapLayers = {

  /**
   * All the names of the basemap layers that are defined by the leaflet providers plugin.
   */
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
      RoadsAndLabels: 'Hydda.RoadsAndLabels'
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
    MtbMap: 'MtbMap',
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
   * The named base map layers.
   */
  namedBasemapLayers: {

    /**
     * The basemap layer named Dark.
     */
    dark: {
      name: 'Dark',
      leafletProviderName: null,
      mapLayer: null
    },

    /**
     * The basemap layer named Light.
     */
    light: {
      name: 'Light',
      leafletProviderName: null,
      mapLayer: null
    },

    /**
     * The basemap layer named Roads.
     */
    roads: {
      name: 'Roads',
      leafletProviderName: null,
      mapLayer: null
    }

  },

  /**
   * Sets the the named base map layers.
   */
  setNamedBasemapLayers() {

    this.namedBasemapLayers.dark.leafletProviderName = BaseMapLayers.leafletProviderBaseLayers.CartoDB.DarkMatter;
    this.namedBasemapLayers.light.leafletProviderName = BaseMapLayers.leafletProviderBaseLayers.OpenMapSurfer.Grayscale;
    this.namedBasemapLayers.roads.leafletProviderName = BaseMapLayers.leafletProviderBaseLayers.Thunderforest.Transport;

    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.BasemapAT.basemap);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.BasemapAT.grau);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.BasemapAT.highdpi);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.BasemapAT.orthophoto);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.BasemapAT.overlay);
    //
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.CartoDB.DarkMatter);
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.CartoDB.DarkMatterNoLabels);
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.CartoDB.DarkMatterOnlyLabels);
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.CartoDB.Positron);
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.CartoDB.PositronNoLabels);
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.CartoDB.PositronOnlyLabels);
    //
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Esri.DeLome);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Esri.NatGeoWorldMap);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Esri.OceanBaseMap);
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Esri.WorldGrayCanvas);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Esri.WorldImagery);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Esri.WorldPhysical);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Esri.WorldShadedRelief);
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Esri.WorldStreetMap);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Esri.WorldTerrain);
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Esri.WorldTopoMap);
    //
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.HERE.basicMap);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.HERE.hybridDay);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.HERE.normalDay);
    //
    // --??BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.HikeBike.HikeBike);
    // --??BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.HikeBike.HillShading);
    //
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Hydda.Full);
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Hydda.Base);
    // --------BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Hydda.RoadsAndLabels);
    //
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.MapBox);
    //
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.MtbMap);
    //
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.NASAGIBS.ModisTerraTrueColorCR);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.NASAGIBS.ModisTerraAOD);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.NASAGIBS.ModisTerraBands367CR);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.NASAGIBS.ModisTerraChlorophyll);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.NASAGIBS.ModisTerraLSTDay);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.NASAGIBS.ModisTerraSnowCover);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.NASAGIBS.ViirsEarthAtNight2012);
    //
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.NLS);
    //
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.OpenMapSurfer.Roads);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.OpenMapSurfer.AdminBounds);
    // --------BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.OpenMapSurfer.Grayscale);
    //
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.OpenSeaMap);
    //
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.OpenStreetMap.Mapnik);
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.OpenStreetMap.BlackAndWhite);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.OpenStreetMap.DE);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.OpenStreetMap.France);
    // --??BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.OpenStreetMap.HOT);
    //
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.OpenTopoMap);
    //
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.OpenWeatherMap.Clouds);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.OpenWeatherMap.Pressure);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.OpenWeatherMap.Wind);
    //
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Stamen.Toner);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Stamen.TonerBackground);
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Stamen.TonerLite);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Stamen.Watercolor);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Stamen.Terrain);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Stamen.TerrainBackground);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Stamen.TopOSMRelief);
    // --------BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Stamen.TonerHybrid);
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Stamen.TonerLines);
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Stamen.TonerLabels);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Stamen.TopOSMFeatures);
    //
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Thunderforest.OpenCycleMap);
    // --------BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Thunderforest.Transport);
    // --------BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Thunderforest.TransportDark);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Thunderforest.SpinalMap);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Thunderforest.Landscape);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Thunderforest.Outdoors);
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Thunderforest.Pioneer);

  },

  /**
   * Creates the BaseMap layers.
   */
  createBaseMapLayers: function() {

    // Loop through all the named basemap layers and instantiate them.
    for (var namedLayer in this.namedBasemapLayers) {
      if (this.namedBasemapLayers.hasOwnProperty(namedLayer)) {

        let baseLayer = this.namedBasemapLayers[namedLayer];
        baseLayer.mapLayer = L.tileLayer.provider(baseLayer.leafletProviderName);

      }
    }

  }

  // applyGrayscaleFilter: function() {
  //   var selectedCSSFilter = L.ImageFilters.Presets.CSS.None;
  //   var selectedChannelFilter = L.ImageFilters.Presets.CanvasChannel.Grayscale1;
  //   var selectedFilter = function () {
  //     return new L.CombinedFilter(this, {
  //       cssFilter: selectedCSSFilter,
  //       canvasFilter: selectedChannelFilter
  //     }).render();
  //   };
  //   // var $layers = $('#layers');
  //   // var $template = $('#layer-template');
  //   // var template = _.template($template.html());
  //   //
  //   // var baseLayer = layerChoices.MapQuest.OSM.getLayer(classFunc);
  //
  //   var getFilter = function () {
  //
  //     selectedFilter = function (image, ctx) {
  //       return new L.CombinedFilter({
  //         cssFilter: selectedCSSFilter,
  //         canvasFilter: selectedChannelFilter
  //       }).render(this, image, ctx);
  //     };
  //
  //     BaseMapLayers.LeafletProvidersBaseMap.mapLayer.setFilter(selectedFilter);
  //   };
  //
  //   getFilter();
  // }

};

/**
 * The map layers used in the application.
 *
 * Prosoxh edw exei ena at type
 */
var MapLayers = {
  // TODO: Update the documentation.

  /**
   * The MSOAs layer.
   */
  MSOAs: {

    /**
     * The name of the layer.
     */
    name: 'MSOAs',

    /**
     * The named basemap layers.
     */
    namedBasemapLayers: {

      /**
       * The basemap layer named Dark.
       */
      dark: {

        /**
         * The style used to render MSOAs polygons.
         */
        style: {
          stroke: true,
          color: '#d3d3d3',
          weight: 0.1,
          opacity: 1,
          fill: true,
          fillColor: '#515151',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The style used to highlight the current MSOA polygon.
         */
        highlightedStyle: {
          stroke: true,
          color: '#ff4500',
          dashArray: '',
          weight: 5,
          opacity: 1,
          fillOpacity: 0.4
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The styles used to render the polygons that participate in commute flows.
         */
        commuteFlowStyles: {
          //'#d53e4f'
          '11': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '12': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '13': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '14': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '15': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          //'#f46d43'
          '21': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          '22': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          '23': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          //'#fdae61'
          '31': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '32': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '33': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '34': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '35': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          //'#fee08b'
          '41': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          '42': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          '43': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          //'#ffffbf'
          '51': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '52': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '53': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '54': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '55': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          //'#e6f598'
          '61': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '62': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '63': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '64': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '65': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          //'#abdda4'
          '71': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '72': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '73': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '74': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '75': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          //'#66c2a5'
          '81': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '82': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '83': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '84': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '85': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          //'#3288bd'
          '91': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '92': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '93': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '94': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 }
        },

        /**
         * The styles used to highlight the polygons that participate in commute flows.
         */
        highlightedCommuteFlowStyles: {
          //'#d53e4f'
          '11': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '12': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '13': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '14': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '15': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          //'#f46d43'
          '21': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          '22': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          '23': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          //'#fdae61'
          '31': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '32': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '33': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '34': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '35': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          //'#fee08b'
          '41': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          '42': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          '43': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          //'#ffffbf'
          '51': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '52': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '53': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '54': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '55': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          //'#e6f598'
          '61': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '62': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '63': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '64': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '65': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          //'#abdda4'
          '71': { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '72': { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '73': { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '74': { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '75': { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          //'#66c2a5'
          '81': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '82': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '83': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '84': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '85': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          //'#3288bd'
          '91': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '92': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '93': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '94': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 }
        }

      },

      /**
       * The basemap layer named Light.
       */
      light: {

        /**
         * The style used to render MSOAs polygons.
         */
        style: {
          stroke: true,
          color: '#282828', //'#4169E1',
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The style used to highlight the current MSOA polygon.
         */
        highlightedStyle: {
          stroke: true,
          color: '#4169e1',
          dashArray: '',
          weight: 5,
          opacity: 1,
          fillOpacity: 0.4
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The styles used to render the polygons that participate in commute flows.
         */
        commuteFlowStyles: {
          //'#d53e4f'
          '11': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '12': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '13': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '14': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '15': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          //'#f46d43'
          '21': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          '22': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          '23': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          //'#fdae61'
          '31': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '32': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '33': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '34': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '35': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          //'#fee08b'
          '41': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          '42': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          '43': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          //'#ffffbf'
          '51': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '52': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '53': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '54': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '55': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          //'#e6f598'
          '61': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '62': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '63': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '64': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '65': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          //'#abdda4'
          '71': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '72': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '73': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '74': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '75': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          //'#66c2a5'
          '81': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '82': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '83': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '84': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '85': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          //'#3288bd'
          '91': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '92': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '93': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '94': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 }
        },

        /**
         * The styles used to highlight the polygons that participate in commute flows.
         */
        highlightedCommuteFlowStyles: {
          //'#d53e4f'
          '11': { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '12': { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '13': { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '14': { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '15': { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          //'#f46d43'
          '21': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          '22': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          '23': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          //'#fdae61'
          '31': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '32': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '33': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '34': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '35': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          //'#fee08b'
          '41': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          '42': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          '43': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          //'#ffffbf'
          '51': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '52': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '53': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '54': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '55': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          //'#e6f598'
          '61': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '62': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '63': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '64': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '65': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          //'#abdda4'
          '71': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '72': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '73': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '74': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '75': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          //'#66c2a5'
          '81': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '82': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '83': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '84': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '85': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          //'#3288bd'
          '91': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '92': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '93': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '94': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 }
        }

      },

      /**
       * The basemap layer named roads.
       */
      roads: {

        /**
         * The style used to render MSOAs polygons.
         */
        style: {
          stroke: true,
          color: '#2f4f4f', //'#2e8b57', //'#4b0082',
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#515151',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The style used to highlight the current MSOA polygon.
         */
        highlightedStyle: {
          stroke: true,
          color: '#2f4f4f',
          dashArray: '',
          weight: 5,
          opacity: 1,
          fillOpacity: 0.4
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The styles used to render the polygons that participate in commute flows.
         */
        commuteFlowStyles: {
          //'#d53e4f'
          '11': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '12': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '13': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '14': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '15': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          //'#f46d43'
          '21': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          '22': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          '23': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          //'#fdae61'
          '31': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '32': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '33': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '34': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '35': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          //'#fee08b'
          '41': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          '42': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          '43': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          //'#ffffbf'
          '51': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '52': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '53': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '54': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '55': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          //'#e6f598'
          '61': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '62': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '63': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '64': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '65': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          //'#abdda4'
          '71': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '72': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '73': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '74': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '75': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          //'#66c2a5'
          '81': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '82': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '83': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '84': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '85': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          //'#3288bd'
          '91': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '92': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '93': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '94': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 }
        },

        /**
         * The styles used to highlight the polygons that participate in commute flows.
         */
        highlightedCommuteFlowStyles: {
          //'#d53e4f'
          '11': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '12': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '13': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '14': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '15': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          //'#f46d43'
          '21': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          '22': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          '23': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          //'#fdae61'
          '31': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '32': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '33': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '34': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '35': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          //'#fee08b'
          '41': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          '42': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          '43': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          //'#ffffbf'
          '51': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '52': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '53': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '54': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '55': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          //'#e6f598'
          '61': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '62': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '63': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '64': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '65': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          //'#abdda4'
          '71': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '72': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '73': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '74': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '75': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          //'#66c2a5'
          '81': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '82': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '83': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '84': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '85': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          //'#3288bd'
          '91': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '92': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '93': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '94': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 }
        }

      }

    },

    /**
     * The leaflet map layer.
     */
    mapLayer: null,

    /**
     * The leaflet map layer used to render the weighted centroid of the internal commute flows MSOA.
     */
    internalCommuteFlowsMsoaMapLayer: null,

    /**
     * The GeoJSON used to create the leaflet map layer.
     */
    geoJSON: null,

    /**
     * The dictionary used to retrieve an internal feature layer based on a feature key.
     * The key used in this case is the MSOA feature code.
     */
    featureToLayerDictionary: {},

    /**
     * The dictionary used to retrieve an internal feature layer that is a source or destination
     * in a set of commute flows based on a feature key. The key used in this case is the MSOA feature code.
     */
    commuteFlowsDictionary: {},

    /**
     * The ranges of codes used to denote MSOAs.
     */
    codeRanges: {
      England: { min: 100000000, max: 199999999 },
      Wales: { min: 200000000, max: 299999999 }
    },

    /**
     * Gets the MSOA string code.
     *
     * @param msoaCode - The code of the MSOA (should be an integer number).
     * @returns {string} - A string with the MSOA code.
     */
    getMsoaString(msoaCode) {
      let msoaCodeString = '';

      if (msoaCode != null) {
        msoaCodeString = msoaCode.toString();
      }

      return (msoaCodeString.charAt(0) == '1' ? 'E' : 'W') + msoaCodeString.substring(1);
    },

    /**
     * Creates the MSOAs layer.
     */
    createLayer: function() {
      this.geoJSON = AppData.msoaQcGeoJson;

      this.mapLayer = L.geoJSON(this.geoJSON, {
        style: this.namedBasemapLayers[toggleBaseMapViewModel.currentBaseMap].style,

        /**
         * Define the behaviour of each feature.
         *
         * @param feature - The feature whose behaviour will be defined.
         * @param layer - The internal layer of each feature.
         */
        onEachFeature: function(feature, layer) {
          layer.on({

            /**
             * Raised when the mouse is over a feature.
             */
            mouseover: function() {
              MapLayers.MSOAs.highlightMsoa(feature, layer);
            },

            /**
             * Raised when the mouse is going out of a feature.
             */
            mouseout: function() {
              MapLayers.MSOAs.resetMsoaStyle(feature, layer);
            },

            /**
             * Raised when a feature is clicked.
             */
            click: function() {
              MapLayers.MSOAs.getCommuteFlows(feature);
            },

            /**
             * Raised when a feature is double clicked.
             */
            dblclick: function() {
              // TODO: This is a problem. A click event is fired before the double click. We need to change this behaviour.
              Spatial.map.fitBounds(layer.getBounds());
            }

          });
        }
      });

      // Add the layer in to the map and make sure it is visible.
      this.mapLayer.addTo(Spatial.map);
      this.mapLayer.bringToFront();

      // Loop through all the features and create the feature to layer dictionary.
      for (var key in this.mapLayer._layers) {
        if (this.mapLayer._layers.hasOwnProperty(key)) {
          this.featureToLayerDictionary[this.mapLayer._layers[key].feature.properties.C] = key;
        }
      }

    },

    /**
     * Renders a commute flow polygon.
     *
     * @param feature - The GeoJSON feature that will be used for the rendering.
     * @param msoaCodeFieldName - The field name used to retrieve the MSOA code.
     * @param selectedGroups - The groups selected by the user.
     * @param currentBaseMap - The name of the current basemap.
     */
    renderCommuteFlowPolygon: function(feature, msoaCodeFieldName, selectedGroups, currentBaseMap) {

      // Determine whether the user has selected the group or not.
      let exists = (selectedGroups.findIndex(f => f == feature.properties.g) !== -1);

      if (exists) {

        // The group is selected. Make sure the feature is rendered.
        let msoaCode = feature.properties[msoaCodeFieldName];

        // Get the associated feature layer.
        let featureLayer = this.mapLayer._layers[this.featureToLayerDictionary[msoaCode]];

        // Change the color of the feature layer.
        featureLayer.setStyle(
          this.namedBasemapLayers[currentBaseMap].commuteFlowStyles[feature.properties.g.toString()]
        );

        // Add the feature layer in to the commute flows dictionary.
        this.commuteFlowsDictionary[msoaCode] = {
          featureLayer: featureLayer,
          g: feature.properties.g
        }

      }

    },

    /**
     * Renders the polygons that participate in commute flows based on their group value.
     */
    renderCommuteFlowPolygons: function() {

      // Get the MSOA field based on if it is a Residence to Work or Work to Residence trip.
      let msoaCodeFieldName = toggleRW2WRCommuteFlowsViewModel.unusedMsoaFieldDictionary[toggleRW2WRCommuteFlowsViewModel.queryField];

      // Get the user selected groups.
      let gs = groupSetContentViewModel.getActiveTabSelectedGroups();

      // Get the current basemap. This will be used to decide how the commute flow polygons will be rendered.
      let currentBaseMap = toggleBaseMapViewModel.currentBaseMap;

      // Check whether commute flows exist or not.
      if (MapLayers.CommuteFlows.geoJSON != undefined || MapLayers.CommuteFlows.geoJSON != null) {

        // Loop through the commute flow features.
        for (i = 0; i < MapLayers.CommuteFlows.geoJSON.features.length; i++) {

          // Get the MSOA feature.
          let feature = MapLayers.CommuteFlows.geoJSON.features[i];

          // Render the commute flow polygon.
          this.renderCommuteFlowPolygon(feature, msoaCodeFieldName, gs, currentBaseMap);

        }

      }

      if (MapLayers.CommuteFlows.internalCommuteFlowsGeoGSON != undefined || MapLayers.CommuteFlows.internalCommuteFlowsGeoGSON != null) {
        if (MapLayers.CommuteFlows.internalCommuteFlowsGeoGSON.features != undefined || MapLayers.CommuteFlows.internalCommuteFlowsGeoGSON.features != null) {

          // Get the MSOA feature that internal commute flows take place.
          let internalCommuteFlowsFeature = MapLayers.CommuteFlows.internalCommuteFlowsGeoGSON.features[0];

          // Render the internal commute flows MSOA polygon.
          this.renderCommuteFlowPolygon(internalCommuteFlowsFeature, msoaCodeFieldName, gs, currentBaseMap);

        }
      }

      // Hide the loader.
      loaderViewModel.isVisible = false;

    },

    /**
     * Resets the style of commute flow polygons.
     */
    resetStyleCommuteFlowPolygons: function() {

      for (var key in this.commuteFlowsDictionary) {
        if (this.commuteFlowsDictionary.hasOwnProperty(key)) {
          this.mapLayer.resetStyle(this.commuteFlowsDictionary[key].featureLayer);
        }
      }

      this.commuteFlowsDictionary = {};

    },

    /**
     * Highlights an MSOA.
     *
     * @param feature - The feature that will be highlighted.
     * @param layer - The internal layer of the feature that will be highlighted.
     */
    highlightMsoa: function(feature, layer) {

      // Get the named basemap layer.
      let namedBaseMap = toggleBaseMapViewModel.currentBaseMap;

      // Get the MSOA field based on if it is a Residence to Work or Work to Residence trip.
      //let msoaCodeFieldName = toggleRW2WRCommuteFlowsViewModel.unusedMsoaFieldDictionary[toggleRW2WRCommuteFlowsViewModel.queryField];

      let commuteFlowsDictionary = this.commuteFlowsDictionary;

      let isCommuteFlowMsoa = false;

      // Check out if the MSOA is participating in a commute flow.
      if (commuteFlowsDictionary != undefined || commuteFlowsDictionary != null) {
        let msoaCode = feature.properties.C;

        if (commuteFlowsDictionary[msoaCode] != undefined || commuteFlowsDictionary[msoaCode] != null) {
          isCommuteFlowMsoa = true;
        }
      }

      // Highlight the current MSOA.
      if (isCommuteFlowMsoa) {
        layer.setStyle(
          this.namedBasemapLayers[namedBaseMap].highlightedCommuteFlowStyles[commuteFlowsDictionary[feature.properties.C].g]
        );
      }
      else {
        layer.setStyle(this.namedBasemapLayers[namedBaseMap].highlightedStyle);
      }

      if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
      }

      // Check what is the commute flows rendering method and behave accordingly.
      if (toggleCommuteFlowRenderingMethodViewModel.method == ':cfPolygons') {

      }
      else if (toggleCommuteFlowRenderingMethodViewModel.method == ':cfPolygonsWithLines') {
        alert('Render Polygons and Lines');
      }
      else if (toggleCommuteFlowRenderingMethodViewModel.method == ':cfLines') {
        MapLayers.CommuteFlows.mapLayer.bringToFront();
      }

      // Update the MSOA information on the page.
      currentMsoaViewModel.updateView(feature.properties.C, feature.properties.NM, feature.properties.NMW);
      currentMsoaViewModel.show();

    },

    /**
     * Resets the MSOA style. This is called once a mouseout event has been fired.
     *
     * @param feature - The feature that whose style will be reset.
     * @param layer - The internal layer of the feature whose style will be reset.
     */
    resetMsoaStyle: function(feature, layer) {

      // Get the named basemap layer.
      let namedBaseMap = toggleBaseMapViewModel.currentBaseMap;

      // Get the MSOA field based on if it is a Residence to Work or Work to Residence trip.
      //let msoaCodeFieldName = toggleRW2WRCommuteFlowsViewModel.unusedMsoaFieldDictionary[toggleRW2WRCommuteFlowsViewModel.queryField];

      let commuteFlowsDictionary = this.commuteFlowsDictionary;

      let isCommuteFlowMsoa = false;

      // Check out if the MSOA is participating in a commute flow.
      if (commuteFlowsDictionary != undefined || commuteFlowsDictionary != null) {
        let msoaCode = feature.properties.C;

        if (commuteFlowsDictionary[msoaCode] != undefined || commuteFlowsDictionary[msoaCode] != null) {
          isCommuteFlowMsoa = true;
        }
      }

      // Reset the style of the MSOA.
      if (isCommuteFlowMsoa) {
        layer.setStyle(
          this.namedBasemapLayers[namedBaseMap].commuteFlowStyles[commuteFlowsDictionary[feature.properties.C].g]
        );
      }
      else {
        layer.defaultOptions.style = this.namedBasemapLayers[namedBaseMap].style;

        this.mapLayer.resetStyle(layer);
      }

      // Check what is the commute flows rendering method and behave accordingly.
      if (toggleCommuteFlowRenderingMethodViewModel.method == ':cfPolygons') {

      }
      else if (toggleCommuteFlowRenderingMethodViewModel.method == ':cfPolygonsWithLines') {
        alert('Render Polygons and Lines');
      }
      else if (toggleCommuteFlowRenderingMethodViewModel.method == ':cfLines') {
        MapLayers.CommuteFlows.mapLayer.bringToFront();
      }

      // Update the MSOA information on the page.
      currentMsoaViewModel.updateView(null, '', '');
      currentMsoaViewModel.hide();

    },

    /**
     * Gets the in or out commute flows of a feature.
     *
     * @param feature - The feature whose commute flows will be retrieved.
     */
    getCommuteFlows: function(feature) {

      // Show the loader.
      loaderViewModel.isVisible = true;

      let qf = toggleRW2WRCommuteFlowsViewModel.queryField;

      // Set the GeoJSON of the internal commute flows.
      let filteredFeatures = AppData.commuteFlowPointsGeoJson.features.filter(f => f.properties[qf] == feature.properties.C);

      if (filteredFeatures != undefined || filteredFeatures != null) {
        MapLayers.CommuteFlows.internalCommuteFlowsGeoGSON = {
          type: "FeatureCollection",
          features: [filteredFeatures[0]]
        }
      }

      // Create the filter parameter of the url.
      API.flowVectorsUrlParts.filterParameterUrl = toggleRW2WRCommuteFlowsViewModel.filterArgument + feature.properties.C;

      // Get the commute flows from the geospatial server.
      API.getCommuteFlows(API.geoServerLayerNames.commuteFlowFilteredLayerName);

    }

  },

  /**
   * The commute flows layer.
   */
  CommuteFlows: {

    /**
     * The name of the layer.
     */
    name: 'Commute Flows',

    /**
     * The named basemap layers.
     */
    namedBasemapLayers: {

      /**
       * The basemap layer named Dark.
       */
      dark: {

        /**
         * The styles used to render commute flows.
         */
        styles: {
          //'#d53e4f'
          '11': { stroke: true, opacity: 0.7, color: '#1705d6' },
          '12': { stroke: true, opacity: 0.7, color: '#1705d6' },
          '13': { stroke: true, opacity: 0.7, color: '#1705d6' },
          '14': { stroke: true, opacity: 0.7, color: '#1705d6' },
          '15': { stroke: true, opacity: 0.7, color: '#1705d6' },
          //'#f46d43'
          '21': { stroke: true, opacity: 0.7, color: '#11ea44' },
          '22': { stroke: true, opacity: 0.7, color: '#11ea44' },
          '23': { stroke: true, opacity: 0.7, color: '#11ea44' },
          //'#fdae61'
          '31': { stroke: true, opacity: 0.7, color: '#cc4704' },
          '32': { stroke: true, opacity: 0.7, color: '#cc4704' },
          '33': { stroke: true, opacity: 0.7, color: '#cc4704' },
          '34': { stroke: true, opacity: 0.7, color: '#cc4704' },
          '35': { stroke: true, opacity: 0.7, color: '#cc4704' },
          //'#fee08b'
          '41': { stroke: true, opacity: 0.7, color: '#6b2ed4' },
          '42': { stroke: true, opacity: 0.7, color: '#6b2ed4' },
          '43': { stroke: true, opacity: 0.7, color: '#6b2ed4' },
          //'#ffffbf'
          '51': { stroke: true, opacity: 0.7, color: '#d60003' },
          '52': { stroke: true, opacity: 0.7, color: '#d60003' },
          '53': { stroke: true, opacity: 0.7, color: '#d60003' },
          '54': { stroke: true, opacity: 0.7, color: '#d60003' },
          '55': { stroke: true, opacity: 0.7, color: '#d60003' },
          //'#e6f598'
          '61': { stroke: true, opacity: 0.7, color: '#23cfb8' },
          '62': { stroke: true, opacity: 0.7, color: '#23cfb8' },
          '63': { stroke: true, opacity: 0.7, color: '#23cfb8' },
          '64': { stroke: true, opacity: 0.7, color: '#23cfb8' },
          '65': { stroke: true, opacity: 0.7, color: '#23cfb8' },
          //'#abdda4'
          '71': { stroke: true, opacity: 0.7, color: '#e1de00' },
          '72': { stroke: true, opacity: 0.7, color: '#e1de00' },
          '73': { stroke: true, opacity: 0.7, color: '#e1de00' },
          '74': { stroke: true, opacity: 0.7, color: '#e1de00' },
          '75': { stroke: true, opacity: 0.7, color: '#e1de00' },
          //'#66c2a5'
          '81': { stroke: true, opacity: 0.7, color: '#de079a' },
          '82': { stroke: true, opacity: 0.7, color: '#de079a' },
          '83': { stroke: true, opacity: 0.7, color: '#de079a' },
          '84': { stroke: true, opacity: 0.7, color: '#de079a' },
          '85': { stroke: true, opacity: 0.7, color: '#de079a' },
          //'#3288bd'
          '91': { stroke: true, opacity: 0.7, color: '#1fcd5f' },
          '92': { stroke: true, opacity: 0.7, color: '#1fcd5f' },
          '93': { stroke: true, opacity: 0.7, color: '#1fcd5f' },
          '94': { stroke: true, opacity: 0.7, color: '#1fcd5f' }
        },

        /**
         * The styles used to highlight commute flows.
         */
        highlightedStyles: {
          //'#d53e4f'
          '11': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '12': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '13': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '14': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '15': { stroke: true, opacity: 0.7, color: '#ffc300' },
          //'#f46d43'
          '21': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '22': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '23': { stroke: true, opacity: 0.7, color: '#ffc300' },
          //'#fdae61'
          '31': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '32': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '33': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '34': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '35': { stroke: true, opacity: 0.7, color: '#ffc300' },
          //'#fee08b'
          '41': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '42': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '43': { stroke: true, opacity: 0.7, color: '#ffc300' },
          //'#ffffbf'
          '51': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '52': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '53': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '54': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '55': { stroke: true, opacity: 0.7, color: '#ffc300' },
          //'#e6f598'
          '61': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '62': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '63': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '64': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '65': { stroke: true, opacity: 0.7, color: '#ffc300' },
          //'#abdda4'
          '71': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '72': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '73': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '74': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '75': { stroke: true, opacity: 0.7, color: '#ffc300' },
          //'#66c2a5'
          '81': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '82': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '83': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '84': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '85': { stroke: true, opacity: 0.7, color: '#ffc300' },
          //'#3288bd'
          '91': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '92': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '93': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '94': { stroke: true, opacity: 0.7, color: '#ffc300' }
        },

        /**
         * The styles used to render the marker of the internal commute flows MSOA.
         */
        internalCommuteFlowMarkerStyles: {
          //'#d53e4f'
          '11': { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#1705d6' },
          '12': { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#1705d6' },
          '13': { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#1705d6' },
          '14': { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#1705d6' },
          '15': { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#1705d6' },
          //'#f46d43'
          '21': { borderColor: '#c0c0c0', color: '#008080', fillColor: '#11ea44' },
          '22': { borderColor: '#c0c0c0', color: '#008080', fillColor: '#11ea44' },
          '23': { borderColor: '#c0c0c0', color: '#008080', fillColor: '#11ea44' },
          //'#fdae61'
          '31': { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#cc4704' },
          '32': { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#cc4704' },
          '33': { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#cc4704' },
          '34': { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#cc4704' },
          '35': { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#cc4704' },
          //'#fee08b'
          '41': { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#6b2ed4' },
          '42': { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#6b2ed4' },
          '43': { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#6b2ed4' },
          //'#ffffbf'
          '51': { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#d60003' },
          '52': { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#d60003' },
          '53': { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#d60003' },
          '54': { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#d60003' },
          '55': { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#d60003' },
          //'#e6f598' 483d8b
          '61': { borderColor: '#c0c0c0', color: '#191970', fillColor: '#23cfb8' },
          '62': { borderColor: '#c0c0c0', color: '#191970', fillColor: '#23cfb8' },
          '63': { borderColor: '#c0c0c0', color: '#191970', fillColor: '#23cfb8' },
          '64': { borderColor: '#c0c0c0', color: '#191970', fillColor: '#23cfb8' },
          '65': { borderColor: '#c0c0c0', color: '#191970', fillColor: '#23cfb8' },
          //'#abdda4'
          '71': { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
          '72': { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
          '73': { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
          '74': { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
          '75': { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
          //'#66c2a5'
          '81': { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#de079a' },
          '82': { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#de079a' },
          '83': { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#de079a' },
          '84': { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#de079a' },
          '85': { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#de079a' },
          //'#3288bd'
          '91': { borderColor: '#c0c0c0', color: '#008080', fillColor: '#1fcd5f' },
          '92': { borderColor: '#c0c0c0', color: '#008080', fillColor: '#1fcd5f' },
          '93': { borderColor: '#c0c0c0', color: '#008080', fillColor: '#1fcd5f' },
          '94': { borderColor: '#c0c0c0', color: '#008080', fillColor: '#1fcd5f' }
        }

      },

      /**
       * The basemap layer named Light.
       */
      light: {

        /**
         * The styles used to render commute flows.
         */
        styles: {
          //'#d53e4f'
          '11': { stroke: true, opacity: 0.7, color: '#1705d6' },
          '12': { stroke: true, opacity: 0.7, color: '#1705d6' },
          '13': { stroke: true, opacity: 0.7, color: '#1705d6' },
          '14': { stroke: true, opacity: 0.7, color: '#1705d6' },
          '15': { stroke: true, opacity: 0.7, color: '#1705d6' },
          //'#f46d43'
          '21': { stroke: true, opacity: 0.7, color: '#11ea44' },
          '22': { stroke: true, opacity: 0.7, color: '#11ea44' },
          '23': { stroke: true, opacity: 0.7, color: '#11ea44' },
          //'#fdae61'
          '31': { stroke: true, opacity: 0.7, color: '#cc4704' },
          '32': { stroke: true, opacity: 0.7, color: '#cc4704' },
          '33': { stroke: true, opacity: 0.7, color: '#cc4704' },
          '34': { stroke: true, opacity: 0.7, color: '#cc4704' },
          '35': { stroke: true, opacity: 0.7, color: '#cc4704' },
          //'#fee08b'
          '41': { stroke: true, opacity: 0.7, color: '#6b2ed4' },
          '42': { stroke: true, opacity: 0.7, color: '#6b2ed4' },
          '43': { stroke: true, opacity: 0.7, color: '#6b2ed4' },
          //'#ffffbf'
          '51': { stroke: true, opacity: 0.7, color: '#d60003' },
          '52': { stroke: true, opacity: 0.7, color: '#d60003' },
          '53': { stroke: true, opacity: 0.7, color: '#d60003' },
          '54': { stroke: true, opacity: 0.7, color: '#d60003' },
          '55': { stroke: true, opacity: 0.7, color: '#d60003' },
          //'#e6f598'
          '61': { stroke: true, opacity: 0.7, color: '#23cfb8' },
          '62': { stroke: true, opacity: 0.7, color: '#23cfb8' },
          '63': { stroke: true, opacity: 0.7, color: '#23cfb8' },
          '64': { stroke: true, opacity: 0.7, color: '#23cfb8' },
          '65': { stroke: true, opacity: 0.7, color: '#23cfb8' },
          //'#abdda4'
          '71': { stroke: true, opacity: 0.7, color: '#e1de00' },
          '72': { stroke: true, opacity: 0.7, color: '#e1de00' },
          '73': { stroke: true, opacity: 0.7, color: '#e1de00' },
          '74': { stroke: true, opacity: 0.7, color: '#e1de00' },
          '75': { stroke: true, opacity: 0.7, color: '#e1de00' },
          //'#66c2a5'
          '81': { stroke: true, opacity: 0.7, color: '#de079a' },
          '82': { stroke: true, opacity: 0.7, color: '#de079a' },
          '83': { stroke: true, opacity: 0.7, color: '#de079a' },
          '84': { stroke: true, opacity: 0.7, color: '#de079a' },
          '85': { stroke: true, opacity: 0.7, color: '#de079a' },
          //'#3288bd'
          '91': { stroke: true, opacity: 0.7, color: '#1fcd5f' },
          '92': { stroke: true, opacity: 0.7, color: '#1fcd5f' },
          '93': { stroke: true, opacity: 0.7, color: '#1fcd5f' },
          '94': { stroke: true, opacity: 0.7, color: '#1fcd5f' }
        },

        /**
         * The styles used to highlight commute flows.
         */
        highlightedStyles: {
          //'#d53e4f'
          '11': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '12': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '13': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '14': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '15': { stroke: true, opacity: 0.7, color: '#ffc300' },
          //'#f46d43'
          '21': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '22': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '23': { stroke: true, opacity: 0.7, color: '#ffc300' },
          //'#fdae61'
          '31': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '32': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '33': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '34': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '35': { stroke: true, opacity: 0.7, color: '#ffc300' },
          //'#fee08b'
          '41': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '42': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '43': { stroke: true, opacity: 0.7, color: '#ffc300' },
          //'#ffffbf'
          '51': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '52': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '53': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '54': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '55': { stroke: true, opacity: 0.7, color: '#ffc300' },
          //'#e6f598'
          '61': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '62': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '63': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '64': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '65': { stroke: true, opacity: 0.7, color: '#ffc300' },
          //'#abdda4'
          '71': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '72': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '73': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '74': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '75': { stroke: true, opacity: 0.7, color: '#ffc300' },
          //'#66c2a5'
          '81': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '82': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '83': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '84': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '85': { stroke: true, opacity: 0.7, color: '#ffc300' },
          //'#3288bd'
          '91': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '92': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '93': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '94': { stroke: true, opacity: 0.7, color: '#ffc300' }
        },

        /**
         * The styles used to render the marker of the internal commute flows MSOA.
         */
        internalCommuteFlowMarkerStyles: {
          //'#d53e4f'
          '11': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#1705d6' },
          '12': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#1705d6' },
          '13': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#1705d6' },
          '14': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#1705d6' },
          '15': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#1705d6' },
          //'#f46d43'
          '21': { borderColor: '#e6e6fA', color: '#008080', fillColor: '#11ea44' },
          '22': { borderColor: '#e6e6fA', color: '#008080', fillColor: '#11ea44' },
          '23': { borderColor: '#e6e6fA', color: '#008080', fillColor: '#11ea44' },
          //'#fdae61'
          '31': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#cc4704' },
          '32': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#cc4704' },
          '33': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#cc4704' },
          '34': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#cc4704' },
          '35': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#cc4704' },
          //'#fee08b'
          '41': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#6b2ed4' },
          '42': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#6b2ed4' },
          '43': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#6b2ed4' },
          //'#ffffbf'
          '51': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#d60003' },
          '52': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#d60003' },
          '53': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#d60003' },
          '54': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#d60003' },
          '55': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#d60003' },
          //'#e6f598'
          '61': { borderColor: '#e6e6fA', color: '#483d8b', fillColor: '#23cfb8' },
          '62': { borderColor: '#e6e6fA', color: '#483d8b', fillColor: '#23cfb8' },
          '63': { borderColor: '#e6e6fA', color: '#483d8b', fillColor: '#23cfb8' },
          '64': { borderColor: '#e6e6fA', color: '#483d8b', fillColor: '#23cfb8' },
          '65': { borderColor: '#e6e6fA', color: '#483d8b', fillColor: '#23cfb8' },
          //'#abdda4'
          '71': { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
          '72': { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
          '73': { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
          '74': { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
          '75': { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
          //'#66c2a5'
          '81': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#de079a' },
          '82': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#de079a' },
          '83': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#de079a' },
          '84': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#de079a' },
          '85': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#de079a' },
          //'#3288bd'
          '91': { borderColor: '#e6e6fA', color: '#008080', fillColor: '#1fcd5f' },
          '92': { borderColor: '#e6e6fA', color: '#008080', fillColor: '#1fcd5f' },
          '93': { borderColor: '#e6e6fA', color: '#008080', fillColor: '#1fcd5f' },
          '94': { borderColor: '#e6e6fA', color: '#008080', fillColor: '#1fcd5f' }
        }

      },

      /**
       * The basemap layer named roads.
       */
      roads: {

        /**
         * The styles used to render commute flows.
         */
        styles: {
          //'#d53e4f'
          '11': { stroke: true, opacity: 0.7, color: '#1705d6' },
          '12': { stroke: true, opacity: 0.7, color: '#1705d6' },
          '13': { stroke: true, opacity: 0.7, color: '#1705d6' },
          '14': { stroke: true, opacity: 0.7, color: '#1705d6' },
          '15': { stroke: true, opacity: 0.7, color: '#1705d6' },
          //'#f46d43'
          '21': { stroke: true, opacity: 0.7, color: '#11ea44' },
          '22': { stroke: true, opacity: 0.7, color: '#11ea44' },
          '23': { stroke: true, opacity: 0.7, color: '#11ea44' },
          //'#fdae61'
          '31': { stroke: true, opacity: 0.7, color: '#cc4704' },
          '32': { stroke: true, opacity: 0.7, color: '#cc4704' },
          '33': { stroke: true, opacity: 0.7, color: '#cc4704' },
          '34': { stroke: true, opacity: 0.7, color: '#cc4704' },
          '35': { stroke: true, opacity: 0.7, color: '#cc4704' },
          //'#fee08b'
          '41': { stroke: true, opacity: 0.7, color: '#6b2ed4' },
          '42': { stroke: true, opacity: 0.7, color: '#6b2ed4' },
          '43': { stroke: true, opacity: 0.7, color: '#6b2ed4' },
          //'#ffffbf'
          '51': { stroke: true, opacity: 0.7, color: '#d60003' },
          '52': { stroke: true, opacity: 0.7, color: '#d60003' },
          '53': { stroke: true, opacity: 0.7, color: '#d60003' },
          '54': { stroke: true, opacity: 0.7, color: '#d60003' },
          '55': { stroke: true, opacity: 0.7, color: '#d60003' },
          //'#e6f598'
          '61': { stroke: true, opacity: 0.7, color: '#23cfb8' },
          '62': { stroke: true, opacity: 0.7, color: '#23cfb8' },
          '63': { stroke: true, opacity: 0.7, color: '#23cfb8' },
          '64': { stroke: true, opacity: 0.7, color: '#23cfb8' },
          '65': { stroke: true, opacity: 0.7, color: '#23cfb8' },
          //'#abdda4'
          '71': { stroke: true, opacity: 0.7, color: '#e1de00' },
          '72': { stroke: true, opacity: 0.7, color: '#e1de00' },
          '73': { stroke: true, opacity: 0.7, color: '#e1de00' },
          '74': { stroke: true, opacity: 0.7, color: '#e1de00' },
          '75': { stroke: true, opacity: 0.7, color: '#e1de00' },
          //'#66c2a5'
          '81': { stroke: true, opacity: 0.7, color: '#de079a' },
          '82': { stroke: true, opacity: 0.7, color: '#de079a' },
          '83': { stroke: true, opacity: 0.7, color: '#de079a' },
          '84': { stroke: true, opacity: 0.7, color: '#de079a' },
          '85': { stroke: true, opacity: 0.7, color: '#de079a' },
          //'#3288bd'
          '91': { stroke: true, opacity: 0.7, color: '#1fcd5f' },
          '92': { stroke: true, opacity: 0.7, color: '#1fcd5f' },
          '93': { stroke: true, opacity: 0.7, color: '#1fcd5f' },
          '94': { stroke: true, opacity: 0.7, color: '#1fcd5f' }
        },

        /**
         * The styles used to highlight commute flows.
         */
        highlightedStyles: {
          //'#d53e4f'
          '11': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '12': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '13': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '14': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '15': { stroke: true, opacity: 0.7, color: '#ffc300' },
          //'#f46d43'
          '21': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '22': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '23': { stroke: true, opacity: 0.7, color: '#ffc300' },
          //'#fdae61'
          '31': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '32': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '33': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '34': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '35': { stroke: true, opacity: 0.7, color: '#ffc300' },
          //'#fee08b'
          '41': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '42': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '43': { stroke: true, opacity: 0.7, color: '#ffc300' },
          //'#ffffbf'
          '51': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '52': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '53': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '54': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '55': { stroke: true, opacity: 0.7, color: '#ffc300' },
          //'#e6f598'
          '61': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '62': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '63': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '64': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '65': { stroke: true, opacity: 0.7, color: '#ffc300' },
          //'#abdda4'
          '71': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '72': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '73': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '74': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '75': { stroke: true, opacity: 0.7, color: '#ffc300' },
          //'#66c2a5'
          '81': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '82': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '83': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '84': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '85': { stroke: true, opacity: 0.7, color: '#ffc300' },
          //'#3288bd'
          '91': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '92': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '93': { stroke: true, opacity: 0.7, color: '#ffc300' },
          '94': { stroke: true, opacity: 0.7, color: '#ffc300' }
        },

        /**
         * The styles used to render the marker of the internal commute flows MSOA.
         */
        internalCommuteFlowMarkerStyles: {
          //'#d53e4f'
          '11': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#1705d6' },
          '12': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#1705d6' },
          '13': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#1705d6' },
          '14': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#1705d6' },
          '15': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#1705d6' },
          //'#f46d43'
          '21': { borderColor: '#e6e6fA', color: '#008080', fillColor: '#11ea44' },
          '22': { borderColor: '#e6e6fA', color: '#008080', fillColor: '#11ea44' },
          '23': { borderColor: '#e6e6fA', color: '#008080', fillColor: '#11ea44' },
          //'#fdae61'
          '31': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#cc4704' },
          '32': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#cc4704' },
          '33': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#cc4704' },
          '34': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#cc4704' },
          '35': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#cc4704' },
          //'#fee08b'
          '41': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#6b2ed4' },
          '42': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#6b2ed4' },
          '43': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#6b2ed4' },
          //'#ffffbf'
          '51': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#d60003' },
          '52': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#d60003' },
          '53': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#d60003' },
          '54': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#d60003' },
          '55': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#d60003' },
          //'#e6f598'
          '61': { borderColor: '#e6e6fA', color: '#483d8b', fillColor: '#23cfb8' },
          '62': { borderColor: '#e6e6fA', color: '#483d8b', fillColor: '#23cfb8' },
          '63': { borderColor: '#e6e6fA', color: '#483d8b', fillColor: '#23cfb8' },
          '64': { borderColor: '#e6e6fA', color: '#483d8b', fillColor: '#23cfb8' },
          '65': { borderColor: '#e6e6fA', color: '#483d8b', fillColor: '#23cfb8' },
          //'#abdda4'
          '71': { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
          '72': { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
          '73': { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
          '74': { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
          '75': { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
          //'#66c2a5'
          '81': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#de079a' },
          '82': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#de079a' },
          '83': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#de079a' },
          '84': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#de079a' },
          '85': { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#de079a' },
          //'#3288bd'
          '91': { borderColor: '#e6e6fA', color: '#008080', fillColor: '#1fcd5f' },
          '92': { borderColor: '#e6e6fA', color: '#008080', fillColor: '#1fcd5f' },
          '93': { borderColor: '#e6e6fA', color: '#008080', fillColor: '#1fcd5f' },
          '94': { borderColor: '#e6e6fA', color: '#008080', fillColor: '#1fcd5f' }
        }

      }

    },

    /**
     * The leaflet map layer.
     */
    mapLayer: null,

    /**
     * The GeoJSON used to create the leaflet map layer.
     */
    geoJSON: null,

    /**
     * The GeoJSON of the weighted centroid feature of the MSOA polygon that internal commute flows take place.
     */
    internalCommuteFlowsGeoGSON: {
      type: "FeatureCollection",
      features: null
    },

    /**
     * The dictionary whose keys are super groups and items are their groups and names.
     */
    superGroups: {
      '1': { groups: [11, 12, 13, 14, 15], name: 'Consumer Services' },
      '2': { groups: [21, 22, 23],         name: 'Typical Blue Collar Traits' },
      '3': { groups: [31, 32, 33, 34, 35], name: 'Sustainable Sorts' },
      '4': { groups: [41, 42, 43],         name: 'Supporting Society' },
      '5': { groups: [51, 52, 53, 54, 55], name: 'Friendly Faces' },
      '6': { groups: [61, 62, 63, 64, 65], name: 'The Nurturers' },
      '7': { groups: [71, 72, 73, 74, 75], name: 'Traders, Movers and Makers' },
      '8': { groups: [81, 82, 83, 84, 85], name: 'High Flyers' },
      '9': { groups: [91, 92, 93, 94],     name: 'Techs and the City Types' }
    },

    /**
     * The necessary information associated with groups that is needed by the application's logic.
     */
    groups: {
      //'#d53e4f'
      '11': { g: 11, sg: 1, name: 'Budding Sales Execs' },
      '12': { g: 12, sg: 1, name: 'Established in Sales and Customer Care' },
      '13': { g: 13, sg: 1, name: 'Back Office Functions' },
      '14': { g: 14, sg: 1, name: 'Multicultural Hospitality' },
      '15': { g: 15, sg: 1, name: 'On the Shop Floor' },
      //'#f46d43'
      '21': { g: 21, sg: 2, name: 'Multicultural Routine Logistics' },
      '22': { g: 22, sg: 2, name: 'On the Production Line' },
      '23': { g: 23, sg: 2, name: 'Skilled Trades in Mixed Economies' },
      //'#fdae61'
      '31': { g: 31, sg: 3, name: 'Professionals Who Cycle' },
      '32': { g: 32, sg: 3, name: 'Sustainable Hospitality' },
      '33': { g: 33, sg: 3, name: 'Welfare Workers on the Bus' },
      '34': { g: 34, sg: 3, name: 'Active Mixed Commuters' },
      '35': { g: 35, sg: 3, name: 'All Aboard' },
      //'#fee08b'
      '41': { g: 41, sg: 4, name: 'Civic Duties' },
      '42': { g: 42, sg: 4, name: 'Professional Support Services' },
      '43': { g: 43, sg: 4, name: 'Young Clericals' },
      //'#ffffbf'
      '51': { g: 51, sg: 5, name: 'Routine Care and Leisure' },
      '52': { g: 52, sg: 5, name: 'Multicultural Workers in Welfare' },
      '53': { g: 53, sg: 5, name: 'Mixed Roles in Hospitality' },
      '54': { g: 54, sg: 5, name: 'Here to Help' },
      '55': { g: 55, sg: 5, name: 'Established in Mixed Service Economies' },
      //'#e6f598'
      '61': { g: 61, sg: 6, name: 'Early Career Educators' },
      '62': { g: 62, sg: 6, name: 'Helping Hands in Education' },
      '63': { g: 63, sg: 6, name: 'Supporting Health and Wellbeing' },
      '64': { g: 64, sg: 6, name: 'Established Nurturers' },
      '65': { g: 65, sg: 6, name: 'Health and Wellbeing Professionals' },
      //'#abdda4'
      '71': { g: 71, sg: 7, name: 'Retail Relations' },
      '72': { g: 72, sg: 7, name: 'Factory Settings' },
      '73': { g: 73, sg: 7, name: 'Young Construction Crews' },
      '74': { g: 74, sg: 7, name: 'Mixed Warehousing and Distribution' },
      '75': { g: 75, sg: 7, name: 'Part-Time Traders, Movers and Makers' },
      //'#66c2a5'
      '81': { g: 81, sg: 8, name: 'Mixed Mid-Career Professionals' },
      '82': { g: 82, sg: 8, name: 'Managing the High Street' },
      '83': { g: 83, sg: 8, name: 'Manufacturing Execs' },
      '84': { g: 84, sg: 8, name: 'Early Career Professionals' },
      '85': { g: 85, sg: 8, name: 'Aspiring Flyers' },
      //'#3288bd'
      '91': { g: 91, sg: 9, name: 'Early Career Innovators' },
      '92': { g: 92, sg: 9, name: 'Administering the City' },
      '93': { g: 93, sg: 9, name: 'Financial Execs' },
      '94': { g: 94, sg: 9, name: 'Techs and Professionals in Welfare' }
    },

    /**
     * A dummy FeatureCollection GeoJSON object used to initialize the GeoJSON map layer.
     */
    dummyCommuteFlowGeoJson: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [
              [0, 0], [0, 0]
            ]
          },
          properties: {
            prop0: 0
          }
        }
      ]
    },

    /**
     * The properties used to render the commute flows.
     * TODO: Change max: 50
     */
    renderingProperties: {
      totalPersons: {
        min: 6,
        max: 50 /*1906*/,
        minWidth: 3,
        maxWidth: 10
      }
    },

    /**
     * Creates the commute flows map layer.
     */
    createLayer: function() {
      this.geoJSON = this.dummyCommuteFlowGeoJson;

      this.mapLayer = L.geoJson(this.geoJSON, {
        style: function(feature) {
          return {
            stroke: true,
            color: '#e31a1c',
            weight: 1,
            opacity: 0
          }
        }
      });

      this.mapLayer.addTo(Spatial.map);
      this.mapLayer.bringToFront();
    },

    /**
     * Renders the commute flows map layer.
     */
    renderLayer: function() {

      // Get the MSOA field based on if it is a Residence to Work or Work to Residence trip.
      //let msoaCodeFieldName = toggleRW2WRCommuteFlowsViewModel.unusedMsoaFieldDictionary[toggleRW2WRCommuteFlowsViewModel.queryField];

      // Get the current basemap. This will be used to decide how the commute flow polygons will be rendered.
      let currentBaseMap = toggleBaseMapViewModel.currentBaseMap;

      // Get the user selected groups.
      let selectedGroups = groupSetContentViewModel.getActiveTabSelectedGroups();

      let filteredCommuteFlows = {
        type: "FeatureCollection",
        features : []
      };

      if (this.geoJSON != undefined || this.geoJSON != null) {

        for (i = 0; i < this.geoJSON.features.length; i++) {
          let feature = this.geoJSON.features[i];
          let exists = (selectedGroups.findIndex(f => f == feature.properties.g) !== -1);

          if (exists) {
            filteredCommuteFlows.features.push(feature);
          }
        }

        // Sort the features ascending based on total persons traveled in order to allow
        // the thicker lines render at the bottom and the thinner ones at the top.
        filteredCommuteFlows.features.sort(function(a, b) {
          if (a.properties.tp > b.properties.tp) {
            return -1;
          }
          if (a.properties.tp < b.properties.tp) {
            return 1;
          }
          return 0;
        });

        if (filteredCommuteFlows.features.length != 0) {
          // Add the filtered commute flows GeoJSON data.
          this.mapLayer.addData(filteredCommuteFlows);

          // Set the style of the commute flows layer.
          this.mapLayer.setStyle(function(feature) {

            let flowStyle = MapLayers.CommuteFlows.namedBasemapLayers[currentBaseMap].styles[feature.properties.g.toString()];
            let tp = MapLayers.CommuteFlows.renderingProperties.totalPersons;

            flowStyle.weight = tp.minWidth + (feature.properties.tp - tp.min) * (tp.maxWidth - tp.minWidth) / (tp.max - tp.min);

            return flowStyle;

          });

          this.mapLayer.eachLayer(function(layer) {
            var htmlContent = '<div><table><tbody>' +
                                '<tr><th>Primary Key: </th><td>' + layer.feature.properties.pk + '</td></tr>' +
                                '<tr><th>Residential Code: </th><td>' + layer.feature.properties.rc + '</td></tr>' +
                                '<tr><th>Workplace Code: </th><td>' + layer.feature.properties.wc + '</td></tr>' +
                                '<tr><th>Total Persons: </th><td>' + layer.feature.properties.tp + '</td></tr>' +
                                '<tr><th>Group: </th><td>' + layer.feature.properties.g + '</td></tr>' +
                                '<tr><th>QCL Distance: </th><td>' + layer.feature.properties.qd + '</td></tr>' +
                                '<tr><th>MSOA Distance (km): </th><td>' + layer.feature.properties.md + '</td></tr>' +
                              '</tbody></table></div>';

            //layer.bindPopup(htmlContent);

            layer.bindTooltip(htmlContent, {
              direction: 'auto',
              permanent: false,
              sticky: true,
              opacity: 0.8
            });
          });
        }

      }

      // Hide the loader.
      loaderViewModel.isVisible = false;

    },

    /**
     * Clear the features of the layer.
     */
    clearLayer: function() {
      // Clear the internal layers of the commute flows layer.
      this.mapLayer.clearLayers();
    },

    /**
     * Creates the internal commute flows MSOAs layer.
     */
    createInternalCommuteFlowsMsoaLayer: function() {

      if (this.internalCommuteFlowsGeoGSON != undefined || this.internalCommuteFlowsGeoGSON != null) {
        if (this.internalCommuteFlowsGeoGSON.features != undefined || this.internalCommuteFlowsGeoGSON.features != null) {

          let feature = this.internalCommuteFlowsGeoGSON.features[0];
          let currentBaseMap = toggleBaseMapViewModel.currentBaseMap;

          let style = this.namedBasemapLayers[currentBaseMap].internalCommuteFlowMarkerStyles[feature.properties.g];
          let html = null;

          // Get the user selected groups.
          let selectedGroups = groupSetContentViewModel.getActiveTabSelectedGroups();

          // Determine whether the user has selected the group or not.
          let exists = (selectedGroups.findIndex(f => f == feature.properties.g) !== -1);

          if (exists) {

            // The group is selected. Make sure internal flows are rendered displaying the total persons.
            html = '<a id="internalCommuteFlowsButton" ' +
                      'class="btn btn-xs icon-btn-info" ' +
                      'style="border-color: ' + style.borderColor +
                           '; color: ' + style.color +
                           '; background-color: ' + style.fillColor + ';" ' +
                      'href="#">' +
                     '<span class="glyphicon btn-glyphicon glyphicon-plus img-circle text-primary"></span>' +
                        feature.properties.tp +
                   '</a>';

          }
          else {

            // The group is not selected. Only the icon will be displayed.
            html = '<a id="internalCommuteFlowsButton" ' +
                      'class="btn btn-xs icon-btn" ' +
                      'style="border-color: ' + style.borderColor +
                           '; color: ' + style.color +
                           '; background-color: ' + style.fillColor + ';" ' +
                      'href="#">' +
                     '<span class="glyphicon btn-glyphicon glyphicon-plus img-circle text-primary"></span>' +
                   '</a>';

          }

          // Get the coordinates of the weighted centroid of the MSOA.
          let coords = feature.geometry.coordinates;

          // Create a marker located on the weighted centroid by providing an html.
          this.internalCommuteFlowsMsoaMapLayer = L.BeautifyMarker.marker([coords[1], coords[0]], {
            icon: L.BeautifyIcon.icon({
              isAlphaNumericIcon: true,
              iconAnchor: [10, 10],
              iconShape: 'doughnut',
              iconSize: [20, 20],
              borderColor: '#dcdcdc',
              textColor: '#dcdcdc',
              html: html
            }),
            draggable: false,
            opacity: 0.8
          });

          // Add the marker layer on to the map.
          this.internalCommuteFlowsMsoaMapLayer.addTo(Spatial.map);

        }
      }

    },

    /**
     * Removes the internal commute flows MSOAs layer.
     */
    removeInternalCommuteFlowsMsoaLayer: function() {

      if (this.internalCommuteFlowsMsoaMapLayer != undefined || this.internalCommuteFlowsMsoaMapLayer != null) {
        this.internalCommuteFlowsMsoaMapLayer.remove();
      }

    }

  }

};




var Classification = {

  /**
   * The values of the super groups.
   */
  superGroupValues: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],

  /**
   * The values of the groups.
   */
  groupValues: [
    11, 12, 13, 14, 15,
    21, 22, 23,
    31, 32, 33, 34, 35,
    41, 42, 43,
    51, 52, 53, 54, 55,
    61, 62, 63, 64, 65,
    71, 72, 73, 74, 75,
    81, 82, 83, 84, 85,
    91, 92, 93, 94
  ],

  /**
   * The super groups dictionary.
   */
  superGroups: {
    '1': {
      groups: [11, 12, 13, 14, 15],
      name: 'Retail and Services',
      styles: {
        dark: {
          diagramStyle: {
            normal: {
              color: '#1705d6',
              textColor: 'DimGray'
            },
            emphasis: {
              barBorderColor: 'DeepSkyBlue',
              textColor: 'DimGray'
            }
          }
        },
        light: {
          diagramStyle: {
            normal: {
              color: '#1705d6',
              textColor: 'DimGray'
            },
            emphasis: {
              barBorderColor: 'DeepSkyBlue',
              textColor: 'DimGray'
            }
          }
        },
        roads: {
          diagramStyle: {
            normal: {
              color: '#1705d6',
              textColor: 'DimGray'
            },
            emphasis: {
              barBorderColor: 'DeepSkyBlue',
              textColor: 'DimGray'
            }
          }
        }
      },

      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '2': {
      groups: [21, 22, 23],
      name: 'Blue Collar Traits',
      styles: {
        dark: {
          diagramStyle: {
            normal: {
              color: '#11ea44',
              textColor: 'DimGray'
            },
            emphasis: {
              barBorderColor: 'DarkSlateBlue',
              textColor: 'DimGray'
            }
          }
        },
        light: {
          diagramStyle: {
            normal: {
              color: '#11ea44',
              textColor: 'DimGray'
            },
            emphasis: {
              barBorderColor: 'DarkSlateBlue',
              textColor: 'DimGray'
            }
          }
        },
        roads: {
          diagramStyle: {
            normal: {
              color: '#11ea44',
              textColor: 'DimGray'
            },
            emphasis: {
              barBorderColor: 'DarkSlateBlue',
              textColor: 'DimGray'
            }
          }
        }
      },

      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '3': {
      groups: [31, 32, 33, 34, 35],
      name: 'Non car commuting young professionals',
      styles: {
        dark: {
          diagramStyle: {
            normal: {
              color: '#cc4704',
              textColor: 'DimGray'
            },
            emphasis: {
              barBorderColor: 'DarkSlateBlue',
              textColor: 'DimGray'
            }
          }
        },
        light: {
          diagramStyle: {
            normal: {
              color: '#cc4704',
              textColor: 'DimGray'
            },
            emphasis: {
              barBorderColor: 'DarkSlateBlue',
              textColor: 'DimGray'
            }
          }
        },
        roads: {
          diagramStyle: {
            normal: {
              color: '#cc4704',
              textColor: 'DimGray'
            },
            emphasis: {
              barBorderColor: 'DarkSlateBlue',
              textColor: 'DimGray'
            }
          }
        }
      },

      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '4': {
      groups: [41, 42, 43],
      name: 'Admin / Secretary',
      styles: {
        dark: {
          diagramStyle: {
            normal: {
              color: '#6b2ed4',
              textColor: 'DimGray'
            },
            emphasis: {
              barBorderColor: 'DeepSkyBlue',
              textColor: 'DimGray'
            }
          }
        },
        light: {
          diagramStyle: {
            normal: {
              color: '#6b2ed4',
              textColor: 'DimGray'
            },
            emphasis: {
              barBorderColor: 'DeepSkyBlue',
              textColor: 'DimGray'
            }
          }
        },
        roads: {
          diagramStyle: {
            normal: {
              color: '#6b2ed4',
              textColor: 'DimGray'
            },
            emphasis: {
              barBorderColor: 'DeepSkyBlue',
              textColor: 'DimGray'
            }
          }
        }
      },

      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '5': {
      groups: [51, 52, 53, 54, 55],
      name: 'Part time service supporters',
      styles: {
        dark: {
          diagramStyle: {
            normal: {
              color: '#d60003',
              textColor: 'DimGray'
            },
            emphasis: {
              barBorderColor: 'DarkSlateBlue',
              textColor: 'DimGray'
            }
          }
        },
        light: {
          diagramStyle: {
            normal: {
              color: '#d60003',
              textColor: 'DimGray'
            },
            emphasis: {
              barBorderColor: 'DarkSlateBlue',
              textColor: 'DimGray'
            }
          }
        },
        roads: {
          diagramStyle: {
            normal: {
              color: '#d60003',
              textColor: 'DimGray'
            },
            emphasis: {
              barBorderColor: 'DarkSlateBlue',
              textColor: 'DimGray'
            }
          }
        }
      },

      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '6': {
      groups: [61, 62, 63, 64, 65],
      name: 'Health and Education',
      styles: {
        dark: {
          diagramStyle: {
            normal: {
              color: '#23cfb8',
              textColor: 'DimGray'
            },
            emphasis: {
              barBorderColor: 'DarkSlateBlue',
              textColor: 'DimGray'
            }
          }
        },
        light: {
          diagramStyle: {
            normal: {
              color: '#23cfb8',
              textColor: 'DimGray'
            },
            emphasis: {
              barBorderColor: 'DarkSlateBlue',
              textColor: 'DimGray'
            }
          }
        },
        roads: {
          diagramStyle: {
            normal: {
              color: '#23cfb8',
              textColor: 'DimGray'
            },
            emphasis: {
              barBorderColor: 'DarkSlateBlue',
              textColor: 'DimGray'
            }
          }
        }
      },

      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '7': {
      groups: [71, 72, 73, 74, 75],
      name: 'Skilled and manufacturing workers',
      styles: {
        dark: {
          diagramStyle: {
            normal: {
              color: '#e1de00',
              textColor: 'DimGray'
            },
            emphasis: {
              barBorderColor: 'DarkSlateBlue',
              textColor: 'DimGray'
            }
          }
        },
        light: {
          diagramStyle: {
            normal: {
              color: '#e1de00',
              textColor: 'DimGray'
            },
            emphasis: {
              barBorderColor: 'DarkSlateBlue',
              textColor: 'DimGray'
            }
          }
        },
        roads: {
          diagramStyle: {
            normal: {
              color: '#e1de00',
              textColor: 'DimGray'
            },
            emphasis: {
              barBorderColor: 'DarkSlateBlue',
              textColor: 'DimGray'
            }
          }
        }
      },

      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '8': {
      groups: [81, 82, 83, 84, 85],
      name: 'Professional and managerial workers',
      styles: {
        dark: {
          diagramStyle: {
            normal: {
              color: '#de079a',
              textColor: 'DimGray'
            },
            emphasis: {
              barBorderColor: 'DarkSlateBlue',
              textColor: 'DimGray'
            }
          }
        },
        light: {
          diagramStyle: {
            normal: {
              color: '#de079a',
              textColor: 'DimGray'
            },
            emphasis: {
              barBorderColor: 'DarkSlateBlue',
              textColor: 'DimGray'
            }
          }
        },
        roads: {
          diagramStyle: {
            normal: {
              color: '#de079a',
              textColor: 'DimGray'
            },
            emphasis: {
              barBorderColor: 'DarkSlateBlue',
              textColor: 'DimGray'
            }
          }
        }
      },

      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '9': {
      groups: [91, 92, 93, 94],
      name: 'Science, IT and Finance Professionals',
      styles: {
        dark: {
          diagramStyle: {
            normal: {
              color: '#1fcd5f',
              textColor: 'DimGray'
            },
            emphasis: {
              barBorderColor: 'DarkSlateBlue',
              textColor: 'DimGray'
            }
          }
        },
        light: {
          diagramStyle: {
            normal: {
              color: '#1fcd5f',
              textColor: 'DimGray'
            },
            emphasis: {
              barBorderColor: 'DarkSlateBlue',
              textColor: 'DimGray'
            }
          }
        },
        roads: {
          diagramStyle: {
            normal: {
              color: '#1fcd5f',
              textColor: 'DimGray'
            },
            emphasis: {
              barBorderColor: 'DarkSlateBlue',
              textColor: 'DimGray'
            }
          }
        }
      },

      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    }
  },

  /**
   * The groups dictionary.
   */
  groups: {
    '11': {
      g: 11, sg: 1, name: 'Budding Sales Execs',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#1705d6' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#1705d6' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#1705d6' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#1705d6' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#1705d6' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#1705d6' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '12': {
      g: 12, sg: 1, name: 'Established in Sales and Customer Care',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#1705d6' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#1705d6' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#1705d6' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#1705d6' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#1705d6' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#1705d6' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '13': {
      g: 13, sg: 1, name: 'Back Office Functions',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#1705d6' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#1705d6' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#1705d6' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#1705d6' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#1705d6' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#1705d6' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '14': {
      g: 14, sg: 1, name: 'Multicultural Hospitality',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#1705d6' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#1705d6' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#1705d6' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#1705d6' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#1705d6' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#1705d6' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '15': {
      g: 15, sg: 1, name: 'On the Shop Floor',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#1705d6' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#1705d6' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#1705d6' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#1705d6' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#1705d6' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#1705d6' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '21': {
      g: 21, sg: 2, name: 'Multicultural Routine Logistics',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#11ea44' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#008080', fillColor: '#11ea44' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#11ea44' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#008080', fillColor: '#11ea44' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#11ea44' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#008080', fillColor: '#11ea44' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '22': {
      g: 22, sg: 2, name: 'On the Production Line',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#11ea44' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#008080', fillColor: '#11ea44' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#11ea44' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#008080', fillColor: '#11ea44' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#11ea44' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#008080', fillColor: '#11ea44' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '23': {
      g: 23, sg: 2, name: 'Skilled Trades in Mixed Economies',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#11ea44' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#008080', fillColor: '#11ea44' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#11ea44' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#008080', fillColor: '#11ea44' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#11ea44' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#008080', fillColor: '#11ea44' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '31': {
      g: 31, sg: 3, name: 'Professionals Who Cycle',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#cc4704' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#cc4704' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#cc4704' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#cc4704' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#cc4704' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#cc4704' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '32': {
      g: 32, sg: 3, name: 'Sustainable Hospitality',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#cc4704' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#cc4704' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#cc4704' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#cc4704' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#cc4704' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#cc4704' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '33': {
      g: 33, sg: 3, name: 'Welfare Workers on the Bus',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#cc4704' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#cc4704' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#cc4704' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#cc4704' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#cc4704' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#cc4704' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '34': {
      g: 34, sg: 3, name: 'Active Mixed Commuters',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#cc4704' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#cc4704' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#cc4704' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#cc4704' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#cc4704' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#cc4704' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '35': {
      g: 35, sg: 3, name: 'All Aboard',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#cc4704' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#cc4704' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#cc4704' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#cc4704' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#cc4704' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#cc4704' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '41': {
      g: 41, sg: 4, name: 'Civic Duties',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#6b2ed4' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#6b2ed4' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#6b2ed4' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#6b2ed4' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#6b2ed4' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#6b2ed4' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '42': {
      g: 42, sg: 4, name: 'Professional Support Services',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#6b2ed4' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#6b2ed4' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#6b2ed4' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#6b2ed4' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#6b2ed4' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#6b2ed4' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '43': {
      g: 43, sg: 4, name: 'Young Clericals',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#6b2ed4' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#6b2ed4' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#6b2ed4' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#6b2ed4' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#6b2ed4' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#6b2ed4' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '51': {
      g: 51, sg: 5, name: 'Routine Care and Leisure',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#6b2ed4' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#d60003' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#d60003' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#d60003' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#d60003' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#d60003' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '52': {
      g: 52, sg: 5, name: 'Multicultural Workers in Welfare',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#6b2ed4' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#d60003' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#d60003' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#d60003' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#d60003' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#d60003' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '53': {
      g: 53, sg: 5, name: 'Mixed Roles in Hospitality',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#6b2ed4' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#d60003' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#d60003' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#d60003' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#d60003' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#d60003' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '54': {
      g: 54, sg: 5, name: 'Here to Help',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#6b2ed4' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#d60003' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#d60003' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#d60003' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#d60003' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#d60003' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '55': {
      g: 55, sg: 5, name: 'Established in Mixed Service Economies',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#6b2ed4' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#d60003' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#d60003' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#d60003' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#d60003' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#d60003' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '61': {
      g: 61, sg: 6, name: 'Early Career Educators',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#23cfb8' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#191970', fillColor: '#23cfb8' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#23cfb8' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#483d8b', fillColor: '#23cfb8' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#23cfb8' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#483d8b', fillColor: '#23cfb8' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '62': {
      g: 62, sg: 6, name: 'Helping Hands in Education',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#23cfb8' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#191970', fillColor: '#23cfb8' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#23cfb8' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#483d8b', fillColor: '#23cfb8' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#23cfb8' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#483d8b', fillColor: '#23cfb8' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '63': {
      g: 63, sg: 6, name: 'Supporting Health and Wellbeing',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#23cfb8' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#191970', fillColor: '#23cfb8' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#23cfb8' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#483d8b', fillColor: '#23cfb8' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#23cfb8' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#483d8b', fillColor: '#23cfb8' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '64': {
      g: 64, sg: 6, name: 'Established Nurturers',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#23cfb8' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#191970', fillColor: '#23cfb8' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#23cfb8' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#483d8b', fillColor: '#23cfb8' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#23cfb8' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#483d8b', fillColor: '#23cfb8' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '65': {
      g: 65, sg: 6, name: 'Health and Wellbeing Professionals',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#23cfb8' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#191970', fillColor: '#23cfb8' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#23cfb8' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#483d8b', fillColor: '#23cfb8' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#23cfb8' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#483d8b', fillColor: '#23cfb8' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '71': {
      g: 71, sg: 7, name: 'Retail Relations',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#e1de00' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#e1de00' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#e1de00' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '72': {
      g: 72, sg: 7, name: 'Factory Settings',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#e1de00' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#e1de00' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#e1de00' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '73': {
      g: 73, sg: 7, name: 'Young Construction Crews',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#e1de00' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#e1de00' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#e1de00' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '74': {
      g: 74, sg: 7, name: 'Mixed Warehousing and Distribution',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#e1de00' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#e1de00' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#e1de00' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '75': {
      g: 75, sg: 7, name: 'Part-Time Traders, Movers and Makers',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#e1de00' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#e1de00' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#e1de00' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#000080', color: '#000080', fillColor: '#e1de00' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '81': {
      g: 81, sg: 8, name: 'Mixed Mid-Career Professionals',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#de079a' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#de079a' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#de079a' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#de079a' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#de079a' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#de079a' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '82': {
      g: 82, sg: 8, name: 'Managing the High Street',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#de079a' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#de079a' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#de079a' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#de079a' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#de079a' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#de079a' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '83': {
      g: 83, sg: 8, name: 'Manufacturing Execs',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#de079a' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#de079a' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#de079a' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#de079a' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#de079a' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#de079a' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '84': {
      g: 84, sg: 8, name: 'Early Career Professionals',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#de079a' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#de079a' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#de079a' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#de079a' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#de079a' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#de079a' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '85': {
      g: 85, sg: 8, name: 'Aspiring Flyers',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#de079a' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#e6e6fa', fillColor: '#de079a' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#de079a' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#de079a' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#de079a' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#e6e6fA', fillColor: '#de079a' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '91': {
      g: 91, sg: 9, name: 'Early Career Innovators',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#1fcd5f' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#008080', fillColor: '#1fcd5f' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#1fcd5f' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#008080', fillColor: '#1fcd5f' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#1fcd5f' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#008080', fillColor: '#1fcd5f' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '92': {
      g: 92, sg: 9, name: 'Administering the City',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#1fcd5f' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#008080', fillColor: '#1fcd5f' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#1fcd5f' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#008080', fillColor: '#1fcd5f' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#1fcd5f' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#008080', fillColor: '#1fcd5f' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '93': {
      g: 93, sg: 9, name: 'Financial Execs',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#1fcd5f' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#008080', fillColor: '#1fcd5f' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#1fcd5f' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#008080', fillColor: '#1fcd5f' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#1fcd5f' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#008080', fillColor: '#1fcd5f' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '94': {
      g: 94, sg: 9, name: 'Techs and Professionals in Welfare',
      styles: {
        dark: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#1fcd5f' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#c0c0c0', color: '#008080', fillColor: '#1fcd5f' },
        },
        light: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#1fcd5f' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#008080', fillColor: '#1fcd5f' },
        },
        roads: {
          msoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          highlightedMsoaCommuteFlowStyle: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          commuteFlowStyle: { stroke: true, opacity: 0.7, color: '#1fcd5f' },
          highlightedCommuteFlowStyle: { stroke: true, opacity: 0.7, color: '#ffc300' },
          internalCommuteFlowMarkerStyle: { borderColor: '#e6e6fA', color: '#008080', fillColor: '#1fcd5f' },
        }
      },
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    }
  }

};



var Statistics = {
  // TODO: Update the documentation here.

  /**
   * Indicates whether the Statistics object can be used to display statistics or not.
   */
  isReady: false,

  /**
   * Raw values.
   */
  raw: {
    groupValues: [],
    personValues: [],
    min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
  },

  /**
   * Values related to super groups.
   */
  superGroups: {
    '1': {
      groups: [11, 12, 13, 14, 15],
      name: 'Retail and Services',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '2': {
      groups: [21, 22, 23],
      name: 'Blue Collar Traits',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '3': {
      groups: [31, 32, 33, 34, 35],
      name: 'Non car commuting young professionals',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '4': {
      groups: [41, 42, 43],
      name: 'Admin / Secretary',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '5': {
      groups: [51, 52, 53, 54, 55],
      name: 'Part time service supporters',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '6': {
      groups: [61, 62, 63, 64, 65],
      name: 'Health and Education',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '7': {
      groups: [71, 72, 73, 74, 75],
      name: 'Skilled and manufacturing workers',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '8': {
      groups: [81, 82, 83, 84, 85],
      name: 'Professional and managerial workers',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '9': {
      groups: [91, 92, 93, 94],
      name: 'Science, IT and Finance Professionals',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    }
  },

  /**
   * Values related to groups.
   */
  groups: {
    '11': {
      g: 11, sg: 1, name: 'Budding Sales Execs',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '12': {
      g: 12, sg: 1, name: 'Established in Sales and Customer Care',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '13': {
      g: 13, sg: 1, name: 'Back Office Functions',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '14': {
      g: 14, sg: 1, name: 'Multicultural Hospitality',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '15': {
      g: 15, sg: 1, name: 'On the Shop Floor',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '21': {
      g: 21, sg: 2, name: 'Multicultural Routine Logistics',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '22': {
      g: 22, sg: 2, name: 'On the Production Line',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '23': {
      g: 23, sg: 2, name: 'Skilled Trades in Mixed Economies',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '31': {
      g: 31, sg: 3, name: 'Professionals Who Cycle',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '32': {
      g: 32, sg: 3, name: 'Sustainable Hospitality',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '33': {
      g: 33, sg: 3, name: 'Welfare Workers on the Bus',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '34': {
      g: 34, sg: 3, name: 'Active Mixed Commuters',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '35': {
      g: 35, sg: 3, name: 'All Aboard',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '41': {
      g: 41, sg: 4, name: 'Civic Duties',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '42': {
      g: 42, sg: 4, name: 'Professional Support Services',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '43': {
      g: 43, sg: 4, name: 'Young Clericals',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '51': {
      g: 51, sg: 5, name: 'Routine Care and Leisure',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '52': {
      g: 52, sg: 5, name: 'Multicultural Workers in Welfare',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '53': {
      g: 53, sg: 5, name: 'Mixed Roles in Hospitality',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '54': {
      g: 54, sg: 5, name: 'Here to Help',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '55': {
      g: 55, sg: 5, name: 'Established in Mixed Service Economies',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '61': {
      g: 61, sg: 6, name: 'Early Career Educators',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '62': {
      g: 62, sg: 6, name: 'Helping Hands in Education',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '63': {
      g: 63, sg: 6, name: 'Supporting Health and Wellbeing',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '64': {
      g: 64, sg: 6, name: 'Established Nurturers',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '65': {
      g: 65, sg: 6, name: 'Health and Wellbeing Professionals',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '71': {
      g: 71, sg: 7, name: 'Retail Relations',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '72': {
      g: 72, sg: 7, name: 'Factory Settings',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '73': {
      g: 73, sg: 7, name: 'Young Construction Crews',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '74': {
      g: 74, sg: 7, name: 'Mixed Warehousing and Distribution',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '75': {
      g: 75, sg: 7, name: 'Part-Time Traders, Movers and Makers',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '81': {
      g: 81, sg: 8, name: 'Mixed Mid-Career Professionals',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '82': {
      g: 82, sg: 8, name: 'Managing the High Street',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '83': {
      g: 83, sg: 8, name: 'Manufacturing Execs',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '84': {
      g: 84, sg: 8, name: 'Early Career Professionals',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '85': {
      g: 85, sg: 8, name: 'Aspiring Flyers',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '91': {
      g: 91, sg: 9, name: 'Early Career Innovators',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '92': {
      g: 92, sg: 9, name: 'Administering the City',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '93': {
      g: 93, sg: 9, name: 'Financial Execs',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    },
    '94': {
      g: 94, sg: 9, name: 'Techs and Professionals in Welfare',
      values: [],
      min: 0, max: 0, count: 0, sum: 0, avg: 0, median: 0, mode: 0, variance: 0, stdDev: 0
    }
  },

  /**
   * Calculates the statistic of the commute flows.
   */
  calculate: function() {

    this.reset();

    // Get the internal flows MSOA feature and its values.
    let feature = MapLayers.CommuteFlows.internalCommuteFlowsGeoGSON.features[0];
    let tp = feature.properties.tp;
    let g = feature.properties.g.toString();
    let sg = this.groups[g].sg.toString();

    // Push the supergroup, group and persons values.
    this.raw.personValues.push(tp);
    this.raw.groupValues.push(g);
    this.groups[g].values.push(tp);
    this.superGroups[sg].values.push(tp);

    // Loop through the commute flow features and push the supergroups, groups and persons values.
    for (i = 0; i < MapLayers.CommuteFlows.geoJSON.features.length; i++) {
      feature = MapLayers.CommuteFlows.geoJSON.features[i];

      tp = feature.properties.tp;
      g = feature.properties.g.toString();
      sg = this.groups[g].sg.toString();

      this.raw.personValues.push(tp);
      this.raw.groupValues.push(g);
      this.groups[g].values.push(tp);
      this.superGroups[sg].values.push(tp);
    }

    // Calculate the descriptive statistics of the raw values.
    this.raw.min      = this.raw.personValues.min();
    this.raw.max      = this.raw.personValues.max();
    this.raw.count    = this.raw.personValues.length;
    this.raw.sum      = this.raw.personValues.sum();
    this.raw.avg      = this.raw.personValues.mean();
    this.raw.median   = this.raw.personValues.median();
    this.raw.variance = this.raw.personValues.variance();
    this.raw.stdDev   = this.raw.personValues.stdDev();

    // Calculate the descriptive statistics of the group values.
    for (g in this.groups) {
      if (this.groups.hasOwnProperty(g)) {

        this.groups[g].min      = this.groups[g].values.min();
        this.groups[g].max      = this.groups[g].values.max();
        this.groups[g].count    = this.groups[g].values.length;
        this.groups[g].sum      = this.groups[g].values.sum();
        this.groups[g].avg      = this.groups[g].values.mean();
        this.groups[g].median   = this.groups[g].values.median();
        this.groups[g].variance = this.groups[g].values.variance();
        this.groups[g].stdDev   = this.groups[g].values.stdDev();

      }
    }

    // Calculate the descriptive statistics of the supergroup values.
    for (sg in this.superGroups) {
      if (this.superGroups.hasOwnProperty(sg)) {

        this.superGroups[sg].min      = this.superGroups[sg].values.min();
        this.superGroups[sg].max      = this.superGroups[sg].values.max();
        this.superGroups[sg].count    = this.superGroups[sg].values.length;
        this.superGroups[sg].sum      = this.superGroups[sg].values.sum();
        this.superGroups[sg].avg      = this.superGroups[sg].values.mean();
        this.superGroups[sg].median   = this.superGroups[sg].values.median();
        this.superGroups[sg].variance = this.superGroups[sg].values.variance();
        this.superGroups[sg].stdDev   = this.superGroups[sg].values.stdDev();

      }
    }

    this.isReady = true;

    // this.groups[g].count++;
    // this.groups[g].min = tp;
    // this.groups[g].max = tp;
    // this.groups[g].sum = tp;
    //
    // this.superGroups[sg].count++;
    // this.superGroups[sg].min = tp;
    // this.superGroups[sg].max = tp;
    // this.superGroups[sg].sum = tp;
    //
    // this.descriptive.count++;
    // this.descriptive.min = tp;
    // this.descriptive.max = tp;
    // this.descriptive.sum += tp;
    //
    // for (i = 0; i < MapLayers.CommuteFlows.geoJSON.features.length; i++) {
    //
    //   feature = MapLayers.CommuteFlows.geoJSON.features[i];
    //   tp = feature.properties.tp;
    //   g = feature.properties.g.toString();
    //   sg = this.groups[g].sg.toString();
    //
    //   // Deal with groups.
    //   if (this.groups[g].count != 0) {
    //     if (this.groups[g].min > tp) {
    //       this.groups[g].min = tp;
    //     }
    //   }
    //   else {
    //     this.groups[g].min = tp;
    //   }
    //
    //   if (this.groups[g].max < tp) {
    //     this.groups[g].max = tp;
    //   }
    //
    //   this.groups[g].sum += tp;
    //
    //   this.groups[g].count++;
    //
    //   // Deal with supergroups.
    //   if (this.superGroups[sg].count != 0) {
    //     if (this.superGroups[sg].min > tp) {
    //       this.superGroups[sg].min = tp;
    //     }
    //   }
    //   else {
    //     this.superGroups[sg].min = tp;
    //   }
    //
    //   if (this.superGroups[sg].max < tp) {
    //     this.superGroups[sg].max = tp;
    //   }
    //
    //   this.superGroups[sg].sum += tp;
    //
    //   this.superGroups[sg].count++;
    //
    //   // Deal with commute flows in total.
    //   if (this.descriptive.min > tp) {
    //     this.descriptive.min = tp;
    //   }
    //
    //   if (this.descriptive.max < tp) {
    //     this.descriptive.max = tp;
    //   }
    //
    //   this.descriptive.sum += tp;
    //   this.descriptive.count++;
    //
    // }

  },

  /**
   * Resets the statistics.
   */
  reset: function() {

    // Loop through all the groups and reset their descriptive statistics.
    for (let g in this.groups) {
      if (this.groups.hasOwnProperty(g)) {

        this.groups[g].values = [];
        this.groups[g].min = 0;
        this.groups[g].max = 0;
        this.groups[g].count = 0;
        this.groups[g].sum = 0;
        this.groups[g].avg = 0;
        this.groups[g].median = 0;
        this.groups[g].mode = 0;
        this.groups[g].variance = 0;
        this.groups[g].stdDev = 0;

      }
    }

    // Loop through all the groups and reset their descriptive statistics.
    for (let sg in this.superGroups) {
      if (this.superGroups.hasOwnProperty(sg)) {

        this.superGroups[sg].values = [];
        this.superGroups[sg].min = 0;
        this.superGroups[sg].max = 0;
        this.superGroups[sg].count = 0;
        this.superGroups[sg].sum = 0;
        this.superGroups[sg].avg = 0;
        this.superGroups[sg].median = 0;
        this.superGroups[sg].mode = 0;
        this.superGroups[sg].variance = 0;
        this.superGroups[sg].stdDev = 0;

      }
    }

    // Reset the descriptive statistics of raw values.
    this.raw.groupValues = [];
    this.raw.personValues = [];
    this.raw.min = 0;
    this.raw.max = 0;
    this.raw.count = 0;
    this.raw.sum = 0;
    this.raw.avg = 0;
    this.raw.median = 0;
    this.raw.mode = 0;
    this.raw.variance = 0;
    this.raw.stdDev = 0;

    // Make sure that the Statistics object is not ready.
    this.isReady = false;

  }

};


var Diagrams = {
  // TODO: Update the documentation here.

  /**
   * The style of the scatter diagram points.
   */
  scatterDiagramStyle: {
    normal: {
      color: '#ac2925',
      borderColor: '#8b0000',
      label: {
        show: true,
        position: 'top',
        textStyle: {
          color: 'DimGray'
        }
      }
    },
    emphasis: {
      color: '#d9534f',
      borderColor: '#8b0000',
      label: {
        textStyle: {
          color: 'DimGray',
          fontWeight: 'bold'
        }
      }
    }
  },

  /**
   * The average markline.
   */
  averageMarkLineStyle: {
    itemStyle: {
      normal: {
        color: '#d9534f',
        lineStyle: {
          type: 'solid'
        },
        label: {
          show: false
        }
      },
      emphasis: {
        color: '#ac2925',
        lineStyle: {
          type: 'solid'
        },
        label: {
          show: true
        }
      }
    },
    data: [
      { type: 'average', name: 'average' }
    ]
  },

  /**
   * Creates a vertical bar diagram.
   *
   * @param isSuperGroup - Indicates whether the map displays super groups or not.
   */
  createVerticalBarDiagram: function(isSuperGroup) {

    if (isSuperGroup) {
      this.createSuperGroupsVerticalBarDiagram();
    }
    else {
      this.createGroupsVerticalBarDiagram();
    }

  },

  /**
   * Creates a vertical bar diagram showing the commute flows aggregated by super groups.
   */
  createSuperGroupsVerticalBarDiagram: function() {

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
    if (statisticsViewModel.isMsoaScatterDiagramVisible) {
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
        if (statisticsViewModel.isMsoaScatterDiagramVisible) {
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

  },

  /**
   * Creates a stacked vertical bar diagram showing the commute flows aggregated by groups.
   */
  createGroupsVerticalBarDiagram: function() {

    // var dataDiagram = echarts.init(document.getElementById('dataDiagram'));
    // alert('Groups Vertical Bar Diagram');

    this.createChart3();

  },

  /**
   * Creates a horizontal bar diagram.
   *
   * @param isSuperGroup - Indicates whether the map displays super groups or not.
   */
  createHorizontalBarDiagram: function(isSuperGroup) {

    if (isSuperGroup) {
      this.createSuperGroupsHorizontalBarDiagram();
    }
    else {
      this.createGroupsHorizontalBarDiagram();
    }

  },

  /**
   * Creates a horizontal bar diagram showing the commute flows aggregated by super groups.
   */
  createSuperGroupsHorizontalBarDiagram: function() {

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
      yAxis: [
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
      series: [
        {
          name: 'Supergoups',
          type: 'bar',
          data: [],
          xAxisIndex: 0
        }
      ]
    };

    // Check if the scatter diagram is visible.
    if (statisticsViewModel.isMsoaScatterDiagramVisible) {
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
        xAxisIndex: 1
      });
    }

    // Check if the statistics marker lines are visible.
    if (statisticsViewModel.isStatisticsMarkerLinesVisible) {
      option.series[0].markLine = this.averageMarkLineStyle;
    }

    // Make sure that the scatter point label is positioned to the right.
    this.scatterDiagramStyle.normal.label.position = 'right';

    // Add the bars and scatter points if any.
    for (let sgKey in Classification.superGroups) {
      if (Classification.superGroups.hasOwnProperty(sgKey)) {

        let baseMap = toggleBaseMapViewModel.currentBaseMap;

        // Add the name of the bar.
        option.yAxis[0].data.push(Classification.superGroups[sgKey].name);

        // Add the value and style of the bar.
        option.series[0].data.push({
          value :  Statistics.superGroups[sgKey].sum,
          itemStyle: {
            normal: {
              color: Classification.superGroups[sgKey].styles[baseMap].diagramStyle.normal.color,
              label: {
                show: true,
                position: 'left',
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

        // Add the value and style of the scatter point.
        if (statisticsViewModel.isMsoaScatterDiagramVisible) {
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
      console.log('mouseover: ' + params.value); // Add the data diagram mouseover code.
    });

  },

  /**
   * Creates a stacked horizontal bar diagram showing the commute flows aggregated by groups
   */
  createGroupsHorizontalBarDiagram: function() {

    //var dataDiagram = echarts.init(document.getElementById('dataDiagram'));
    //alert('Groups Horizontal Bar Diagram');

    this.createChart3();

  },

  /**
   * Creates a doughnut diagram.
   *
   * @param isSuperGroup - Indicates whether the map displays super groups or not.
   */
  createDoughnutDiagram: function(isSuperGroup) {

    if (isSuperGroup) {
      this.createSuperGroupsDoughnutDiagram();
    }
    else {
      this.createGroupsDoughnutDiagram();
    }

  },

  /**
   * Creates a doughnut diagram showing the commute flows aggregated by super groups.
   */
  createSuperGroupsDoughnutDiagram: function() {
    var dataDiagram = echarts.init(document.getElementById('dataDiagram'));
    alert('Supergroups Doughnut Diagram');
  },

  /**
   * Creates a doughnut diagram showing the commute flows aggregated by groups.
   */
  createGroupsDoughnutDiagram: function() {
    var dataDiagram = echarts.init(document.getElementById('dataDiagram'));
    alert('Groups Doughnut Diagram');
  },

  /**
   * Creates a data visualization diagram.
   */
  createDiagram: function() {

    if (Statistics.isReady) {
      if (statisticsViewModel.currentDiagramType == ':verticalBar') {
        this.createVerticalBarDiagram(groupSetContentViewModel.isSuperGroupSelected);
      }
      else if (statisticsViewModel.currentDiagramType == ':horizontalBar') {
        this.createHorizontalBarDiagram(groupSetContentViewModel.isSuperGroupSelected);
      }
      else if (statisticsViewModel.currentDiagramType == ':doughnut') {
        this.createDoughnutDiagram(groupSetContentViewModel.isSuperGroupSelected);
      }
    }

  },




  createChart1: function() {

    var dataDiagram = echarts.init(document.getElementById('dataDiagram'));

    // Stacked Column
    option = {
      tooltip: {
        trigger: 'axis', // 'item' | 'axis'
        axisPointer: {
          type: 'line' // 'line' | 'cross' | 'shadow'
        },
        formatter: '<f>' //'{b} <br/>{a} : {c}'
      },
      // legend: {
      //   data: [
      //     'g11', 'g12', 'g13', 'g14', 'g15',
      //     'g21', 'g22', 'g23',
      //     'g31', 'g32', 'g33', 'g34', 'g35',
      //     'g41', 'g42', 'g43',
      //     'g51', 'g52', 'g53', 'g54', 'g55',
      //     'g61', 'g62', 'g63', 'g64', 'g65',
      //     'g71', 'g72', 'g73', 'g74', 'g75',
      //     'g81', 'g82', 'g83', 'g84', 'g85',
      //     'g91', 'g92', 'g93', 'g94'
      //   ]
      // },
      toolbox: {
        show: true,
        orient: 'vertical',
        x: 'right',
        y: 'center',
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled', 'force', 'chord', 'pie', 'funnel' ] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      // calculable: true,
      xAxis: [
        {
          type: 'category',
          //data: [ 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'g9' ]
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
          // type: 'value'
        }
      ],
      yAxis: [
        {
          // type: 'category',
          // data: [ 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'g9' ]
          type: 'value'
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
            //tooltip:{},     //custom tooltip，applicable to the item only, see tooltip
            itemStyle: { color: '#1705d6' }    //custom itemStyle=，applicable to the item only, see itemStyle
          }, '-', '-', '-', '-', '-', '-', '-', '-' ]
        },
        {
          name: 'g12 - Established in Sales and Customer Care',
          type: 'bar',
          stack: 's1',
          data: [ {
            value : 12,
            //tooltip:{},     //custom tooltip，applicable to the item only, see tooltip
            itemStyle: { color: '#1705d6' }    //custom itemStyle=，applicable to the item only, see itemStyle
          }, '-', '-', '-', '-', '-', '-', '-', '-' ]
        },
        {
          name: 'g13 - Back Office Functions',
          type: 'bar',
          stack: 's1',
          data: [ {
            value : 13,
            //tooltip:{},     //custom tooltip，applicable to the item only, see tooltip
            itemStyle: { color: '#1705d6' }    //custom itemStyle=，applicable to the item only, see itemStyle
          }, '-', '-', '-', '-', '-', '-', '-', '-' ]
        },
        {
          name: 'g14 - Multicultural Hospitality',
          type: 'bar',
          stack: 's1',
          data: [ {
            value : 14,
            //tooltip:{},     //custom tooltip，applicable to the item only, see tooltip
            itemStyle: { color: '#1705d6' }    //custom itemStyle=，applicable to the item only, see itemStyle
          }, '-', '-', '-', '-', '-', '-', '-', '-' ]
        },
        {
          name: 'g15 - On the Shop Floor',
          type: 'bar',
          stack: 's1',
          data: [ {
            value : 15,
            //tooltip:{},     //custom tooltip，applicable to the item only, see tooltip
            itemStyle: { color: '#1705d6' }    //custom itemStyle=，applicable to the item only, see itemStyle
          }, '-', '-', '-', '-', '-', '-', '-', '-' ]
        },

        {
          name: 'g21 - Multicultural Routine Logistics',
          type: 'bar',
          stack: 's1',
          data: [ '-', {
            value : 21,
            //tooltip:{},     //custom tooltip，applicable to the item only, see tooltip
            itemStyle: { color: '#11ea44' }    //custom itemStyle=，applicable to the item only, see itemStyle
          }, '-', '-', '-', '-', '-', '-', '-' ]
        },
        {
          name: 'g22 - On the Production Line',
          type: 'bar',
          stack: 's1',
          data: [ '-', {
            value : 22,
            //tooltip:{},     //custom tooltip，applicable to the item only, see tooltip
            itemStyle: { color: '#11ea44' }    //custom itemStyle=，applicable to the item only, see itemStyle
          }, '-', '-', '-', '-', '-', '-', '-' ]
        },
        {
          name: 'g23 - Skilled Trades in Mixed Economies',
          type: 'bar',
          stack: 's1',
          data: [ '-', {
            value : 23,
            //tooltip:{},     //custom tooltip，applicable to the item only, see tooltip
            itemStyle: { color: '#11ea44' }    //custom itemStyle=，applicable to the item only, see itemStyle
          }, '-', '-', '-', '-', '-', '-', '-' ]
        },

        {
          name: 'g31 - Professionals Who Cycle',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '31', '-', '-', '-', '-', '-', '-' ]
        },
        {
          name: 'g32 - Sustainable Hospitality',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '32', '-', '-', '-', '-', '-', '-' ]
        },
        {
          name: 'g33 - Welfare Workers on the Bus',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '33', '-', '-', '-', '-', '-', '-' ]
        },
        {
          name: 'g34 - Active Mixed Commuters',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '34', '-', '-', '-', '-', '-', '-' ]
        },
        {
          name: 'g35 - All Aboard',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '35', '-', '-', '-', '-', '-', '-' ]
        },

        {
          name: 'g41 - Civic Duties',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '41', '-', '-', '-', '-', '-' ]
        },
        {
          name: 'g42 - Professional Support Services',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '42', '-', '-', '-', '-', '-' ]
        },
        {
          name: 'g43 - Young Clericals',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '43', '-', '-', '-', '-', '-' ]
        },

        {
          name: 'g51 - Routine Care and Leisure',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '51', '-', '-', '-', '-' ]
        },
        {
          name: 'g52 - Multicultural Workers in Welfare',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '52', '-', '-', '-', '-' ]
        },
        {
          name: 'g53 - Mixed Roles in Hospitality',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '53', '-', '-', '-', '-' ]
        },
        {
          name: 'g54 - Here to Help',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '54', '-', '-', '-', '-' ]
        },
        {
          name: 'g55 - Established in Mixed Service Economies',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '55', '-', '-', '-', '-' ]
        },

        {
          name: 'g61 - Early Career Educators',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '61', '-', '-', '-' ]
        },
        {
          name: 'g62 - Helping Hands in Education',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '62', '-', '-', '-' ]
        },
        {
          name: 'g63 - Supporting Health and Wellbeing',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '63', '-', '-', '-' ]
        },
        {
          name: 'g64 - Established Nurturers',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '64', '-', '-', '-' ]
        },
        {
          name: 'g65 - Health and Wellbeing Professionals',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '65', '-', '-', '-' ]
        },

        {
          name: 'g71 - Retail Relations',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '-', '71', '-', '-' ]
        },
        {
          name: 'g72 - Factory Settings',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '-', '72', '-', '-' ]
        },
        {
          name: 'g73 - Young Construction Crews',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '-', '73', '-', '-' ]
        },
        {
          name: 'g74 - Mixed Warehousing and Distribution',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '-', '74', '-', '-' ]
        },
        {
          name: 'g75 - Part-Time Traders, Movers and Makers',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '-', '75', '-', '-' ]
        },

        {
          name: 'g81 - Mixed Mid-Career Professionals',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '-', '-', '81', '-' ]
        },
        {
          name: 'g82 - Managing the High Street',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '-', '-', '82', '-' ]
        },
        {
          name: 'g83 - Manufacturing Execs',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '-', '-', '83', '-' ]
        },
        {
          name: 'g84 - Early Career Professionals',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '-', '-', '84', '-' ]
        },
        {
          name: 'g85 - Aspiring Flyers',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '-', '-', '85', '-' ]
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
                color: '#1fcd5f',
                label: {
                  show: true,
                  position: 'top'
                }
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
                color: '#1fcd5f',
                label: {
                  show: true,
                  position: 'top'
                }
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
                color: '#1fcd5f',
                label: {
                  show: true,
                  position: 'top'
                }
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
                color: '#1fcd5f',
                label: {
                  show: true,
                  position: 'insideTop' // 'inside' | 'left' | 'bottom' | 'insideLeft' | 'insideRight' | 'insideTop' | 'insideBottom'
                }
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

  },


  createChart2: function() {

    var dataDiagram = echarts.init(document.getElementById('dataDiagram'));

    option = {
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
          },
        }
      ],
      series: [
        {
          name: 'Supergoups',
          type: 'bar',
          data: [
            {
              // 1 - Retail and Services
              value :  Statistics.superGroups['1'].sum,
              itemStyle: {
                normal: {
                  color: '#1705d6',
                  label: {
                    show: true,
                    position: 'bottom',
                    textStyle: {
                      color: 'DimGray'
                    }
                  }
                },
                emphasis: {
                  barBorderColor: 'DeepSkyBlue',
                  label: {
                    textStyle: {
                      color: 'DimGray',
                      fontWeight: 'bold'
                    }
                  }
                }
              }
            },
            {
              // 2 - Blue Collar Traits
              value : Statistics.superGroups['2'].sum,
              itemStyle: {
                normal: {
                  color: '#11ea44',
                  label: {
                    show: true,
                    position: 'bottom',
                    textStyle: {
                      color: 'DimGray'
                    }
                  }
                },
                emphasis: {
                  barBorderColor: 'DarkSlateBlue',
                  label: {
                    textStyle: {
                      color: 'DimGray',
                      fontWeight: 'bold'
                    }
                  }
                }
              }
            },
            {
              // 3 - Non car commuting young professionals
              value : Statistics.superGroups['3'].sum,
              itemStyle: {
                normal: {
                  color: '#cc4704',
                  label: {
                    show: true,
                    position: 'bottom',
                    textStyle: {
                      color: 'DimGray'
                    }
                  }
                },
                emphasis: {
                  barBorderColor: 'DarkSlateBlue',
                  label: {
                    textStyle: {
                      color: 'DimGray',
                      fontWeight: 'bold'
                    }
                  }
                }
              }
            },
            {
              // 4 - Admin / Secretary
              value : Statistics.superGroups['4'].sum,
              itemStyle: {
                normal: {
                  color: '#6b2ed4',
                  label: {
                    show: true,
                    position: 'bottom',
                    textStyle: {
                      color: 'DimGray'
                    }
                  }
                },
                emphasis: {
                  barBorderColor: 'DeepSkyBlue',
                  label: {
                    textStyle: {
                      color: 'DimGray',
                      fontWeight: 'bold'
                    }
                  }
                }
              }
            },
            {
              // 5 - Part time service supporters
              value : Statistics.superGroups['5'].sum,
              itemStyle: {
                normal: {
                  color: '#d60003',
                  label: {
                    show: true,
                    position: 'bottom',
                    textStyle: {
                      color: 'DimGray'
                    }
                  }
                },
                emphasis: {
                  barBorderColor: 'DarkSlateBlue',
                  label: {
                    textStyle: {
                      color: 'DimGray',
                      fontWeight: 'bold'
                    }
                  }
                }
              }
            },
            {
              // 6 - Health and Education
              value : Statistics.superGroups['6'].sum,
              itemStyle: {
                normal: {
                  color: '#23cfb8',
                  label: {
                    show: true,
                    position: 'bottom',
                    textStyle: {
                      color: 'DimGray'
                    }
                  }
                },
                emphasis: {
                  barBorderColor: 'DarkSlateBlue',
                  label: {
                    textStyle: {
                      color: 'DimGray',
                      fontWeight: 'bold'
                    }
                  }
                }
              }
            },
            {
              // 7 - Skilled and manufacturing workers
              value : Statistics.superGroups['7'].sum,
              itemStyle: {
                normal: {
                  color: '#e1de00',
                  label: {
                    show: true,
                    position: 'bottom',
                    textStyle: {
                      color: 'DimGray'
                    }
                  }
                },
                emphasis: {
                  barBorderColor: 'DarkSlateBlue',
                  label: {
                    textStyle: {
                      color: 'DimGray',
                      fontWeight: 'bold'
                    }
                  }
                }
              }
            },
            {
              // 8 - Professional and managerial workers
              value : Statistics.superGroups['8'].sum,
              itemStyle: {
                normal: {
                  color: '#de079a',
                  label: {
                    show: true,
                    position: 'bottom',
                    textStyle: {
                      color: 'DimGray'
                    }
                  }
                },
                emphasis: {
                  barBorderColor: 'DarkSlateBlue',
                  label: {
                    textStyle: {
                      color: 'DimGray',
                      fontWeight: 'bold'
                    }
                  }
                }
              }
            },
            {
              // 9 - Science, IT and Finance Professionals
              value : Statistics.superGroups['9'].sum,
              itemStyle: {
                normal: {
                  color: '#1fcd5f',
                  label: {
                    show: true,
                    position: 'bottom',
                    textStyle: {
                      color: 'DimGray'
                    }
                  }
                },
                emphasis: {
                  barBorderColor: 'DarkSlateBlue',
                  label: {
                    textStyle: {
                      color: 'DimGray',
                      fontWeight: 'bold'
                    }
                  }
                }
              }
            }
          ],
          markLine: {
            itemStyle: {
              normal: {
                color: '#d9534f',
                lineStyle: {
                  type: 'solid'
                },
                label: {
                  show: false
                }
              },
              emphasis: {
                color: '#ac2925',
                lineStyle: {
                  type: 'solid'
                },
                label: {
                  show: true
                }
              }
            },
            data: [
              { type: 'average', name: 'average' }
            ]
          },
          yAxisIndex: 0
        },
        {
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
          data: [
            {
              // 1 - Retail and Services
              value: Statistics.superGroups['1'].count,
              itemStyle: {
                normal: {
                  color: '#ac2925',
                  borderColor: '#8b0000',
                  label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                      color: 'DimGray'
                    }
                  }
                },
                emphasis: {
                  color: '#d9534f',
                  borderColor: '#8b0000',
                  label: {
                    textStyle: {
                      color: 'DimGray',
                      fontWeight: 'bold'
                    }
                  }
                }
              }
            },
            {
              // 2 - Blue Collar Traits
              value: Statistics.superGroups['2'].count,
              itemStyle: {
                normal: {
                  color: '#ac2925',
                  borderColor: '#8b0000',
                  label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                      color: 'DimGray'
                    }
                  }
                },
                emphasis: {
                  color: '#d9534f',
                  borderColor: '#8b0000',
                  label: {
                    textStyle: {
                      color: 'DimGray',
                      fontWeight: 'bold'
                    }
                  }
                }
              }
            },
            {
              // 3 - Non car commuting young professionals
              value: Statistics.superGroups['3'].count,
              itemStyle: {
                normal: {
                  color: '#ac2925',
                  borderColor: '#8b0000',
                  label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                      color: 'DimGray'
                    }
                  }
                },
                emphasis: {
                  color: '#d9534f',
                  borderColor: '#8b0000',
                  label: {
                    textStyle: {
                      color: 'DimGray',
                      fontWeight: 'bold'
                    }
                  }
                }
              }
            },
            {
              // 4 - Admin / Secretary
              value: Statistics.superGroups['4'].count,
              itemStyle: {
                normal: {
                  color: '#ac2925',
                  borderColor: '#8b0000',
                  label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                      color: 'DimGray'
                    }
                  }
                },
                emphasis: {
                  color: '#d9534f',
                  borderColor: '#8b0000',
                  label: {
                    textStyle: {
                      color: 'DimGray',
                      fontWeight: 'bold'
                    }
                  }
                }
              }
            },
            {
              // 5 - Part time service supporters
              value: Statistics.superGroups['5'].count,
              itemStyle: {
                normal: {
                  color: '#ac2925',
                  borderColor: '#8b0000',
                  label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                      color: 'DimGray'
                    }
                  }
                },
                emphasis: {
                  color: '#d9534f',
                  borderColor: '#8b0000',
                  label: {
                    textStyle: {
                      color: 'DimGray',
                      fontWeight: 'bold'
                    }
                  }
                }
              }
            },
            {
              // 6 - Health and Education
              value: Statistics.superGroups['6'].count,
              itemStyle: {
                normal: {
                  color: '#ac2925',
                  borderColor: '#8b0000',
                  label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                      color: 'DimGray'
                    }
                  }
                },
                emphasis: {
                  color: '#d9534f',
                  borderColor: '#8b0000',
                  label: {
                    textStyle: {
                      color: 'DimGray',
                      fontWeight: 'bold'
                    }
                  }
                }
              }
            },
            {
              // 7 - Skilled and manufacturing workers
              value: Statistics.superGroups['7'].count,
              itemStyle: {
                normal: {
                  color: '#ac2925',
                  borderColor: '#8b0000',
                  label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                      color: 'DimGray'
                    }
                  }
                },
                emphasis: {
                  color: '#d9534f',
                  borderColor: '#8b0000',
                  label: {
                    textStyle: {
                      color: 'DimGray',
                      fontWeight: 'bold'
                    }
                  }
                }
              }
            },
            {
              // 8 - Professional and managerial workers
              value: Statistics.superGroups['8'].count,
              itemStyle: {
                normal: {
                  color: '#ac2925',
                  borderColor: '#8b0000',
                  label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                      color: 'DimGray'
                    }
                  }
                },
                emphasis: {
                  color: '#d9534f',
                  borderColor: '#8b0000',
                  label: {
                    textStyle: {
                      color: 'DimGray',
                      fontWeight: 'bold'
                    }
                  }
                }
              }
            },
            {
              // 9 - Science, IT and Finance Professionals
              value: Statistics.superGroups['9'].count,
              itemStyle: {
                normal: {
                  color: '#ac2925',
                  borderColor: '#8b0000',
                  label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                      color: 'DimGray'
                    }
                  }
                },
                emphasis: {
                  color: '#d9534f',
                  borderColor: '#8b0000',
                  label: {
                    textStyle: {
                      color: 'DimGray',
                      fontWeight: 'bold'
                    }
                  }
                }
              }
            }
          ],
          yAxisIndex: 1
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

  },


  createChart3: function() {

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
            //tooltip:{},     //custom tooltip，applicable to the item only, see tooltip
            itemStyle: { color: '#1705d6' }    //custom itemStyle=，applicable to the item only, see itemStyle
          }, '-', '-', '-', '-', '-', '-', '-', '-' ]
        },
        {
          name: 'g12 - Established in Sales and Customer Care',
          type: 'bar',
          stack: 's1',
          data: [ {
            value : 12,
            //tooltip:{},     //custom tooltip，applicable to the item only, see tooltip
            itemStyle: { color: '#1705d6' }    //custom itemStyle=，applicable to the item only, see itemStyle
          }, '-', '-', '-', '-', '-', '-', '-', '-' ]
        },
        {
          name: 'g13 - Back Office Functions',
          type: 'bar',
          stack: 's1',
          data: [ {
            value : 13,
            //tooltip:{},     //custom tooltip，applicable to the item only, see tooltip
            itemStyle: { color: '#1705d6' }    //custom itemStyle=，applicable to the item only, see itemStyle
          }, '-', '-', '-', '-', '-', '-', '-', '-' ]
        },
        {
          name: 'g14 - Multicultural Hospitality',
          type: 'bar',
          stack: 's1',
          data: [ {
            value : 14,
            //tooltip:{},     //custom tooltip，applicable to the item only, see tooltip
            itemStyle: { color: '#1705d6' }    //custom itemStyle=，applicable to the item only, see itemStyle
          }, '-', '-', '-', '-', '-', '-', '-', '-' ]
        },
        {
          name: 'g15 - On the Shop Floor',
          type: 'bar',
          stack: 's1',
          data: [ {
            value : 15,
            //tooltip:{},     //custom tooltip，applicable to the item only, see tooltip
            itemStyle: { color: '#1705d6' }    //custom itemStyle=，applicable to the item only, see itemStyle
          }, '-', '-', '-', '-', '-', '-', '-', '-' ]
        },

        {
          name: 'g21 - Multicultural Routine Logistics',
          type: 'bar',
          stack: 's1',
          data: [ '-', {
            value : 21,
            //tooltip:{},     //custom tooltip，applicable to the item only, see tooltip
            itemStyle: { color: '#11ea44' }    //custom itemStyle=，applicable to the item only, see itemStyle
          }, '-', '-', '-', '-', '-', '-', '-' ]
        },
        {
          name: 'g22 - On the Production Line',
          type: 'bar',
          stack: 's1',
          data: [ '-', {
            value : 22,
            //tooltip:{},     //custom tooltip，applicable to the item only, see tooltip
            itemStyle: { color: '#11ea44' }    //custom itemStyle=，applicable to the item only, see itemStyle
          }, '-', '-', '-', '-', '-', '-', '-' ]
        },
        {
          name: 'g23 - Skilled Trades in Mixed Economies',
          type: 'bar',
          stack: 's1',
          data: [ '-', {
            value : 23,
            //tooltip:{},     //custom tooltip，applicable to the item only, see tooltip
            itemStyle: { color: '#11ea44' }    //custom itemStyle=，applicable to the item only, see itemStyle
          }, '-', '-', '-', '-', '-', '-', '-' ]
        },

        {
          name: 'g31 - Professionals Who Cycle',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '31', '-', '-', '-', '-', '-', '-' ]
        },
        {
          name: 'g32 - Sustainable Hospitality',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '32', '-', '-', '-', '-', '-', '-' ]
        },
        {
          name: 'g33 - Welfare Workers on the Bus',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '33', '-', '-', '-', '-', '-', '-' ]
        },
        {
          name: 'g34 - Active Mixed Commuters',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '34', '-', '-', '-', '-', '-', '-' ]
        },
        {
          name: 'g35 - All Aboard',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '35', '-', '-', '-', '-', '-', '-' ]
        },

        {
          name: 'g41 - Civic Duties',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '41', '-', '-', '-', '-', '-' ]
        },
        {
          name: 'g42 - Professional Support Services',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '42', '-', '-', '-', '-', '-' ]
        },
        {
          name: 'g43 - Young Clericals',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '43', '-', '-', '-', '-', '-' ]
        },

        {
          name: 'g51 - Routine Care and Leisure',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '51', '-', '-', '-', '-' ]
        },
        {
          name: 'g52 - Multicultural Workers in Welfare',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '52', '-', '-', '-', '-' ]
        },
        {
          name: 'g53 - Mixed Roles in Hospitality',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '53', '-', '-', '-', '-' ]
        },
        {
          name: 'g54 - Here to Help',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '54', '-', '-', '-', '-' ]
        },
        {
          name: 'g55 - Established in Mixed Service Economies',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '55', '-', '-', '-', '-' ]
        },

        {
          name: 'g61 - Early Career Educators',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '61', '-', '-', '-' ]
        },
        {
          name: 'g62 - Helping Hands in Education',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '62', '-', '-', '-' ]
        },
        {
          name: 'g63 - Supporting Health and Wellbeing',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '63', '-', '-', '-' ]
        },
        {
          name: 'g64 - Established Nurturers',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '64', '-', '-', '-' ]
        },
        {
          name: 'g65 - Health and Wellbeing Professionals',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '65', '-', '-', '-' ]
        },

        {
          name: 'g71 - Retail Relations',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '-', '71', '-', '-' ]
        },
        {
          name: 'g72 - Factory Settings',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '-', '72', '-', '-' ]
        },
        {
          name: 'g73 - Young Construction Crews',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '-', '73', '-', '-' ]
        },
        {
          name: 'g74 - Mixed Warehousing and Distribution',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '-', '74', '-', '-' ]
        },
        {
          name: 'g75 - Part-Time Traders, Movers and Makers',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '-', '75', '-', '-' ]
        },

        {
          name: 'g81 - Mixed Mid-Career Professionals',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '-', '-', '81', '-' ]
        },
        {
          name: 'g82 - Managing the High Street',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '-', '-', '82', '-' ]
        },
        {
          name: 'g83 - Manufacturing Execs',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '-', '-', '83', '-' ]
        },
        {
          name: 'g84 - Early Career Professionals',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '-', '-', '84', '-' ]
        },
        {
          name: 'g85 - Aspiring Flyers',
          type: 'bar',
          stack: 's1',
          data: [ '-', '-', '-', '-', '-', '-', '-', '85', '-' ]
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
                color: '#1fcd5f',
                label: {
                  show: true,
                  position: 'top'
                }
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
                color: '#1fcd5f',
                label: {
                  show: true,
                  position: 'top'
                }
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
                color: '#1fcd5f',
                label: {
                  show: true,
                  position: 'top'
                }
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
                color: '#1fcd5f',
                label: {
                  show: true,
                  position: 'insideTop' // 'inside' | 'left' | 'bottom' | 'insideLeft' | 'insideRight' | 'insideTop' | 'insideBottom'
                }
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

  },


};

/**
 * The Spatial object provides properties and methods related to spatial operations.
 *
 * @type {}
 */
var Spatial = {
  // TODO: Update the documentation here.

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
   * Initializes the map.
   */
  initializeMap: function() {

    Spatial.map = L.map('map', {
      center: Spatial.mapOptions.center,
      zoom: Spatial.mapOptions.zoom,
      minZoom: Spatial.mapOptions.minZoom,
      maxZoom: Spatial.mapOptions.maxZoom
    });

    BaseMapLayers.setNamedBasemapLayers();
    BaseMapLayers.createBaseMapLayers();

    MapLayers.MSOAs.createLayer();

    //Spatial.createMSOAsChoroplethLayer();

    MapLayers.CommuteFlows.createLayer();
    MapLayers.CommuteFlows.clearLayer();
    MapLayers.CommuteFlows.geoJSON = null;

    // MapLayers.MSOAs.createInternalCommuteFlowsMsoaLayer();
    //MapLayers.CommuteFlows.createInternalCommuteFlowsMsoaLayer();

    Spatial.setInitialBaseMapLayer();

  },

  /**
   * Sets the initial basemap layer.
   */
  setInitialBaseMapLayer: function() {

    // Get the current basemap that has been selected by the user.
    let namedBaseMap = toggleBaseMapViewModel.currentBaseMap;
    let baseLayer = BaseMapLayers.namedBasemapLayers[namedBaseMap].mapLayer;

    // Add the basemap layer in to the map.
    baseLayer.addTo(Spatial.map);
    baseLayer.bringToBack();

  },

  /**
   * Renders the commute flows.
   */
  renderCommuteFlows: function() {

    // Show the loader.
    loaderViewModel.isVisible = true;

    // Check what is the commute flows rendering method and behave accordingly.
    if (toggleCommuteFlowRenderingMethodViewModel.method == ':cfPolygons') {
      MapLayers.CommuteFlows.clearLayer();

      MapLayers.MSOAs.resetStyleCommuteFlowPolygons();
      MapLayers.MSOAs.renderCommuteFlowPolygons();
      MapLayers.CommuteFlows.removeInternalCommuteFlowsMsoaLayer();
      MapLayers.CommuteFlows.createInternalCommuteFlowsMsoaLayer();
    }
    else if (toggleCommuteFlowRenderingMethodViewModel.method == ':cfPolygonsWithLines') {
      //alert('Render Polygons and Lines');
    }
    else if (toggleCommuteFlowRenderingMethodViewModel.method == ':cfLines') {
      //MapLayers.CommuteFlows.renderLayer();
      MapLayers.MSOAs.resetStyleCommuteFlowPolygons();

      MapLayers.CommuteFlows.clearLayer();
      MapLayers.CommuteFlows.renderLayer();
      MapLayers.CommuteFlows.removeInternalCommuteFlowsMsoaLayer();
      MapLayers.CommuteFlows.createInternalCommuteFlowsMsoaLayer();
    }

  },

  /**
   * Creates the MSOAs choropleth layer.
   */
  createMSOAsChoroplethLayer: function() {
    // Spatial.mapLayers.MSOAsChoropleth.mapLayer = new L.ChoroplethDataLayer(AppData.msoaQcGeoJson, {
    //   recordsLayer: 'features',
    //   locationMode: L.LocationModes.GEOJSON,
    //   layerOptions: {
    //     color: '#282828',
    //     weight: 0.5,
    //     opacity: 1,
    //     fill: true,
    //     fillColor: '#515151',
    //     fillOpacity: 1,
    //     gradient: false
    //   }
    // });
    //
    // // Spatial.mapLayers.MSOAs.mapLayer = L.geoJson(Spatial.mapLayers.MSOAs.geoJSON, {
    // //   style: Spatial.styles.msoaStyle,
    // //   onEachFeature: function(feature, layer) {
    // //     layer.on({
    // //       mouseover: function() {
    // //         if (baseMapViewModel.baseMapValue == ':baseMap') {
    // //           layer.setStyle(Spatial.styles.highlightedMSOAWithBaseMapStyle);
    // //         }
    // //         else {
    // //           layer.setStyle(Spatial.styles.highlightedMSOAStyle);
    // //         }
    // //
    // //         if (!L.Browser.ie && !L.Browser.opera) {
    // //           layer.bringToFront();
    // //         }
    // //
    // //         Spatial.mapLayers.CommuteFlows.mapLayer.bringToFront();
    // //
    // //         currentMsoaViewModel.updateView(feature.properties.C, feature.properties.NM, feature.properties.NMW);
    // //       },
    // //       mouseout: function() {
    // //
    // //         if (baseMapViewModel.baseMapValue == ':none') {
    // //           layer._options.style = Spatial.styles.msoaStyle;
    // //         }
    // //         else {
    // //           layer._options.style = Spatial.styles.msoaWithBaseMapStyle;
    // //         }
    // //
    // //         Spatial.mapLayers.MSOAs.mapLayer.resetStyle(layer);
    // //         Spatial.mapLayers.CommuteFlows.mapLayer.bringToFront();
    // //
    // //         currentMsoaViewModel.updateView(null, '', '');
    // //       },
    // //       click: function() {
    // //         var rc = feature.properties.C;
    // //         var groups = '';
    // //
    // //         if (checkedGroupsViewModel.checkedGroups.length != 9 && checkedGroupsViewModel.checkedGroups.length != 0) {
    // //           // Not all groups have been selected.
    // //           var groupsArray = [];
    // //
    // //           for (i = 0; i < checkedGroupsViewModel.checkedGroups.length; i++) {
    // //             var gn = checkedGroupsViewModel.checkedGroups[i];
    // //             groupsArray.push(gn * 10 + 1);
    // //             groupsArray.push(gn * 10 + 2);
    // //             groupsArray.push(gn * 10 + 3);
    // //             groupsArray.push(gn * 10 + 4);
    // //             groupsArray.push(gn * 10 + 5);
    // //           }
    // //
    // //           var inSequence = '';
    // //
    // //           for (i = 0; i < groupsArray.length - 1; i++) {
    // //             var gs = groupsArray[i];
    // //             inSequence += gs + ', ';
    // //           }
    // //
    // //           var gs = groupsArray[groupsArray.length - 1];
    // //
    // //           inSequence += gs;
    // //
    // //           groups = ' AND g IN (' + inSequence + ')';
    // //         }
    // //
    // //         Spatial.vectorFlowsFilterParameterUrl = '&cql_filter=rc = ' + rc + groups;
    // //
    // //
    // //         API.getCommuteFlows(Spatial.commuteFlowFilteredLayerName);
    // //         //getFlowsExt(Spatial.commuteFlowFilteredLayerName);
    // //
    // //
    // //         //F.execute(API.getFlows(Spatial.commuteFlowFilteredLayerName)).then(Spatial.renderCommuteFlowsMapLayer(F.result));
    // //
    // //
    // //
    // //
    // //
    // //         //Spatial.vectorFlowsFilterParameterUrl = '&cql_filter=rc = 102003570 AND g BETWEEN 20 AND 25';
    // //
    // //         //vectorFilterUrl = "&cql_filter=rc=" + rc;
    // //         //getFlows(0);
    // //       },
    // //       dblclick: function() {
    // //         Spatial.map.fitBounds(layer.getBounds());
    // //       }
    // //     });
    // //   }
    // //   // onEachFeature: function(feature, layer) {
    // //   //   var popupDiv = '<div><table><tbody>' +
    // //   //                  '<tr><th>Primary Key: </th><td>' + feature.properties.NM + '</td></tr>' +
    // //   //                  '<tr><th>Residential Code: </th><td>' + feature.properties.NMW + '</td></tr>' +
    // //   //                  '<tr><th>Workplace Code: </th><td>' + feature.properties.C + '</td></tr>' +
    // //   //                  '</tbody></table></div>';
    // //
    // //   //   layer.bindPopup(popupDiv);
    // //   // }
    // //   // filter: function(feature, layer) {
    // //   //   return feature.properties.rc == 102003570;
    // //   // }
    // // });
    //
    // Spatial.mapLayers.MSOAsChoropleth.mapLayer.addTo(Spatial.map);
    // Spatial.mapLayers.MSOAsChoropleth.mapLayer.bringToFront();

  }

};

/**
 * The API object provides the properties and methods to retrieve data from the geospatial remote server.
 *
 * @type {{getCommuteFlows: API.getCommuteFlows}}
 */
var API = {
  // TODO: Make sure the documentation is updated.

  /**
   * The proxy used to enable Cross Origin Resource Sharing.
   */
  corsProxy: 'http://cors.io/?u=',

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

  /**
   * Gets the commute flows from the remote server.
   *
   * @param lyrName - The name of the layer.
   */
  getCommuteFlows: function(lyrName) {

    var url = //this.corsProxy + // TODO: Remove this ???
              this.flowVectorsUrlParts.baseUrl +
              this.flowVectorsUrlParts.parametersUrl +
              lyrName +
              this.flowVectorsUrlParts.filterParameterUrl +
              this.flowVectorsUrlParts.outputFormatParameterUrl;

    $.ajax({
      url: url,
      type: 'GET',
      crossDomain: true,
      dataType: 'json',
      success: function(result) {

        // Set the GeoJSON of the commute flows object.
        MapLayers.CommuteFlows.geoJSON = result;

        // Calculate the statistics of commute flows.
        Statistics.calculate();

        // Check what is the commute flows rendering method and behave accordingly.
        if (toggleCommuteFlowRenderingMethodViewModel.method == ':cfPolygons') {
          MapLayers.MSOAs.resetStyleCommuteFlowPolygons();
          MapLayers.CommuteFlows.clearLayer();
          MapLayers.MSOAs.renderCommuteFlowPolygons();
          MapLayers.CommuteFlows.removeInternalCommuteFlowsMsoaLayer();
          MapLayers.CommuteFlows.createInternalCommuteFlowsMsoaLayer();

          statisticsViewModel.show();
          Diagrams.createDiagram();
        }
        else if (toggleCommuteFlowRenderingMethodViewModel.method == ':cfPolygonsWithLines') {
          alert('Render Polygons and Lines');
        }
        else if (toggleCommuteFlowRenderingMethodViewModel.method == ':cfLines') {
          MapLayers.MSOAs.resetStyleCommuteFlowPolygons();
          MapLayers.CommuteFlows.clearLayer();
          MapLayers.CommuteFlows.renderLayer();
          MapLayers.CommuteFlows.removeInternalCommuteFlowsMsoaLayer();
          MapLayers.CommuteFlows.createInternalCommuteFlowsMsoaLayer();

          statisticsViewModel.show();
          Diagrams.createDiagram();
        }

      },
      error: function(xhr, status, error) {
        Popup.showError(error, status, 'Error getting commute flows.');
      }
    });

  }

};

// ================================================================================
//  View Models.

/**
 * The loaderViewModel provides the data and logic to toggle the visibility of loader.
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
var loaderViewModel = new Vue({

  /**
   * The name of the view model.
   */
  el: '#spinnerVM',

  /**
   * The model of the view model.
   */
  data: {

    /**
     * Indicates whether the spinner is visible or not.
     */
    isVisible: false

  }

});

/**
 * The statisticsViewModel provides the data and logic to render statistics information for the queried MSOA.
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
var statisticsViewModel = new Vue({

  /**
   * The name of the view nodel.
   */
  el: '#statisticsInfoVM',

  /**
   * The model of the view model.
   */
  data: {

    /**
     * Indicates whether the statistics info badge is visible or not.
     */
    isVisible: true,

    /**
     * The code of the queried MSOA.
     */
    msoaCode: 0,

    /**
     * The name in 2011 of the queried MSOA.
     */
    msoa11Nm: '',

    /**
     * The Welsh name in 2011 of the queried MSOA.
     */
    msoa11Nmw: '',

    /**
     * The type of diagram to render on the web page.
     */
    currentDiagramType: ':verticalBar', // :verticalBar, :horizontalBar, :doughnut

    /**
     * Indicates whether the MSOA scatter diagram is visible or not.
     */
    isMsoaScatterDiagramVisible: true,

    /**
     * Indicates whether the descriptive statistics marker lines is visible or not.
     */
    isStatisticsMarkerLinesVisible: true

  },

  /**
   * The methods of the view model.
   */
  methods: {

    /**
     * Shows the current MSOA badge.
     */
    show: function() {
      this.isVisible = true;
    },

    /**
     * Hides the current MSOA badge.
     */
    hide: function() {
      this.isVisible = false;
    },

    /**
     * Sets the current diagram type.
     *
     * @param diagramType - The diagram type.
     */
    setCurrentDiagramType: function(diagramType) {

      this.currentDiagramType = diagramType;

      if (this.currentDiagramType == ':verticalBar') {
        document.getElementById('verticalBarDiagramButton').blur();
      }
      else if (this.currentDiagramType == ':horizontalBar') {
        document.getElementById('horizontalBarDiagramButton').blur();
      }
      else if (this.currentDiagramType == ':doughnut') {
        document.getElementById('doughnutDiagramButton').blur();
      }

      Diagrams.createDiagram();

    },

    /**
     * Toggles the MSOA scatter diagram on/off.
     */
    toggleMsoaScatterDiagram: function(event) {

      this.isMsoaScatterDiagramVisible = !this.isMsoaScatterDiagramVisible;

      document.getElementById('toggleMsoaScatterDiagramButton').blur();

      Diagrams.createDiagram();

    },

    /**
     * Toggles the statistics marker lines on/off.
     */
    toggleStatisticsMarkerLines: function() {

      this.isStatisticsMarkerLinesVisible = !this.isStatisticsMarkerLinesVisible;

      document.getElementById('toggleMarkerLinesDiagramButton').blur();

      Diagrams.createDiagram();

    },

    /**
     * Updates the view with the information of the current MSOA.
     *
     * @param code - The code of the MSOA.
     * @param nm - The name of the MSOA.
     * @param nmw - The name of the MSOA in Welsh.
     */
    updateView: function(code, nm, nmw) {
      if (code < MapLayers.MSOAs.codeRanges.Wales.min) {
        this.msoaCode = code;
        this.msoa11Nm = nm;
        this.msoa11Nmw = '';
      }
      else {
        this.msoaCode = code;
        this.msoa11Nm = nm;
        this.msoa11Nmw = nmw;
      }
    }

  }
});

/**
 * The currentMsoaViewModel provides the data and logic to render information related to the current MSOA on the web page.
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
var currentMsoaViewModel = new Vue({

  /**
   * The name of the view nodel.
   */
  el: '#currentMsoaInfoVM',

  /**
   * The model of the view model.
   */
  data: {

    /**
     * Indicates whether the current MSOA badge is visible or not.
     */
    isVisible: false,

    /**
     * The code of the current MSOA.
     */
    currentMsoaCode: null,

    /**
     * The name in 2011 of the current MSOA.
     */
    currentMsoa11Nm: '',

    /**
     * The Welsh name in 2011 of the current MSOA.
     */
    currentMsoa11Nmw: ''

  },

  /**
   * The methods of the view model.
   */
  methods: {

    /**
     * Shows the current MSOA badge.
     */
    show: function() {
      if (!this.isVisible) {
        this.isVisible = true;
      }
    },

    /**
     * Hides the current MSOA badge.
     */
    hide: function() {
      this.isVisible = false;
    },

    /**
     * Updates the view with the information of the current MSOA.
     *
     * @param code - The code of the MSOA.
     * @param nm - The name of the MSOA.
     * @param nmw - The name of the MSOA in Welsh.
     */
    updateView: function(code, nm, nmw) {
      let msoaCode = MapLayers.MSOAs.getMsoaString(code);

      if (code < MapLayers.MSOAs.codeRanges.Wales.min) {
        // This is an English MSOA.
        this.currentMsoaCode = msoaCode;
        this.currentMsoa11Nm = nm;
        this.currentMsoa11Nmw = '';
      }
      else {
        // This is a Welsh MSOA.
        this.currentMsoaCode = msoaCode;
        this.currentMsoa11Nm = nm;
        if (this.currentMsoa11Nm != nmw) {
          // Show the Welsh name as well.
          this.currentMsoa11Nmw = nmw;
        }
      }
    }

  }
});

/**
 * The toggleBaseMapViewModel provides tha data and logic to toggle the BaseMap layer.
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
var toggleBaseMapViewModel = new Vue({

  /**
   * The name of the view model.
   */
  el: '#toggleBaseMapButtonsVM',

  /**
   * The model of the view model.
   */
  data: {

    /**
     * The current base map.
     */
    currentBaseMap: 'dark',

    /**
     * The basemap names.
     */
    baseMapNames: [ 'Dark', 'Light', 'Roads' ]

  },

  /**
   * The model of the view model.
   */
  methods: {

    /**
     * Sets the current basemap.
     *
     * @param namedBaseMap - The named basemap.
     */
    setCurrentBaseMap(namedBaseMap) {

      // Remove the current basemap layer.
      Spatial.map.removeLayer(BaseMapLayers.namedBasemapLayers[this.currentBaseMap].mapLayer);

      this.currentBaseMap = namedBaseMap;

      // Add the new current basemap layer.
      let baseLayer = BaseMapLayers.namedBasemapLayers[this.currentBaseMap].mapLayer;

      baseLayer.addTo(Spatial.map);
      baseLayer.bringToBack();

      // Make sure the associated styles for MSOAs layer is applied.
      MapLayers.MSOAs.mapLayer.options.style = MapLayers.MSOAs.namedBasemapLayers[namedBaseMap].style;
      MapLayers.MSOAs.mapLayer.setStyle(MapLayers.MSOAs.namedBasemapLayers[namedBaseMap].style);

      //MapLayers.MSOAs.renderCommuteFlowPolygons();
      Spatial.renderCommuteFlows();

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

  /**
   * The name of the view model.
   */
  el: '#toggleRW2WRCommuteFlowsButtonsVM',

  /**
   * The model of the view model.
   */
  data: {

    /**
     * The value of the query field. Valid values are: rc | wc
     */
    queryField: 'rc',

    /**
     * The dictionary of the other field name.
     * It is used to retrieve the unused MSOA code field name based on the query field that has been set.
     */
    unusedMsoaFieldDictionary: {
      'rc': 'wc',
      'wc': 'rc'
    },

    /**
     * The argument used to submit a filter in the remote geospatial server.
     */
    filterArgument: '&cql_filter=rc='

  },

  /**
   * The methods of the view model.
   */
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
 * The groupSetContentViewModel provides the data and logic to deal with toggling supergroups and groups
 * as well as rendering the commute flows.
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
var groupSetContentViewModel = new Vue({

  /**
   * The name of the view model.
   */
  el: '#groupSetContentVM',

  /**
   * The model of the view model.
   */
  data: {

    /**
     * Indicates whether the super groups tab is selected or not.
     */
    isSuperGroupSelected: true,

    /**
     * The array having the super groups that have been selected.
     */
    checkedSuperGroups: [],

    /**
     * The array having the groups that have been selected.
     */
    checkedGroups: [],

    /**
     * The super groups dictionary.
     */
    superGroups: MapLayers.CommuteFlows.superGroups,

    /**
     * The groups dictionary.
     */
    groups: MapLayers.CommuteFlows.groups

  },

  /**
   * The methods of the view model.
   */
  methods: {

    /**
     * Sets the group set visualization method.
     */
    setGroupVisualization: function(isSuperGroup) {
      this.isSuperGroupSelected = isSuperGroup;
      Spatial.renderCommuteFlows();
    },

    /**
     * Gets an array with all selected groups. This is not bound to the supergroups or the groups tab.
     * This is to be called by any function that wants the active tab 's selected groups as an array.
     *
     * @returns {Array} - An array with the selected groups of the active tab.
     */
    getActiveTabSelectedGroups() {

      let gs = [];

      // Check out whether the super groups tab or groups tab is selected by the use and create
      // a local array with all the selected group codes that will be used to render polygons.
      if (this.isSuperGroupSelected) {
        for (i = 0; i < this.checkedSuperGroups.length; i++) {
          gsChunk = MapLayers.CommuteFlows.superGroups[this.checkedSuperGroups[i]].groups;

          for (j = 0; j < gsChunk.length; j++) {
            gs.push(gsChunk[j]);
          }
        }
      }
      else {
        for (i = 0; i < this.checkedGroups.length; i++) {
          gs.push(this.checkedGroups[i]);
        }
      }

      return gs;

    },

    /**
     * Selects all the commute flow super groups or groups.
     */
    selectAll: function() {
      if (this.isSuperGroupSelected) {
        this.checkedSuperGroups = [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
      }
      else {
        this.checkedGroups = [
          '11', '12', '13', '14', '15',
          '21', '22', '23',
          '31', '32', '33', '34', '35',
          '41', '42', '43',
          '51', '52', '53', '54', '55',
          '61', '62', '63', '64', '65',
          '71', '72', '73', '74', '75',
          '81', '82', '83', '84', '85',
          '91', '92', '93', '94'
        ];
      }
      Spatial.renderCommuteFlows();
    },

    /**
     * Deselects all the commute flow super groups or groups.
     */
    deselectAll: function() {
      if (this.isSuperGroupSelected) {
        this.checkedSuperGroups = [];
      }
      else {
        this.checkedGroups = [];
      }
      Spatial.renderCommuteFlows();
    },

    /**
     * Toggles the selection of all the groups of a super group.
     * @param supergroup - The super group whose groupset will be selected.
     */
    toggleGroupSet: function(supergroup) {

      // Check if the groups will be selected or deselected.
      let performSelect = false;

      let groups = MapLayers.CommuteFlows.superGroups[supergroup.toString()].groups;

      if (groups != undefined || groups != null) {
        for (let i = 0; i < groups.length; i++) {
          let group = groups[i].toString();

          if ($.inArray(group, this.checkedGroups) == -1) {
            // The group was not found in the set of selected ones.
            // Perform a select operation.
            performSelect = true;
            break;
          }
        }
      }

      if (performSelect) {
        let groupsToPush = [];

        for (let i = 0; i < groups.length; i++) {
          let group = groups[i].toString();

          if ($.inArray(group, this.checkedGroups) == -1) {
            groupsToPush.push(group);
          }
        }

        for (let i = 0; i < groupsToPush.length; i++) {
          this.checkedGroups.push(groupsToPush[i]);
        }
      }
      else {
        let groupsToRemove = [];

        for (let i = 0; i < groups.length; i++) {
          let group = groups[i].toString();

          if ($.inArray(group, this.checkedGroups) != -1) {
            groupsToRemove.push(group);
          }
        }

        for (let i = 0; i < groupsToRemove.length; i++) {
          this.checkedGroups.splice( $.inArray(groupsToRemove[i], this.checkedGroups), 1 );
        }
      }

      // Render the commute flows.
      Spatial.renderCommuteFlows();

    },

    /**
     * Renders the commute flows.
     */
    renderCommuteFlows: function() {
      Spatial.renderCommuteFlows();
    }

  }

});

/**
 * The toggleCommuteFlowRenderingMethodViewModel provides the data and logic
 * to toggle the method that is used to render the commute flows.
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
var toggleCommuteFlowRenderingMethodViewModel = new Vue({

  /**
   * The name of the view model.
   */
  el: '#toggleCommuteFlowRenderingMethodButtonsVM',

  /**
   * The model of the view model.
   */
  data: {

    /**
     * The method used to render the commute flows.
     * Valid values are: :cfPolygons | :cfPolygonsWithLines | :cfLines
     */
    method: ':cfPolygons'

  },

  /**
   * The methods of the view model.
   */
  methods: {

    /**
     * Toggles the method used to render the commute flows.
     *
     * @param renderingMethod - The method that will be used to render the commute flows.
     */
    setCommuteFlowRenderingMethod: function(renderingMethod) {

      // Set the method.
      this.method = renderingMethod;

      // Render the commute flows.
      Spatial.renderCommuteFlows();

    }

  }

});

//
// ================================================================================

// ================================================================================
//  Main Body

Spatial.initializeMap();

//
// ================================================================================

