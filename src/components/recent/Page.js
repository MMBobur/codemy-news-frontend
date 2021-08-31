import React, { useEffect, useState } from "react";
import Footer from "../footer/footer";
import Navbar from '../navbar/navbar/Navbar'

function Page({ match }) {
  const [data, setData] = useState([]);
  const [cateData, setCateData] = useState([]);
  const {
    params: { recentId },
  } = match;
  useEffect(() => {
    fetch(`http://localhost:5000/api/news/${recentId}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
    fetch(`http://localhost:5000/api/category`)
      .then((res) => res.json())
      .then((data) => {
        setCateData(data);
      });
  },[recentId]);

  return (
    <>
      <div className="container">
        <Navbar />
        <div className="row justify-content-center">
          <div className="col-lg-9 col-sm-12 col-md-7 ">
            <div className="col-xl-12 col-lg-12 col-sm-12 col-md-12">
              <div className="w-100">
                <img className="img-fluid" src={data.image} alt={data.image} />
              </div>
            </div>
            <br />
            <div className="mostNews-btn-group">
              {cateData.map((cate) => {
                if (data.category_id === cate.id) {
                  return (
                    <button
                      className="data-name-button"
                      style={{
                        backgroundColor: cate.color,
                      }}
                      key={cate.id}
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
            <p className="mostNews-about-new">{data.author}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
