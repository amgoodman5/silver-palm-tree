import React, { Component } from 'react';
import '../styles/ListItem.css';

class ListItem extends React.Component{


     render() {

 	let { data } = this.props;
console.log(data);
         return (
<div>
{ data ?
            <div className="card">
            <img src = {data.tileArt}/>
              <h2>{ data.seriesName }</h2>
              <p>{data.title}</p>
                <p>{data.seasonNum}</p>
                <p>{data.episodeNum}</p>s
                  <p>{data.durationSeconds}</p>
</div>
            :
            <h2>loading.......</h2>
        }

</div>

         );
     }
 }

// function loadfunction(data){
//   return data !== undefined ? '' : data;
//
// }


export default ListItem
