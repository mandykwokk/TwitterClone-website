import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useLocation, Link } from "react-router-dom";

function UserProfile() {
    const location = useLocation();
    const {username} = useParams();
    const [userprofile, setUserProfile] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(location.pathname);
            if(!res.data.error){
                setUserProfile(res.data.user);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            { userprofile && 
                <React.Fragment>
                    <p>{userprofile.username}</p>
                    <p> Email : {userprofile.email}</p>
                    <p> Following : <Link to={"/user/"+username+"/following"}>{userprofile.following}</Link></p>
                    <p> Follower : <Link to={"/user/"+username+"/followers"}>{userprofile.followers}</Link></p>
                </React.Fragment>
            }
        </div>
    );
}

export default UserProfile;