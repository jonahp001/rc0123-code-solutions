import './App.css';
import Accordian from './Accordian';

const topics = [
  {
    id: 0,
    topicName: 'HTML',
    topicDetails: 'HTML is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.'
  },
  {
    id: 1,
    topicName: 'CSS',
    topicDetails: 'CSS is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web alongside HTML and JavaScript.'
  },
  {
    id: 2,
    topicName: 'JavaScript',
    topicDetails: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based obiect-orientation and first-class functions.'
  }
]

function App() {
  return (
    <Accordian topicsAndDetails={topics}/>
  );
}

export default App;
