import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = (props) => {

    const {userName} = props

  const [user, setUser] = useState([]);

  useEffect(() => {
    const apiURL = `https://api.github.com/users/${userName}`;
    axios.get(apiURL).then((res) => {
      console.log(res.data);
      setUser(res.data);
    });
    return () => {
      //
    };
  }, [userName]);

  //   const getUser = (user) => {
  //     const apiURL = "https://api.github.com/users/"+ user;
  //     axios.get(apiURL).then((res) => {
  //     //   setUser(res.data);
  //     });
  //   }

//   WOOOOOOOORKSSS YESSSSSSSSSSSS!!!
  return (
    <div>
        <p>userNameKey: {userName}</p>



      <p>{user.name}</p>
      <div>
        <img src={user.avatar_url} alt="user-avatar" />
      </div>
      <div>
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
        <ul>
          <li>{user.followers}</li>
          <li>{user.following}</li>
          <li>{user.public_repos}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
