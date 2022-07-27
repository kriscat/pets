import React from 'react';
import { auth } from "../../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const UserProfile = () => {
    const [user, loading, error] = useAuthState(auth);
  return (
    <>
      <div>Вы вошли, как {user.email}</div>
      <div>
        
      </div>
    </>
  );
}

export default UserProfile;