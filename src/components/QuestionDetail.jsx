

const QuestionDetailItem = ({ item }) => {
  return (
    <>
      <li style={{ listStyle: "none" }}>{item.choices}</li>
    </>
  );
};

const QuestionDetail = ({ data }) => {
  console.log(data)
    return (
        <>
          <ul>
            {data.map((item) => {
              return <QuestionDetailItem item={item} />;
            })}
          </ul>
        </>
      )
    }


export default QuestionDetail