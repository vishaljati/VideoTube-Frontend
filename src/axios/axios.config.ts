// import axios from "axios";

// class AxiosConfig {
//   constructor() {
//     axios.defaults.baseURL = String(import.meta.env.VITE_API_BASE_URL) || "http://localhost:3000";
//     axios.defaults.withCredentials = true;
//   }
//   async getData(endpoint: string) {
//     try {
//       const response = await axios.get(endpoint);
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       throw error;
//     }
//   }

//   async postData(endpoint: string, data: any) {
//     try {
//       const response = await axios.post(endpoint, data);
//       return response.data;
//     } catch (error) {
//       console.error("Error posting data:", error);
//       throw error;
//     }
//   }
//   async putData(endpoint: string, data: any) {
//     try {
//       const response = await axios.put(endpoint, data);
//       return response.data;
//     } catch (error) {
//       console.error("Error putting data:", error);
//       throw error;
//     }
//   }
//   async deleteData(endpoint: string) {
//     try {
//       const response = await axios.delete(endpoint);
//       return response.data;
//     } catch (error) {
//       console.error("Error deleting data:", error);
//       throw error;
//     }
//   }
//   async patchData(endpoint: string, data: any) {
//     try {
//       const response = await axios.patch(endpoint, data);
//       return response.data;
//     } catch (error) {
//       console.error("Error patching data:", error);
//       throw error;
//     }
//   }
// }

// const axiosConfig = new AxiosConfig();

// export default axiosConfig;

