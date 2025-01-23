import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RollNoForm = () => {
  const [RollNo, setRollNo] = useState("");
  const [ExaminationYear, setExaminationYear] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!RollNo) {
      validationErrors.RollNo = "Roll No is required";
    }
    if (!ExaminationYear) {
      validationErrors.ExaminationYear = "Examination Year is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    // Navigate to the next component and pass data
    navigate("/marksheet", { state: { RollNo, ExaminationYear } });
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
          label="Examination Year"
          type="number"
          variant="outlined"
          value={ExaminationYear}
          onChange={(e) => setExaminationYear(e.target.value)}
          error={!!errors.ExaminationYear}
          helperText={errors.ExaminationYear}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Roll No"
          type="number"
          variant="outlined"
          value={RollNo}
          onChange={(e) => setRollNo(e.target.value)}
          error={!!errors.RollNo}
          helperText={errors.RollNo}
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
