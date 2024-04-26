import Grid from '@material-ui/core/Grid';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { HomePageSearchBar } from '@backstage/plugin-search';

const useStyles = makeStyles(theme => ({
  searchBar: {
    display: 'flex',
    maxWidth: '60vw',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    padding: '8px 0',
    borderRadius: '50px',
    margin: 'auto',
  },
  searchBarOutline: {
    borderStyle: 'none',
  },
}));

export const HomePage = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" spacing={6}>
      <Grid container item xs={12} alignItems="center" direction="row">
        <HomePageSearchBar
          classes={{ root: classes.searchBar }}
          InputProps={{
            classes: { notchedOutline: classes.searchBarOutline },
          }}
          placeholder="Search"
        />
      </Grid>
    </Grid>
  );
};
