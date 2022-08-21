import styles from "./option.module.css";
import { fetchGetCampaign } from "../../services/api/campaign";
import { fetchPostVote } from "../../services/api/vote";

function Option(props) {
  const {
    id,
    campaignId,
    name,
    count,
    voted,
    handleVote,
    setList,
    setError,
    setErrMsg,
  } = props;

  const getCount = () => {
    let item = count.find((el) => el._id === id)?.count;

    if (!item) {
      item = 0;
    }

    return item;
  };

  const renderVoted = () => {
    if (id === voted?.optionId) {
      return <div className={styles.option_voted}>You Voted</div>;
    }
  };

  const onClick = async () => {
    try {
      if (id === voted?.optionId) {
        return;
      }

      await fetchPostVote(campaignId, id);
      setList(await fetchGetCampaign());
      setError(false);
    } catch (err) {
      setError(true);
      setErrMsg("already voted");
    }
  };

  return (
    <div className={styles.option} onClick={onClick}>
      <div className={styles.option_name}>{name}</div>
      <div className={styles.option_vote}>Vote: {getCount()}</div>
      {renderVoted()}
    </div>
  );
}

export default Option;
