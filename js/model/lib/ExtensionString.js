String.prototype.hexEncode = function () {
    var hex, i;

    var clePossible = "";
    for (i = 0; i < this.length; i++) {
            hex = this.charCodeAt(i).toString(16);
            clePossible += ("000" + hex).slice(-4);
    }

    return clePossible
}
String.prototype.hexDecode = function () {
    var j;
    var hexes = this.match(/.{1,4}/g) || [];
    var back = "";
    for (j = 0; j < hexes.length; j++) {
            back += String.fromCharCode(parseInt(hexes[j], 16));
    }

    return back;
}