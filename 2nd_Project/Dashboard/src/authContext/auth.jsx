import {create} from 'zustand';
import axios from 'axios';

export const useAuthStore = create((set, get) => ({
    user: null,
    token: localStorage.getItem('authToken'),
    userId: null,

    fetchUserData: async () => {
        const { token, userId } = get();
        console.log("Now userId is : ",userId)
        if (!token || !userId) return;
        try {
            const response = await axios.get(`http://localhost:8000/user/users/${userId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            set({ user: response.data.data });
            console.log("User data in authcontext store ", response.data);
        } catch (error) {
            console.error('Failed to load user data:', error);
            get().logout();
        }
    },

    login: async (data) => {
        const { token, userData } = data;
        console.log("User Id and token: ",token,userData._id)   
        try {
            set({ token, userId: userData._id });
            localStorage.setItem('authToken', token);
    
            await get().fetchUserData();  
            return true;
        } catch (error) {
            console.error('Sorry Login failed:', error);
            return false;
        }
    },

    logout: () => {
        set({ user: null, token: null, userId: null });
        localStorage.removeItem('authToken');
    },

    checkAuthentication: (navigate) => {
        const { token, user } = get();
        if (!token || !user) {
            navigate('/login'); 
            return false;
        }
        return true;
    },}))
