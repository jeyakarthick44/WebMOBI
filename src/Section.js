import Header from "./Header";
import "./styles.css";
import Topbar from "./Topbar";
import Main from "./Main";

export default function Section() {
  return (
    <div className="section">
      <Header />
      <Topbar />
      <Main />
    </div>
  );
}
