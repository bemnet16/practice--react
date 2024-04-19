import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DEMO = [
  { id: 1, author: "bem", text: "I'm learning react fully" },
  { id: 2, author: "oth", text: "learning react is fun" },
  { id: 3, author: "fin", text: "you are going to finish react" },
];

const QuoteDetail = () => {
  const qouteID = useParams().quoteID;
  const qoute = DEMO.find((qo) => qo.id === +qouteID);
  const match = useRouteMatch();

  return (
    <>
      <HighlightedQuote author={qoute.author} text={qoute.text} />
      <Route path={match.url} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comment`}>
            comment
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comment`}>
        <Comments />
      </Route>
    </>
  );
};
export default QuoteDetail;
