import React, { useState } from "react";
//import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
// import GamepadRoundedIcon from "@mui/icons-material/GamepadRounded";
// import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import Stack from "@mui/material/Stack";
import UserAvatar from "../../../Components/Avatar";
//import { ListItem, SpeedDial } from "@mui/material";

// const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
//   position: "absolute",
//   "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
//     bottom: theme.spacing(2),
//     right: theme.spacing(2),
//   },
//   "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
//     top: theme.spacing(2),
//     left: theme.spacing(2),
//   },
// }));

// const actions = [
//   { icon: <GamepadRoundedIcon />, name: "Challenge" },
//   { icon: <MessageRoundedIcon />, name: "Start Conversation" },
// ];

export default function Message({ author, message, time }) {
  return (
    <Box>
      {author ? (
        <Stack>
          <MessageReceived author={author} message={message} time={time} />
        </Stack>
      ) : (
        <Stack justifyContent="flex-end" alignItems="flex-end">
          <MessageSent message={message} time={time} />
        </Stack>
      )}
    </Box>
  );
}

function MessageReceived({ author, message, time }) {
  const [hover, setHover] = useState(false);
  //const [hidden, setHidden] = useState(false);

  return (
    <Box
      sx={{ p: 2, display: "flex" }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <Stack>
        <UserAvatar
          name={author}
          busy={true}
          style={{ width: 36, height: 36, boxShadow: "0 0 0 2px lightgray" }}
        />
        {/* <Typography variant="caption" color="text.secondary" ml={0.5}>
          {author}
        </Typography> */}
      </Stack>
      <Stack spacing={0.5} sx={{ backgroundColor: "#E0" }} mr>
        <Typography fontWeight={500} color="text.primary">
          {message}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {time}
        </Typography>
      </Stack>
      <MoreHorizRoundedIcon style={{ display: hover ? "block" : "none" }} />
      {/* <SpeedDial
        ariaLabel="Chat user SpeedDial"
        hidden={hidden}
        sx={{ width: "1em", height: "1em" }}
        style={{ display: hover ? "block" : "none" }}
        icon={<MoreHorizRoundedIcon />}
      ></SpeedDial> */}
    </Box>
  );
}

function MessageSent({ message, time }) {
  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        alignItems: "right",
        justifyContent: "right",
      }}
      ml="auto"
    >
      <Stack spacing={0.5} sx={{ backgroundColor: "#E0" }} paddingRight={3}>
        <Typography fontWeight={500} color="text.primary">
          {message}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {time}
        </Typography>
      </Stack>

      <Stack>
        <UserAvatar
          name="Andrea"
          style={{ width: 36, height: 36, boxShadow: "0 0 0 2px lightgray" }}
        />
        <Typography variant="caption" color="text.secondary"></Typography>
      </Stack>
    </Box>
  );
}
