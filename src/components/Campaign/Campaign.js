import styles from "./campaign.module.css";
import moment from "moment";
import Option from "../Option/Option";
import { useState } from "react";

function Campaign(props) {
  const {
    title,
    startTime,
    endTime,
    options,
    count,
    voted,
    handleVote,
    setList,
  } = props;
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  return (
    <div className={styles.campaign}>
      <div className={styles.campaign_title}>{title}</div>
      <div className={styles.campaign_time}>
        <div>Start: {moment(startTime).format("MMM DD, YYYY")}</div>
        <div>End: {moment(endTime).format("MMM DD, YYYY")}</div>
      </div>
      {error && <div className={styles.campaign_error}>{errMsg}</div>}
      {options.map((option) => (
        <Option
          key={option._id}
          id={option._id}
          name={option.name}
          campaignId={option.campaignId}
          count={count}
          voted={voted}
          handleVote={handleVote}
          setList={setList}
          setError={setError}
          setErrMsg={setErrMsg}
        />
      ))}
    </div>
  );
}

Campaign.defaultProps = {
  options: [],
};

export default Campaign;
