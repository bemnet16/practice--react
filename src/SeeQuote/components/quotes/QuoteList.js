import { Fragment } from "react";
import { useLocation, useHistory } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, isAsc) => {
  return quotes.sort((quoteA, quoteB) => {
    if (isAsc) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const newUrl = new URLSearchParams(location.search);
  const isAsc = newUrl.get("sort") === "asc";

  const handleSorting = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isAsc ? "des" : "asc"}`,
    });
    // history.push("/quotes?sort=" + (isAsc ? "des" : "asc"));
  };

  const quotes = sortQuotes(props.quotes, isAsc);

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={handleSorting}>
          Sort {isAsc ? "Decending" : "Acending"}
        </button>
      </div>
      <ul className={classes.list}>
        {quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
