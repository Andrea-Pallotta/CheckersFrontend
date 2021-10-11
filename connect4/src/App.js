import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
const ENDPOINT = 'http://127.0.0.1:5050';

function App() {
  return (
    <div>
      <AmplifySignOut />
      Connect4
    </div>
  );
}

export default withAuthenticator(App);
