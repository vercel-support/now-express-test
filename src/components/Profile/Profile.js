import React, { useEffect } from 'react';
import { useHttp } from '../../hooks/http';

const Profile = (props) => {
  console.log('** props.apiUrl **', props.apiUrl);

  const [ fetchedData, isLoading ] =  useHttp(`${props.apiUrl}/api/user/details`, []);

  return (
    <div>
        Welcome to the user profile
        {fetchedData && fetchedData.email}
        <a href="/api/auth/logout" class="btn btn-default btn-sm">Logout</a>
    </div>
  );
}

export default Profile;