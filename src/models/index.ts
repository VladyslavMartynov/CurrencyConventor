export interface ICurrencyOptions {
    [key: string]: number
}

export type CurrencyResponse =  {
    base_code: string;
    conversion_rates: ICurrencyOptions;
    documentation: string;
    result: string;
    terms_of_use: string;
    time_last_update_unix: number;
    time_last_update_utc: Date;
    time_next_update_unix: number;
    time_next_update_utc: Date;
}

export type CurrencyExchange = {
    conversion_rate: number
}

export type ExchangeCurrencyResponse = Omit<CurrencyResponse, 'conversion_rates'> & CurrencyExchange;



