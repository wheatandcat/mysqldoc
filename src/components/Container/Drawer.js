import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import classNames from "classnames"
import { withStyles } from "material-ui/styles"
import Drawer from "material-ui/Drawer"
import AppBar from "material-ui/AppBar"
import Toolbar from "material-ui/Toolbar"
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List"
import { MenuItem } from "material-ui/Menu"
import TextField from "material-ui/TextField"
import Typography from "material-ui/Typography"
import Divider from "material-ui/Divider"

const drawerWidth = 240

const styles = theme => ({
  root: {
    width: "100%",
    height: 430,
    zIndex: 1,
    overflow: "hidden",
  },
  appFrame: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%",
  },
  appBar: {
    position: "absolute",
    width: `calc(100% - ${drawerWidth}px)`,
  },
  "appBar-left": {
    marginLeft: drawerWidth,
  },
  "appBar-right": {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: "relative",
    height: "100%",
    width: drawerWidth,
  },
  drawerHeader: theme.mixins.toolbar,
  content: {
    backgroundColor: theme.palette.background.default,
    width: "100%",
    padding: theme.spacing.unit * 3,
    height: "calc(100% - 56px)",
    marginTop: 56,
    [theme.breakpoints.up("sm")]: {
      height: "calc(100% - 64px)",
      marginTop: 64,
    },
  },
})

class PermanentDrawer extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            className={classNames(classes.appBar, classes[`appBar-left`])}
          >
            <Toolbar>
              <Typography type="title" color="inherit" noWrap>
                MySQL doc
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            type="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader} />
            <Divider />
            <List component="nav">
              <ListItem button>
                <ListItemText primary="Trash" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Trash" />
              </ListItem>
            </List>
            <Divider />
          </Drawer>
          <main className={classes.content}>
            <Typography>
              {"You think water moves fast? You should see ice."}
            </Typography>
          </main>
        </div>
      </div>
    )
  }
}

PermanentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PermanentDrawer)
