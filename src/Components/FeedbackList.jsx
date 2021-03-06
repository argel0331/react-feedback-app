import Feedbackitem from "./Feedbackitem"
import PropTypes from 'prop-types'

function FeedbackList({feedback}) {

    if (!feedback || feedback.length === 0 ) {
        return <p>No feedback yet</p>
    
}

    return (
        <div className='feedback-List'>
          {feedback.map((item) => (
              <Feedbackitem key={item.id} item={item} />
          ) )}
        </div>
    )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            text:PropTypes.string.isRequired,
            rating:PropTypes.number.isRequired,
        })
    )
}

export default FeedbackList
