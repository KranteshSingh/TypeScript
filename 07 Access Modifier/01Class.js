// defining a class
var MobilePhone = /** @class */ (function () {
    // a constructor which is used to initialize a class fields.
    function MobilePhone(screenSizeCustom, RAMCustom, processorCustom, cameraCustom, batteryCustom, operatingSystemCustom) {
        var _this = this;
        // getter is a method which is accessible to outside world
        this.getScreenSize = function () {
            return _this.screenSize;
        };
        // a method which is accessible to outside world
        this.getOperatingSystem = function () {
            return _this.operatingSystem;
        };
        this.getCameraPixels = function () {
            return _this.camera;
        };
        this.setCameraPixels = function (pixels) {
            _this.camera = pixels;
        };
        this.screenSize = screenSizeCustom;
        this.RAM = RAMCustom;
        this.processor = processorCustom;
        this.camera = cameraCustom;
        this.battery = batteryCustom;
        this.operatingSystem = operatingSystemCustom;
    } // end constructor
    return MobilePhone;
}()); // end class
var j7Max = new MobilePhone("5.7 inch", "4 GB", "MediaTek", 12, 3300, "Android");
var os = j7Max.getOperatingSystem();
console.log(os);
// j7Max.operatingSystem = "IOS"
console.log(j7Max.getScreenSize());
// try to print the existing camera
console.log(j7Max.getCameraPixels());
// try to modify the value of camera
j7Max.setCameraPixels(25);
console.log(j7Max.getCameraPixels());
