import React, { useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';

export function Website(props) {
  const [url, setUrl] = useState(props.university.URL);

  useEffect(()=> {
    if (url) {
      if (url.indexOf("http://") === 0 || url.indexOf("https://") === 0) {
      setUrl(props.university.URL)
      }
      else if (url.indexOf("http://") !== 0 || url.indexOf("https://") !== 0) {
        let addHttp = `http://${url}`;
        setUrl(addHttp);
      }
    }
    // eslint-disable-next-line
  }, []);
  return (
    <section className="University-website">
                      <h6>Website: </h6>
                      <Card.Text>
                        <a href={url} target="_blank" rel="noopener noreferrer" className="urlStyle">{props.university.URL}</a>
                      </Card.Text>    
                  </section>
  );
}