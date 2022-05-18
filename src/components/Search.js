import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = (props) => {
  const [term, setTerm] = useState("juventus");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    const timeoutId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);
  const renderedResults = results.map((x) => {
    return (
      <div className="item" key={x.pageid}>
        <div className="right floated content">
          <a
            target={"_blank"}
            href={`https://en.wikipedia.org?curid=${x.pageid}`}
            className="ui button"
          >
            GO
          </a>
        </div>
        <div className="content">
          <div className="header">{x.title}</div>
          <span dangerouslySetInnerHTML={{ __html: x.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
