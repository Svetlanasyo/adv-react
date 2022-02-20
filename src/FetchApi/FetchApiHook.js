import React from 'react';
import Profile from './Profile';

function FetchApiHook() {

    const[data, setData] = React.useState(null);

    function loadProfiles()
    {
      fetch('http://localhost:5000/Profile')
      .then(response => response.json())
      .then(data => setData(data))
    }

    React.useEffect(() => {
        loadProfiles();
    }, [data])

    return (
        <div>
          <p>Fetch APi!</p>
          {data && <Profile user={data} />}
        </div>
      )

}

export default FetchApiHook;