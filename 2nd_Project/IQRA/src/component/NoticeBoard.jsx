import { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, Typography, CircularProgress, Alert } from '@mui/material';

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
// it me
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get('http://localhost:8000/notice/GetFromBoard');
        setNotices(response.data); 
      } catch (err) {
        setError('Failed to load notices. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Alert severity="error">{error}</Alert>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Notice Board
      </Typography>
      <Grid container spacing={3} sx={{justifyContent:'center'}}>
        {notices.map((notice) => (
          <Grid item xs={12} sm={6} md={4} key={notice.id}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {notice.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {notice.description}
                </Typography>
                <Typography variant="caption" display="block" color="textSecondary" style={{ marginTop: '10px' }}>
                  Posted on: {new Date(notice.date).toLocaleDateString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default NoticeBoard;
