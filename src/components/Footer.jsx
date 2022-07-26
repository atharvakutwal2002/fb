import React, { Component } from "react";

import { styled, Typography } from "@mui/material";



const FooterContainer = styled("div")({
    textAlign: "center",
    padding:".6rem",
    position: "sticky",
    
    bottom: 0,
    margin:0,
    background: "rgb(25,118,210)",
    color:"white"
  });
  

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <Typography sx={{fontSize:"1.5rem"}}>Made with ❤ by Atharva 😊</Typography>
      </FooterContainer>
    );
  }
}

export default Footer;
