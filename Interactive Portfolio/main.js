function openURL(url) {
    var shell = new ActiveXObject("WScript.Shell");
    shell.run(url);
}

function openFile(filepath) {
    var relpath = window.location.pathname.replace(/\\/g,'/').split('/');
    relpath.pop();// JScript: relpath.length = relpath.length - 1;
    relpath = relpath.join('/') + '/';
    
    var fullpath = relpath + filepath;
    
    var oShell = new ActiveXObject("Shell.Application");
    var commandtoRun = fullpath; 
    oShell.ShellExecute(commandtoRun,"","","open","1");
}

document.getElementsByClassName = function (className) {// Get a list of all elements in the document
    // For IE
    if (document.all) {
        var allElements = document.all;
    } else {
        var allElements = document.getElementsByTagName("*");
    }
    
    // Empty placeholder to put in the found elements with the class name
    var foundElements = [];
    
    for (var i = 0, ii = allElements.length; i < ii; i++) {
        if (allElements[i].className == className) {
            foundElements[foundElements.length] = allElements[i];
        }
    }
    
    return foundElements;
}

var hookEvent = (function() {
    var div;
    
    // The function we use on standard-compliant browsers
    function standardHookEvent(element, eventName, handler) {
        element.addEventListener(eventName, handler, false);
        return element;
    }
    
    // The function we use on browsers with the previous Microsoft-specific mechanism
    function oldIEHookEvent(element, eventName, handler) {
        element.attachEvent("on" + eventName, function(e) {
            e = e || window.event;
            e.preventDefault = oldIEPreventDefault;
            e.stopPropagation = oldIEStopPropagation;
            handler.call(element, e);
        });
        return element;
    }
    
    // Polyfill for preventDefault on old IE
    function oldIEPreventDefault() {
        this.returnValue = false;
    }
    
    // Polyfill for stopPropagation on old IE
    function oldIEStopPropagation() {
        this.cancelBubble = true;
    }
    
    // Return the appropriate function; we don't rely on document.body
    // here just in case someone wants to use this within the head
    div = document.createElement('div');
    if (div.addEventListener) {
        div = undefined;
        return standardHookEvent;
    }
    if (div.attachEvent) {
        div = undefined;
        return oldIEHookEvent;
    }
    throw "Neither modern event mechanism (addEventListener nor attachEvent) is supported by this browser.";
})();

function nextElementSibling( el ) {
    do { el = el.nextSibling } while ( el && el.nodeType !== 1 );
    return el;
}

function hasClass(elem, klass) {
    return (" " + elem.className + " ").indexOf(" " + klass + " ") > -1;
}