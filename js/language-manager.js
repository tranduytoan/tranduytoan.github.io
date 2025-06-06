class LanguageManager {
  constructor() {
    this.currentLanguage = this.detectBrowserLanguage();
    this.translations = {
      vi: {
        title: "Trần Duy Toàn | Fullstack Intern",
        subtitle: "Fullstack Intern",
        objective: "Mục tiêu nghề nghiệp",
        shortTerm: "Ngắn hạn:",
        longTerm: "Dài hạn:",
        shortTermText:
          "Tích lũy kinh nghiệm qua các kỳ thực tập, tham gia vào các dự án thực tế để nâng cao kỹ năng lập trình, tư duy thiết kế hệ thống và khả năng làm việc nhóm.",
        longTermText:
          "Trở thành một kỹ sư phần mềm chuyên nghiệp, có tư duy hệ thống vững chắc, chuyên môn sâu và kỹ năng làm việc hiệu quả để đóng góp vào các sản phẩm công nghệ có giá trị.",
        education: "Học vấn",
        university: "Trường Đại học Công nghệ - Đại học Quốc Gia Hà Nội",
        major: "Chuyên ngành:",
        majorText: "Công nghệ thông tin định hướng thị trường Nhật Bản",
        period: "2022 - 2026",
        expected: "(dự kiến)",
        universityDesc:
          "Chương trình đào tạo các kiến thức cốt lõi và hiện đại về CNTT, tập trung vào quy trình xây dựng, triển khai, quản lý và vận hành các hệ thống phần mềm chuyên nghiệp.",
        skills: "Kỹ năng",
        languages: "Ngôn ngữ:",
        frameworks: "Framework:",
        databases: "Cơ sở dữ liệu:",
        os: "Hệ điều hành:",
        tools: "Nền tảng & Công cụ:",
        projects: "Dự án nổi bật",
        time: "Thời gian:",
        goal: "Mục tiêu:",
        highlights: "Điểm nổi bật:",
        technology: "Công nghệ:",
        role: "Vai trò:",
        copyright: "© 2025 Trần Duy Toàn",
      },
      en: {
        title: "Tran Duy Toan | Fullstack Intern",
        subtitle: "Fullstack Intern",
        objective: "Career Objectives",
        shortTerm: "Short-term:",
        longTerm: "Long-term:",
        shortTermText:
          "Gain experience through internships, participate in real projects to improve programming skills, system design thinking, and teamwork abilities.",
        longTermText:
          "Become a professional software engineer with solid system thinking, deep expertise, and effective working skills to contribute to valuable technology products.",
        education: "Education",
        university:
          "University of Engineering and Technology - Vietnam National University, Hanoi",
        major: "Major:",
        majorText: "Information Technology with Japanese Market Orientation",
        period: "2022 - 2026",
        expected: "(expected)",
        universityDesc:
          "Training program covering core and modern IT knowledge, focusing on the process of building, deploying, managing, and operating professional software systems.",
        skills: "Skills",
        languages: "Languages:",
        frameworks: "Frameworks:",
        databases: "Databases:",
        os: "Operating Systems:",
        tools: "Platforms & Tools:",
        projects: "Featured Projects",
        time: "Duration:",
        goal: "Goal:",
        highlights: "Highlights:",
        technology: "Technology:",
        role: "Role:",
        copyright: "© 2025 Tran Duy Toan",
      },
    };
  }

  detectBrowserLanguage() {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && (savedLanguage === "vi" || savedLanguage === "en")) {
      return savedLanguage;
    }

    const browserLang = navigator.language || navigator.languages[0];
    return browserLang.startsWith("vi") ? "vi" : "en";
  }

  setLanguage(lang) {
    this.currentLanguage = lang;
    localStorage.setItem("language", lang);
    this.updateContent();
    this.updatePageLanguage();
  }

  updateContent() {
    const translations = this.translations[this.currentLanguage];

    document.querySelectorAll("[data-translate]").forEach((element) => {
      const key = element.getAttribute("data-translate");
      if (translations[key]) {
        element.textContent = translations[key];
      }
    });

    document.title = translations.title;
  }

  updatePageLanguage() {
    document.documentElement.lang = this.currentLanguage;
  }

  getCurrentLanguage() {
    return this.currentLanguage;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  window.languageManager = new LanguageManager();
  window.languageManager.setLanguage(
    window.languageManager.getCurrentLanguage()
  );
});
