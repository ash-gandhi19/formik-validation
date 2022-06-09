import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

function AllCollegelist() {
  let i = 1;
  let [college, setCollege] = useState([]);
  const url = "https://629f1b078b939d3dc28f4f81.mockapi.io/collegelist/";
  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    try {
      let res = await axios.get(url);
      setCollege(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>College List</h1>
      <Table striped borderd hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Location</th>
            <th>Contact No.</th>
            <th>Email</th>
            <th>College Code</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {college.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.location}</td>
                <td>{e.mobile}</td>
                <td>{e.email}</td>
                <td>{e.collegecode}</td>
                <td>{e.rating}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default AllCollegelist;
