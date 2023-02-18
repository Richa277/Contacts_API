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
  // const [value,setValue]=useState({});  change it
  useEffect(()=>{

   
    console.log( fetchData("/api/contacts"),"hh");
  })
 
  return (
    <Container align="center">
      {data?.length === 0 ? (
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
                  <TableCell>{val?.id}</TableCell>
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
