"use client"

import { useState } from "react"
import { CheckCircle, XCircle, RotateCcw } from "lucide-react"

interface Question {
  question: string
  options: string[]
  correct: number
}

interface QuizSectionProps {
  questions: Question[]
  onBack: () => void
}

export default function QuizSection({ questions, onBack }: QuizSectionProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = optionIndex
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleRetry = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
  }

  const correctCount = answers.filter((answer, index) => answer === questions[index].correct).length

  const question = questions[currentQuestion]
  const isAnswered = answers[currentQuestion] !== undefined

  if (showResults) {
    const percentage = Math.round((correctCount / questions.length) * 100)
    const passed = percentage >= 70

    return (
      <div className="bg-card-bg border border-border rounded-lg p-8 max-w-2xl">
        <div className="text-center mb-8">
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
              passed ? "bg-green-500/20" : "bg-red-500/20"
            }`}
          >
            {passed ? <CheckCircle className="w-8 h-8 text-green-500" /> : <XCircle className="w-8 h-8 text-red-500" />}
          </div>
          <h2 className="text-3xl font-bold mb-2">{passed ? "Chúc mừng!" : "Cố gắng thêm!"}</h2>
          <p className="text-foreground/70 mb-4">
            Bạn trả lời đúng {correctCount}/{questions.length} câu hỏi
          </p>
          <div className="text-5xl font-bold text-accent mb-6">{percentage}%</div>
        </div>

        <div className="space-y-4 mb-8">
          {questions.map((q, index) => (
            <div key={index} className="p-4 bg-background rounded-lg border border-border">
              <div className="flex items-start gap-3">
                {answers[index] === q.correct ? (
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                )}
                <div className="flex-1">
                  <p className="font-semibold mb-2">{q.question}</p>
                  <p className="text-sm text-foreground/70">
                    Câu trả lời của bạn: <span className="text-foreground">{q.options[answers[index]]}</span>
                  </p>
                  {answers[index] !== q.correct && (
                    <p className="text-sm text-green-500 mt-1">Câu trả lời đúng: {q.options[q.correct]}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleRetry}
            className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-background px-6 py-3 rounded-lg font-semibold transition-all"
          >
            <RotateCcw className="w-5 h-5" />
            Làm lại
          </button>
          <button
            onClick={onBack}
            className="flex-1 bg-card-bg hover:bg-hover border border-border px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Quay lại
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-card-bg border border-border rounded-lg p-8 max-w-2xl">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-foreground/70">
            Câu {currentQuestion + 1}/{questions.length}
          </span>
          <div className="w-32 h-2 bg-background rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
        <h3 className="text-xl font-bold">{question.question}</h3>
      </div>

      <div className="space-y-3 mb-8">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
              answers[currentQuestion] === index
                ? "border-primary bg-primary/10"
                : "border-border hover:border-primary/50 bg-background"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  answers[currentQuestion] === index ? "border-primary bg-primary" : "border-foreground/30"
                }`}
              >
                {answers[currentQuestion] === index && <div className="w-2 h-2 bg-background rounded-full" />}
              </div>
              <span>{option}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="flex-1 bg-card-bg hover:bg-hover border border-border disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 rounded-lg font-semibold transition-all"
        >
          Câu trước
        </button>
        <button
          onClick={handleNext}
          disabled={!isAnswered}
          className="flex-1 bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed text-background px-6 py-3 rounded-lg font-semibold transition-all"
        >
          {currentQuestion === questions.length - 1 ? "Hoàn thành" : "Câu tiếp"}
        </button>
      </div>
    </div>
  )
}
