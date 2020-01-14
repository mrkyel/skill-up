import React from "react";
import { Link } from "react-router-dom";
import FaceIcon from "@material-ui/icons/Face";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  submit: {
    float: "right",
    padding: "10px"
  }
});

const Admin = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.submit}>
        <FaceIcon />
        로그인 계정
        <Link to="/">
          <Button variant="contained" color="primary">
            로그아웃
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Admin;
