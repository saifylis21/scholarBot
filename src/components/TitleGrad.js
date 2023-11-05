import { Button, Textarea, Select, SelectItem } from "@nextui-org/react";
import { subjects } from "@/data/subjects";
import { grades } from "@/data/grades";
import { useRouter } from 'next/router';
import { useState } from "react";
import { arrayUnion, collection, doc, increment, addDoc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { UserAuth } from "@/context/AuthContext";

const TitleGrad = () => {

    const router = useRouter();

    const [questionData, setQuestionData] = useState({
        subject: "",
        grade: "",
        question: ""
    })

    const [subjectValue, setSubjectValue] = useState(new Set([]));
    const [gradeValue, setGradeValue] = useState(new Set([]))

    const {user} = UserAuth();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        // Use a single event handler to update both the Set state and questionData state
        if (name === 'subject') {
          setSubjectValue(new Set([value]));
          setQuestionData({
            ...questionData,
            subject: value
          });
        } else if (name === 'grade') {
          setGradeValue(new Set([value]));
          setQuestionData({
            ...questionData,
            grade: value
          });
        }
    };
    
    const handleButtonClick = async () => {

        // Check if the value exists in localStorage
        const savedItem = localStorage.getItem('answerObj');
        
        if (savedItem) {
            // Retrieve the stored object and its timestamp
            const { value, timestamp } = JSON.parse(savedItem);
        
            // Check if 24 hours have passed (in milliseconds)
            const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
            const now = new Date().getTime();
        
            if (now - timestamp > twentyFourHours) {
                // If 24 hours have passed, remove the item from localStorage
                localStorage.removeItem('answerObj');
                console.log('Value removed after 24 hours.');
            } else {
                // Value is within the 24-hour window, use the stored value
                console.log('Value within 24 hours:', value);

                const parsedItem = JSON.parse(savedItem);
                parsedItem.value = value + 1;
                // Store the updated value back in localStorage
                console.log("Parsed Item:", parsedItem)
                localStorage.setItem('answerObj', JSON.stringify(parsedItem));
                console.log('Value updated in localStorage.');
            }
        } else {
            // If the value doesn't exist in localStorage, you can set it now
            const newTimestamp = new Date().getTime();
            
            const newItem = {
                value: 1,
                timestamp: newTimestamp
            };
        
            // Store the value along with its timestamp in localStorage
            localStorage.setItem('answerObj', JSON.stringify(newItem));
            console.log('Value set in localStorage.');
        }
        

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
                                label="Subject (All languages supported)"
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
                                name="grade"
                                label="Grade"
                                placeholder="Choose grade"
                                labelPlacement="inside"
                                className="w-full"
                                selectedKeys={gradeValue}
                                onChange={handleInputChange}
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