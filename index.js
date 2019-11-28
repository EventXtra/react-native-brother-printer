import { NativeModules } from 'react-native';

const { BrotherPrinter } = NativeModules;

class BRPtouchPrinter {
  async print(ipAddress, name, position, company) {
    return await BrotherPrinter.print(ipAddress, name, position, company);
  }

  async getConnectedPrinters() {
    return await BrotherPrinter.getConnectedPrinters();
  }
}

export default BRPtouchPrinter;
