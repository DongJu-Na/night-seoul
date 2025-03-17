import axios from "axios";

const ApiInstance = axios.create({
  baseURL: "http://openapi.seoul.go.kr:8088/", // 기본 URL
  timeout: 5000, // 요청 타임아웃
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
ApiInstance.interceptors.request.use(
  (config) => {
    /* 토큰 로직
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    */
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
ApiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // 오류 처리
    if (error.response) {
      console.error("API 오류:", error.response.data);
    }
    return Promise.reject(error);
  }
);

export default ApiInstance;