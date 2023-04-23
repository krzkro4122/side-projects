"use strict";
exports.__esModule = true;
function bs(haystack, needle) {
    var lo = 0;
    var hi = haystack.length;
    do {
        var m = Math.floor(lo + (lo + hi) / 2);
        var v = haystack[m];
        if (v === needle) {
            return true;
        }
        else if (v > needle) {
            hi = m;
        }
        else {
            lo = m + 1;
        }
    } while (lo < hi);
    return false;
}
exports["default"] = bs;
function test_bs() {
    console.log("True?: ".concat(bs([1, 2, 3, 4, 5], 3)));
    console.log("False?: ".concat(bs([1, 2, 3, 4, 5], 310)));
    console.log("False?: ".concat(bs([1, 2, 3, 4, 5], 0)));
}
test_bs();
