import {
  Container,
  TableBody,
  TableCell,
  Table,
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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={styles.head} bgcolor="lightgrey">
                ID
              </TableCell>
              <TableCell className={styles.head} bgcolor="lightgrey">
                FirstName
              </TableCell>
              <TableCell className={styles.head} bgcolor="lightgrey">
                LastName
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((val, key) => {
              return (
                <TableRow key={key} bgcolor="lightyellow">
                  <TableCell className={styles.row}>{val?.id + 1}</TableCell>
                  <TableCell className={styles.row}>{val?.firstName}</TableCell>
                  <TableCell className={styles.row}>{val?.lastName}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </Container>
  );
}
export default ContactList;
