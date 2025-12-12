export interface IFiBaseLogger {

  debug(message: unknown, label?: string): void;

  error(message: unknown, label?: string): void;

  errorFront(message: unknown, label?: string): void;

  checkDebugEnv(): boolean;

}