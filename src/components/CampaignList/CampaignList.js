import { useEffect, useCallback, useState } from "react";
import axios from "axios";
import Campaign from "../Campaign/Campaign";

function CampaignList() {
  const [list, setList] = useState([]);

  const getCampaign = useCallback(async () => {
    try {
      let res = await axios.get("http://localhost:4000/campaign", {
        headers: {
          hkid: window.localStorage.getItem("voting_hkid"),
        },
      });
      setList(res.data);
    } catch (error) {
      console.error(error);
    }
    // fetch campaign list from nest
  }, []);

  const handleVote = useCallback(
    async (campaignId, optionId) => {
      try {
        await axios.post("http://localhost:4000/vote", {
          campaign_id: campaignId,
          option_id: optionId,
          hkid: window.localStorage.getItem("voting_hkid"),
        });

        await getCampaign();
      } catch (error) {
        console.error(error);
      }
    },
    [getCampaign]
  );

  const renderCampaignList = useCallback(() => {
    return list.map((cpn) => (
      <Campaign
        key={cpn._id}
        title={cpn.title}
        startTime={cpn.start_time}
        endTime={cpn.end_time}
        options={cpn.options}
        count={cpn.count}
        voted={cpn.voted}
        handleVote={handleVote}
      />
    ));
  }, [handleVote, list]);

  useEffect(() => {
    getCampaign();
  }, [getCampaign]);

  return <div>{renderCampaignList()}</div>;
}

export default CampaignList;
