import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="assets/person/1.png" />
          <Avatar alt="Travis Howard" src="assets/person/2.png" />
          <Avatar alt="Cindy Baker" src="assets/person/3.png" />
          <Avatar alt="Agnes Walker" src="assets/person/4.png" />
          <Avatar alt="Trevor Henderson" src="assets/person/5.png" />
          <Avatar alt="Trevor Henderson" src="assets/person/6.png" />
          <Avatar alt="Trevor Henderson" src="assets/person/7.png" />
          <Avatar alt="Trevor Henderson" src="assets/person/8.png" />
          <Avatar alt="Trevor Henderson" src="assets/person/9.png" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="assets/post/7.png"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="assets/post/8.jpeg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="assets/post/9.png"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="assets/person/2.png"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Rutuja Patil
                  </Typography>
                  {" — I'll be having MCA this weekend after that .…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Code Jams"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Durgesh, Nishant, Vaishnavi
                  </Typography>
                  {" — Greetings CodeCheffer's,Hope you had a fun Starters 48. It’s time …"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary=""
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Durgesh Mahajan
                  </Typography>
                  {" — Suggest some npm packages for deploying nodejs ..."}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
