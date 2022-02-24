import "./styles.css";
import Typography from "@mui/material/Typography";
import CancelIcon from "@mui/icons-material/Cancel";

export default function Main() {
  return (
    <div className="main">
      <div className="event">
        <Typography
          variant="h5"
          style={{ opacity: "0.6", fontFamily: "Poppins", fontSize: "18px" }}
        >
          Event Content
        </Typography>
        <hr />
        <Typography
          style={{
            paddingBottom: "10px",
            paddingTop: "10px",
            fontSize: "17px"
          }}
          variant="h6"
        >
          Basic
        </Typography>
        <Typography
          style={{ paddingBottom: "10px", fontSize: "17px" }}
          variant="h6"
        >
          Branding
        </Typography>
        <Typography
          style={{ paddingBottom: "10px", fontSize: "17px" }}
          variant="h6"
        >
          Agenda
        </Typography>
        <Typography
          style={{ paddingBottom: "10px", fontSize: "17px" }}
          variant="h6"
        >
          Virtual/Hybrid Center
        </Typography>
        <Typography
          style={{ paddingBottom: "10px", fontSize: "17px" }}
          variant="h6"
        >
          Speaker Center
        </Typography>
        <Typography
          style={{ paddingBottom: "10px", fontSize: "17px" }}
          variant="h6"
        >
          Sponsor Center
        </Typography>
      </div>
      <div className="center">
        <Typography
          style={{ color: "blue", fontFamily: "Poppins", fontWeight: "bold" }}
          variant="h5"
        >
          Virtual/Hybrid Center
        </Typography>
        <hr />
        <CancelIcon className="cancel" />
      </div>
    </div>
  );
}
