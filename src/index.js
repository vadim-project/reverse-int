module.exports = function reverse (n) {
    let g = n.toString();
    var result = '';
    for (var i = g.length - 1; i >= 0; i--) {
        result += g[i];
    }
    return parseInt(result);
}
