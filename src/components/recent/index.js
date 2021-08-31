import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import service from "../../utils/service";

function Recent() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const date1 = new Date().getFullYear();
  const oy = new Date().getMonth();
  const kun = new Date().getDate();
  const [fulldata] = useState([date1, oy, kun]);

  useEffect(() => {
    service
      .getAll("news")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    service
      .getAll("category")
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);
  return (
    <div className="container recent-page">
      <div className="col-md-12 m-4">
        <div className="section-title">
          <h2>Recent Posts</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        {data
          .filter((e) => {
            if (e.data >= fulldata) {
              return e;
            } else {
              return null;
            }
          })
          .slice(0, 6)
          .map((datas) => {
            return (
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
                key={datas.id}
              >
                <div className="img_div">
                  <img
                    alt="salom"
                    className="w-100 img-fluid img-hover-zoom"
                    src={datas.image}
                  />
                </div>
                <br />

                <div className="d-flex">
                  {category.map((cate) => {
                    if (datas.category_id === cate.id) {
                      return (
                        <div key={cate.id}>
                          <button
                            style={{
                              backgroundColor: cate.color,
                            }}
                            className="data-name-button"
                          >
                            {cate.name}
                          </button>
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })}
                  <button className="data-button">{datas.data}</button>
                </div>
                <br />
                <Link to={`/recent/${datas.id}`} className="text-decoration-none" style={{ color:"black"}}>
                    <h3 className="col-xl-12 col-lg-12 col-md-10 col-sm-10 col-9" style={{fontSize:'1.5rem'}}>
                      {datas.title}
                    </h3>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Recent;
