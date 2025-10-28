import { BookOpen } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#111827] text-slate-300 border-t border-slate-700 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-accent" />
              <h3 className="font-bold text-lg">Giáo trình Mác-Lênin</h3>
            </div>
            <p className="text-foreground/70 text-sm">
              Nền tảng học tập toàn diện về lý thuyết Mác-Lênin và kinh tế chính trị
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Liên kết nhanh</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-foreground/70 hover:text-primary transition-colors">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="/chapters" className="text-foreground/70 hover:text-primary transition-colors">
                  Chương học
                </a>
              </li>
              <li>
                <a href="/quiz" className="text-foreground/70 hover:text-primary transition-colors">
                  Bài kiểm tra
                </a>
              </li>
              <li>
                <a href="/references" className="text-foreground/70 hover:text-primary transition-colors">
                  Tài liệu
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Thông tin</h4>
            <p className="text-foreground/70 text-sm mb-2">
              <strong>Trường:</strong> Đại học FPT
            </p>
            <p className="text-foreground/70 text-sm">
              <strong>Lớp:</strong> Triết học Mác-Lênin
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-foreground/60 text-sm">© {currentYear} Giáo trình Mác-Lênin. Tất cả quyền được bảo lưu.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <BookOpen className="w-4 h-4 text-accent" />
            <span className="text-foreground/60 text-sm">Học tập để phát triển</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
