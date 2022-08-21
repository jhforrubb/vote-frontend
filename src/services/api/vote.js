import axios from "../axios";

export const fetchPostVote = async function (campaignId, optionId) {
  try {
    await axios.post("/vote", {
      campaignId: campaignId,
      optionId: optionId,
      hkid: window.localStorage.getItem("voting_hkid"),
    });
  } catch (error) {
    throw error;
  }
};
