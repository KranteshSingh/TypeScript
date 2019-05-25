// defining a class
class MobilePhone {

    //Properties or Fields
    private screenSize: string;
    private RAM: string;
    private processor: string;
    private camera: number //
    private battery: number
    private operatingSystem: string

    // a constructor which is used to initialize a class fields.
    constructor(screenSizeCustom: string, RAMCustom: string, processorCustom: string, cameraCustom: number, batteryCustom: number, operatingSystemCustom: string) {
        this.screenSize = screenSizeCustom;
        this.RAM = RAMCustom;
        this.processor = processorCustom;
        this.camera = cameraCustom;
        this.battery = batteryCustom;
        this.operatingSystem = operatingSystemCustom;
    } // end constructor

    // getter is a method which is accessible to outside world
    getScreenSize = () => {
        return this.screenSize
    }

    // a method which is accessible to outside world
    getOperatingSystem = () => {
        return this.operatingSystem
    }

    getCameraPixels = () => {
        return this.camera
    }

    setCameraPixels = (pixels: number) => {
        this.camera = pixels;
    }

} // end class

let j7Max = new MobilePhone("5.7 inch", "4 GB", "MediaTek", 12, 3300, "Android")

let os = j7Max.getOperatingSystem()
console.log(os)

// j7Max.operatingSystem = "IOS"

console.log(j7Max.getScreenSize())


// try to print the existing camera
console.log(j7Max.getCameraPixels())

// try to modify the value of camera
j7Max.setCameraPixels(25)
console.log(j7Max.getCameraPixels())