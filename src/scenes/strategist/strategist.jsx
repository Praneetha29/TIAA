import React, { useState, useEffect } from 'react';
import { Box, InputBase, IconButton, Typography, List, ListItem, ListItemText, Avatar, useTheme } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Subtitle from "../../components/Subtitle";
import { tokens } from "../../theme";

const Strategist = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [messages, setMessages] = useState([
    {
      user: 'Bot',
      text: "Ask questions or seek guidance on various financial topics, investment strategies, and more. Our chatbot is here to provide you with information and assistance. How can we help you today?",
      timestamp: new Date(),
      align: 'left',
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const messageList = document.getElementById('messageList');
    if (messageList) {
      messageList.scrollTop = messageList.scrollHeight;
    }
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const outgoingMessage = {
      user: 'You',
      text: newMessage,
      align: 'right',
    };

    const botResponse = {
      user: 'Bot',
      text: "I'm a simple bot, but I'm learning!",
      align: 'left',
    };

    setMessages([...messages, outgoingMessage, botResponse]);
    setNewMessage("");
  };

  return (
    <Box m="2px" height="90%" display="flex" flexDirection="column" marginBottom="0">
      <Subtitle heading="FIRE Strategist" />
      <Box sx={{ overflow: 'hidden', flexGrow: 1 }}>
        <List sx={{ overflowY: 'auto', bgcolor: `${colors.primary[400]}`, height: '100%' }} id="messageList">
          {messages.map((message, index) => (
            <ListItem key={index} sx={{ justifyContent: message.align === 'right' ? 'flex-end' : 'flex-start' }}>
              {message.align === 'left' && <Avatar sx={{ bgcolor: `${colors.blueAccent[700]}`, mr: 1, color: `${colors.grey[100]}` }}>B</Avatar>}
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      color: message.user === 'You' ? `${colors.grey[100]}` : `${colors.grey[100]}`,
                      bgcolor: message.user === 'You' ? `${colors.primary[500]}` : `${colors.blueAccent[700]}`,
                      borderRadius: '10px',
                      p: 1,
                    }}
                  >
                    {message.text}
                  </Typography>
                }
              />
              {message.align === 'right' && <Avatar sx={{ bgcolor: `${colors.primary[500]}`, ml: 1, color: `${colors.grey[100]}` }}>U</Avatar>}
            </ListItem>
          ))}
        </List>
      </Box>
      <Box component="form" onSubmit={sendMessage} sx={{ p: 2, display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', bgcolor: `${colors.primary[400]}` }}>
        <InputBase
          sx={{ ml: 1, flex: 1, color: 'black', backgroundColor: `${colors.grey[100]}`, borderRadius: 1, pl: 2 }}
          placeholder="Type a message..."
          inputProps={{ 'aria-label': 'type a message' }}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <IconButton type="submit" sx={{ p: '10px', color: `${colors.primary[300]}`, ml: 1 }} aria-label="send">
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Strategist;
