import axios from "axios";
import { accountUrl, validateUrl } from "./backendUrls";

const func = async (token: string) => {
  try {
    const { data } = await axios.get(validateUrl, {
      headers: {
        jwt_token: token,
      },
    });

    localStorage.setItem("JWT-TOKEN", data.token);
    const res = await axios.get(accountUrl, {
      headers: {
        jwt_token: token,
      },
    });

    const { email, username, id } = res.data;
    const newPayload = {
      id,
      email,
      username,
    };

    return [data.token, newPayload];
  } catch (err) {
    console.dir(err);
  }
};

export default func;
