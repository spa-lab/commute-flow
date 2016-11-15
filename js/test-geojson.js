
// TMS
// http://maps.humanities.manchester.ac.uk:8090/geoserver/gwc/service/tms/1.0.0/
// http://maps.humanities.manchester.ac.uk:8090/geoserver/gwc/service/tms/1.0.0/commute-flow%3Amsoa_qc-epsg-3857@EPSG%3A900913@png
// 
// http://maps.humanities.manchester.ac.uk:8090/geoserver/gwc/demo/commute-flow:msoa_qc-epsg-3857
// var tms_ne = L.tileLayer('http://demo.opengeo.org/geoserver/gwc/service/tms/1.0.0/ne:ne@EPSG:900913@png/{z}/{x}/{y}.png', {
// var tms_cf = L.tileLayer('http://maps.humanities.manchester.ac.uk:8090/geoserver/gwc/service/tms/1.0.0/commute-flow%3Amsoa_qc-epsg-3857/{z}/{x}/{y}.png', {
// var tms_cf = L.tileLayer('http://maps.humanities.manchester.ac.uk:8090/geoserver/gwc/demo/commute-flow:msoa_qc-epsg-3857/{z}/{x}/{y}.png', {
// var tms_msoa = L.tileLayer('http://maps.humanities.manchester.ac.uk:8090/geoserver/gwc/service/tms/1.0.0/commute-flow%3Amsoa_qc-epsg-3857@EPSG%3A900913@png/{z}/{x}/{y}.png', {

//GeoJSON
// http://maps.humanities.manchester.ac.uk:8090/geoserver/commute-flow/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=commute-flow:commute-flow-thin-11-epsg-3857&maxFeatures=50&outputFormat=application%2Fjson
// commute-flow:commute-flow-thin-11-epsg-3857

//http://maps.humanities.manchester.ac.uk:8090/geoserver/commute-flow/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=commute-flow:commute-flow-thin-1_epsg_4326&maxFeatures=50&outputFormat=application%2Fjson

// %3A
// 
// http://maps.humanities.manchester.ac.uk:8090/geoserver/commute-flow/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=commute-flow:commute-flow-thin-epsg-4326&maxFeatures=50&outputFormat=application%2Fjson
// 

// http://maps.humanities.manchester.ac.uk:8090/geoserver/commute-flow/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=commute-flow:commute-flow-thin-epsg-4326&cql_filter=rc=102003570&maxFeatures=50&outputFormat=application%2Fjson

// http://maps.humanities.manchester.ac.uk:8090/geoserver/commute-flow/ows?
// service=WFS&
// version=1.0.0&
// request=GetFeature&
// typeName=commute-flow:commute-flow-thin-epsg-4326&
// cql_filter=rc=102003570
// maxFeatures=50&
// outputFormat=application%2Fjson


var tmsBaseUrl = 'http://maps.humanities.manchester.ac.uk:8090/geoserver/gwc/service/tms/1.0.0/';
var tmsTail = '@EPSG:900913@png/{z}/{x}/{y}.png';

var vectorBaseUrl = 'http://maps.humanities.manchester.ac.uk:8090/geoserver/commute-flow/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=';
var vectorFilterUrl = "&cql_filter=rc=102003570";
var vectorTail = '&outputFormat=application/json';

