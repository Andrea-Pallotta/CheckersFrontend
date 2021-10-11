import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <AmplifySignOut />
      <Home />
    </div>
  );
}

export default withAuthenticator(App);
