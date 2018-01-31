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

const drawerWidth = 300

const styles = theme => ({
  root: {
    width: "100%",
    height: "100%",
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
    height: "1000px",
    overflowY: "scroll",
    width: drawerWidth,
  },
  drawerHeader: theme.mixins.toolbar,
  content: {
    backgroundColor: theme.palette.background.default,
    width: "100%",
    padding: theme.spacing.unit * 3,
    height: "calc(1000px - 56px)",
    marginTop: 56,
    [theme.breakpoints.up("sm")]: {
      height: "calc(1000px - 64px)",
      marginTop: 64,
    },
    overflowY: "scroll",
    display: "flex",
    justifyContent: "center",
  },
})

const SubTitle = styled.div`
  padding: 1rem;
  color: #c0c0c0;
`

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
            <SubTitle>TABELS</SubTitle>
            <Divider />
            <List component="nav">
              {this.props.items.map(name => (
                <a href={`#${name}`} key={name}>
                  <ListItem button>
                    <ListItemText primary={name} />
                  </ListItem>
                </a>
              ))}
            </List>
            <Divider />
          </Drawer>
          <main className={classes.content}>
            <Typography>{this.props.children}</Typography>
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