var vectorLayers = [
  { index: 0,  key: 'commute flow',    name: 'commute-flow:commute-flow-thin-epsg-4326',    geoJSON: null },
  { index: 1,  key: 'commute flow 1',  name: 'commute-flow:commute-flow-thin-1-epsg-4326',  geoJSON: null },
  { index: 11, key: 'commute flow 11', name: 'commute-flow:commute-flow-thin-11-epsg-3857', geoJSON: null },
  { index: 12, key: 'commute flow 12', name: 'commute-flow:commute-flow-thin-12-epsg-3857', geoJSON: null },
  { index: 13, key: 'commute flow 13', name: 'commute-flow:commute-flow-thin-13-epsg-3857', geoJSON: null },
  { index: 2,  key: 'commute flow 2',  name: 'commute-flow:commute-flow-thin-2-epsg-3857',  geoJSON: null },
  { index: 21, key: 'commute flow 21', name: 'commute-flow:commute-flow-thin-21-epsg-3857', geoJSON: null },
  { index: 22, key: 'commute flow 22', name: 'commute-flow:commute-flow-thin-22-epsg-3857', geoJSON: null },
  { index: 23, key: 'commute flow 23', name: 'commute-flow:commute-flow-thin-23-epsg-3857', geoJSON: null },
  { index: 24, key: 'commute flow 24', name: 'commute-flow:commute-flow-thin-24-epsg-3857', geoJSON: null },
  { index: 25, key: 'commute flow 25', name: 'commute-flow:commute-flow-thin-25-epsg-3857', geoJSON: null },
  { index: 3,  key: 'commute flow 3',  name: 'commute-flow:commute-flow-thin-3-epsg-3857',  geoJSON: null },
  { index: 31, key: 'commute flow 31', name: 'commute-flow:commute-flow-thin-31-epsg-3857', geoJSON: null },
  { index: 32, key: 'commute flow 32', name: 'commute-flow:commute-flow-thin-32-epsg-3857', geoJSON: null },
  { index: 33, key: 'commute flow 33', name: 'commute-flow:commute-flow-thin-33-epsg-3857', geoJSON: null },
  { index: 4,  key: 'commute flow 4',  name: 'commute-flow:commute-flow-thin-4-epsg-3857',  geoJSON: null },
  { index: 41, key: 'commute flow 41', name: 'commute-flow:commute-flow-thin-41-epsg-3857', geoJSON: null },
  { index: 42, key: 'commute flow 42', name: 'commute-flow:commute-flow-thin-42-epsg-3857', geoJSON: null },
  { index: 43, key: 'commute flow 43', name: 'commute-flow:commute-flow-thin-43-epsg-3857', geoJSON: null },
  { index: 44, key: 'commute flow 44', name: 'commute-flow:commute-flow-thin-44-epsg-3857', geoJSON: null },
  { index: 5,  key: 'commute flow 5',  name: 'commute-flow:commute-flow-thin-5-epsg-3857',  geoJSON: null },
  { index: 51, key: 'commute flow 51', name: 'commute-flow:commute-flow-thin-51-epsg-3857', geoJSON: null },
  { index: 52, key: 'commute flow 52', name: 'commute-flow:commute-flow-thin-52-epsg-3857', geoJSON: null },
  { index: 53, key: 'commute flow 53', name: 'commute-flow:commute-flow-thin-53-epsg-3857', geoJSON: null },
  { index: 6,  key: 'commute flow 6',  name: 'commute-flow:commute-flow-thin-6-epsg-3857',  geoJSON: null },
  { index: 61, key: 'commute flow 61', name: 'commute-flow:commute-flow-thin-61-epsg-3857', geoJSON: null },
  { index: 62, key: 'commute flow 62', name: 'commute-flow:commute-flow-thin-62-epsg-3857', geoJSON: null },
  { index: 63, key: 'commute flow 63', name: 'commute-flow:commute-flow-thin-63-epsg-3857', geoJSON: null },
  { index: 64, key: 'commute flow 64', name: 'commute-flow:commute-flow-thin-64-epsg-3857', geoJSON: null },
  { index: 7,  key: 'commute flow 7',  name: 'commute-flow:commute-flow-thin-7-epsg-3857',  geoJSON: null },
  { index: 71, key: 'commute flow 71', name: 'commute-flow:commute-flow-thin-71-epsg-3857', geoJSON: null },
  { index: 72, key: 'commute flow 72', name: 'commute-flow:commute-flow-thin-72-epsg-3857', geoJSON: null },
  { index: 73, key: 'commute flow 73', name: 'commute-flow:commute-flow-thin-73-epsg-3857', geoJSON: null },
  { index: 74, key: 'commute flow 74', name: 'commute-flow:commute-flow-thin-74-epsg-3857', geoJSON: null },
  { index: 75, key: 'commute flow 75', name: 'commute-flow:commute-flow-thin-75-epsg-3857', geoJSON: null },
  { index: 8,  key: 'commute flow 8',  name: 'commute-flow:commute-flow-thin-8-epsg-3857',  geoJSON: null },
  { index: 81, key: 'commute flow 81', name: 'commute-flow:commute-flow-thin-81-epsg-3857', geoJSON: null },
  { index: 82, key: 'commute flow 82', name: 'commute-flow:commute-flow-thin-82-epsg-3857', geoJSON: null },
  { index: 83, key: 'commute flow 83', name: 'commute-flow:commute-flow-thin-83-epsg-3857', geoJSON: null },
  { index: 84, key: 'commute flow 84', name: 'commute-flow:commute-flow-thin-84-epsg-3857', geoJSON: null },
  { index: 9,  key: 'commute flow 9',  name: 'commute-flow:commute-flow-thin-9-epsg-3857',  geoJSON: null },
  { index: 91, key: 'commute flow 91', name: 'commute-flow:commute-flow-thin-91-epsg-3857', geoJSON: null },
  { index: 92, key: 'commute flow 92', name: 'commute-flow:commute-flow-thin-92-epsg-3857', geoJSON: null },
  { index: 93, key: 'commute flow 93', name: 'commute-flow:commute-flow-thin-93-epsg-3857', geoJSON: null }
];


