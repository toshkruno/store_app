var scriptVars=document.querySelector('script[src*="ltkJS.js"]'),config=scriptVars.getAttribute("ltk-data");void 0===config&&(config="");var biJsHost="https:"===document.location.protocol?"https://":"http://";!function(t,e,c,r,s){var i,o=t.getElementsByTagName(e)[0];t.getElementById(c)||((i=t.createElement(e)).id=c,i.src=biJsHost+"cdn.listrakbi.com/scripts/script.js?m="+r+"&v=1",o.parentNode.insertBefore(i,o))}(document,"script","ltkSDK",config);