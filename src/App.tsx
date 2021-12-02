import * as React from "react";
import { Routes, Route, Outlet, Link as RouterLink } from "react-router-dom";
import Appbar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Index from "./pages";
import Three from "./pages/three";
import Table from "./pages/table";

function IndexLayout() {
  return (
    <main>
      <Appbar>
        <Toolbar>
          <Box flexGrow="1" />
          <Box
            sx={{
              display: "flex",
              columnGap: "1.5rem",
              justifyContent: "flex-end",
            }}
          >
            <Link component={RouterLink} sx={{ color: "white" }} to="/">
              Home
            </Link>
            <Link component={RouterLink} sx={{ color: "white" }} to="/three">
              Three
            </Link>
            <Link component={RouterLink} sx={{ color: "white" }} to="/table">
              Data Table
            </Link>
          </Box>
        </Toolbar>
      </Appbar>
      <Outlet />
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<IndexLayout />}>
        <Route index element={<Index />} />
        <Route path="three" element={<Three />} />
        <Route path="table" element={<Table />} />
      </Route>
    </Routes>
  );
}

export default App;
