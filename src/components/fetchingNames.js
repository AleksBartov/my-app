import React, { useEffect, useState } from 'react';
import axios from 'axios';

const myKey = 'apiKey=sKw_oqVSmdk0cj8XolfkSyap__JKRPLt';
const myCollection = 'iereiAleksandrBartov';

function FetchingData() {

    const [id, setId] = useState(1);
    const [post, setPost] = useState({});
    const [idFromBtnClick, setIdFromBtnClick] = useState(1);

    function handleClick() {
        setIdFromBtnClick(id);
    }

    useEffect(()=>{
        axios.get(`https://api.mlab.com/api/1/databases/sinodik/collections/${myCollection}?${myKey}`)
        .then(res=>setPost(res.data[idFromBtnClick]))
        .catch(err=>alert(err));
    }, [idFromBtnClick]);

    return (
      <div>
          <input type='text' value={id} onChange={e=>setId(e.target.value)}/>
          <button type='button' onClick={handleClick}>fetch title</button>
          <h3>{post.name} {post.surname}</h3>
      </div>
    );
  
}

export default FetchingData;
