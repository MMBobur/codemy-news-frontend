import React, { useEffect, useState } from "react";
import "./CategoryPage.css";
import service from "../../utils/service";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper"; 
import Navbar from '../../components/navbar/navbar/Navbar';
import Footer from '../../components/footer/footer';

const useStyles = makeStyles({
    table: {
      minWidth: 100,
    },
  }); 

function CategoryPage({ match }) {
    const classes = useStyles(); 

  const {
    params: { categories },
  } = match;

  const [data, setData] = useState([]);
  const [cateData, setCateData] = useState([]);
  const [visible, setVisible] = useState(4);
  const [more, setMore] = useState(false); 

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
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    service
      .getAll("news/group")
      .then((res) => {
        setNewsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); 

  useEffect(() => {
    fetch("http://localhost:5000/api/news")
      .then((res) => res.json())
      .then((data) => setData(data));

    fetch("http://localhost:5000/api/category")
      .then((res) => res.json())
      .then((data) => setCateData(data));
  }, []);

  return (
    <div className="categoryPage">
        <div className='container'>
        <Navbar />
        </div>
      <div className="categoryPage-title">
        <div className="container">
          <ul>
            <li>
              <Link to="/" className="home-link">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              {cateData.map((item) => {
                if (categories*1 === item.id) {
                  return item.name;
                }else {
                  return null
                }
              })}
            </li>
          </ul>
          <p>
            {cateData.map((item) => {
              if (categories*1 === item.id) {
                return item.name;
              }else{
                return null
              }
            })}
          </p>
        </div>
      </div>
      <div className="mostRead-categories container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="most-father">
              {data.slice(0, visible).map((item) => {
                  if (categories*1 === item.category_id){
                      return (
                        <div key={item.id} className="row card-row">
                        <div className="col-lg-4 col-sm-12 col-md-5 inner-row">
                          <div className="img-section">
                            <img
                              className="most-image"
                              src={item.image}
                              alt={item.image}
                            />
                          </div>
                        </div>
                        <div className="col-lg-8 col-sm-12 col-md-7 inner-row ">
                          <div className="mostNews-btn-group">
                            {cateData.map((cateItem) => {
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
      
                      )
                  }else{
                    return null
                  }
              })}
              <div className="loadMore-button">
                <button onClick={showMoreItems}>
                  <span>{moreTitle}</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
          <Container>
      <Row>
        <h2
          style={{
            color: "#2d2f3c",
            marginLeft: "1%",
            marginTop: "10%",
            marginBottom: "10%",
          }}
        >
          Categories
        </h2>
      </Row>
      <Row>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
              {newsData.map((row) => (
                <TableRow key={row.category_id}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{
                      color: "#2d2f3c",
                      fontSize: "18px",
                      fontWeight: "500",
                    }}
                  >
                    {row.category_title}
                  </TableCell>
                  <TableCell align="right">
                    <Badge
                      style={{
                        backgroundColor: row.color,
                        color: "#fff",
                        padding: "2px 5px",
                        borderRadius: "3px",
                      }}
                    >
                      {row.count}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Row>
      <Row>
        <ul className="hlist">
          {newsData.map((row) => (
            <li key={row.category_id}>
              <button className="btn-dark">{row.category_title}</button>
            </li>
          ))}
        </ul>
      </Row>
    </Container>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CategoryPage;
