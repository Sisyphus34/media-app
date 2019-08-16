import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DescriptionTwoToneIcon from "@material-ui/icons/DescriptionTwoTone";
import AddBoxTwoToneIcon from "@material-ui/icons/AddBoxTwoTone";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";

import ResultsTab from "components/Results/ResultsTab";
import { getThemeProps } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import FavoritesContext from "contexts/FavoritesContext";
import InterestsContext from "contexts/InterestsContext";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 500
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  }
}));

export default function ListView(props) {
  const classes = useStyles();
  const { favorites, setFavorites } = React.useContext(FavoritesContext);
  const { interests, setInterests } = React.useContext(InterestsContext)

  const [secondary, setSecondary] = React.useState(false);
  //   const AddBox = createContext(AddBoxsContext)

  // const onClick = (event) => {
  //     if (favorites.contains())

  // }
  // Make an onclick that checks if it's in favorites
  // If it's in it removes it and setFavorites to the new array
  // If it's not then it adds it and setFavorites to the new array
  React.useEffect(() => {
    // console.log("use effect", favorites);
  }, [favorites]);
  React.useEffect(() => {
    // console.log("use effect", interests);
  }, [interests]);
  // console.log("outside of effect", favorites);
  return (
    <div>
      <div className={classes.demo}>
        {/* {console.log("return starts")} */}

        <Container maxWidth="md">
          <List>
            {
              <ListItem>
                <ListItemAvatar>
                  <IconButton
                    color="secondary"
                    edge="end"
                    aria-label="description"
                    value={secondary}
                    onClick={event => {
                      // console.log(props.children);
                      setSecondary(secondary => !secondary);
                    }}
                  >
                    <DescriptionTwoToneIcon />
                  </IconButton>
                </ListItemAvatar>
                <ListItemText
                  primary={props.children.Name}
                  secondary={
                    secondary ? (
                      <React.Fragment>
                        {props.children.wTeaser}
                        <div>
                          <div>
                            <a href={props.children.wUrl} target="_blank">
                              WIKI`
                            </a>
                          </div>
                        </div>
                      </React.Fragment>
                    ) : null
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="addbox"
                    color={
                        interests.includes(props.children)
                          ? "secondary"
                          : "default"
                      }
                    onClick={event => {
                      console.log("onClick - interests running.")
                      let newInterest = interests.filter(function( obj ) {
                        return obj.Name !== props.children.Name;
                      });
                      console.log("props children", props.children)
                      if (newInterest.length === interests.length){
                        setInterests([...interests, props.children]);
                      } else {
                        setInterests(newInterest);
                      }
                    }}
                  >
                    <AddBoxTwoToneIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="favorite"
                    color={
                      favorites.includes(props.children)
                        ? "secondary"
                        : "default"
                    }
                    onClick={event => {
                      // console.log("onClick - setFavorites running.")
                      let newFav = favorites.filter(function( obj ) {
                        return obj.Name !== props.children.Name;
                      });
                      // console.log("props children", props.children)
                      if (newFav.length === favorites.length){
                        setFavorites([...favorites, props.children]);
                      } else {
                        setFavorites(newFav);
                      }
                    }}
                  >
                    <FavoriteTwoToneIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            }
          </List>
        </Container>
      </div>
    </div>
  );
}
