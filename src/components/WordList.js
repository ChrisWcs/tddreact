import React from 'react';
import PropTypes from 'prop-types';

const WordList = ({words}) => (
    <div>
        <ul>
            {words}
        </ul>
    </div>
);

WordList.propTypes = {
    words: PropTypes.array
}

export default WordList;