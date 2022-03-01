import React from "react";
import { useEffect, useState } from "react";
import "uikit/dist/css/uikit-core.min.css";
import './styles.css';

import { Row, Col, Card } from 'antd';
const UsingFetch = () => {
    const [users, setUsers] = useState([])
  
    const fetchData = () => {
      fetch("https://api.pandascore.co/matches/running?token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)
          console.log(data)
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])
  
    return (
      <div className="uk-container">
          <p> Live Games </p>
          <div className ="cardBody">
        {users.length > 0 && (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {users.map(user => (


<Col className="gutter-row" span={8} gutter={16}>
<div  className ='scoreBox' key={user.id}>
    <span className="uk-card-badge uk-label"> LIVE </span>
    <h3 className="CardTitle">{user.name} </h3>
    <p>{user.videogame.name}</p>
    </div>
    </Col>
               
               ))
           }
          </Row>
       

        )}

</div>
      </div>
    )
  }
  
  export default UsingFetch