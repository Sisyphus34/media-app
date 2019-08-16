import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AllInclusiveTwoToneIcon from "@material-ui/icons/AllInclusiveTwoTone";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ListView from "components/Results/ListView";
import InterestsContext from 'contexts/InterestsContext'

const Interests = () => {

  const { interests, setInterests } = React.useContext(InterestsContext)

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }

  const useStyles = makeStyles({
    root: {
      flexGrow: 1
      //   maxWidth: 500
    }
  });

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <div>
      <Paper square className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="TwoToneicon label tabs example"
        >
          <Tab
            icon={<AllInclusiveTwoToneIcon />}
            label={
              <span className="badge badge-primary badge-pill">
                INTERESTS {interests.length}
              </span>
            }
          />
        </Tabs>
        {/* Attempt to add all tab panels into a container with max width */}

        <TabPanel value={value} index={0}>
          {interests.map(item => {
            return (
              <div key={interests.Name}>
                <ListView>{item}</ListView>
              </div>
            );
          })}
        </TabPanel>
      </Paper>
    </div>
  );
};
export default Interests;
