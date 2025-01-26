import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { useAuthStore } from "../authContext/auth";
import { useState, useEffect } from "react";
import axios from "axios";

const Marksheet = () => {
  const { user } = useAuthStore();
  const location = useLocation();
  const { RollNo, ExaminationYear } = location.state || {};

  const marksheetId = user?.Marksheet;
  const registrationId = user?.Registration;

  const [marksheetData, setMarksheetData] = useState(null);
  const [registrationData, setRegistrationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorDialog, setErrorDialog] = useState(false);

  useEffect(() => {
    const fetchMarksheet = async () => {
      try {
        const marksheetResponse = await axios.get(
          `http://localhost:8000/user/getresult/${marksheetId}`
        );
        const fetchedData = marksheetResponse.data;

        if (
          parseInt(fetchedData.rollno, 10) === parseInt(RollNo, 10) &&
          parseInt(fetchedData.examinationYear, 10) === parseInt(ExaminationYear, 10)
        ) {
          setMarksheetData(fetchedData);
        } else {
          setErrorDialog(true);
        }
        
      } catch (error) {
        console.error("Error fetching marksheet data:", error);
      }
    };

    const fetchRegistration = async () => {
      try {
        const registrationResponse = await axios.get(
          `http://localhost:8000/user/getform/${registrationId}`
        );
        setRegistrationData(registrationResponse.data);
      } catch (error) {
        console.error("Error fetching registration data:", error);
      }
    };

    if (marksheetId && registrationId) {
      Promise.all([fetchMarksheet(), fetchRegistration()]).finally(() =>
        setLoading(false)
      );
    }
  }, [marksheetId, registrationId, RollNo, ExaminationYear]);

  const subjects = marksheetData
    ? [
        {
          id: 1,
          name: marksheetData.Subject1 || "N/A",
          maxMarks: 75,
          obtainedMarks: marksheetData.english || 0,
        },
        {
          id: 2,
          name: marksheetData.Subject2 || "N/A",
          maxMarks: 75,
          obtainedMarks: marksheetData.mathScience || marksheetData.urdu,
        },
        {
          id: 3,
          name: marksheetData.Subject3 || "N/A",
          maxMarks: 75,
          obtainedMarks: marksheetData.physics || marksheetData.pakStd,
        },
        {
          id: 4,
          name: marksheetData.Subject4 || "N/A",
          maxMarks: 75,
          obtainedMarks: marksheetData.chemistry ||marksheetData.generalScience ,
        },
        {
          id: 5,
          name: marksheetData.Subject5 || "N/A",
          maxMarks: 75,
          obtainedMarks: marksheetData.biology || marksheetData.mathArts,
        },
      ]
    : [];

  const totalMarks = subjects.reduce((acc, subject) => acc + subject.maxMarks, 0);
  const totalObtained = subjects.reduce(
    (acc, subject) => acc + subject.obtainedMarks,
    0
  );

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box p={2}>
      <Dialog open={errorDialog}>
        <DialogTitle>Invalid Details</DialogTitle>
        <DialogContent>
          <Typography>
            The provided Roll Number or Examination Year does not match our
            records. Please check the details and try again.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setErrorDialog(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {marksheetData && (
        <Paper elevation={3} sx={{ maxWidth: 900, mx: "auto", p: 3 }}>
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
                <Typography>
                  Roll no: <strong>{marksheetData.rollno}</strong>
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography>
                  Class: <strong>{registrationData?.Class || "N/A"}</strong>
                </Typography>
              </Box>
              <Typography>
                School: <strong>{registrationData?.institution}</strong>
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                It is to notify that{" "}
                <strong>{registrationData?.fullName || user?.fullName}</strong>, Son/Daughter of{" "}
                <strong>{registrationData?.guardianName}</strong>, has qualified the pre-board
                exams of IYEF as a regular student from{" "}
                {registrationData?.institution || "Green Hills"}.
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <strong>S.No.</strong>
                      </TableCell>
                      <TableCell>
                        <strong>Subject(s)</strong>
                      </TableCell>
                      <TableCell>
                        <strong>Maximum</strong>
                      </TableCell>
                      <TableCell>
                        <strong>Obtained</strong>
                      </TableCell>
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
                      <TableCell colSpan={2}>
                        <strong>Total</strong>
                      </TableCell>
                      <TableCell>
                        <strong>{totalMarks}</strong>
                      </TableCell>
                      <TableCell>
                        <strong>{totalObtained}</strong>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body2">
                IQRA YOUTH EDUCATIONAL FOUNDATION
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      )}
    </Box>
  );
};

export default Marksheet;
