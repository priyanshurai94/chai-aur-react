import React, { useEffect, useState } from "react";

function Github() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response =>response.json())
        .then(data =>{
            console.log(data);
            setData(data)

        })
    },[])


    return(
        <div>Github Followers {data.followers}
        <img src={data.avatar_url} />
        </div>
    )
    
}

export default Github