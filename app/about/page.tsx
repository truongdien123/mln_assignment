"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { BookOpen, Users, Target, Lightbulb, Sparkles, Bot, Rocket } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 px-4 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4 animate-fade-in-up">
              <BookOpen className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold">Về chúng tôi</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Giáo trình Mác-Lênin
            </h1>
            <p className="text-foreground/70 text-lg animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Một nền tảng học tập toàn diện về lý thuyết Mác-Lênin, cạnh tranh, độc quyền và kinh tế chính trị
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="animate-slide-in-left">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Sứ mệnh</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Chúng tôi cam kết cung cấp một nền tảng học tập chất lượng cao về lý thuyết Mác-Lênin, giúp sinh viên
                  và những người quan tâm hiểu rõ hơn về cạnh tranh, độc quyền, chủ nghĩa đế quốc và các khủng hoảng
                  kinh tế của chủ nghĩa tư bản.
                </p>
              </div>
              <div className="animate-slide-in-right">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Tầm nhìn</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Chúng tôi hướng tới một thế giới nơi mọi người có thể tiếp cận kiến thức về lý thuyết xã hội chủ nghĩa
                  và hiểu rõ hơn về cấu trúc kinh tế của xã hội hiện đại, từ đó có thể tham gia vào các cuộc thảo luận
                  và hành động chính trị một cách có hiểu biết.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Tools Section */}
        <section className="py-16 px-4 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold">Công cụ AI hỗ trợ</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* ChatGPT (GPT-5) */}
              <div className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-all hover:-translate-y-0.5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">ChatGPT (GPT-5)</h3>
                    <p className="text-foreground/70 text-sm">Hỗ trợ xây dựng nội dung, kịch bản và hình minh hoạ</p>
                  </div>
                  <Bot className="w-6 h-6 text-primary/80" />
                </div>
              </div>

              {/* Gemini */}
              <div className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-all hover:-translate-y-0.5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Gemini</h3>
                    <p className="text-foreground/70 text-sm">Hỗ trợ tạo hình ảnh, nội dung và chỉnh sửa</p>
                  </div>
                  <Sparkles className="w-6 h-6 text-primary/80" />
                </div>
              </div>

              {/* V0 */}
              <div className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-all hover:-translate-y-0.5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">V0</h3>
                    <p className="text-foreground/70 text-sm">Tạo UI, layout và các thành phần web nhanh chóng</p>
                  </div>
                  <Rocket className="w-6 h-6 text-primary/80" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Tính năng chính</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: BookOpen,
                  title: "Nội dung chi tiết",
                  description: "4 chương toàn diện về lý thuyết Mác-Lênin và kinh tế chính trị",
                  delay: "0s",
                },
                {
                  icon: Lightbulb,
                  title: "Bài kiểm tra tương tác",
                  description: "Kiểm tra kiến thức với các câu hỏi trắc nghiệm và nhận phản hồi ngay lập tức",
                  delay: "0.1s",
                },
                {
                  icon: Users,
                  title: "Tài liệu tham khảo",
                  description: "Danh sách các tác phẩm của Marx, Lenin và các nhà lý thuyết khác",
                  delay: "0.2s",
                },
              ].map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-all hover-scale animate-fade-in-up"
                    style={{ animationDelay: feature.delay }}
                  >
                    <Icon className="w-8 h-8 text-accent mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-foreground/70">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Giá trị của chúng tôi</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Chính xác",
                  description:
                    "Chúng tôi cam kết cung cấp thông tin chính xác và dựa trên các tác phẩm gốc của Marx, Lenin và các nhà lý thuyết Mác-Lênin.",
                },
                {
                  title: "Dễ tiếp cận",
                  description:
                    "Chúng tôi cố gắng làm cho lý thuyết Mác-Lênin dễ tiếp cận hơn thông qua các giải thích rõ ràng, ví dụ cụ thể và bài kiểm tra tương tác.",
                },
                {
                  title: "Toàn diện",
                  description:
                    "Chúng tôi cung cấp một cái nhìn toàn diện về lý thuyết Mác-Lênin, từ các khái niệm cơ bản đến các phân tích phức tạp về kinh tế chính trị.",
                },
                {
                  title: "Tự do",
                  description:
                    "Chúng tôi tin rằng kiến thức nên là tự do và có thể tiếp cận được cho tất cả mọi người, bất kể nền tảng hay tình cảnh của họ.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-lg font-semibold mb-2 text-primary">{value.title}</h3>
                  <p className="text-foreground/80">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
