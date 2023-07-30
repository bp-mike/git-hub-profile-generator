import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@mantine/core";

function Profile() {
  let { userName } = useParams();
  const [userData, setUserData] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function getUserProfile() {
      setIsFetching(true);
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const userJsonData = await response.json();
      setUserData(userJsonData);
      setIsFetching(false);
    }
    getUserProfile();
  }, []);

  return (
    <>
      <div className="text-center">
        <Link to={".."}>
          <Button className="bg-[#2dba4e] hover:bg-[#4ee171] my-8">
            Go Back
          </Button>
        </Link>
        {isFetching ? (
          <p>Loading...</p>
        ) : (
          <>
            {userData.login ? (
              <>
                <img
                  src={userData.avatar_url}
                  alt="avatar"
                  className="m-auto rounded-full w-40 h-40 border-2 border-[#4ee171]"
                />
                <p className="text-2xl">{userData.name}</p>
                <a href={userData.html_url} target="_blank" rel="noreferrer" className="text-slate-400">@{userData.login}</a>
                <div className="columns-3 my-5">
                  <div className="bg-[#343a40]  h-16 w-24 box">
                    <h1 className="text-xl">{userData.public_repos}</h1>
                    <p className="text-slate-400 text-xs">Repositories</p>
                </div>
                  <div className="bg-[#343a40]  h-16 w-24 box">
                    <h1 className="text-xl">{userData.followers}</h1>
                    <p className="text-slate-400 text-xs">Followers</p>
                </div>
                  <div className="bg-[#343a40]  h-16 w-24 box">
                    <h1 className="text-xl">{userData.following}</h1>
                    <p className="text-slate-400 text-xs">Following</p>
                </div>
                </div>
                <a href={userData.html_url} target="_blank" className="text-xs text-left text-blue-500 underline" rel="noreferrer">View Github</a>
              </>
            ) : (
              <p>User Not Found</p>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Profile;
