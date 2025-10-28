"use client"

import { useParams, useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ChevronLeft, ChevronRight, BookOpen, Clock } from "lucide-react"
import { chaptersData } from "@/lib/chapters-data"

export default function ChapterDetailPage() {
  const params = useParams()
  const router = useRouter()
  const chapterId = Number.parseInt(params.id as string)
  const chapter = chaptersData.find((c) => c.id === chapterId)

  if (!chapter) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Chương không tìm thấy</h1>
            <button
              onClick={() => router.push("/chapters")}
              className="text-primary hover:text-primary-dark transition-colors"
            >
              Quay lại danh sách chương
            </button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const currentIndex = chaptersData.findIndex((c) => c.id === chapterId)
  const previousChapter = currentIndex > 0 ? chaptersData[currentIndex - 1] : null
  const nextChapter = currentIndex < chaptersData.length - 1 ? chaptersData[currentIndex + 1] : null

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b border-border px-4 py-4">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => router.push("/chapters")}
              className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors mb-4"
            >
              <ChevronLeft className="w-4 h-4" />
              Quay lại danh sách
            </button>
          </div>
        </div>

        {/* Chapter Header */}
        <section className="py-12 px-4 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">{chapter.id}</span>
              </div>
              <div>
                <span className="text-accent font-semibold text-sm">Chương {chapter.id}</span>
                <h1 className="text-4xl font-bold">{chapter.title}</h1>
              </div>
            </div>
            <p className="text-foreground/70 text-lg mb-6">{chapter.description}</p>
            <div className="flex items-center gap-6 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{chapter.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>{chapter.sections} phần</span>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter Content */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Sections */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Nội dung chương</h2>
              <div className="space-y-4">
                {chapter.sections_list.map((section, index) => (
                  <div
                    key={index}
                    className="p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <h3 className="font-semibold mb-2">{section.title}</h3>
                    <p className="text-foreground/70 text-sm">{section.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Concepts */}
            <div className="mb-12 p-6 bg-primary/10 rounded-lg border border-primary/20">
              <h3 className="text-lg font-bold mb-4 text-primary">Khái niệm chính</h3>
              <ul className="space-y-2">
                {chapter.key_concepts.map((concept, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-foreground/80">{concept}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between gap-4 pt-8 border-t border-border">
              {previousChapter ? (
                <button
                  onClick={() => router.push(`/chapters/${previousChapter.id}`)}
                  className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border hover:border-primary hover:bg-card/80 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Chương trước</span>
                </button>
              ) : (
                <div />
              )}

              <button
                onClick={() => router.push("/quiz")}
                className="px-6 py-2 bg-primary hover:bg-primary-dark text-background rounded-lg font-semibold transition-all"
              >
                Làm bài kiểm tra
              </button>

              {nextChapter ? (
                <button
                  onClick={() => router.push(`/chapters/${nextChapter.id}`)}
                  className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border hover:border-primary hover:bg-card/80 transition-all"
                >
                  <span className="hidden sm:inline">Chương tiếp</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
