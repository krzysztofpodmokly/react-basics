import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';
import Button from '../Button/Button';
import Title from '../Title/Title';

const ListItem = ({ image, title, description, twitterLink }) => {
  const ImageTag = image ? 'img' : 'div';

  return (
    <li className={styles.wrapper}>
      <ImageTag
        src={image}
        className={image ? styles.image : styles.imageNone}
        alt={title}
      />
      <div>
        <Title>{title}</Title>
        <p className={styles.description}>{description}</p>
        <Button href={twitterLink}>visit twitter page</Button>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string
};

ListItem.defaultProps = {
  image: null,
  link: null
};

export default ListItem;
