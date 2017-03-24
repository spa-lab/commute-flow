
// ================================================================================
//   Singleton Objects

/**
 * Holds all the objects related to spatial operations.
 */
var Spatial = {

  /**
   * The member variables of thsi application.
   */
  Members: {

    /**
     * The web page sidebar name.
     */
    sidebarName: 'sidebar',

    /**
     * The webpage sidebar position.
     */
    sidebarPosition: 'right',

  },

  /**
   * Leaflet related properties.
   */
  Leaflet: {

    /**
     * The sidebar of the map.
     */
    sidebar: null,

  },

  /**
   * Initializes the map.
   */
  initializeMap: function() {

    // Create the sidebar and add it on the map.
    Spatial.Leaflet.sidebar = L.control.sidebar(Spatial.Members.sidebarName, {position: Spatial.Members.sidebarPosition});
    Spatial.Leaflet.sidebar.addTo(Spatial.Leaflet.map);

  }

};

// ================================================================================

// ================================================================================
//   Webpage Events.

/**
 * Raised once the web page is ready.
 *
 * @param  {any} function() - The function to be executed once the document is ready.
 */
$(document).ready(function() {

  Spatial.initializeMap();

});

// ================================================================================