import styles from "../styles/Home.module.css";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import Scanner from "../components/Scanner";

export default function Home() {
  const injected = new InjectedConnector();
  const { activate, active, account, library: provider } = useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className={styles.container}>
      {active ? (
        <>
          <Scanner account={account} active={active} provider={provider} />
        </>
      ) : (
        <button onClick={() => connect()}>Connect</button>
      )}
    </div>
  );
}
