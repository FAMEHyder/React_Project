import  { useEffect, useState } from 'react';
import { Container, Box, Typography, Skeleton, Grid } from '@mui/material';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';

// Register necessary chart elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate API call to fetch data
  useEffect(() => {
    setTimeout(() => {
      setData({
        productTypes: [30, 45, 20, 50], // Product type amounts
        purchases: 150, // Total purchases
        amountReceived: 2000, // Total amount received
        numberOfUsers: 500, // Number of users
        monthlySales: [200, 300, 250, 400], // Monthly sales
        dailySales: [100, 80, 120, 90], 
        weeklySales: [700, 800, 950, 1000], 
      });
      setLoading(false);
    }, 3000);
  }, []);

  // Chart data for each graph
  const productTypeData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [
      {
        label: 'Amount of Product Types',
        data: data?.productTypes || [],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const salesData = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: data?.monthlySales || [],
        borderColor: '#42a5f5',
        backgroundColor: 'rgba(66, 165, 245, 0.2)',
        fill: true,
      },
    ],
  };

  const dailySalesData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4'],
    datasets: [
      {
        label: 'Daily Sales',
        data: data?.dailySales || [],
        borderColor: '#ff9800',
        backgroundColor: 'rgba(255, 152, 0, 0.2)',
        fill: true,
      },
    ],
  };

  const weeklySalesData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Weekly Sales',
        data: data?.weeklySales || [],
        borderColor: '#4caf50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        fill: true,
      },
    ],
  };

  const pieChartData = {
    labels: ['Purchased', 'Received', 'Pending'],
    datasets: [
      {
        data: [data?.purchases || 0, data?.amountReceived || 0, 5000], // Dummy values
        backgroundColor: ['#42a5f5', '#66bb6a', '#ff7043'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <Box sx={{
      paddingTop: '80px',
      paddingLeft: '20px',
      paddingRight: '20px',
      marginLeft: '240px', // Adjust to the width of the sidebar
      overflowY: 'auto',
      height: 'calc(100vh - 80px)',
      marginTop: '20px',
    }}>
      <Container maxWidth="xl">
        {/* Graphical information - All charts stacked vertically */}
        <Grid container direction="column" spacing={4}>
          {/* Product Types Chart */}
          <Grid item xs={12}>
            <Box sx={{ padding: 2, backgroundColor: 'white', borderRadius: 2, boxShadow: 3, height: 350 }}>
              <Typography variant="h6">Product Types</Typography>
              {loading ? (
                <Skeleton variant="rectangular" width="100%" height="100%" />
              ) : (
                <Bar data={productTypeData} options={{ responsive: true }} />
              )}
            </Box>
          </Grid>

          {/* Purchases Pie Chart */}
          <Grid item xs={12}>
            <Box sx={{ padding: 2, backgroundColor: 'white', borderRadius: 2, boxShadow: 3, height: 500 }}>
              <Typography variant="h6">Purchase & Received</Typography>
              {loading ? (
                <Skeleton variant="rectangular" width="100%" height="100%" />
              ) : (
                <Pie
                  data={pieChartData}
                  options={{ responsive: true }}
                  sx={{ height: 250, width: '100%' }} // Adjusted size for the Pie chart
                />
              )}
            </Box>
          </Grid>

          {/* Monthly Sales Line Chart */}
          <Grid item xs={12}>
            <Box sx={{ padding: 2, backgroundColor: 'white', borderRadius: 2, boxShadow: 3, height: 350 }}>
              <Typography variant="h6">Monthly Sales</Typography>
              {loading ? (
                <Skeleton variant="rectangular" width="100%" height="100%" />
              ) : (
                <Line data={salesData} options={{ responsive: true }} />
              )}
            </Box>
          </Grid>

          {/* Daily Sales Line Chart */}
          <Grid item xs={12}>
            <Box sx={{ padding: 2, backgroundColor: 'white', borderRadius: 2, boxShadow: 3, height: 350 }}>
              <Typography variant="h6">Daily Sales</Typography>
              {loading ? (
                <Skeleton variant="rectangular" width="100%" height="100%" />
              ) : (
                <Line data={dailySalesData} options={{ responsive: true }} />
              )}
            </Box>
          </Grid>

          {/* Weekly Sales Line Chart */}
          <Grid item xs={12}>
            <Box sx={{ padding: 2, backgroundColor: 'white', borderRadius: 2, boxShadow: 3, height: 350 }}>
              <Typography variant="h6">Weekly Sales</Typography>
              {loading ? (
                <Skeleton variant="rectangular" width="100%" height="100%" />
              ) : (
                <Line data={weeklySalesData} options={{ responsive: true }} />
              )}
            </Box>
          </Grid>

          {/* Users & Sales Info */}
          <Grid item xs={12}>
            <Box sx={{ padding: 2, backgroundColor: 'white', borderRadius: 2, boxShadow: 3, height: 150 }}>
              <Typography variant="h6">Number of Users</Typography>
              {loading ? (
                <Skeleton variant="text" width="100%" />
              ) : (
                <Typography variant="h4">{data?.numberOfUsers}</Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
