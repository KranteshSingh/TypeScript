// defining a class
class MobilePhone {

    //Properties or Fields
    screenSize: string;
    RAM: string;
    processor: string;
    camera: number //
    battery: number
    operatingSystem: string

    // a constructor which is used to initialize a class fields.
    constructor(screenSizeCustom: string, RAMCustom: string, processorCustom: string, cameraCustom: number, batteryCustom: number, operatingSystemCustom: string) {
        this.screenSize = screenSizeCustom;
        this.RAM = RAMCustom;
        this.processor = processorCustom;
        this.camera = cameraCustom;
        this.battery = batteryCustom;
        this.operatingSystem = operatingSystemCustom;
    } // end constructor

    // a method which is accessible to outside world
    getOperatingSystem = () => {
        return this.operatingSystem
    }

} // end class

let j7Max = new MobilePhone("5.7 inch", "4 GB", "MediaTek", 12, 3300, "Android")

let os = j7Max.getOperatingSystem()
alert(os)