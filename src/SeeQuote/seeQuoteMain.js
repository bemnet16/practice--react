import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NoQuotesFound from "./components/quotes/NoQuotesFound";
import NewQuote from "./pages/newQuote";

function SeeQuoteMain() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteID">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NoQuotesFound />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default SeeQuoteMain;