var map = L.map('map', {
  center: [52.7, -2],
  zoom: 6
});

// for (var i = 0; i < vectorLayers.length; i++) {
//   vectorLayers[i].geoJSON = L.tileLayer(vectorBaseUrl + vectorLayers[i].name + vectorTail, {
//     tms: true
//   });
// }


// var msoaBaseMapLayer = L.tileLayer(tmsBaseUrl + 'commute-flow:msoa_qc-epsg-3857' + tmsTail, {
//   tms: true
// }).addTo(map);

var msoaBaseMapLayer = null;
var layers = {};


renderMsoaBaseMapLayer();
getLayer(0);


function renderMsoaBaseMapLayer() {

  msoaBaseMapLayer = L.geoJson(msoaQcGeoJson, {
    style: function(feature) {
      return {
        stroke: true,
        color: '#dcdcdc',
        weight: 0.5,
        opacity: 1,
        fillOpacity: 0
      }
    },
    onEachFeature: function(feature, layer) {
      var popupDiv = '<div><table><tbody>' + 
                     '<tr><th>Primary Key: </th><td>' + feature.properties.MSOA11NM + '</td></tr>' +
                     '<tr><th>Residential Code: </th><td>' + feature.properties.MSOA11NMW + '</td></tr>' +
                     '<tr><th>Workplace Code: </th><td>' + feature.properties.CODE + '</td></tr>' +
                     '</tbody></table></div>';

      layer.bindPopup(popupDiv);
    }
    // filter: function(feature, layer) {
    //   return feature.properties.rc == 102003570;
    // }
  }).addTo(map);

};

function getLayer(index) {
  
  var lyr = vectorLayers.filter(l => l.index == index)[0];

  var url = vectorBaseUrl + lyr.name + vectorFilterUrl + vectorTail;

  $.ajax({
    url: url,
    type: 'GET',
    crossDomain: true,
    dataType: 'json', // "xml", "json"
    success: function(result) {

      lyr.geoJSON = result;

      renderLayer(lyr);

      addLayerControl();

    },
    error: function(xhr, status, error) {

      alert(
        'An error has occured while getting layer' + '\r\n\r\n' +
        'Status: ' + status + ' ' + error.status + ' ' + error.statusText + '\r\n' +
        'Result:\r\n' + JSON.stringify(error.responseJSON)
      );

    }
  });
  
  // $.get(url, function(result, status) {
    
  //   lyr.geoJSON = result;

  //   layers[lyr.key] = lyr.geoJSON;
    
  // }).fail(function(error, status) {
    
  //   alert(
  //     'An error has occured while getting layer' + '\r\n\r\n' +
  //     'Status: ' + status + ' ' + error.status + ' ' + error.statusText + '\r\n' +
  //     'Result:\r\n' + JSON.stringify(error.responseJSON)
  //   );
    
  // });
  
};

function renderLayer(vectorLayer) {

  layers[vectorLayer.key] = L.geoJson(vectorLayer.geoJSON, {
    style: function(feature) {
      return {
        stroke: true,
        color: '#e31a1c',
        weight: 3,
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
    },
    filter: function(feature, layer) {
      return feature.properties.rc == 102003570;
    }
  });

};

function addLayerControl() {

  var osmBaseMapLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    tms: false
  });

  var baseMaps = {
    'MSOAs': msoaBaseMapLayer,
    'OpenStreetMap': osmBaseMapLayer
  };

  L.control.layers(baseMaps, layers, {collapsed: false}).addTo(map);

  map.on('overlayadd', function(e) {
    e.layer.bringToFront();
  });

  map.on('overlayremove', function(e) {
    e.layer.bringToFront();
  });

  map.on('baselayerchange', function(e) {
    e.layer.bringToBack();
  })

};
















