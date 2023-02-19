import {
  Container,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Loader from "react-js-loader";
import { useEffect, useState } from "react";
import { fetchData } from "../services/FetchData";
import styles from "./ContactList.module.css";

function ContactList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = fetchData("/api/contacts");

    token.then(function (result) {
      setData(result);
    });
  }, []);

  return (
    <Container align="center">
      {data.length === 0 ? (
        <div className={styles.loader}>
          <Loader bgColor="green" size={100} />
        </div>
      ) : (
        <TableContainer className={styles.table}>
          <TableHead>
            <TableRow className={styles.row}>
              <TableCell bgcolor="lightgrey">ID</TableCell>
              <TableCell bgcolor="lightgrey">FirstName</TableCell>
              <TableCell bgcolor="lightgrey">LastName</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((val, key) => {
              return (
                <TableRow key={key} bgcolor="lightyellow">
                  <TableCell>{val?.id + 1}</TableCell>
                  <TableCell>{val?.firstName}</TableCell>
                  <TableCell>{val?.lastName}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </TableContainer>
      )}
    </Container>
  );
}
export default ContactList;
