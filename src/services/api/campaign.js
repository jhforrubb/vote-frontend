import axios from "../axios";

export const fetchGetCampaign = async () => {
  try {
    const res = await axios.get("/campaign", {
      headers: {
        hkid: window.localStorage.getItem("voting_hkid"),
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};
