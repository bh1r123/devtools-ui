import { makeStyles } from '@material-ui/core/styles';
export const materialStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(2),
    },
    table:{
        margin: theme.spacing(1)
    },
    tablecell: {
      backgroundColor:'#e2e2e2',

    },
    root: {
      '& > *': {
        margin: theme.spacing(2),
      },
    },
    control: {
      padding:theme.spacing(1)
    }
  }));