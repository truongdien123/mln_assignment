"use client"

import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ChevronRight, BookOpen } from "lucide-react"
import { chaptersData } from "@/lib/chapters-data"

export default function ChaptersPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Header Section */}
        <section className="py-12 px-4 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold">Nội dung học tập</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">Các chương học</h1>
            <p className="text-foreground/70 text-lg">
              Khám phá các chương chi tiết về cạnh tranh, độc quyền và lý thuyết kinh tế Mác-Lênin
            </p>
          </div>
        </section>

        {/* Chapters Grid */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {chaptersData.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => router.push(`/chapters/${chapter.id}`)}
                  className="group text-left p-6 bg-card rounded-lg border border-border hover:border-primary hover:bg-card/80 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <span className="text-primary font-bold text-sm">{chapter.id}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {chapter.title}
                        </h3>
                        <p className="text-sm text-foreground/60">{chapter.duration}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-foreground/70 text-sm mb-4">{chapter.description}</p>
                  <div className="flex items-center gap-4 text-xs text-foreground/60">
                    <span>{chapter.sections} phần</span>
                    <span>•</span>
                    <span>{chapter.quizzes} bài kiểm tra</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
