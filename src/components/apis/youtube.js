import axios from "axios";

const KEY = "AIzaSyD5Mx7TcvQuiZCM25VG_eJAmwk-Y0dTxK0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 15,
    key: KEY,
  },
});
