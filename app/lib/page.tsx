"use client";

import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { Button } from "@atoms/Button/Button";
import { Title } from "@atoms/Title/Title";

export default function Lib() {
  return (
    <>
      <h2>Buttons</h2>
      <Box display="flex" gap="10px">
        <Button label="Primary" variant="primary" />
        <Button label="Secondary" variant="secondary" />
        <Button label="Outline" variant="outline" />
        <Button variant="icon" tip="Delete item">
          <DeleteIcon />
        </Button>
      </Box>

      <h2>Typography</h2>
      <Title text="Hello, world!"/>
    </>
  );
}
