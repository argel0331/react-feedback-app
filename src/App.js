import Header from './Components/Header'
import FeedbackList from './Components/FeedbackList'
import FeedbackData from './Data/feedbackData'
import {useState} from 'react'

function App() {
    const [feedback, setFeedBack] = useState(FeedbackData);
    
    return (
    <>  
       <Header />
       <div className='container'>
         <FeedbackList feedback={feedback} /> 
       </div>
    </>
    )
}

export default App