import loadable from '@loadable/component';

export const App = loadable(() =>
  import(/* webpackPrefetch: true */ '../components/App/App')
);

export const GameModal = loadable(() =>
  import(/* webpackPrefetch: true */ '../components/Modals/GameModal')
);

export const MenuAvatar = loadable(() =>
  import(/* webpackPrefetch: true */ '../components/Avatar/MenuAvatar')
);

export const UserAvatar = loadable(() =>
  import(/* webpackPrefetch: true */ '../components/Avatar/Avatar')
);

export const TabViewOptions = loadable(() =>
  import(/* webpackPrefetch: true */ '../components/Options/TabViewOptions')
);

export const TabViewPages = loadable(() =>
  import(/* webpackPrefetch: true */ '../components/TabView/TabViewPages')
);

export const GameModalBar = loadable(() =>
  import(/* webpackPrefetch: true */ '../components/Modals/GameModalBar')
);

export const GameStatusBar = loadable(() =>
  import(/* webpackPrefetch: true */ '../components/StatusBars/GameStatusBar')
);

export const BoardPattern = loadable(() =>
  import(/* webpackPrefetch: true */ '../components/SVG/pattern.csv.jsx')
);

export const BoardColumn = loadable(() =>
  import(/* webpackPrefetch: true */ '../components/SVG/column.csv.jsx')
);

export const BoardCell = loadable(() =>
  import(/* webpackPrefetch: true */ '../components/SVG/cell.csv.jsx')
);

export const ConfirmForfeitDialog = loadable(() =>
  import(
    /* webpackPrefetch: true */ '../components/Dialogs/ConfirmForfeitDialog'
  )
);

export const GameChatModal = loadable(() =>
  import(/* webpackPrefetch: true */ '../components/Modals/GameChatModal')
);

export const ChatTextField = loadable(() =>
  import(/* webpackPrefetch: true */ '../components/TextFields/ChatTextField')
);

export const SendButton = loadable(() =>
  import(/* webpackPrefetch: true */ '../components/Buttons/SendButton')
);

export const MessageReceived = loadable(() =>
  import(/* webpackPrefetch: true */ '../components/Messages/MessageReceived')
);

export const MessageSent = loadable(() =>
  import(/* webpackPrefetch: true */ '../components/Messages/MessageSent')
);

export const UserList = loadable(() =>
  import(/* webpackPrefetch: true */ '../components/Lists/UserList')
);

export const ChatLabel = loadable(() =>
  import(/* webpackPrefetch: true */ '../components/Labels/ChatLabel')
);

export const PageListItem = loadable(() =>
  import(/* webpackPrefetch: true */ '../components/Lists/PageListItem')
);

export const UserListItem = loadable(() =>
  import(/* webpackPrefetch: true */ '../components/Lists/UserListItem')
);

export const GameChallengeModal = loadable(() =>
  import(/* webpackPrefetch: true */ '../components/Modals/GameChallengeModal')
);

export const GameChallengePaper = loadable(() =>
  import(/* webpackPrefetch: true */ '../components/Papers/GameChallengePaper')
);

export const GameTimer = loadable(() =>
  import(/* webpackPrefetch: true */ '../components/Timer/GameTimer')
);
