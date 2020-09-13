import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = (props) => {
  const { userName } = props;

  const [user, setUser] = useState([]);
  const [repository, setRepo] = useState([]);

  useEffect(() => {
    const userAPI = `https://api.github.com/users/${userName}`;
    const reposAPI = `https://api.github.com/users/${userName}/repos`;
    axios
      .get(userAPI)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(reposAPI)
      .then((res) => {
        console.log(res.data);
        setRepo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      //
    };
  }, [userName]);

  return (
    <div className="card">
      <div className="img-container">
        <img
          className="avatar h-auto w-auto"
          src={user.avatar_url}
          alt={user.name}
        />
      </div>
      <div className="user-info">
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
        <ul className="info">
          <li>
            {user.followers}
            <strong>followers</strong>
          </li>
          <li>
            {user.following}
            <strong>following</strong>
          </li>
          <li>
            {user.public_repos}
            <strong>Repositories</strong>
          </li>
        </ul>
        <ul className="repos contents">
          {repository.map((repo, key) => {
            return (
              <a
                key={key}
                href={repo.html_url}
                rel="noopener noreferrer"
                target="_blank"
                className="repo"
              >
                {repo.name}
              </a>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Card;
