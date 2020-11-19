import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RoomIcon from '@material-ui/icons/Room';
import Button from '@material-ui/core/Button';

import MapContainer from "./components/maps";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [coords, setCoords] = React.useState(
    [
      {
        "name": "name1",
        "coords": [
          {
            "lat": -26.9453947,
            "lng": -52.643549
          },
          {
            "lat": -27.9463948,
            "lng": -53.653549
          },
          {
            "lat": -28.9473949,
            "lng": -54.663549
          },
          {
            "lat": -29.9483950,
            "lng": -55.673549
          },
          {
            "lat": -30.9493951,
            "lng": -56.683549
          },
          {
            "lat": -31.9503952,
            "lng": -57.693549
          },
          {
            "lat": -32.9513953,
            "lng": -58.703549
          },
          {
            "lat": -33.9523954,
            "lng": -59.713549
          },
          {
            "lat": -34.9533955,
            "lng": -60.723549
          },
          {
            "lat": -35.9543956,
            "lng": -61.733549
          },
          {
            "lat": -36.9553957,
            "lng": -62.743549
          },
          {
            "lat": -37.9563958,
            "lng": -63.753549
          },
          {
            "lat": -38.9573959,
            "lng": -64.763549
          },
          {
            "lat": -39.9583960,
            "lng": -65.773549
          },
          {
            "lat": -40.9593961,
            "lng": -66.783549
          },
          {
            "lat": -41.9603962,
            "lng": -67.793549
          },
          {
            "lat": -42.9613963,
            "lng": -68.803549
          },
          {
            "lat": -43.9623964,
            "lng": -69.813549
          },
          {
            "lat": -44.9633965,
            "lng": -70.823549
          },
          {
            "lat": -45.9643966,
            "lng": -71.833549
          },
          {
            "lat": -46.9653967,
            "lng": -72.843549
          },
          {
            "lat": -47.9663968,
            "lng": -73.853549
          },
          {
            "lat": -48.9673969,
            "lng": -74.863549
          },
          {
            "lat": -49.9683970,
            "lng": -75.873549
          }
        ]
      },
      {
        "name": "name2",
        "coords": [
          {
            "lat": 58.73411748,
            "lng": 170.19399436
          },
          {
            "lat": 28.99805934,
            "lng": -87.10364037
          },
          {
            "lat": -29.58921263,
            "lng": -109.97043447
          },
          {
            "lat": -24.12474865,
            "lng": -58.62857320
          },
          {
            "lat": -51.78900917,
            "lng": 1.41053635
          }
        ]
      },
      {
        "name": "name3",
        "coords": [
          {
            "lat": 4.98838745,
            "lng": -89.97970899
          },
          {
            "lat": -70.25381636,
            "lng": 103.16383480
          },
          {
            "lat": -85.91854017,
            "lng": 54.88779918
          },
          {
            "lat": 36.89222050,
            "lng": 20.32623539
          },
          {
            "lat": -59.80117894,
            "lng": 28.30456596
          }
        ]
      },
      {
        "name": "name4",
        "coords": [
          {
            "lat": 8.58571965,
            "lng": -36.84772052
          },
          {
            "lat": -46.69646867,
            "lng": 83.68950849
          },
          {
            "lat": -75.22393424,
            "lng": 110.94163126
          },
          {
            "lat": -7.54312959,
            "lng": 12.67539873
          },
          {
            "lat": -64.84744821,
            "lng": 57.04410592
          }
        ]
      }
    ]
  )
  const [selected, setSelected] = React.useState(coords[0])


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const updateMaps = (coord) => {
    setSelected(coord)
  }


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            challenge
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <MapContainer markers={selected} />
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <Button>Importar</Button>
        <Divider />

        <List>
          {coords.map((coord, index) => (
            <ListItem onClick={() => updateMaps(coord)} button key={coord.name}>
              <ListItemIcon><RoomIcon /></ListItemIcon>
              <ListItemText primary={coord.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}