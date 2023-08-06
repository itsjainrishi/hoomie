import PropTypes from 'prop-types';
import {
  IconFacebook,
  IconInstagram,
  IconLeftArrow,
  IconRightArrow,
  IconSearch,
  IconYoutube
} from '@/components/icons';

const Icon = ({ fill, name, size }) => {
  switch (name) {
    case 'Facebook':
      return <IconFacebook fill={fill} size={size} />;
    case 'Instagram':
      return <IconInstagram fill={fill} size={size} />;
    case 'LeftArrow':
      return <IconLeftArrow fill={fill} size={size} />;
    case 'RightArrow':
      return <IconRightArrow fill={fill} size={size} />;
    case 'Search':
      return <IconSearch fill={fill} size={size} />;
    case 'Youtube':
      return <IconYoutube fill={fill} size={size} />;
  }
}

Icon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Icon;