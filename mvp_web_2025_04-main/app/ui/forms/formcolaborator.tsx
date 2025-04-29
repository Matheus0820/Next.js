import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {addTest} from "@/app/lib/action"

export default function FormColaborador() {
  return (
    <form action={addTest}>
      <Box sx={{ display: "flex", flexDirection: "column", margin: 4 }}>
        <TextField
          name="name"
          id="name"
          label="Nome"
          variant="filled"
          sx={{ marginBottom: 2 }}
        />
        <TextField id="filled-basic" label="Matrícula" variant="filled" />

        <button>Create</button>
      </Box>
      
    </form>
  );
}
