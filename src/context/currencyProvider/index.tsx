import { createContext, Dispatch, FC, ReactNode, SetStateAction, useMemo, useState } from 'react';

interface ICurrencyContext {
    fromCurrency: string;
    setFromCurrency: Dispatch<SetStateAction<string>>;
    toCurrency: string;
    setToCurrency: Dispatch<SetStateAction<string>>;
    usdRate: number;
    setUsdRate: Dispatch<SetStateAction<number>>;
    eurRate:  number;
    setEurRate: Dispatch<SetStateAction<number>>;
}

interface ICurrencyProviderProps {
    children: ReactNode
}

export const CurrencyContext = createContext<ICurrencyContext>({} as ICurrencyContext);

const CurrencyProvider: FC<ICurrencyProviderProps> = ({ children }) => {

    const [fromCurrency, setFromCurrency] = useState<string>('UAH');
    const [toCurrency, setToCurrency] = useState<string>('USD');
    const [usdRate, setUsdRate] = useState<number>(0);
    const [eurRate, setEurRate] = useState<number>(0);

    const value = useMemo(() => (
        {
            fromCurrency,
            toCurrency,
            setFromCurrency,
            setToCurrency,
            usdRate,
            setUsdRate,
            eurRate,
            setEurRate
        }
        ),
        [fromCurrency,toCurrency, usdRate, eurRate]);

    return (
        <CurrencyContext.Provider value={value}>
            {children}
        </CurrencyContext.Provider>
    );
};

export default CurrencyProvider;