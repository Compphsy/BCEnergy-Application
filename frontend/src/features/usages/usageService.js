import axios from 'axios';

const API_URL = '/api/usage/';

const getUsages = async (token) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };
    const { data } = await axios.get(API_URL, config);
    return data;
};

const usageService = {
    getUsages,
  }
export default usageService