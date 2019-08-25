var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        // ..
        console.log('x: ' + this.x + 'y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // ..
    };
    return Point;
}());
var point = new Point();
point.draw();
