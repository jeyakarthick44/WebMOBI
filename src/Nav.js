import "./styles.css";
import GroupsIcon from "@mui/icons-material/Groups";
import EventIcon from "@mui/icons-material/Event";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-tools">
        <EventIcon
          style={{ color: "blue", textAlign: "center", marginLeft: "42px" }}
        />
        <Button
          style={{
            color: "#7c9984",
            textTransform: "capitalize",
            fontSize: "12px",
            textAlign: "center"
          }}
          size="small"
        >
          Event
        </Button>
      </div>
      <div className="nav-tools">
        <GroupsIcon
          style={{ color: "blue", textAlign: "center", marginLeft: "42px" }}
        />
        <Button
          style={{
            color: "#7c9984",
            textTransform: "capitalize",
            fontSize: "12px",
            textAlign: "center"
          }}
          size="small"
        >
          Teams
        </Button>
      </div>
      <div className="nav-tools">
        <AnnouncementIcon
          style={{ color: "blue", textAlign: "center", marginLeft: "42px" }}
        />
        <Button
          style={{
            color: "#7c9984",
            textTransform: "capitalize",
            fontSize: "12px",
            textAlign: "center"
          }}
          size="small"
        >
          Announcement
        </Button>
      </div>
      <div className="nav-tools">
        <AnalyticsIcon
          style={{ color: "blue", textAlign: "center", marginLeft: "42px" }}
        />
        <Button
          style={{
            color: "#7c9984",
            textTransform: "capitalize",
            fontSize: "12px",
            textAlign: "center"
          }}
          size="small"
        >
          Analytics
        </Button>
      </div>
      <div className="nav-tools">
        <EmailIcon
          style={{ color: "blue", textAlign: "center", marginLeft: "42px" }}
        />
        <Button
          style={{
            color: "#7c9984",
            textTransform: "capitalize",
            fontSize: "12px",
            textAlign: "center"
          }}
          size="small"
        >
          Email
        </Button>
      </div>
    </div>
  );
}
