import {
  Container,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { fetchData } from "../Services/FetchData";

function ContactList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData("/api/contacts", setData);
  }, []);
  //https://github.com/Richa277/Contacts-api

  return (
    <Container align="center">
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableCell bgcolor="lightgrey">ID</TableCell>
            <TableCell bgcolor="lightgrey">FirstName</TableCell>
            <TableCell bgcolor="lightgrey">LastName</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((val, key) => {
            return (
              <TableRow key={key} bgcolor="lightyellow">
                <TableCell>{val.id}</TableCell>
                <TableCell>{val.firstName}</TableCell>
                <TableCell>{val.lastName}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </TableContainer>
    </Container>
  );
}
export default ContactList;
