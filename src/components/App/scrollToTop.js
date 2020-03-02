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
