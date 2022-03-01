import React from "react";
import { useEffect, useState } from "react";

import { Row, Col, Card } from 'antd';



const UpcomingGames = () => {
    const [users, setUsers] = useState([])
  
    const fetchData = () => {
      fetch("http://api.pandascore.co/matches/upcoming?token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0")
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
        <b>Upcoming Games - </b>
        {users.length > 0 && (
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {users.map(user => (
           <Col className="gutter-row" span={8} gutter={16}>
      <div  className ='scoreBox' key={user.id}>

             <br/>
             <span className="uk-card-badge uk-label"> UPCOMING </span>
             <h3 className="CardTitle">{user.name} </h3>
             <p>{user.videogame.name}</p>

             </div>

             </Col>
              ))}
          </Row>
        )}
      </div>
    )
  }
  
  export default UpcomingGames