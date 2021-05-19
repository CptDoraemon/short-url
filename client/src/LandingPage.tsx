import React from "react";
import {Button, makeStyles, Paper, TextField, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100vw',
    maxWidth: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  widthWrapper: {
    width: '100%',
    maxWidth: theme.breakpoints.values['lg'],
    height: '100%',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#4a5568',
    fontWeight: 700,
    marginBottom: theme.spacing(2)
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 800,
    padding: theme.spacing(4, 2)
  },
  textField: {
    flex: '1 0 auto'
  },
  button: {
    marginLeft: theme.spacing(1),
    padding: theme.spacing(2, 4),
    fontWeight: 700
  }
}));

const LandingPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.widthWrapper} elevation={0}>
        <Typography variant={'h4'} component={'h1'} className={classes.title}>
          Short URL by XiaoxiHome
        </Typography>
        <form className={classes.form}>
          <TextField label="Original URL" variant={'outlined'} className={classes.textField}/>
          <Button variant={'contained'} disableElevation className={classes.button} color={'primary'}>
            Generate
          </Button>
        </form>
      </Paper>
    </div>
  )
};

export default LandingPage
