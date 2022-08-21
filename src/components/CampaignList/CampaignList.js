import { useEffect, useCallback, useState } from "react";
import Campaign from "../Campaign/Campaign";
import { fetchGetCampaign } from "../../services/api/campaign";
import { fetchPostVote } from "../../services/api/vote";

function CampaignList() {
  const [list, setList] = useState([]);

  const getCampaign = useCallback(async () => {
    try {
      setList(await fetchGetCampaign());
    } catch (error) {
      console.log(error);
    }
  }, []);

  const renderCampaignList = useCallback(() => {
    return list.map((cpn) => (
      <Campaign
        key={cpn._id}
        title={cpn.title}
        startTime={cpn.startTime}
        endTime={cpn.endTime}
        options={cpn.options}
        count={cpn.count}
        voted={cpn.voted}
        setList={setList}
      />
    ));
  }, [list]);

  useEffect(() => {
    getCampaign();
  }, [getCampaign]);

  return <div>{renderCampaignList()}</div>;
}

export default CampaignList;
