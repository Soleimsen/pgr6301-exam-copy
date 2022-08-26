import React from "react";

const Profile = ({ user }) => {
  return (
    <div className="profileContainer">
      <h1>Profile</h1>
      {user.google && (
        <>
          <div>
            <img src={user.google.picture} alt={"Profile picture"} />
          </div>
          <div>
            <h2>
              {user.google.name} <i>({user.google.email})</i>
            </h2>
          </div>
        </>
      )}
      {user.azure && (
        <>
          <div>
            <img src={user.azure.picture} alt={"Profile picture"} />
          </div>
          <div>
            <h2>
              {user.azure.name} <i>({user.azure.email})</i>
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
