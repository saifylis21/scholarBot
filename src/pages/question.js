import { Button, Textarea, Select, SelectItem, ScrollShadow, Spinner } from "@nextui-org/react";
import { subjects } from "@/data/subjects";
import { grades } from "@/data/grades";
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import { UserAuth } from "@/context/AuthContext";

export default function Question() {

  const router = useRouter();

  const [answer, setAnswer] = useState("");
  const [explanation, setExplanation] = useState("");
  const [steps, setSteps] = useState("");

  const { questionData } = router.query;

  const extractContent = (input) => {
    // const apiResponse = "Answer: 4\n\nExplanation: When we add 2 and 2 together, we get a total of 4. This is because addition is a process of combining two or more numbers to find their total value. In this case, we are combining two 2's, so the answer is 4.\n\nSteps: \n\nTo find the answer, we can simply add the numbers together:\n\n2 + 2 = 4";

    // Splitting the string based on the headings
    const parts = input.split('\n\n');
    
    // Find the index of each heading
    const answerIndex = parts.findIndex(part => part.includes('Answer:'));
    const explanationIndex = parts.findIndex(part => part.includes('Explanation:'));
    const stepsIndex = parts.findIndex(part => part.includes('Steps:'));
    
    // Extract content based on the found indices
    const answer = parts[answerIndex].split(': ')[1];
    const explanation = parts[explanationIndex].split(': ')[1];
    const steps = (parts.slice(stepsIndex).join('\n\n')).replace('Steps:','');

    console.log("parts:", parts)
    
    console.log("Content between 'Answer:' and 'Explanation:'");
    console.log(answer);
    
    console.log("\nContent between 'Explanation:' and 'Steps:'");
    console.log(explanation);
    
    console.log("\nContent after 'Steps:'");
    console.log(steps);
  
    return { answer, explanation, steps };
  };

  const {user} = UserAuth()

  const [subjectValue, setSubjectValue] = useState(new Set([]));
  const [gradeValue, setGradeValue] = useState(new Set([]));
  const [questionValue, setQuestionValue] = useState("");

  useEffect(() => {
    if (questionData) {
      const objQuestionData = JSON.parse(questionData);
      setSubjectValue(new Set([objQuestionData.subject]));
      setGradeValue(new Set([objQuestionData.grade]));
      setQuestionValue(objQuestionData.question);
      // Send a POST request with the questionData
      const postData = async () => {
        try {
          const res = await fetch('https://j41h2gukz6.execute-api.us-east-1.amazonaws.com/dev/openai-path', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: questionData,
          });
          // Handle the response as needed
          if (res.ok) {
            const responseData = await res.json();
            const result = responseData.result
            const { answer, explanation, steps } = extractContent(result);
            setAnswer(answer);
            setExplanation(explanation);
            setSteps(steps);
          } else {
            // Handle error
            console.error('Request failed');
          }
        } catch (error) {
          // Handle errors
          console.error('Error sending POST request:', error);
        }
      };

      postData();
    }
  }, [questionData]);

  const [demoUsed, setDemoUsed] = useState(false);

  useEffect(() => {
    // Check if the value exists in localStorage
    const savedItem = JSON.parse(localStorage.getItem('answerObj'));
    console.log("savedItem (question):", savedItem)
    if (savedItem.value > 1 && !user) {
      setDemoUsed(true);
    } else {
      setDemoUsed(false);
    }
  }, [user])

  const handleButtonClick = async () => {

    if(user && user.email) {
        try {
            const quesDocRef = doc(db, "userQuestions", user.email);

            // Check if a document with the provided user email exists
            const docSnapshot = await getDoc(quesDocRef);

            if (docSnapshot.exists()) {
                await updateDoc(quesDocRef, {
                    questions: arrayUnion(questionData),
                    questionsNum: increment(1)
                });
                console.log("Document updated with ID", user.email);
            } else {
                await setDoc(quesDocRef, {
                    email: user.email,
                    questions: arrayUnion(questionData),
                    questionsNum: 1
                });
                console.log("New document created with ID", user.email);
            }
        } catch (err) {
            console.log("document was not written");
            console.log(err);
        }
    } else {
      try {
        const docRef = await addDoc(collection(db, "otherQuestions"), {
            question: questionData
        })
        console.log("document written with ID", docRef.id)
      } catch (err) {
          console.log("document was not written");
          console.log(err);
      }
    }

    // Redirect to the /question page with data as a query parameter
    router.push({
      pathname: '/question',
      query: { questionData: JSON.stringify(questionData) },
    });
};

  return (
    <>
      <div className="bg-zinc-700 w-full flex justify-center mt-[64px]">
          <div className="flex w-[1024px] flex-wrap md:flex-nowrap gap-6 px-6 py-5">
            <div className="w-full rounded-xl h-fit bg-zinc-800">
              <div className="p-5 border-b-2 border-zinc-700">
                <h1 className="text-white font-bold text-3xl">Question</h1>
              </div>
              <div className="p-5">
                <div className="flex flex-col gap-4">
                  <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Select
                        label="Subject"
                        placeholder={"Choose subject"}
                        labelPlacement="inside"
                        className="w-full md:max-w-sm"
                        selectedKeys={subjectValue}
                    >
                        {subjects.map((subject) => (
                        <SelectItem key={subject.value} value={subject.value}>
                            {subject.label}
                        </SelectItem>
                        ))}
                    </Select>

                    <Select
                        label="Grade"
                        placeholder="Choose grade"
                        labelPlacement="inside"
                        className="w-full md:max-w-sm"
                        selectedKeys={gradeValue}
                    >
                        {grades.map((grade) => (
                        <SelectItem key={grade.value} value={grade.value}>
                            {grade.label}
                        </SelectItem>
                        ))}
                    </Select>
                  </div>

                  <div>
                    <Textarea
                        label="Your homework question"
                        labelPlacement="inside"
                        placeholder="Enter your homework question here..."
                        className="w-full"
                        value={questionValue}
                    />
                  </div>

                  <div className="flex justify-center">
                    <Button onClick={handleButtonClick} color="success" className="w-full font-bold text-white">
                      Answer
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full rounded-xl h-fit bg-zinc-800">
              <div className="p-5 border-b-2 border-zinc-700">
                <h1 className="text-white font-bold text-3xl">Result</h1>
              </div>
              <div className="relative">
                {demoUsed ? (
                  <div className="backdrop-blur-sm absolute w-full h-full top-0 left-0 z-30">
                    <div className="h-full flex flex-col items-center justify-center">
                      <h1 className="text-white font-bold text-4xl text-center">Sign In<br/>to get more<br/>answers!</h1>
                    </div>
                  </div>
                ) : <></>}

                {answer&&explanation&&steps ? <></> : (
                  <div className="backdrop-blur-sm absolute w-full h-full top-0 left-0 z-20">
                    <div className="h-full flex flex-col items-center justify-center">
                      <h1 className="text-white font-bold text-2xl text-center">If only homework<br/>could solve itself...<br/>Oh wait,<br/>it can now!</h1>
                    </div>
                  </div>
                )}
                <div className="p-5">
                  <h2 className="text-white font-bold text-lg mb-2">Answer</h2>
                  <p className="text-white font-extralight text-sm mb-2">The answer to your question</p>
                  <ScrollShadow className="w-full bg-zinc-700 rounded-xl p-4 text-white h-[200px] border-1 border-zinc-500">
                    {answer ? <div><p>{answer}</p></div> : (
                      <p>Loading...</p>
                    )}
                  </ScrollShadow>
                </div>

                <div className="relative p-5">

                  {user&&user.email ? <></> : (
                    <div className="backdrop-blur-sm absolute w-full h-full top-0 left-0 z-10">
                      <div className="h-full flex flex-col items-center justify-center">
                        <h1 className="text-white font-bold text-2xl text-center">Sign In<br/>to see the Explanation<br/>and Steps</h1>
                      </div>
                    </div>
                  )}

                  <h2 className="text-white font-bold text-lg mb-2 mt-[20px]">Explanation</h2>
                  <p className="text-white font-extralight text-sm mb-2">The explanation to your question</p>
                  <ScrollShadow className="w-full bg-zinc-700 rounded-xl p-4 text-white h-[150px] border-1 border-zinc-500">
                    {explanation ? <div><p>{explanation}</p></div> : (
                      <p>Loading...</p>
                    )}
                  </ScrollShadow>

                  <h2 className="text-white font-bold text-lg mb-2 mt-[20px]">Steps</h2>
                  <p className="text-white font-extralight text-sm mb-2">The steps to your question</p>
                  <ScrollShadow className="w-full bg-zinc-700 rounded-xl p-4 text-white h-[150px] border-1 border-zinc-500">
                    {steps ? <div><p>{steps}</p></div> : (
                      <p>Loading...</p>
                    )}
                  </ScrollShadow>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}