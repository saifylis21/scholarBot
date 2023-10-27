import { Button, Textarea, Select, SelectItem } from "@nextui-org/react";
import { subjects } from "@/data/subjects";
import { levels } from "@/data/levels";
import { useRouter } from 'next/router';
import { useState } from "react";

const TitleGrad = () => {

    const router = useRouter();

    const [questionData, setQuestionData] = useState({
        subject: "",
        level: "",
        question: ""
    })

    const [subjectValue, setSubjectValue] = useState(new Set([]));
    const [levelValue, setLevelValue] = useState(new Set([]))

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        // Use a single event handler to update both the Set state and questionData state
        if (name === 'subject') {
          setSubjectValue(new Set([value]));
          setQuestionData({
            ...questionData,
            subject: value
          });
        } else if (name === 'level') {
          setLevelValue(new Set([value]));
          setQuestionData({
            ...questionData,
            level: value
          });
        }
    };
    
    const handleButtonClick = () => {
        // Redirect to the /question page with data as a query parameter
        router.push({
          pathname: '/question',
          query: { questionData: JSON.stringify(questionData) },
        });
    };
    
    return (
        <main className="w-full h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate px-6">
            <div className="min-h-screen flex flex-col items-center justify-center">

                <div className="text-center">
                    <h5 className="mb-4 text-3xl md:text-4xl font-light text-white">ScholarBot</h5>
                    <h1 className="mb-4 text-6xl font-extrabold leading-none tracking-tight text-gray-900 md:text-7xl lg:text-8xl dark:text-white">Your Personal<br/>AI Teacher</h1>
                </div>

                <div className="mt-6 w-full max-w-[1000px]">
                    <div className="flex flex-col gap-4">
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                            <Select
                                name="subject"
                                label="Subject"
                                placeholder="Choose subject"
                                labelPlacement="inside"
                                className="w-full"
                                selectedKeys={subjectValue}
                                onChange={handleInputChange}
                            >
                                {subjects.map((subject) => (
                                <SelectItem key={subject.value} value={subject.value}>
                                    {subject.label}
                                </SelectItem>
                                ))}
                            </Select>


                            <Select
                                name="level"
                                label="Level"
                                placeholder="Choose level"
                                labelPlacement="inside"
                                className="w-full"
                                selectedKeys={levelValue}
                                onChange={handleInputChange}
                            >
                                {levels.map((level) => (
                                <SelectItem key={level.value} value={level.value}>
                                    {level.label}
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
                                value={questionData.question}
                                onChange={(e) => setQuestionData({...questionData, question: e.target.value})}
                            />
                        </div>
                        <div className="flex justify-center">
                            <Button onClick={handleButtonClick} color="success" className="w-full md:max-w-sm font-bold text-white">
                                Answer
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default TitleGrad;