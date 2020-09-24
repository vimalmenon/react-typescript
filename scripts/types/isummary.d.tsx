export interface ICountry {
    Country:string;
    CountryCode:string;
    Date:string;
    NewConfirmed:number;
    NewDeaths:number;
    NewRecovered:number;
    TotalActive:number;
    TotalConfirmed:number;
    TotalDeaths:number;
    TotalRecovered:number;
}

export interface IGlobal {
    NewConfirmed:number;
    NewDeaths:number;
    NewRecovered:number;
    TotalConfirmed:number;
    TotalDeaths:number;
    TotalRecovered:number;
}

export interface ISummary {
    Countries:ICountry[];
    Message:string;
    Global:IGlobal;
    Date:string;
}