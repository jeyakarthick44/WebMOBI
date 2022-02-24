import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
export default function Topbar() {
  return (
    <Box
      sx={{ "& button": { m: 1 } }}
      style={{
        backgroundColor: "#dfe8e1",
        color: "black",
        paddingLeft: "28px"
      }}
    >
      <div className="topbar-elements">
        <div>
          <Button
            style={{
              color: "#7c9984",
              paddingBottom: "20px",
              textTransform: "capitalize",
              fontSize: "12px"
            }}
            size="small"
          >
            Event Settings
          </Button>
          <HorizontalRuleIcon
            style={{
              color: "#7c9984",
              transform: "rotate(90deg)"
            }}
          />
        </div>
        <div>
          <Button
            style={{
              color: "#7c9984",
              paddingBottom: "20px",
              textTransform: "capitalize",
              fontSize: "12px"
            }}
            size="small"
          >
            Engage and Network
          </Button>
          <HorizontalRuleIcon
            style={{
              color: "#7c9984",
              transform: "rotate(90deg)"
            }}
          />
        </div>
        <div>
          <Button
            style={{
              color: "#7c9984",
              paddingBottom: "20px",
              textTransform: "capitalize",
              fontSize: "12px"
            }}
            size="small"
          >
            Event Marketing
          </Button>
          <HorizontalRuleIcon
            style={{
              color: "#7c9984",
              marginTop: "5px",
              transform: "rotate(90deg)"
            }}
          />
        </div>
        <div>
          <Button
            style={{
              color: "#7c9984",
              paddingBottom: "20px",
              fontSize: "12px",
              textTransform: "capitalize"
            }}
            size="small"
          >
            Tickets
          </Button>
          <HorizontalRuleIcon
            style={{
              color: "#7c9984",
              marginTop: "5px",
              transform: "rotate(90deg)"
            }}
          />
        </div>
        <div>
          <Button
            style={{
              color: "#7c9984",
              paddingBottom: "20px",
              fontSize: "12px",
              textTransform: "capitalize"
            }}
            size="small"
          >
            Attendees
          </Button>
          <HorizontalRuleIcon
            style={{
              color: "#7c9984",
              marginTop: "5px",
              transform: "rotate(90deg)"
            }}
          />
        </div>
        <div>
          <Button
            style={{
              color: "#7c9984",
              paddingBottom: "20px",
              fontSize: "12px",
              textTransform: "capitalize"
            }}
            size="small"
          >
            Event Content
          </Button>
          <HorizontalRuleIcon
            style={{
              color: "#7c9984",
              marginTop: "5px",
              transform: "rotate(90deg)"
            }}
          />
        </div>
        <div>
          <Button
            style={{
              color: "#7c9984",
              paddingBottom: "20px",
              textTransform: "capitalize",
              fontSize: "12px"
            }}
            size="small"
          >
            publish
          </Button>
          <HorizontalRuleIcon
            style={{
              color: "#7c9984",
              marginTop: "5px",
              transform: "rotate(90deg)"
            }}
          />
        </div>
      </div>
    </Box>
  );
}
