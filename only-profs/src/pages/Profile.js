import React from "react";
import VideoCard from "../components/VideoCard";
import "./Profile.css";
import { useEffect } from "react";
import * as APIFirebase from "../back-end/functions";
import Cookies from "js-cookie";

function Profile(props) {
  const [userProfile, setUserProfile] = React.useState("");
  const [videoList, setVideoList] = React.useState([]);

  useEffect(async () => {
    console.log("useEffect", props.profile);
    if (props.profile) {
        const assignments = await APIFirebase.getProfessorAssignments(props.profile.uid);
        console.log("assignments", assignments);
        const videos = await APIFirebase.getProfessorVideos(props.profile.uid);
      console.log("videos ", videos);
      setUserProfile(props.profile);
    } else {
      const uid = Cookies.get("session");
      console.log("uid", uid);
      const profile = await APIFirebase.getProfessorInfoByUID(uid);
      console.log("profile", profile);
      setUserProfile(profile);
    }

    console.log(userProfile);
  }, []);
  return (
    <div className="profile-container">
      <div className="profile-info">
        <h1>{userProfile.username}</h1>
        <h2>{userProfile.title}</h2>
        <p>{userProfile.description}</p>
      </div>
      <div>
        <h1>Lectures</h1>
        <VideoCard></VideoCard>
      </div>
    </div>
  );
}

export default Profile;
