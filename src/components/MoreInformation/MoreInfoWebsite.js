import React, { useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';

export function Website(props) {
  const [url, setUrl] = useState(props.university.URL);
  useEffect(()=> {
    if (props.university.URL) {
      if (props.university.URL.indexOf("http://") === 0 || props.university.URL.indexOf("https://") === 0) {
      setUrl(props.university.URL)
      }
      else if (props.university.URL.indexOf("http://") !== 0 || props.university.URL.indexOf("https://") !== 0) {
        let addHttp = `http://${props.university.URL}`;
        setUrl(addHttp);
      }
    }
  }, [props.university.URL]);
  return (
    <>
      <h6>Website: </h6>
        <Card.Text>
          <a href={url} target="_blank" rel="noopener noreferrer" className="urlStyle">{props.university.URL}</a>
        </Card.Text>    
    </>
  );
}

export function PriceCalculator(props) {
  const priceUrl = props.university["School Price Calculator"];
  const [url, setUrl] = useState(priceUrl);
  useEffect(()=> {
    if (priceUrl) {
      if (priceUrl.indexOf("http://") === 0 || priceUrl.indexOf("https://") === 0) {
      setUrl(priceUrl)
      }
      else if (priceUrl.indexOf("http://") !== 0 || priceUrl.indexOf("https://") !== 0) {
        let addHttp = `http://${priceUrl}`;
        setUrl(addHttp);
      }
    }
  }, [priceUrl]);
  return (
    <>
    {props.university["School Price Calculator"] && <> 
    <h6>School Price Calculator: </h6> <p><a href={url} target="_blank" rel="noopener noreferrer" className="urlStyle">{props.university["School Price Calculator"]}</a></p></>
    }
    </>
  );
}