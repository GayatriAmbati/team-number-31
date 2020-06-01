import React, { useState } from "react";
import { Card, CardMedia, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../../styles/css/InputField.css";
import { PrimaryButton } from "../Buttons/index";
import styles from "../../styles/jss/card";
import { Title, Text } from "../Typography/index";
// import axios from 'axios';

const useStyles = makeStyles(styles);

export default function LoginCard() {
  const classes = useStyles();
  const [style, setStyle] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios.post {URL,
    // 	header: {

    // 	}
    // 	data: {

    // 	}
    // }
  };

  const customMargin = {
    margin: "30px 0",
  };
  setTimeout(() => {
    const newStyle = {
      opacity: "1",
    };
    setStyle(newStyle);
  }, 100);
  return (
    <Card className={classes.loginCardStyle} style={style}>
      <CardMedia>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <form onSubmit={handleSubmit}>
            <Title>Login</Title>
            <Box style={customMargin}>
              <div className="input-div">
                <Text>Username</Text>
                <input
                  type="input"
                  id="username"
                  placeholder="eg. Alex Grisham"
                  className="input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </Box>
            <Box style={customMargin}>
              <div className="input-div">
                <Text>Password</Text>
                <input
                  type="password"
                  id="password"
                  className="input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </Box>
            <Box>
              <PrimaryButton>Login</PrimaryButton>
            </Box>
          </form>
        </Box>
      </CardMedia>
    </Card>
  );
}
