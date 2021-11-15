declare const list: ({
    en_name: string;
    zh_name: string;
    iso2: string;
    prefix: string;
    currency: string;
    symbol: string;
} | {
    en_name: string;
    zh_name: string;
    iso2: string;
    prefix: string;
    currency?: undefined;
    symbol?: undefined;
})[];
export default list;
