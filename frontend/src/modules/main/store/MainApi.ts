import axios from "axios";

const $api = axios.create({
  baseURL:
    import.meta.env.VITE_STATUS === "DEV"
      ? import.meta.env.VITE_API_DEV
      : import.meta.env.VITE_API_PROD,
});

export const mainApi = {
  getText({ text }) {
    return $api.post<any>("text", {
      text,
    });
  },
};
