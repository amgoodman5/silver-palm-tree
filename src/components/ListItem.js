import React from 'react';
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
    e.preventDefault();
    const { opened } = this.state;
    this.setState({
      opened: !opened,
    });
  }

  noop = (e) => {
    e.preventDefault()
    console.log('hey')
  }

  secondsToHms = (d) => {
    d = Number(d);
    const h = Math.floor(d / 3600);
    const m = Math.floor(d % 3600 / 60);
    const hDisplay = h > 0 ? h + (h === 1 ? " hr, " : " hrs, ") : "";
    const mDisplay = m > 0 ? m + (m === 1 ? " min, " : " mins ") : "";
    return hDisplay + mDisplay;
  }

  render() {
    const { opened } = this.state;
    const { data, loading } = this.props;

    if (loading) {
      return <h2>loading.......</h2>
    }

    if (!data) {
      return <h2>NO DATA MOFO</h2>
    }

    const seasonEpisode = `S${data.seasonNum}:Ep${data.episodeNum}`
    const duration = `${this.secondsToHms(data.durationSeconds)}`
    const meta = `${seasonEpisode} & ${duration}`

    return (
      <div className="container">
        <div className="card">
          <img src={data.tileArt} alt="tileart"/>
          <div className="buttonContainer">
            <button className="button top" onClick={this.noop}> play </button>
            <button className="button bottom" onClick={this.toggleBox}>
              ...
            </button>
          </div>
          <section className="card-container">
            <p className="seriesTitle">
              {data.seriesName}
            </p>
            <p className="seriesTitle" >{data.title}</p>
            {
              opened
                ?
                  <p className="seriesDescription">Shooting bow pose
                  standing half forward bend frog pose cobra pose crab pose
                  sage koundinya ii pose ear pressure pose heron pose breath
                  retention king dancer pose</p>
                :
                  null
            }
            <span className="darkText">
              {meta}
            </span>
          </section>
        </div>
      </div>
    );
  }
}

export default ListItem
