import { useState } from "react";
import "./App.css";
import { FeedbackItem } from "./components/FeedbackItems";
import { FeedBackList } from "./components/FeedbackList";
import { Header } from "./components/Header";
import FeedbackData from "./data/feedbackData";

function App() {
  const [feedback,setFeedback]= useState(FeedbackData)
  return (
    <>
      <Header title = 'Feedback UI'></Header>
      {/* <FeedbackItem/> */}
      <FeedBackList feedback={feedback}/>
    </>
  );
}

export default App;
