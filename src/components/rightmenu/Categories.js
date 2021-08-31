import React from "react";
import { Container, Row } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});

function Categories({ newsData }) {
  const classes = useStyles();

  return (
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
  );
}

export default Categories;
