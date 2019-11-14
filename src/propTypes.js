import PropTypes from 'prop-types';

const post = PropTypes.shape({    
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    body: PropTypes.string      
});

const comment = PropTypes.shape({    
    postId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string
});

export default {
    ...PropTypes, post, comment
}