// format used to parse WFS GetFeature responses
var geojsonFormat = new ol.format.GeoJSON();

var vectorSource = new ol.source.Vector({
  loader: function(extent, resolution, projection) {
    var url = 'http://demo.boundlessgeo.com/geoserver/wfs?service=WFS&' +
        'version=1.1.0&request=GetFeature&typename=osm:water_areas&' +
        'outputFormat=text/javascript&format_options=callback:loadFeatures' +
        '&srsname=EPSG:3857&bbox=' + extent.join(',') + ',EPSG:3857';
    // use jsonp: false to prevent jQuery from adding the "callback"
    // parameter to the URL
    $.ajax({url: url, dataType: 'jsonp', jsonp: false});
  },
  strategy: ol.loadingstrategy.tile(ol.tilegrid.createXYZ({
    maxZoom: 19
  }))
});

/**
 * JSONP WFS callback function.
 * @param {Object} response The response object.
 */
window.loadFeatures = function(response) {
  vectorSource.addFeatures(geojsonFormat.readFeatures(response));
};

var vector = new ol.layer.Vector({
  source: vectorSource,
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'rgba(0, 0, 255, 1.0)',
      width: 2
    })
  })
});

var osmLayer =  new ol.layer.Tile({
    source: new ol.source.OSM()
})

var raster = new ol.layer.Tile({
  source: new ol.source.BingMaps({
    imagerySet: 'Aerial',
    key: 'Ak-dzM4wZjSqTlzveKz5u0d4IQ4bRzVI309GxmkgSVr1ewS6iPSrOvOKhA-CJlm3'
  })
});

var map = new ol.Map({
  layers: [osmLayer, raster, vector],
  target: document.getElementById('map'),
  view: new ol.View({
    center: [-8908887.277395891, 5381918.072437216],
    maxZoom: 19,
    zoom: 12
  })
});

// var map = new ol.Map({
//     target: 'map',
//     layers: [
//         new ol.layer.Tile({
//             source: new ol.source.OSM()
//         })
//     ],
//     view: new ol.View({
//         center: ol.proj.transform([7, 51.2], 'EPSG:4326', 'EPSG:3857'),
//         zoom: 4
//     })
// });
var sidebar = $('#sidebar').sidebar();
