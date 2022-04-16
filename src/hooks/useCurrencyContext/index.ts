import { useContext } from "react";
import { CurrencyContext } from "../../context/currencyProvider";

const useCurrencyContext = () => useContext(CurrencyContext)

export default useCurrencyContext;