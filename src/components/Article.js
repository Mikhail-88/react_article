import React from 'react';
import PropTypes from 'prop-types';
import style from './Article.module.css';

function Article({ article }) {
  const { title, date, text } = article;

  return (
    <div className={style.article}>
      <h1 className={style.title}>{title}</h1>
      <span className={style.date}>{date}</span>
      <p>{text}</p>
    </div>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Article;
