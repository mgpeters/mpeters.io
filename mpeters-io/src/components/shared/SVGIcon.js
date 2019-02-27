import React, { Component } from 'react';
import PropTypes from 'prop-types';

const SVG = (svgProps, title, path) => 
  <svg
    width={ svgProps.width }
    style={ svgProps.style }
    height={ svgProps.height }
    viewBox={ svgProps.viewBox }
    className={ svgProps.className }
    xmlns={ svgProps.xmlns }
    role={ svgProps.role }>
    <title>{title}</title>
    <path d={path}/>
  </svg>;

class SVGIcon extends Component {
  SVG = this.SVG;

  render() {
    return (
      <div className={this.props.className}>
        <a href={this.props.link}>{SVG(this.props.svgProps, this.props.name, this.props.svgIcon)}</a>
      </div>
    );
  }
}

SVGIcon.propTypes = {
  className: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  svgProps: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  svgIcon: PropTypes.string.isRequired,
}

export default SVGIcon;