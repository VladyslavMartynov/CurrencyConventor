import { FC, useEffect } from 'react';
import useCurrencyContext from "../../hooks/useCurrencyContext";
import useFetch from "../../hooks/useFetch";
import CurrencyService from "../../api/currencyService";

const Header: FC = (): JSX.Element => {
    const { setUsdRate, setEurRate, eurRate, usdRate } = useCurrencyContext();

    const { fetching: fetchUsdRate } = useFetch(async () => {
        const response = await CurrencyService.getCurrencyExchange('UAH', 'USD');
        setUsdRate(response);
    })

    const { fetching: fetchEurRate } = useFetch(async () => {
        const response = await CurrencyService.getCurrencyExchange('UAH', 'EUR');
        setEurRate(response);
    })

    useEffect(() => {
        fetchUsdRate();
        fetchEurRate();
    },[])


    return (
        <div>
            <h1>Currency Convertor</h1>
            <h1>UAH : EUR {eurRate}</h1>
            <h1>UAH : USD {usdRate}</h1>
        </div>
    );
};

export default Header;