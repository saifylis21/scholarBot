import { Button, Textarea, Select, SelectItem, ScrollShadow, Spinner } from "@nextui-org/react";
import { subjects } from "@/data/subjects";
import { grades } from "@/data/grades";
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";

export default function Question() {

  const router = useRouter();

  const [answer, setAnswer] = useState("");
  const [explanation, setExplanation] = useState("");
  const [steps, setSteps] = useState("");

  const { questionData } = router.query
  console.log("questionData:", questionData);

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

  useEffect(() => {
    if (questionData) {

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
            console.log("responseData:", responseData);
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
                      />
                    </div>

                    <div className="flex justify-center">
                      <Button color="success" className="w-full font-bold text-white">
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
                <div className="p-5 relative">

                  {answer&&explanation&&steps ? <></> : (
                    <div className="backdrop-blur-sm absolute w-full h-full top-0 left-0 z-10">
                      <div className="h-full flex flex-col items-center justify-center">
                        <h1 className="text-white font-bold text-2xl">Loading...</h1>
                      </div>
                    </div>
                  )}

                  <h2 className="text-white font-bold text-lg mb-2">Answer</h2>
                  <p className="text-white font-extralight text-sm mb-2">The answer to your question</p>
                  <ScrollShadow className="w-full bg-zinc-700 rounded-xl p-4 text-white h-[200px] border-1 border-zinc-500">
                    {answer ? <div><p>{answer}</p></div> : (
                      <p>Loading...</p>
                    )}
                  </ScrollShadow>

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
    </>
  )
}