import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

interface LinkCardProps {
  to: string;
  title: string;
  description?: string;
}
const LinkCard = ({ to, title, description }: LinkCardProps) => {
  return (
    <Box
      sx={{
        width: "20vw",
        backgroundColor: "#bbb",
      }}
    >
      <Paper elevation={8} sx={{
          width: "100%",
            height: "100%",
            padding: "1rem",
            margin: "3px"

      }}>
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px"
            }}
        >
          <Button
            sx={{
                width: "100%",
                border: "1px solid #000",
                borderRadius: "5px",
                padding: "10px",
            }}
          >
            <Link to={to} style={{ textDecoration: "none" }}>
                <Typography>
                    {title}
                </Typography>
            </Link>
          </Button>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </Paper>
    </Box>
  );
};

export default LinkCard;
