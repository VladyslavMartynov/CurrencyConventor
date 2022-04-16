import { FC, useEffect, useState } from 'react';
import useFetch from "../../hooks/useFetch";
import CurrencyService from "../../api/currencyService";
import Select from "../../components/Select";
import Input from "../../components/Input";

const Main: FC = (): JSX.Element => {
    const [currencyOptions, setCurrencyOptions] = useState<string[]>([]);
    const [fromCurrency, setFromCurrency] = useState<string>('UAH');
    const [toCurrency, setToCurrency] = useState<string>('USD');
    const [exchangeRate, setExchangeRate] = useState<number>(1);
    const [exchangePrice, setExchangePrice] = useState<number>(30);
    const [isToCurrency, setIsToCurrency] = useState<boolean>(true);
    const [fromAmount, setFromAmount] = useState<number| string>(0);
    const [toAmount, setToAmount] = useState<number | string>(0);

    useEffect(() => {
        const calculateAmount = (): void => {
            if (isToCurrency) {
                setFromAmount(exchangePrice);
                setToAmount(exchangePrice * exchangeRate)
            } else {
                setToAmount(exchangePrice);
                setFromAmount(exchangePrice / exchangeRate);
            }
        }
        calculateAmount();
    },[exchangePrice, exchangeRate])


    const { fetching: fetchCurrencyOptions } = useFetch(async () => {
        const response = await CurrencyService.getCurrencyOptions();
        const conversionRatesKeys = Object.keys(response);
        setCurrencyOptions(conversionRatesKeys);
    });

    const { fetching: fetchExchangeRate } = useFetch(async () => {
        const response = await CurrencyService.getCurrencyExchange(fromCurrency,toCurrency);
        setExchangeRate(response);
    });

    useEffect(() => {
        fetchCurrencyOptions();
    },[]);


    useEffect(() => {
        fetchExchangeRate();
    },[fromCurrency, toCurrency, exchangePrice]);

    const handleFromAmountChange = (value: number): void => {
        setExchangePrice(value)
        setIsToCurrency(true)
    }

    const handleToAmountChange = (value: number): void => {
        setExchangePrice(value)
        setIsToCurrency(false)
    }


    return (
        <div>
            <h2>Main</h2>
            <span>{exchangeRate}</span>
            <Input type={"text"}
                   initialValue={fromAmount as string}
                   changeValue={handleFromAmountChange}
                   placeholder={"Enter price"}
            />
            <Select options={currencyOptions}
                    selectedCurrency={fromCurrency}
                    setCurrency={setFromCurrency}/>
                <br/>
            <Input type={"text"}
                   initialValue={toAmount as string}
                   placeholder={"Enter price"}
                   changeValue={handleToAmountChange}
            />
            <Select options={currencyOptions}
                    selectedCurrency={toCurrency}
                    setCurrency={setToCurrency}
            />
        </div>
    );
};

export default Main;