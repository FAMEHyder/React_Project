import axios from 'axios';
import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Button } from '@mui/material';

const Marksheet = () => {
  const subjects = [
    { id: 1, name: 'ENGLISH COMPULSORY', maxMarks: 75, obtainedMarks: 64 },
    { id: 2, name: 'MATHEMATICS', maxMarks: 75, obtainedMarks: 56 },
    { id: 3, name: 'PHYSICS', maxMarks: 75, obtainedMarks: 60 },
    { id: 4, name: 'CHEMISTRY', maxMarks: 75, obtainedMarks: 71 },
    { id: 5, name: 'BIOLOGY', maxMarks: 75, obtainedMarks: 65 },
  ];

  const totalMarks = subjects.reduce((acc, subject) => acc + subject.maxMarks, 0);
  const totalObtained = subjects.reduce((acc, subject) => acc + subject.obtainedMarks, 0);

  const handleSave = async () => {
    try {
      const userId = 'YOUR_USER_ID_HERE'; // Replace with actual user ID
      const marksheetData = {
        mathScience: subjects[1].obtainedMarks, // Example mapping
        biology: subjects[4].obtainedMarks,
        physics: subjects[2].obtainedMarks,
        chemistry: subjects[3].obtainedMarks,
        english: subjects[0].obtainedMarks,
        mathArts: 0,
        generalScience: 0,
        pakStd: 0,
        urdu: 0,
      };

      const response = await axios.post('http://localhost:8000/form/createform', {
        userId,
        marksheetData,
      });

      console.log(response.data);
      alert('Marksheet saved successfully!');
    } catch (error) {
      console.error(error);
      alert('An error occurred while saving the marksheet.');
    }
  };

  return (
    <Box p={2}>
      <Paper elevation={3} sx={{ maxWidth: 900, mx: 'auto', p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" align="center" gutterBottom>
              IQRA YOUTH EDUCATIONAL FOUNDATION PRE_BOARD EXAMS
            </Typography>
            <Typography variant="subtitle1" align="center">
              PRE BOARD EXAMINATION
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Typography>Roll no : <strong>892740</strong></Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography>Class : <strong>10th Science</strong></Typography>
            </Box>
            <Typography>School: <strong>Green Hills</strong></Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              It is to notify that <strong>Zeeshan Haider</strong>, Son/Daughter of <strong>Fida Ali</strong>, has qualified
              the pre_board exams of IYEF as a regular student from Green Hills.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>S.No.</strong></TableCell>
                    <TableCell><strong>Subject(s)</strong></TableCell>
                    <TableCell><strong>Maximum</strong></TableCell>
                    <TableCell><strong>Obtained</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {subjects.map((subject) => (
                    <TableRow key={subject.id}>
                      <TableCell>{subject.id}</TableCell>
                      <TableCell>{subject.name}</TableCell>
                      <TableCell>{subject.maxMarks}</TableCell>
                      <TableCell>{subject.obtainedMarks}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell colSpan={2}><strong>Total</strong></TableCell>
                    <TableCell><strong>{totalMarks}</strong></TableCell>
                    <TableCell><strong>{totalObtained}</strong></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body2" mt={2}>
              (Marks in words) Six Hundred Eighty Four
            </Typography>
            <Typography variant="body2">IQRA YOUTH EDUCATIONAL FOUNDATION</Typography>
          </Grid>

          <Grid item xs={12} display="flex" justifyContent="flex-end">
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save Marksheet
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Marksheet;
