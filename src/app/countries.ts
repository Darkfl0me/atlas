export interface Countries {
    name: string;
    capital: string;
    currencies: [{
        code: string;
        name: string;
        symbol: string;
    }],
    languages: [{
        iso639_1: string;
        iso639_2: string;
        name: string;
        nativeName: string;
    }],
    flag: string;
}
