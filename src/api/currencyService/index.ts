import axios from "axios";
import { API_KEY, BASE_URL } from "../config";
import { CurrencyResponse, ExchangeCurrencyResponse, ICurrencyOptions } from "../../models";

class CurrencyService {
    static async getCurrencyOptions(): Promise<ICurrencyOptions> {
        try {
            const currencies = await axios.get<CurrencyResponse>(`${BASE_URL}${API_KEY}latest/UAH`);
            const { data: {conversion_rates} } = currencies;
            return conversion_rates;
        } catch (e) {
           throw e;
        }
    }

    static async getCurrencyExchange(from: string, to: string): Promise<number> {
        try {
            const exchangeRate = await axios.get<ExchangeCurrencyResponse>(`${BASE_URL}${API_KEY}/pair/${from}/${to}`);
            const { data: { conversion_rate } } = exchangeRate;
            return conversion_rate;
        } catch (e) {
           throw e;
        }
    }
}

export default CurrencyService;