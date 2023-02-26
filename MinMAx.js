var Pair = /** @class */ (function () {
    function Pair() {
        this.m = NaN;
        this.M = NaN;
    }
    /**
     * minmax
     */
    Pair.prototype.minmax = function (arr) {
        var n = arr.length;
        var i;
        if (n == 1) {
            this.m = arr[0];
            this.M = arr[0];
        }
        if (arr[0] > arr[1]) {
            this.m = arr[1];
            this.M = arr[0];
        }
        else {
            this.m = arr[0];
            this.M = arr[1];
        }
        for (i = 2; i < n; i++) {
            if (arr[i] > this.M)
                this.M = arr[i];
            else if (arr[i] < this.m)
                this.m = arr[i];
        }
    };
    return Pair;
}());

var as = new Pair();
as.minmax([1000, 11, 445, 1, 330, 3000]);
console.log(as.m, as.M);
