import React from "react";
import { Box, Badge } from "@material-ui/core";
import { BadgeAvatar, ChatContent, } from "../Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import { setActiveChat } from "../../store/activeConversation";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 8,
    height: 80,
    boxShadow: "0 2px 10px 0 rgba(88,133,196,0.05)",
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "grab"
    }
  },
  unreads: {
    margin: 40
  }
}));

const Chat = (props) => {
  const classes = useStyles();
  const { conversation } = props;
  const { otherUser } = conversation;
  const unreads = otherUser.username === props.activeConversation ? 0 : conversation.unreads || 0;
  const handleClick = async (conversation) => {
    await props.setActiveChat(conversation.otherUser.username);
  };
  return (
    <Box onClick={() => handleClick(conversation)} className={classes.root}>
      <BadgeAvatar
        photoUrl={otherUser.photoUrl}
        username={otherUser.username}
        online={otherUser.online}
        sidebar={true}
      />
      <ChatContent unreads={unreads} conversation={conversation} />
      <Badge badgeContent={unreads} className={classes.unreads} color="primary" />
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveChat: (id) => {
      dispatch(setActiveChat(id));
    }
  };
};
const mapStateToProps = (state) => {
  return {
    activeConversation: state.activeConversation
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
