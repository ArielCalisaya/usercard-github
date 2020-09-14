import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = (props) => {
  const { userName } = props;

  const [user, setUser] = useState([]);
  const [repository, setRepo] = useState([]);

  useEffect(() => {
    const userAPI = `https://api.github.com/users/${userName}`;
    const reposAPI = `https://api.github.com/users/${userName}/repos`;

    //  GitHub User Api
    axios
      .get(userAPI)
      .then((res) => {
        console.log(res.data);

        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // GitHub Repository Api
    axios
      .get(reposAPI)
      .then((res) => {
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
    <div className="card pl-6 mb-8 mt-8">
      <div className="img-container">
        <img
          className="avatar h-auto w-auto"
          src={user.avatar_url}
          alt={user.name}
        />
      </div>

      <hr className="h-auto ml-4 border bg-white" />

      <div className=" ml-6 text-white">
        <div className="user-name">
          {user.login ? (
            <a
              className="flex"
              rel="noopener noreferrer"
              target="_blank"
              href={user.html_url}
            >
              @<p className="font-code">{user.login}</p>
            </a>
          ) : null}
        </div>
        <p className=" m-5 ml-12 mr-12 pt-4 pb-4 text-center purple-shadow rounded-md">
          {!user.bio ? <>No description provided.</> : `" ${user.bio} "`}
        </p>
        <ul className="flex place-content-center m-4">
          <li className="m-2">
            {user.followers}
            <strong className="ml-2">followers</strong>
          </li>
          <li className="m-2">
            {user.following}
            <strong className="ml-2">following</strong>
          </li>
          <li className="m-2">
            {user.public_repos}
            <strong className="ml-2">repos</strong>
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


// Falta responsividad mobile