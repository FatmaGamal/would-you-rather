import React from 'react';

import { Link } from 'react-router-dom'
import './QuestionTeaser.css';

const QuestionTeaser = ({ q, author}) => {
    return (
        <Link className="action teaser-card" to={`/question/${q.id}`}>
            <img className="teaser-img" src={author.avatarURL} alt={author.id}/>
            <div className="teaser-text">Would You Rather {q.optionOne.text}...</div>
        </Link>
    );
}

export default QuestionTeaser