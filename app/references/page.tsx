"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { BookOpen, ExternalLink, Users, FileText } from "lucide-react"
import { referencesData } from "@/lib/references-data"

export default function ReferencesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Header Section */}
        <section className="py-12 px-4 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold">Tài liệu tham khảo</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">Nguồn tài liệu</h1>
            <p className="text-foreground/70 text-lg">
              Danh sách các tác phẩm chính của Marx, Lenin và các nhà lý thuyết Mác-Lênin khác
            </p>
          </div>
        </section>

        {/* References Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Marx's Works */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Tác phẩm của Karl Marx</h2>
              </div>
              <div className="space-y-4">
                {referencesData.marx.map((work, index) => (
                  <div
                    key={index}
                    className="p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{work.title}</h3>
                        <p className="text-sm text-foreground/70 mb-2">{work.year}</p>
                        <p className="text-foreground/80 text-sm">{work.description}</p>
                      </div>
                      {work.link && (
                        <a
                          href={work.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 p-2 hover:bg-primary/10 rounded-lg transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 text-primary" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lenin's Works */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Tác phẩm của Vladimir Lenin</h2>
              </div>
              <div className="space-y-4">
                {referencesData.lenin.map((work, index) => (
                  <div
                    key={index}
                    className="p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{work.title}</h3>
                        <p className="text-sm text-foreground/70 mb-2">{work.year}</p>
                        <p className="text-foreground/80 text-sm">{work.description}</p>
                      </div>
                      {work.link && (
                        <a
                          href={work.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 p-2 hover:bg-primary/10 rounded-lg transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 text-primary" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Theorists */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Các nhà lý thuyết khác</h2>
              </div>
              <div className="space-y-4">
                {referencesData.others.map((work, index) => (
                  <div
                    key={index}
                    className="p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{work.title}</h3>
                        <p className="text-sm text-foreground/70 mb-2">
                          {work.author} - {work.year}
                        </p>
                        <p className="text-foreground/80 text-sm">{work.description}</p>
                      </div>
                      {work.link && (
                        <a
                          href={work.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 p-2 hover:bg-primary/10 rounded-lg transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 text-primary" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Resources */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Tài nguyên học tập</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {referencesData.resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors group"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="font-semibold group-hover:text-primary transition-colors">{resource.title}</h3>
                        <p className="text-sm text-foreground/70 mt-1">{resource.description}</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-foreground/40 group-hover:text-primary flex-shrink-0 mt-1" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Study Tips */}
            <div className="p-6 bg-primary/10 rounded-lg border border-primary/20">
              <h3 className="text-lg font-bold mb-4 text-primary">Gợi ý học tập</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-foreground/80">
                    Bắt đầu với các tác phẩm cơ bản của Marx như "Tuyên ngôn Đảng Cộng sản" trước khi đọc các tác phẩm
                    phức tạp hơn
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-foreground/80">
                    Đọc các tác phẩm của Lenin để hiểu cách áp dụng lý thuyết Mác vào thực tiễn cách mạng
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-foreground/80">
                    Sử dụng các tài nguyên học tập để giúp hiểu rõ hơn các khái niệm phức tạp
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-foreground/80">
                    Tham gia các nhóm học tập để thảo luận và chia sẻ kiến thức với những người khác
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
