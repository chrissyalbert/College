import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Map, View } from 'ol'
import { Tile as TileLayer } from 'ol/layer';
import { XYZ as XYZSource} from 'ol/source';
import {fromLonLat} from 'ol/proj';

export class OLMap extends React.Component {
    constructor(props) {
        super(props);
        this.updateDimensions = this.updateDimensions.bind(this);
        this.state = {
          height: 400,
          width: 400,
          newSearch: null
        };
        
    }
    //change size on smaller screens
    updateDimensions(){
        let h; 
        if (window.innerWidth >=992) {
          h = 382;
        } else if (window.innerWidth>=768) {
          h = 250;
        } else {
          h = 330;
        }
        this.setState({height: h, width: h});
    }
    
    componentDidMount(){
      let coordinates = [this.props.university[0].longitude, this.props.university[0].latitude];
      coordinates = fromLonLat(coordinates);
      window.addEventListener('resize', this.updateDimensions);
      this.updateDimensions();
      // eslint-disable-next-line
      const map = new Map({
        //The target will become the div id
        target: 'map',
        layers: [
          new TileLayer({
            source: new XYZSource({
              url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
              projection: 'EPSG:3857'
            })
          }),
        ],
        // Render the tile layers in a map view with a Mercator projection
        view: new View({
          projection: 'EPSG:3857',
          center: coordinates,
          zoom: 12
        })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if ((this.props.university.longitude !== prevProps.university.longitude || this.props.university.latitude !== prevProps.university.latitude)  && !prevState.newSearch) {
      this.setState({newSearch: true});
    }
  }
    
  componentWillUnmount(){
    window.removeEventListener('resize', this.updateDimensions);
  }
    
  render(){
    const style = {
      height: this.state.height,
      width: this.state.width
    }
    return (
      <Grid container className="grid" >
        <Grid item xs={12}>
          <div id='map' style={style}>
          </div>
        </Grid>
      </Grid>
    )
  }
}
