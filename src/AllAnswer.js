import React, { useEffect, useState } from "react";

const AllAnswer = ({ data, numberQuestion, setNumberQuestion }) => {
  const [question, setQuestion] = useState(data[numberQuestion]);

  useEffect(() => {
    setQuestion(data[numberQuestion]);
  }, [data, numberQuestion]);

  console.log(question.answers);

  //   return { question.answers};
};

export default AllAnswer;
