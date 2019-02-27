import React, { Component } from 'react';
import SVGIcon from '../shared/SVGIcon';
import svgData from '../../data/svgData.json';

class SocialLinks extends Component {
    state = {
        svgProps: svgData.svgProps,
        icons: svgData.svgIcons,
        filteredIcons: ['github', 'linkedin', 'twitter'] //add icons here
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

export default SocialLinks;