"use strict";
exports.__esModule = true;
function ipv4(text) {
    var ipRegex = /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/gi;
    var match = text.match(ipRegex); //?
    return match;
}
exports.ipv4 = ipv4;
function email(text) {
    var emailRegex = /\b([^.\s][a-z0-9.+-]+@[a-z0-9.-]+\.[a-z-]{2,24})/g;
    var match = text.match(emailRegex); //?
    return match;
}
exports.email = email;
function url(text) {
    var urlRegex = /\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;
    var match = text.match(urlRegex);
    return match;
}
exports.url = url;
