import React from 'react';
import Header from '../../Components/Header/Header';
import Slider from '../../Components/Slider/Slider';
import Games from '../../Components/Games/Games';
import Entertainment from '../../Components/Entertainment/Entertainment';
import Footer from '../../Components/Footer/Footer'
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  UNSAFE_componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 767;
    if (isMobile) {
      return (
        <React.Fragment>
          <Header />
          <div id="content-container">
            <div className="top-banner">
              <Slider />
              <div className="second-banner">
                <Entertainment />
                <Games />
              </div>
            </div>
            <Footer />
          </div>
        </React.Fragment>
      );
    }
    else {
      return (
        <React.Fragment>
          <Header />
          <div id="content-container">
            <div className="top-banner">
              <Slider />
              <div className="second-banner">
                <Entertainment />
                <Games />
              </div>
            </div>

            <Footer />
          </div>
        </React.Fragment>
      );
    }

  }
}

export default Home;