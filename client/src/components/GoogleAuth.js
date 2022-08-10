import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

const GoogleAuth = ({ dispatch, isSignedIn }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "116100301108-mgohvqlq47mrf60ej8ld2ij31pmb5d0b.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "streamy",
        })
        .then(() => {
          setAuth(window.gapi.auth2.getAuthInstance());
          onAuthChange(window.gapi.auth2.getAuthInstance().isSignedIn.get());
          window.gapi.auth2.getAuthInstance().isSignedIn.listen(onAuthChange);
        });
    });
    // eslint-disable-next-line
  }, []);

  const onAuthChange = isSignedIn => {
    if (isSignedIn) {
      dispatch(
        signIn(window.gapi.auth2.getAuthInstance().currentUser.get().getId())
      );
    } else {
      dispatch(signOut());
    }
  };

  const onSignInClick = () => {
    auth.signIn();
  };

  const onSignOutClick = () => {
    auth.signOut();
  };

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <div>
          <button className="ui google red button" onClick={onSignOutClick}>
            <i className="google icon" />
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button className="ui red google button" onClick={onSignInClick}>
            <i className="google icon" />
            Sign In
          </button>
        </div>
      );
    }
  };
  return (
    <Link to="/" className="item">
      <div>{renderAuthButton()}</div>
    </Link>
  );
};

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId };
};

export default connect(mapStateToProps)(GoogleAuth);

// import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import { signIn, signOut } from "../actions";

// const GoogleAuth = ({ dispatch, isSignedIn, userId }) => {
//   const [auth, setAuth] = useState(null);

//   useEffect(() => {
//     const params = {
//       clientId:
//         "262729366522-lvl4ejcb76fakci10vqbo5gv6sv3vri3.apps.googleusercontent.com",
//       scope: "email",
//     };

//     window.gapi.load("client:auth2", () => {
//       window.gapi.client.init(params).then(() => {
//         setAuth(window.gapi.auth2.getAuthInstance());
//         onAuthChange(window.gapi.auth2.getAuthInstance().isSignedIn.get());
//         window.gapi.auth2.getAuthInstance().isSignedIn.listen(onAuthChange);
//       });
//     });
//     // eslint-disable-next-line
//   }, []);

//   const onAuthChange = isSignedIn => {
//     if (isSignedIn) {
//       dispatch(
//         signIn(window.gapi.auth2.getAuthInstance().currentUser.get().getId())
//       );
//     } else {
//       dispatch(signOut());
//     }
//   };

//   const onSignInClick = () => {
//     auth.signIn();
//   };

//   const onSignOutClick = () => {
//     auth.signOut();
//   };

//   const renderAuthButton = () => {
//     if (isSignedIn === null) {
//       return null;
//     } else if (isSignedIn) {
//       return (
//         <div>
//           <button className="ui red google button" onClick={onSignOutClick}>
//             <i className="google icon">Signout</i>
//           </button>
//         </div>
//       );
//     } else {
//       return (
//         <button className="ui red google button" onClick={onSignInClick}>
//           <i className="google icon"> Sign In</i>
//         </button>
//       );
//     }
//   };

//   return <div>{renderAuthButton()}</div>;
// };

// const mapStateToProps = state => {
//   return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId };
// };

// export default connect(mapStateToProps)(GoogleAuth);
