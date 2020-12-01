import React, { useState, useEffect } from "react";
import Maps from './components/Maps';
import FileItem from './components/FileItem';
import UploadFile from './components/UploadFile';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';


import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PublishIcon from '@material-ui/icons/Publish';
import API from "./Api";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1,
    },
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }
}));


export default function App() {
  let interval = null;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [files, setFiles] = React.useState([]);
  const [locations, setLocations] = React.useState([]);

  useEffect(() => {
    // TODO (jbalmant) - Study a better way to do this
    interval = setInterval(getFiles, 10000)
  }, []);

  const getFiles = () => {
    API.get('/files').then((data) => {
      setFiles(data.data)
    }).catch((err) => {
      alert(err)
      console.log(err)
    })
  }

  const getLocations = (file_id) => {
    API.get(`/files/${file_id}/locations`).then((data) => {
      setLocations(data.data)
    }).catch((err) => {
      alert(err)
      console.log(err)
    })
  }

  const handleSubmit = (filename) => {
    setShowModal(false)
    API.post(`/files`, { 'path': filename }).then((data) => {
      getFiles()
    })
  }

  const toogleDrawer = () => {
    setOpen(!open);
  };

  const handleUploadFileClose = () => {
    setShowModal(false)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        anchor="right"
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={toogleDrawer}>
            {open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <ListItem button key={'Upload'} onClick={() => setShowModal(true)}>
          <ListItemIcon><PublishIcon /></ListItemIcon>
          <ListItemText primary={'Upload'} />
        </ListItem>
        <Divider />
        <List>
          {files.filter((f) => f.status == 5).map((file, index) => (
            <FileItem file={file} handleClick={getLocations}></FileItem>
          ))}
        </List>
        <Divider />
        <List>
          {files.filter((f) => { return (f.status > 0 && f.status != 5) }).map((file, index) => (
            <FileItem file={file} handleClick={getLocations}></FileItem>
          ))}
        </List>
        <Divider />
        <List>
          {files.filter((f) => f.status < 0).map((file, index) => (
            <FileItem file={file} handleClick={getLocations}></FileItem>
          ))}
        </List>
        <Divider />
        <ListItem button key={'Sair'} onClick={() => alert('No implemented')}>
          <ListItemIcon><ExitToAppIcon /></ListItemIcon>
          <ListItemText primary={'Sair'} />
        </ListItem>
      </Drawer>
      <main className={clsx(classes.content, { [classes.contentShift]: open, })}>
        <UploadFile showModal={showModal} onClose={handleUploadFileClose} handleSubmit={handleSubmit}></UploadFile>
        <Maps positions={locations} />
      </main>
    </div>
  );
}