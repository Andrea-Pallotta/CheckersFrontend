import loadable from '@loadable/component';

export const NavigationDrawer = loadable(() =>
  import(/* webpackPrefetch: true */ '../domain/Navigation/NavigationDrawer')
);

export const Drawer = loadable(() =>
  import(/* webpackPrefetch: true */ '../domain/Navigation/Drawer')
);

export const DrawerHeader = loadable(() =>
  import(/* webpackPrefetch: true */ '../domain/Navigation/DrawerHeader')
);

export const AppBar = loadable(() =>
  import(/* webpackPrefetch: true */ '../domain/Navigation/AppBar')
);

export const Board = loadable(() =>
  import(/* webpackPrefetch: true */ '../domain/Board/Board')
);

export const Message = loadable(() =>
  import(/* webpackPrefetch: true */ '../domain/Chat/Message')
);

export const Home = loadable(() =>
  import(/* webpackPrefetch: true */ '../domain/HomePage/Home')
);

export const Leaderboard = loadable(() =>
  import(/* webpackPrefetch: true */ '../domain/Leaderboard/Leaderboard')
);

export const Profile = loadable(() =>
  import(/* webpackPrefetch: true */ '../domain/Profile/Profile')
); 

export const ErrorBoundary = loadable(() =>
  import(/* webpackPrefetch: true */ '../domain/Error/ErrorBoundary')
);

export const Chat = loadable(() =>
  import(/* webpackPrefetch: true */ '../domain/Chat/Chat')
);
