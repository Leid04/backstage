import { makeStyles } from '@material-ui/core/styles';
import { HomePageSearchBar } from '@backstage/plugin-search';
import { searchApiRef } from '@backstage/plugin-search-react';
// eslint-disable-next-line @backstage/no-undeclared-imports
import { wrapInTestApp, TestApiProvider } from '@backstage/test-utils';
import Grid from '@material-ui/core/Grid';
import React, { ComponentType, PropsWithChildren } from 'react';
// import { rootRouteRef } from '@backstage/plugin-scaffolder';  // This is deprecated

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

export default {
  title: 'Plugins/Home/Components/SearchBar',
  decorators: [
    (Story: ComponentType<PropsWithChildren<{}>>) =>
      wrapInTestApp(
        <>
          <TestApiProvider
            apis={[
              [searchApiRef, { query: () => Promise.resolve({ results: [] }) }],
            ]}
          >
            <Story />
          </TestApiProvider>
        </>,
        // {
        //   mountedRoutes: { '/hello-search': rootRouteRef },
        // },
      ),
  ],
};

export const HomePage = () => (
  <>
    <h1>Hola backstage denys</h1>
  </>
);

export const CustomStyles = () => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" spacing={6}>
      <Grid container item xs={12} alignItems="center" direction="row">
        <HomePageSearchBar
          classes={{ root: classes.searchBar }}
          InputProps={{ classes: { notchedOutline: classes.searchBarOutline } }}
          placeholder="Search"
        />
      </Grid>
    </Grid>
  );
};
