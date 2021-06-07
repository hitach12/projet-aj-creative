import axios from "axios";

const PREFIX_API = "/api/v1";

export default axios.create({
  baseURL: PREFIX_API,
});
