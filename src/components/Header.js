import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/translate" className="item">
        Translate
      </Link>
      <Link to="/" className="item">
        Wikipedia Search
      </Link>
      <Link to="/videosearch" className="item">
        Video Search
      </Link>
    </div>
  );
};

export default Header;
