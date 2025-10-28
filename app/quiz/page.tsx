"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import QuizSection from "@/components/quiz-section"
import { BookOpen, ArrowRight } from "lucide-react"
import { quizData } from "@/lib/quiz-data"

export default function QuizPage() {
  const router = useRouter()
  const [selectedQuiz, setSelectedQuiz] = useState<number | null>(null)

  const handleBack = () => {
    setSelectedQuiz(null)
  }

  const currentQuiz = selectedQuiz !== null ? quizData.find((q) => q.id === selectedQuiz) : null

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Header Section */}
        <section className="py-12 px-4 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold">Kiểm tra kiến thức</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">Bài kiểm tra tương tác</h1>
            <p className="text-foreground/70 text-lg">
              Kiểm tra kiến thức của bạn với các bài kiểm tra trắc nghiệm về lý thuyết Mác-Lênin
            </p>
          </div>
        </section>

        {/* Quiz Content */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            {currentQuiz ? (
              <div>
                <button
                  onClick={handleBack}
                  className="mb-6 text-primary hover:text-primary-dark transition-colors font-semibold"
                >
                  ← Quay lại danh sách bài kiểm tra
                </button>
                <QuizSection questions={currentQuiz.questions} onBack={handleBack} />
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {quizData.map((quiz) => (
                  <button
                    key={quiz.id}
                    onClick={() => setSelectedQuiz(quiz.id)}
                    className="group text-left p-6 bg-card rounded-lg border border-border hover:border-primary hover:bg-card/80 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {quiz.title}
                        </h3>
                        <p className="text-sm text-foreground/60 mt-1">{quiz.chapter}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-foreground/70 text-sm mb-4">{quiz.description}</p>
                    <div className="flex items-center gap-4 text-xs text-foreground/60">
                      <span>{quiz.questions.length} câu hỏi</span>
                      <span>•</span>
                      <span>Thời gian: {quiz.duration}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
