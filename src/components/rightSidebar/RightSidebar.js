import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";

const hashtags = [
  "هشتگ_جدید",
  "کرونا",
  "corona_virus",
  "کریپتو",
  "Specex",
  "Tesla",
  "DogeCoin",
];

const RightSidebar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction={"row"} alignItems={"center"}>
        <grid item>
          <img alt={""} src={"images/logo.png"} />
        </grid>
        <grid item>
          <Typography className={classes.logoType}>توییتر فارسی</Typography>
        </grid>
      </Grid>
      <Typography className={classes.hashtagTitle}>داغ ترین هشتگ ها</Typography>
      <Grid container direction={"column"} alignItems={"center"}>
        {hashtags.map((item) => {
          return (
            <ButtonBase className={classes.tagItemParent}>
              <Grid item container direction={"row"} alignItems={"center"}>
                <img
                  className={classes.tagImg}
                  alt={""}
                  src={"images/hashtag.png"}
                />
                <Typography className={classes.tagItem}>{item}</Typography>
              </Grid>
            </ButtonBase>
          );
        })}
      </Grid>
    </div>
  );
};

export default RightSidebar;
