import PropTypes from 'prop-types';
import {
  IconLeftArrow,
  IconRightArrow,
  IconSearch
} from '@/components/icons';

const Icon = ({ fill, name, size }) => {
  switch (name) {
    case 'LeftArrow':
      return <IconLeftArrow fill={fill} size={size} />;
    case 'RightArrow':
      return <IconRightArrow fill={fill} size={size} />;
    case 'Search':
      return <IconSearch fill={fill} size={size} />;
  }
}

Icon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Icon;