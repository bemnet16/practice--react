import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();

  const addNewQuote = (new_quote) => {
    console.log(new_quote);
    history.push("/quotes");
  };

  return (
    <>
      <QuoteForm onAddQuote={addNewQuote} />
    </>
  );
};
export default NewQuote;
