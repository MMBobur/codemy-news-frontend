import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import "./style.css";
import { Link } from 'react-router-dom';
function Index() {

  const [cats, setCats] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:5000/api/category")
      .then((res) => res.json())
      .then((data) => {
        setCats(data);
      });
  }, []);

  return (
    <div className="webmag">
      <Navbar bg='white' sticky="top" expand="sm" collapseOnSelect>
          <Link to='/'>
        <Navbar.Brand>
          WEB<b>MAG</b>
        </Navbar.Brand>
          </Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {cats.map((cat) => (
            <Nav key={cat.id}>
              <Nav.Link
                href={`/categoryPages/${cat.id}`}
                className="line"
                style={{ borderBottomColor: cat.color }}
              >
                {cat.name}
              </Nav.Link>
            </Nav>
          ))}
        </Navbar.Collapse>
        <Link to='/search'>
        <SearchIcon className='search-icon' />
        </Link>
      </Navbar>
    </div>
  );
}
export default Index;
