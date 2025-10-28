"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { BookOpen, Lightbulb, ArrowRight } from "lucide-react";
import "../styles/globals.css";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 px-4 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-accent" />
              <span className="text-accent font-semibold">
                Giáo trình học tập
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
              Cạnh tranh và độc quyền trong nền kinh tế thị trường
            </h1>

            <p className="text-xl text-foreground/80 mb-8 max-w-2xl leading-relaxed">
              Khám phá lý thuyết Mác-Lênin về cạnh tranh, độc quyền và sự phát
              triển của chủ nghĩa tư bản hiện đại. Một hành trình học tập toàn
              diện với các chương chi tiết, bài kiểm tra tương tác và tài liệu
              tham khảo.
            </p>

            <button
              onClick={() => router.push("/chapters")}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-background px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:gap-3"
            >
              Bắt đầu học
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-card-bg/50 border-t border-b border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Video về cạnh tranh và độc quyền</h2>

            {/* Thay 3 thẻ card bằng video */}
            <div className="aspect-video rounded-lg overflow-hidden border border-border shadow-lg">
              <iframe
                src={`https://www.youtube.com/embed/1AYh41P2MoA`}
                title="Video bài học"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
