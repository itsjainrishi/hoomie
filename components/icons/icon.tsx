import PropTypes from 'prop-types';
import {
  IconCancel,
  IconDownArrow,
  IconFacebook,
  IconFilter,
  IconInstagram,
  IconLeftArrow,
  IconMenu,
  IconRightArrow,
  IconSearch,
  IconYoutube
} from '@/components/icons';

const Icon = ({ name, ...otherProps }: { name: string; [x:string]: any; }) => {
  switch (name) {
    case 'Cancel':
      return <IconCancel {...otherProps} />;
    case 'DownArrow':
      return <IconDownArrow {...otherProps} />;
    case 'Facebook':
      return <IconFacebook {...otherProps} />;
    case 'Filter':
      return <IconFilter {...otherProps} />;
    case 'Instagram':
      return <IconInstagram {...otherProps} />;
    case 'LeftArrow':
      return <IconLeftArrow {...otherProps} />;
    case 'Menu':
      return <IconMenu {...otherProps} />;
    case 'RightArrow':
      return <IconRightArrow {...otherProps} />;
    case 'Search':
      return <IconSearch {...otherProps} />;
    case 'Youtube':
      return <IconYoutube {...otherProps} />;
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;