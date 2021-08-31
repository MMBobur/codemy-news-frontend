import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../most/Most.css";
import "./Search.css";
import Navbar from '../navbar/navbar/Navbar';
import Footer from '../footer/footer.jsx';

function Search() {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [cateItems, setCateItems] = useState([]);
  const [visible, setVisible] = useState(4);
  const [more, setMore] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/news")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/api/category")
      .then((res) => res.json())
      .then((data) => {
        setCateItems(data);
      });
  }, []);

  let moreTitle = "READ MORE";

  if (more === false) {
    moreTitle = "READ MORE";
  } else {
    moreTitle = "READ LESS";
  }

  const showMoreItems = () => {
    if (visible !== 8) {
      setVisible((prevValue) => prevValue + 4);
      setMore(true);
    } else {
      setVisible((prevValue) => prevValue - 4);
      setMore(false);
    }
  };
  return (
      <>
    <div className="container">
        <Navbar />
      <input type="text" className='search-section' placeholder="Search..." onChange={(event) => {
          setSearch(event.target.value)
      } }/>
      <div className="container most-father">
        {items.slice(0, visible).filter((val) => {
                    if(search === ""){
                        return val
                    }else if (val.title.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }else {
                      return null
                    }
                }).map((item) => (
          <div key={item.id} className="row card-row">
            <div className="col-lg-4 col-sm-12 col-md-5 inner-row">
              <div className="img-section">
                <img className="most-image" src={item.image} alt={item.image} />
              </div>
            </div>
            <div className="col-lg-8 col-sm-12 col-md-7 inner-row ">
              <div className="mostNews-btn-group">
                {cateItems.map((cateItem) => {
                  if (item.category_id === cateItem.id) {
                    return (
                      <button
                        style={{ backgroundColor: cateItem.color }}
                        key={cateItem.id}
                        className="data-name-button"
                      >
                        {cateItem.name}
                      </button>
                    );
                  } else {
                    return null;
                  }
                })}
                <button className="data-button">{item.data}</button>
              </div>
              <p className="mostNews-title">{item.title}</p>
              <Link to={`/news/${item.id}`}>
                <p className="mostNews-about-new">{item.text}</p>
              </Link>
            </div>
          </div>
        ))}
        <div className="loadMore-button">
          <button onClick={showMoreItems}>
            <span>{moreTitle}</span>
          </button>
        </div>
      </div>
    </div>
    <div>
        <Footer />
    </div>
    </>
  );
}

export default Search;
