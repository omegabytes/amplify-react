import { Authenticator, withAuthenticator } from 'aws-amplify-react';

class App {
  // ...

  render() {
    return (
      <Authenticator usernameAttributes='phone_number'/>
    );
  }
}

export default App;

// When using withAuthenticator
class App2 {
  // ...
}

export default withAuthenticator(App2, { usernameAttributes: 'phone_number' });