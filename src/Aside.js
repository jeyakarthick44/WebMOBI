import "./styles.css";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import SettingsIcon from "@mui/icons-material/Settings";
export default function Aside() {
  return (
    <div className="aside">
      <AccountCircleIcon
        style={{
          color: "blue",
          textAlign: "center",
          marginLeft: "10px",
          paddingBottom: "5px"
        }}
      />
      <NotificationsActiveIcon
        style={{
          color: "green",
          textAlign: "center",
          marginLeft: "10px",
          paddingBottom: "5px"
        }}
      />
      <MarkUnreadChatAltIcon
        style={{
          color: "yellow",
          textAlign: "center",
          marginLeft: "10px",
          paddingBottom: "5px"
        }}
      />
      <SettingsIcon
        style={{
          color: "pink",
          textAlign: "center",
          marginLeft: "10px",
          paddingBottom: "5px"
        }}
      />
    </div>
  );
}
