import React, { Component } from 'react';
import SVGIcon from '../shared/SVGIcon';
import svgData from '../../data/svgData.json';
import PropTypes from 'prop-types';

class SocialLinks extends Component {
    state = {
        svgProps: {
          "style": this.props.style,
          "fill": this.props.fill,
          "width": this.props.width,
          "className": this.props.className,
          "height": this.props.height,
          "viewBox": this.props.viewBox,
          "xmlns": "http://www.w3.org/2000/svg"},
        icons: svgData.svgIcons,
        filteredIcons: ['github', 'linkedin','freecodecamp', 'twitter'] //add icons here
    }

  render() {

    let filteredIcons = this.state.filteredIcons,
        icons = this.state.icons;

    return (
      <div className="app-footer__social-links">
        <div className="app-footer__social-links--wrap">
            {icons.filter((fIcons) => {
                return filteredIcons.indexOf(fIcons.name) > -1; // https://stackoverflow.com/questions/30389599/comparing-and-filtering-two-arrays 12.27.18
            }).map((icon, key) => (
                <SVGIcon
                key={ key }
                svgIcon = { icon.path }
                svgProps = { this.state.svgProps }
                name = { `${icon.name} link icon` }
                link = { icon.personallink }
                className = {'app-footer__social-links--svg-icon'}
                />
            ))
            }
        </div>
      </div>
    );
  }
}

SocialLinks.propTypes = {
  style: PropTypes.object.isRequired,
  fill: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  viewBox: PropTypes.string.isRequired
}

export default SocialLinks;