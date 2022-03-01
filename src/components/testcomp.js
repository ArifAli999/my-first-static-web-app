import { isContentEditable } from '@testing-library/user-event/dist/utils';
import React, { useState, useEffect } from 'react'
export default function TestData() {


  const [matches, setMatches] = useState([])



  useEffect(() => {
    fetch('https://api.pandascore.co/matches/past?token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0')
      .then(response => response.json())
      .then(matches => {
        console.log(matches)
        setMatches(matches)

        console.log('match', JSON.stringify(matches, null, 2))

      
      
      })
      
      .catch(error => console.error(error))
  }, [])

  console.log(matches)
 

  const listOfMatches = matches.map(match => {
    return (
      <div>
      <li key={match.id}><b>Match:</b> {match.name}   </li>
<li key={match.id}><b>Winner </b>: {match.winner && match.winner.name}</li>
      {match.opponents.map((sub) => 
              <li key={sub.id} className={sub.acronym}>
        <b>  Teams :</b>  {sub.opponent.name}   || 
           </li>
        
            )}
            
            



      
     
      
      </div>
      )
  })





  const listOfScore = matches.map(match => {
    return (
      <div>
  
  {match.opponents.map((sub) => 
              <li key={sub.id} className={sub.acronym}> 
           {sub.name}  


         
           {match.results.map((resy) => 
              <li>
           {resy.score} {sub.name}  
           </li>
           
       
          
           
            )}  
           </li>
           
            )}   

        
      </div>
      )
  })


  return (

    <div>
      <div>Matches: {matches.length}</div>
      <ul>
        {listOfMatches}
      

        
    

        
      </ul>
    </div>
  );
}

