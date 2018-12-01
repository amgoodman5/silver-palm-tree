import React, { Component } from 'react';
import '../styles/ListItem.css';




class ListItem extends React.Component{
  constructor(props) {
     super(props);
     this.state = {
       opened: false,
     };

this.toggleBox = this.toggleBox.bind(this);
}

 toggleBox = (e) => {
        const { opened } = this.state;
        this.setState({
          opened: !opened,
        });
      }


 secondsToHms(d) {
          d = Number(d);
          const h = Math.floor(d / 3600);
          const m = Math.floor(d % 3600 / 60);

          const hDisplay = h > 0 ? h + (h == 1 ? " hr, " : " hrs, ") : "";
          const mDisplay = m > 0 ? m + (m == 1 ? " min, " : " mins ") : "";

          return hDisplay + mDisplay;
      }

  render() {
    const { opened } = this.state;
    let { data, loading } = this.props;
           return (
  <div class="container">
  { data && !loading ?
        <div className="card">
             <img src={data.tileArt}/>
             <div class="button-container">
<button className="button top" onClick={this.toggleBox}>+</button>
<button className="button bottom">...</button>
 </div>
                <section className="card-container">
                    <p className="seriesTitle" onClick={this.toggleBox} >{data.seriesName}</p>
                    <p className="seriesTitle" >{data.title}</p>
                    {opened && (
                    <p className="seriesDescription">Shooting bow pose standing half forward bend frog pose cobra pose crab pose sage koundinya ii pose ear pressure pose heron pose breath retention king dancer pose,</p>
                )}
                  <span className="darkText">S{data.seasonNum}:EP{data.episodeNum}    { this.secondsToHms(data.durationSeconds) }</span>
 </section>

                 <p className="darkText"></p>

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
