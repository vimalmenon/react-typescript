import {ISummary} from "./isummary.d";

export interface IContext {
    data:ISummary|null;
    getData: () =>void;
}