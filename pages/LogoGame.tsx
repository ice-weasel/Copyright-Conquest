"use client"
import React, { useState } from 'react';
import "tailwindcss/tailwind.css";

interface LogoQ {
  Questionnum: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface Scorecard {
  totalScore: number;
}

const initialScore: Scorecard = {
  totalScore: 0,
};

const LogoData: LogoQ[] = [
  {
    Questionnum: "One",
    question: "Select the correct logo",
    options: [
      "/Google1.jpg",
      "/googlefake2.png",
      "/Google1.jpg",
      "/googlefake2.png",
    ],
    correctAnswer: 0,
  },
  {
    Questionnum: "Two",
    question: "Who is the biggest dumdum?",
    options: [
      "/Google1.jpg",
      "/googlefake2.png",
      "/Google1.jpg",
      "/googlefake2.png",
    ],
    correctAnswer: 0,
  },
  {
    Questionnum: "Three",
    question: "Who is the biggest dumdum?",
    options: [
      "/Google1.jpg",
      "/googlefake2.png",
      "/Google1.jpg",
      "/googlefake2.png",
    ],
    correctAnswer: 0,
  },
  {
    Questionnum: "Four",
    question: "Who is the biggest dumdum?",
    options: [
      "/Google1.jpg",
      "/googlefake2.jpg",
      "/Google1.jpg",
      "/googlefake2.png",
    ],
    correctAnswer: 0,
  },
];

const LogoGame: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(
    LogoData[0].Questionnum.toLowerCase()
  );
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState<Scorecard>(initialScore);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setSelectedAnswer(null);
  };

  const handleAnswerClick = (answerIndex: number, correctAnswer: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answerIndex);
      if (answerIndex === correctAnswer) {
        setScore((prevScore) => ({
          totalScore: prevScore.totalScore + 10,
        }));
      }
    }
  };

  return (
    <main className="bg-white  min-h-screen flex flex-rows   ">
     <div className=''>
        <div className="flex  justify-center mt-16">
          <ul
            className="flex rounded-full bg-gray-800 gap-4 text-sm font-medium"
            id="default-tab"
            data-tabs-toggle="#default-tab-content"
            role="tablist"
          >
            {LogoData.map((quiz) => (
              <li key={quiz.Questionnum} className="mr-2" role="presentation">
                <button
                  className={`p-4 border-b-5 rounded-full ${
                    activeTab === quiz.Questionnum.toLowerCase()
                      ? "text-blue-600"
                      : "text-white"
                  }`}
                  id={`${quiz.Questionnum.toLowerCase()}-tab`}
                  data-tabs-target={`#${quiz.Questionnum.toLowerCase()}`}
                  type="button"
                  role="tab"
                  aria-controls={quiz.Questionnum.toLowerCase()}
                  aria-selected={activeTab === quiz.Questionnum.toLowerCase()}
                  onClick={() => handleTabClick(quiz.Questionnum.toLowerCase())}
                >
                  {quiz.Questionnum}
                </button>
              </li>
            ))}
          </ul>
        </div>
        </div>
        <div id="default-tab-content" className="w-full p-16 g-slate-500 text-center">
          {LogoData.map((quiz, quizIndex) => (
            <div
              key={quiz.Questionnum}
              className={`${
                activeTab === quiz.Questionnum.toLowerCase() ? "" : "hidden"
              } p-4 bg-white  rounded-lg  h-48 dark:bg-gray-800`}
              id={quiz.Questionnum.toLowerCase()}
              role="tabpanel"
              aria-labelledby={`${quiz.Questionnum.toLowerCase()}-tab`}
            >
              <h2 className="mb-3 text-xl font-extrabold tracking-tight text-white dark:text-white">
                {quiz.Questionnum}
              </h2>
              <p className="mb-3 mt-7 text-3xl text-gray-500 dark:text-white">
                {quiz.question}
              </p>
              <div className="grid mb-8 mt-32 gap-4 w-full rounded-lg shadow-xl md:mb-12 md:grid-cols-2">
                {quiz.options.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    className={`flex flex-col items-center justify-center p-8 text-center rounded-lg hover:shadow-md dark:bg-gray-800 ${
                      selectedAnswer === optionIndex ? "bg-green-300" : ""
                    }`}
                    onClick={() => handleAnswerClick(optionIndex, quiz.correctAnswer)}
                  >
                    <img
                      src={option}
                      alt={`Option ${optionIndex + 1}`}
                      className="w-32 h-32 mb-4"
                    />
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Option {optionIndex + 1}
                      </h3>
                    </blockquote>
                  </button>
                ))}
                {selectedAnswer !== null && (
                  <p
                    className={`text-xl bg-slate-700 rounded-lg my-7 ${
                      selectedAnswer === quiz.correctAnswer
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {selectedAnswer === quiz.correctAnswer
                      ? "Correct Answer!"
                      : "Wrong Answer!"}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      
      <div className="justify-end mr-24">
        <div className=" mt-64 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Scorecard
            </h5>
          </div>
          <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Your Score
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {score.totalScore} points
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LogoGame;
