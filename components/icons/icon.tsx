import PropTypes from 'prop-types';
import {
  IconArea,
  IconBedroom,
  IconCancel,
  IconDownArrow,
  IconFacebook,
  IconInstagram,
  IconLeftArrow,
  IconMenu,
  IconParking,
  IconRightArrow,
  IconSearch,
  IconShower,
  IconYoutube
} from '@/components/icons';

const Icon = ({ fill, name, size, ...otherProps }) => {
  switch (name) {
    case 'Area':
      return <IconArea fill={fill} size={size} {...otherProps} />;
    case 'Bedroom':
      return <IconBedroom fill={fill} size={size} {...otherProps} />;
    case 'Cancel':
      return <IconCancel fill={fill} size={size} {...otherProps} />;
    case 'DownArrow':
      return <IconDownArrow fill={fill} size={size} {...otherProps} />;
    case 'Facebook':
      return <IconFacebook fill={fill} size={size} {...otherProps} />;
    case 'Instagram':
      return <IconInstagram fill={fill} size={size} {...otherProps} />;
    case 'LeftArrow':
      return <IconLeftArrow fill={fill} size={size} {...otherProps} />;
    case 'Menu':
      return <IconMenu fill={fill} size={size} {...otherProps} />;
    case 'Parking':
      return <IconParking fill={fill} size={size} {...otherProps} />;
    case 'RightArrow':
      return <IconRightArrow fill={fill} size={size} {...otherProps} />;
    case 'Search':
      return <IconSearch fill={fill} size={size} {...otherProps} />;
    case 'Shower':
      return <IconShower fill={fill} size={size} {...otherProps} />;
    case 'Youtube':
      return <IconYoutube fill={fill} size={size} {...otherProps} />;
  }
}

Icon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Icon;