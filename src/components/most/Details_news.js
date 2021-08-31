import React, { useEffect, useState } from "react";
import Navbar from '../navbar/navbar/Navbar';
import Footer from '../footer/footer';

function Details_news({ match }) {
  const {
    params: { newsId },
  } = match;

  const [data, setData] = useState([]);
  const [cateData, setCateData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/news/${newsId}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });

    fetch(`http://localhost:5000/api/category/${newsId}`)
      .then((res) => res.json())
      .then((data) => {
        setCateData(data);
      });
  });
  
  return (
    <>
    <div className="container">
      <Navbar />
      <div className="row">
        <div className="col-lg-3 col-sm-12 col-md-5">
          <div className="img-section">
            <img className="most-image" src={data.image} alt={data.image} />
          </div>
        </div>
        <div className="col-lg-9 col-sm-12 col-md-7 ">
          <div className="mostNews-btn-group">
            {cateData.map((cate) => {
              if (data.category_id === cate.id) {
                return (
                  <button
                    style={{ backgroundColor: cate.color }}
                    key={cate.id}
                    className="data-name-button"
                  >
                    {cate.name}
                  </button>
                );
              } else {
                return null;
              }
            })}
            <button className="data-button">{data.data}</button>
          </div>
          <p className="mostNews-title">{data.title}</p>
          <p className="mostNews-about-new">{data.text}</p>
        </div>
      </div>
    </div>
  <div>
    <Footer />
  </div>
  </>
);
}

export default Details_news;
