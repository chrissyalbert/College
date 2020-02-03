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
          width: 400
        };
        
    }
    updateDimensions(){
        let h; //= window.innerWidth >= 992 ? window.innerHeight : 400;
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
      console.log(this.props.university[0].longitude, this.props.university[0].latitude);
      let coordinates = [this.props.university[0].longitude, this.props.university[0].latitude];
      coordinates = fromLonLat(coordinates);
      window.addEventListener('resize', this.updateDimensions);
      this.updateDimensions();
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
                /*
                new TileLayer({
                    source: new TileWMSSource({
                        url: 'https://ahocevar.com/geoserver/wms',
                        params: {
                            layers: 'topp:states',
                            'TILED': true,
                        },
                        projection: 'EPSG:4326'
                    }),
                    name: 'USA'
                }),
                */ 

/*

 
import React from 'react';
import 'ol/ol.css';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';
import {Map, View} from 'ol';

export class MapComponent extends React.Component {

  componentDidMount() {
    console.log(this.props.university[0].longitude, this.props.university[0].latitude);
    let coordinates = [this.props.university[0].longitude, this.props.university[0].latitude];
    coordinates = fromLonLat(coordinates);
    
    // create map object with feature layer
    const map = new Map({
      target: this.refs.mapContainer,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
		//default OSM layer
      view: View({
        center: coordinates, 
        zoom: 2,
      })
    });

    // save map and layer references to local state
    this.setState({ 
      map: map,
    });

  }

  //other functions eliminated for brevity
  render () {
    return (
      <div ref="mapContainer"> </div>
    );
  }
}






export class WebMap extends React.Component {
  constructor(props) {
      super(props)
      this.map = {};
  }

  componentDidMount() {
      console.log(this.props.university[0].longitude, this.props.university[0].latitude);
      let coordinates = [this.props.university[0].longitude, this.props.university[0].latitude];
      coordinates = fromLonLat(coordinates);
      this.map = new Map({
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
          target: 'map',
          view: new View({
              center: coordinates,
              zoom: 2
          })
      });
  }

  render() {
      return (
              <div id="WebMap" className="mapImage">
                  <div id="map" className="map" ref="olmap"></div>
              </div>
      )
  }
}
*/
