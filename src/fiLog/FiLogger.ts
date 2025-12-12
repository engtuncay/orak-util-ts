// Örnek Logger Sınıfı
export class FiLogger {

  //protected static defaultLabel = '';

  // Static method - override in subclasses as needed
  static debug(message: unknown, label?: string , fnCheckDebug?: () => boolean): void {
    if(fnCheckDebug && fnCheckDebug()) {
      console.log(message);
    }
  }

  static error(message: unknown, label?: string): void {
    //console.log(message);
  }

  static errorFront(message: unknown, label?: string): void {
    //console.log(message);
  }



  // Concrete static method
  // static setDefaultLabel(label: string) {
  //   this.defaultLabel = label;
  // }

  // Static utility method
  // static checkDebugEnv(): boolean {
  //   return false;
  // }

}