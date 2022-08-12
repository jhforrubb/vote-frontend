import styles from "./campaign.module.css";
import moment from "moment";
import Option from "../Option/Option";

function Campaign(props) {
  const { title, startTime, endTime, options, count, voted ,handleVote} = props;

  return (
    <div className={styles.campaign}>
      <div className={styles.campaign_title}>{title}</div>
      <div className={styles.campaign_time}>
        <div>Start: {moment(startTime).format("MMM DD, YYYY")}</div>
        <div>End: {moment(endTime).format("MMM DD, YYYY")}</div>
      </div>
      {options.map((option) => (
        <Option
          key={option._id}
          id={option._id}
          name={option.name}
          campaignId={option.campaign_id}
          count={count}
          voted={voted}
          handleVote={handleVote}
        />
      ))}
    </div>
  );
}

Campaign.defaultProps = {
  options: [],
};

export default Campaign;
