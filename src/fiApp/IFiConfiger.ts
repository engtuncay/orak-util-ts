import { FiConnConfig } from "../fiDbs/FiConnConfig";

export interface IFiConfiger {

  getFiConnConfig(connProfile:string): FiConnConfig;

}