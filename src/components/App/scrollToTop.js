import React from 'react';
import './scrollToTop.css';

class ScrollButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        intervalId: 0
    };
    this.scrollStep = this.scrollStep.bind(this);
  }
  
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep, this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  
  render () {
    return (
      <button title='Back to top' className='scroll' onClick={ () => { this.scrollToTop(); }}>
        <svg  className="arrow-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6"><path d="M12 6H0l6-6z"/></svg>
        
      </button>
    );
    
   }
} 
export default ScrollButton;


/*

<span className='arrow-up glyphicon glyphicon-chevron-up'></span>


 * Render the ScrollApp component into the div with the id 'app'

React.render(<ScrollApp/>, document.getElementById('app'));
 */


/*
class ScrollApp extends React.Component {
  
  
  render () {
    return <div className="long">
             
              <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
           </div>
  }
}
export function ScrollToTop() {
  const scrollToTopButton = document.getElementById('js-top');
  const scrollFunc = () => {
    // Get the current scroll value
    let y = window.scrollY;
     
    // If the scroll value is greater than the window height, add a class to the scroll-to-top button to show it
    if (y > 0) {
      scrollToTopButton.className = "top-link show";
    } else {
      scrollToTopButton.className = "top-link hide";
    }
  };
  window.addEventListener("scroll", scrollFunc);
  const scrollToTop = () => {
    //Variable for the number of pixels we are from the top of the document.
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    // If that number is greater than 0, scroll back to 0, or the top of the document.
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 10);
    }
  }
  
  return (
    <>
      <button className="top-link hide" onclick="scrollToTop()" id="js-top" title="Go to top">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6"><path d="M12 6H0l6-6z"/></svg>
        <span className="screen-reader-text">Back to top</span>
      </button>
    </>
  );
}
*/