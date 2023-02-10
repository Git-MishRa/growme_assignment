import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

//importing component "Appbar"
import MuiAppBar from "../components/AppBar";
import Box from "@mui/material/Box";

//importing styled component
import styled from "styled-components";

const columns = [
  { field: "userId", headerName: "User_id", flex: 0.2 },
  { field: "title", headerName: "Title", flex: 0.3 },
  { field: "body", headerName: "Body", flex: 0.5 },
];

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (response.status === 200) {
        setPosts(response.data);
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // console.log(isLoading)
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#37373d",
          }}
        >
          <h1>LOADING...</h1>
        </Box>
      ) : (
        <>
          <Wrapper>
            <MuiAppBar />
          </Wrapper>
          <div style={{ flexGrow: 1 }}>
            <DataGrid rows={posts} columns={columns} />
          </div>
        </>
      )}
    </div>
  );
}

const Wrapper = styled.div`
  * {
    display: flex;
  }
`;
