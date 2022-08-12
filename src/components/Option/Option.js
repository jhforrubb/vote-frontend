import styles from "./option.module.css";

function Option(props) {
  const { id, campaignId, name, count, voted, handleVote } = props;

  const getCount = () => {
    let item = count.find((el) => el._id === id)?.count;

    if (!item) {
      item = 0;
    }

    return item;
  };

  const renderVoted = () => {
    if (id === voted?.option_id) {
      return <div className={styles.option_voted}>You Voted</div>;
    }
  };

  const onClick = async () => {
    if (id === voted?.option_id) {
      return;
    }

    await handleVote(campaignId, id);
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
