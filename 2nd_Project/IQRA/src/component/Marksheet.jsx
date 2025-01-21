import axios from 'axios';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useAuthStore } from '../authContext/auth';

const Marksheet = () => {
  const { user } = useAuthStore();
  console.log("your user is now containing these info: ", user.Marksheet);
  const location = useLocation();
  const { rollno } = location.state || {};
  console.log("Your rollno is ", rollno);

  // Assuming the Marksheets in the user object is an array of marksheets with data
  const marksheetData = user.Marksheet[0] || {}; // Get the first marksheet or an empty object if not available

  const subjects = [
    { id: 1, name: 'ENGLISH COMPULSORY', maxMarks: 75, obtainedMarks: marksheetData.english },
    { id: 2, name: 'MATHEMATICS', maxMarks: 75, obtainedMarks: marksheetData.mathScience },
    { id: 3, name: 'PHYSICS', maxMarks: 75, obtainedMarks: marksheetData.physics },
    { id: 4, name: 'CHEMISTRY', maxMarks: 75, obtainedMarks: marksheetData.chemistry },
    { id: 5, name: 'BIOLOGY', maxMarks: 75, obtainedMarks: marksheetData.biology },
  ];

  const totalMarks = subjects.reduce((acc, subject) => acc + subject.maxMarks, 0);
  const totalObtained = subjects.reduce((acc, subject) => acc + subject.obtainedMarks, 0);

  const handleSave = async () => {
    try {
      const userId = userId
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
              <Typography>Roll no : <strong>{rollno || 'Not Available'}</strong></Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography>Class : <strong>10th Science</strong></Typography>
            </Box>
            <Typography>School: <strong>Green Hills</strong></Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              It is to notify that <strong>{user.fullName}</strong>, Son/Daughter of <strong>Fida Ali</strong>, has qualified
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
        </Grid>
      </Paper>
    </Box>
  );
};

export default Marksheet;
