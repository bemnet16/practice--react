import QuoteList from "../components/quotes/QuoteList";

const DEMO = [
  { id: 1, author: "bem", text: "I'm learning react fully" },
  { id: 2, author: "oth", text: "learning react is fun" },
  { id: 3, author: "fin", text: "you are going to finish react" },
];

const AllQuotes = () => {
  return (
    <>
      <QuoteList quotes={DEMO} />
    </>
  );
};
export default AllQuotes;
