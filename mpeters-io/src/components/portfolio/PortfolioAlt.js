import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PortfolioData from '../../data/portfolioData.json';
import ThumbPhoto from './ThumbPhoto';


class PortfolioAlt extends Component {
    state = {
        data: this.props.data,
        portfolioData: PortfolioData,
        currentSelection: PortfolioData[1],
        display: 'display-block'
    }

    render() {
        return (
            <div className="portfolio">
            <div className="portfolio__wrap">
                <h2>Portfolio</h2>
                    <div className="portfolio__past-projects">
                        <div className="portfolio__past-projects--thumbnail__wrap">
                        {this.state.portfolioData.map((data) => (
                            <ThumbPhoto
                            key= { data.name }
                            data = { data }
                            image = { data.imageData }
                            name = { data.name }
                            changeSelection = { this.changeSelection }
                            showModal = { this.showModal }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

PortfolioAlt.propTypes = {

}

export default PortfolioAlt;