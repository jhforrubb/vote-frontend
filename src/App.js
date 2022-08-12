import styles from "./App.module.css";
import CampaignList from "./components/CampaignList/CampaignList";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <div className={styles.app_content}></div>
      <h1 className={styles.app_heading}>All Campaign: </h1>
      <CampaignList />
    </div>
  );
}

export default App;
