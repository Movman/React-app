import Header from "../components/Header";
import QuestionDetail from "../components/QuestionDetail";

function PollsDetail() {
  let choices = [
    {
        id: 1,
        text: "Fajn"
    },
    {
        id: 2,
        text: "Vyborne"
    },
    {
        id: 3,
        text: "Zle"
    }
    ]
    

    return (
      <>
        <Header title={"Detail"}/>
        <QuestionDetail data={choices}/>
      </>
    );
}

export default PollsDetail;
