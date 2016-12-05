
// ================================================================================
//  University of Manchester. UK.
//  School of Environment, Education, and Development.
//  Spatial Policy Analysis Laboratory.
//  
//  Name:            shared.js
//  Original coding: Vasilis Vlastaras (@gisvlasta), 18/08/2016.
// 
//  Description:     Provides functionality shared by more than one webpages.
// ================================================================================

var UserAgent = null;

/**
 * The Popup object displays message popups on the screen. 
 */
var Popup = {
  
  /**
   * Shows an error popup window.
   * 
   * @param  {any} error - The error occurred.
   * @param  {any} status - The status of the response.
   * @param  {string} status - The message displayed on the header of the error popup window.
   */
  showError: function(error, status, errorHeader) {
    
    var headerCaption = '<span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>  ' + errorHeader;
    
    $('#popupHeader').empty();
    $('#popupHeader').append(headerCaption);
    
    var errorPopupBody = '<div><b>Response Status:</b> ' + status + '</div>' +
                         '<div><b>Error:</b> ' + error.message + '</div><br>';
    
    $('#popupBody').empty();
    $('#popupBody').append(errorPopupBody);
    
    $('#popup').modal('show');
    
  },
  
  /**
   * Shows a warning popup window.
   * 
   * @param  {string} headerContent - The content displayed in the header of the popup.
   * @param  {string} bodyContent - The content displayed in the body of the popup.
   */
  showWarning: function(headerContent, bodyContent) {
    
    var headerCaption = '<span class="glyphicon glyphicon-warning-sign" aria-hidden="true"></span>  ' + headerContent;
    
    $('#popupHeader').empty();
    $('#popupHeader').append(headerCaption);
    
    $('#popupBody').empty();
    $('#popupBody').append(bodyContent);
    
    $('#popup').modal('show');
    
  },
  
  /**
   * Shows an information popup window.
   * 
   * @param  {string} headerContent - The content displayed in the header of the popup.
   * @param  {string} bodyContent - The content displayed in the body of the popup.
   */
  showInfo: function (headerContent, bodyContent) {
    
    var headerCaption = '<span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>  ' + headerContent;
    
    $('#popupHeader').empty();
    $('#popupHeader').append(headerCaption);
    
    $('#popupBody').empty();
    $('#popupBody').append(bodyContent);
    
    $('#popup').modal('show');
    
  }
  
};

/**
 * Raised upon load of the web page.
 * 
 * @param  {any} function() - The function to be executed upon load of the web page.
 */
$(window).load(function() {
  
  // Checks the browser information and displays appropriate messages 
  // when the browser is not supported by the application.
  
  var ua = detect.parse(navigator.userAgent);
  UserAgent = ua;
  
  message = '<p>It is recommended to use a Chrome version higher than 49.0.0</p>'
  
  if (ua.browser.family == "Chrome") {
    if (ua.browser.major < 49  && ua.browser.minor >= 0 && ua.browser.patch >= 0) {
      Popup.showWarning('Google Chrome version ' + ua.browser.major + '.' + ua.browser.minor + '.' + ua.browser.patch + ' detected', message);
    }
  }
  else if (ua.browser.family == "Firefox") {
    if (ua.browser.major < 46  && ua.browser.minor >= 0) {
      message = 'You are using an old version (' +
                    ua.browser.major + '.' +
                    ua.browser.minor +
                ') of Mozilla Firefox.<br><br>' +
                'It is recommended to download and install the current version of Mozilla Firefox or <br>' +
                'use another modern browser of your choice in order to access this web page. <br><br>';
                
      Popup.showWarning('Mozilla Firefox version ' + ua.browser.major + '.' + ua.browser.minor + ' detected', message);
    }
  }
  else if (ua.browser.family == "IE") {
    message = 'Do you know that Microsoft has stopped development of Internet Explorer? <br><br>' +
              '<b>This web application needs a modern browser to run.</b> <br><br>' +
              'You can use Microsoft \'s new browser called <b>"Edge"</b>, or <br>' +
              'you can use the latest version of <b>Google Chrome</b> or <b>Mozilla Firefox.</b> <br><br>';
                  
    Popup.showWarning('Internet Explorer version ' + ua.browser.major + '.' + ua.browser.minor + ' detected', message);
  }
    
});

// function checkBrowserInfo() {
  
//   var ua = detect.parse(navigator.userAgent);
//   message = 'It is better to use a Chrome version bigger than 49.0.0'
  
//   if (ua.browser.family == "Chrome") {
//     alert('chrome');
//     if (ua.browser.major < 49  && ua.browser.minor <= 0 && ua.browser.patch <= 0) {
//       alert(message);
//     }
//   }
//   else if (ua.browser.family == "Firefox") {
//     if (ua.browser.major < 49  && ua.browser.minor <= 0 && ua.browser.patch <= 0) {
//       message = 'You are using an old version (' +
//                   ua.browser.major + '.' +
//                   ua.browser.minor +
//                 ') of Mozilla Firefox.\r\n\r\n' +
//                 'Download and install the current version of Mozilla Firefox or use another modern browser of your choice in order to access this web page.';
//       alert(message);
//     }
//   }
//   else if (ua.browser.family == "IE") {
//     message = 'Did you know that Microsoft has stopped development of Internet Explorer?\r\n\r\n' +
//               'This web application needs a modern browser to run.\r\n\r\n' +
//               'You can use Microsoft \'s new browser called Edge, or you can use the latest version of Google Chrome or Mozilla Firefox.';
//       alert(message);
//   }
      
// }
