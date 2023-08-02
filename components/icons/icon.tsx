import PropTypes from 'prop-types';
import { IconSearch } from '@/components/icons';

const Icon = ({ fill, height, name }) => {
  switch (name) {
    case 'Search':
      return <IconSearch fill={fill} height={height} />;
  }
}

Icon.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Icon;