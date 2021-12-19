import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Avatar, CardMedia } from "@material-ui/core";

const styles = {
  customTabPanel: {
    backgroundColor: "#FFFFFF80",
    marginBottom: "16px",
    width: "720px",
    height: "480px",
  },
  customTabLabel: {
    backgroundColor: "#FFFFFF80",
    marginBottom: "16px",
    width: "240px",
  },
};

const CustomTabPanel = (props) => {
  const { lecture } = props;
  return (
    <Card style={styles.customTabPanel}>
      <CardHeader
        avatar={<Avatar src={lecture.avatarUrl} />}
        title={lecture.title}
        subheader={lecture.subtitle}
      />
      <CardMedia style={{ height: "150px" }} image={lecture.imageUrl} />
      <CardContent>
        <Typography variant="body2" component="p">
          {lecture.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const CustomTabLabel = (props) => {
  const { lecture } = props;
  return (
    <Card style={styles.customTabLabel}>
      <CardHeader
        avatar={<Avatar src={lecture.avatarUrl} />}
        title={lecture.title}
        subheader={lecture.subtitle}
      />
      <CardMedia style={{ height: "150px" }} image={lecture.imageUrl} />
      <CardActions>
        <Button variant="solid" size="small">
          Escoger
        </Button>
      </CardActions>
    </Card>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "80vh",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {props.data.map((lecture, index) => (
          <Tab
            key={`CustomTab-Lecture-${index}`}
            label={<CustomTabLabel lecture={lecture} />}
            centered
            style={{ backgroundColor: "transparent" }}
            {...a11yProps(lecture.title)}
          />
        ))}
      </Tabs>
      {props.data.map((data, index) => (
        <TabPanel
          key={`CustomTabPanel-Lecture-${index}`}
          value={value}
          index={index}
        >
          <CustomTabPanel lecture={data} />
        </TabPanel>
      ))}
    </div>
  );
}
