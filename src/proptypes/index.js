import PropTypes from 'prop-types';

export const ButtonProps = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};

export const NavMenuProps = {
  isMobile: PropTypes.bool,
  closeMenu: PropTypes.func,
};

export const SectionTitleProps = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export const CardProps = PropTypes.shape({
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  key: PropTypes.string,
});
