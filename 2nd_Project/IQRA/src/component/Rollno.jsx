import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import {useNavigate} from 'react-router-dom'

const RollNoForm = () => {
  const [rollNo, setRollNo] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rollNo.trim()) {
      setError("Roll No is required");
      return;
    }

    setError("");
    console.log("Submitted Roll No:", rollNo);
    // You can perform       

  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "auto",
        mt: 4,
        p: 3,
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Roll No Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Roll No"
          variant="outlined"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          error={!!error}
          helperText={error}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default RollNoForm;
