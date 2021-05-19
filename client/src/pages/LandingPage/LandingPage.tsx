import React from "react";
import {Button, CircularProgress, makeStyles, Paper, TextField, Typography} from "@material-ui/core";
import useForm from "./useForm";
import Alert from '@material-ui/lab/Alert';

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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 800,
    padding: theme.spacing(2)
  },
  formRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  textField: {
    flex: '1 0 auto'
  },
  button: {
    marginLeft: theme.spacing(1),
    padding: theme.spacing(1.6, 4),
    fontWeight: 700,
    fontSize: theme.typography.h6.fontSize
  },
  alert: {
    width: '100%',
    marginBottom: theme.spacing(2)
  }
}));

const LandingPage: React.FC = () => {
  const classes = useStyles();
  const form = useForm();

  return (
    <div className={classes.root}>
      <Paper className={classes.widthWrapper} elevation={0}>
        <Typography variant={'h4'} component={'h1'} className={classes.title}>
          Short URL by XiaoxiHome
        </Typography>

        <form className={classes.form} onSubmit={form.handleSubmit}>

          {
            form.errorMessage &&
            <Alert severity="error" className={classes.alert}>
              { form.errorMessage }
            </Alert>
          }

          <div className={classes.formRow}>
            <TextField label="Original URL" variant={'outlined'} className={classes.textField} value={form.input} onChange={form.handleChange} disabled={form.isLoading}/>
            <Button
              variant={'contained'}
              disableElevation
              className={classes.button}
              color={'primary'}
              type={'submit'}
              disabled={form.isLoading}
              endIcon={form.isLoading && <CircularProgress size={25}/>}
            >
              Generate
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  )
};

export default LandingPage
