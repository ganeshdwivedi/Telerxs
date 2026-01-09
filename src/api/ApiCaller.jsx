import axios from "axios";

const apiCaller = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
});
apiCaller.interceptors.request.use(
    async (config) => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken === undefined) {
            localStorage.removeItem("accessToken");
            return config;
        }
        if (accessToken) {
            const header = `Bearer ${accessToken}`;
            config.headers["token"] = header;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default apiCaller