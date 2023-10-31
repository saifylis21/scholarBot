import { Button, Textarea, Select, SelectItem, ScrollShadow } from "@nextui-org/react";
import { subjects } from "@/data/subjects";
import { grades } from "@/data/grades";
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";

export default function Question() {

  const router = useRouter();
  const [response, setResponse] = useState('');

  const { questionData } = router.query

  useEffect(() => {
    if (questionData) {
      const parsedQuestionData = JSON.parse(questionData);

      // Send a POST request with the questionData
      const postData = async () => {
        try {
          const response = await fetch('https://j41h2gukz6.execute-api.us-east-1.amazonaws.com/dev/openai-path', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: questionData,
          });
          // Handle the response as needed
          if (response.ok) {
            const responseData = await response.json();
            setResponse(responseData);
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
      <div className="bg-zinc-700 w-full h-screen flex justify-center mt-[64px]">
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
                <div className="p-5">
                  <h2 className="text-white font-bold text-lg mb-2">Answer</h2>
                  <p className="text-white font-extralight text-sm mb-2">The answer to your question</p>
                  <ScrollShadow className="w-full bg-zinc-700 rounded-xl p-4 text-white h-[400px] border-1 border-zinc-500">
                    {response ? <div><p>{response.result}</p></div> : (
                      <div>
                        <p>
                          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.
                        </p>
                        <p>
                          Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                        </p>
                        <p>
                          Est velit labore esse esse cupidatat. Velit id elit consequat minim. Mollit enim excepteur ea laboris adipisicing aliqua proident occaecat do do adipisicing adipisicing ut fugiat. Consequat pariatur ullamco aute sunt esse. Irure excepteur eu non eiusmod. Commodo commodo et ad ipsum elit esse pariatur sit adipisicing sunt excepteur enim.
                        </p>
                        <p>
                          Incididunt duis commodo mollit esse veniam non exercitation dolore occaecat ea nostrud laboris. Adipisicing occaecat fugiat fugiat irure fugiat in magna non consectetur proident fugiat. Commodo magna et aliqua elit sint cupidatat. Sint aute ullamco enim cillum anim ex. Est eiusmod commodo occaecat consequat laboris est do duis. Enim incididunt non culpa velit quis aute in elit magna ullamco in consequat ex proident.
                        </p>
                        <p>
                          Dolore incididunt mollit fugiat pariatur cupidatat ipsum laborum cillum. Commodo consequat velit cupidatat duis ex nisi non aliquip ad ea pariatur do culpa. Eiusmod proident adipisicing tempor tempor qui pariatur voluptate dolor do ea commodo. Veniam voluptate cupidatat ex nisi do ullamco in quis elit.
                        </p>
                        <p>
                          Cillum proident veniam cupidatat pariatur laborum tempor cupidatat anim eiusmod id nostrud pariatur tempor reprehenderit. Do esse ullamco laboris sunt proident est ea exercitation cupidatat. Do Lorem eiusmod aliqua culpa ullamco consectetur veniam voluptate cillum. Dolor consequat cillum tempor laboris mollit laborum reprehenderit reprehenderit veniam aliqua deserunt cupidatat consequat id.
                        </p>
                        <p>
                          Est id tempor excepteur enim labore sint aliquip consequat duis minim tempor proident. Dolor incididunt aliquip minim elit ea. Exercitation non officia eu id.
                        </p>
                        <p>
                          Ipsum ipsum consequat incididunt do aliquip pariatur nostrud. Qui ut sint culpa labore Lorem. Magna deserunt aliquip aute duis consectetur magna amet anim. Magna fugiat est nostrud veniam. Officia duis ea sunt aliqua.
                        </p>
                        <p>
                          Ipsum minim officia aute anim minim aute aliquip aute non in non. Ipsum aliquip proident ut dolore eiusmod ad fugiat fugiat ut ex. Ea velit Lorem ut et commodo nulla voluptate veniam ea et aliqua esse id. Pariatur dolor et adipisicing ea mollit. Ipsum non irure proident ipsum dolore aliquip adipisicing laborum irure dolor nostrud occaecat exercitation.
                        </p>
                        <p>
                          Culpa qui reprehenderit nostrud aliqua reprehenderit et ullamco proident nisi commodo non ut. Ipsum quis irure nisi sint do qui velit nisi. Sunt voluptate eu reprehenderit tempor consequat eiusmod Lorem irure velit duis Lorem laboris ipsum cupidatat. Pariatur excepteur tempor veniam cillum et nulla ipsum veniam ad ipsum ad aute. Est officia duis pariatur ad eiusmod id voluptate.
                        </p>
                      </div>
                    )}
                  </ScrollShadow>
                </div>
              </div>
          </div>
      </div>
    </>
  )
}