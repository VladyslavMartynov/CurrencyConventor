import { FC } from "react";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import CurrencyProvider from "./context/currencyProvider";

const App: FC = (): JSX.Element => {

  return(
      <div className={"container"}>
          <CurrencyProvider>
              <Header/>
              <Main/>
          </CurrencyProvider>
      </div>
  )
}

export default App;