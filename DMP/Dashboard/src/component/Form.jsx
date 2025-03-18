
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardActions, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { Select, MenuItem } from '@mui/material';

export default function FacebookPostDashboard() {
    const [message, setMessage] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [cityId, setCityId] = useState('136189'); // Default: Islamabad
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const response = await axios.get('http://localhost:5000/api/posts');
        setPosts(response.data);
    };

    const handlePost = async () => {
        const response = await axios.post('http://localhost:5000/api/post', {
            message,
            imageUrl,
            cityId,
        });
        if (response.data.success) {
            alert('Post successfully added to Facebook!');
            fetchPosts();
        } else {
            alert('Error posting to Facebook');
        }
    };

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <Typography variant="h4" gutterBottom>Facebook Post Dashboard</Typography>
            <Card className="p-4 mb-4">
                <CardContent>
                    <TextField 
                        fullWidth 
                        label="Enter your post message" 
                        variant="outlined" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        margin="normal"
                    />
                    <TextField 
                        fullWidth 
                        label="Enter image URL (optional)" 
                        variant="outlined" 
                        value={imageUrl} 
                        onChange={(e) => setImageUrl(e.target.value)} 
                        margin="normal"
                    />
                    <Select 
                        fullWidth 
                        value={cityId} 
                        onChange={(e) => setCityId(e.target.value)} 
                        displayEmpty
                    >
                        <MenuItem value="136189">Islamabad</MenuItem>
                        <MenuItem value="1176615">Lahore</MenuItem>
                        <MenuItem value="1581130">Karachi</MenuItem>
                    </Select>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" fullWidth onClick={handlePost}>Post to Facebook</Button>
                </CardActions>
            </Card>
            <Typography variant="h5" gutterBottom>Previous Posts</Typography>
            {posts.map((post) => (
                <Card key={post._id} className="p-4 mb-2">
                    <CardContent>
                        <Typography>{post.message}</Typography>
                        {post.imageUrl && <img src={post.imageUrl} alt="Posted" className="mt-2" style={{ maxWidth: '100%' }} />}
                        <Typography color="textSecondary">City ID: {post.cityId}</Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
