import { useEffect, useState } from "react";
import { Container, Box, Typography, Skeleton, Grid } from "@mui/material";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/user/getAllUsers");
        const users = response.data;

        // Filter the data for the specific classes
        const classEnrollments = [
          users.filter(user => user.class === "9th Arts").length,
          users.filter(user => user.class === "10th Arts").length,
          users.filter(user => user.class === "9th Science").length,
          users.filter(user => user.class === "10th Science").length,
        ];

        setData({ classEnrollments });
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const enrollmentData = {
    labels: ["9th Arts", "10th Arts", "9th Science", "10th Science"],
    datasets: [
      {
        label: "Student Enrollments",
        data: data?.classEnrollments || [],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        padding: 0,
        margin: 0,
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          width: "100%",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Box
                sx={{
                  p: 2,
                  mt: 2,
                  bgcolor: "white",
                  borderRadius: 2,
                  boxShadow: 3,
                  height: 400, 
                  width: "98%",
                }}
              >
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                  Class Enrollments
                </Typography>
                {loading ? (
                  <Skeleton variant="rectangular" width="100%" height="100%" />
                ) : (
                  <Bar
                    data={enrollmentData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          display: true,
                          position: "top",
                        },
                        title: {
                          display: true,
                          text: "Student Enrollment Data",
                        },
                      },
                      scales: {
                        x: {
                          grid: {
                            display: false,
                          },
                        },
                        y: {
                          ticks: {
                            beginAtZero: true,
                          },
                        },
                      },
                    }}
                  />
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
