module.exports = {
  // type
  types: [
    { value: "feat", name: "feat: Tính năng sản phẩm mới" },
    { value: "fix", name: "fix: sửa lỗi (bug)" },
    { value: "docs", name: "docs: Thay đổi tài liệu" },
    {
      value: "style",
      name: "style: Không thay đổi các thay đổi của hàm mã (chẳng hạn như xóa khoảng trắng, định dạng, xóa dấu chấm phẩy ở cuối, v.v.)"
    },
    {
      value: "refactor",
      name: "refactor: xây dựng lại mã. Không bao gồm sửa lỗi, tính năng mới"
    },
    {
      value: "perf",
      name: "perf: Tối ưu hóa hiệu suất"
    },
    { value: "test", name: "test: Thêm và sửa đổi các trường hợp thử nghiệm" },
    {
      value: "build",
      name: "build: Quá trình xây dựng, các thay đổi phụ thuộc bên ngoài như npm webpack "
    },
    { value: "ci", name: "ci: Tập lệnh và cấu hình CI đã sửa đổi" },
    {
      value: "chore",
      name: "chore: Các thay đổi đối với quy trình xây dựng hoặc các công cụ và thư viện phụ trợ không ảnh hưởng đến các hoạt động khác của tệp nguồn và trường hợp kiểm thử"
    },
    { value: "revert", name: "revert: Khôi phục commit" }
  ],
  // scope type
  scopes: [
    ["components", "Public component"],
    ["pages", "page"],
    ["utils", "utils"],
    ["styles", "style"],
    ["deps", "Project dependency"],
    ["other", "Other modifications"],
    // Nếu bạn chọn custom ,Bạn sẽ được yêu cầu nhập một tùy chỉnh sau đó scope, Bạn không cần đặt tùy chọn này và đặt những điều sau allowCustomScopes Thiết lập như true
    ["custom", "không có cái nào ở trên? Tôi muốn tùy chỉnh"]
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`
    };
  }),
  // Ghi đè thông tin được nhắc
  messages: {
    type: "Vui lòng đảm bảo rằng nội dung gửi của bạn tuân theo đặc điểm kỹ thuật gửi nguyên tử! \ nChọn loại bạn muốn gửi:",
    scope: "\nChọn phạm vi (option):",
    // lựa chọn scope: custom Lời nhắc sau sẽ xuất hiện khi
    customScope: "Vui lòng nhập một tùy chỉnh scope:  ",
    subject: "Điền vào một câu mô tả ngắn gọn và súc tích:\n",
    body:'Thêm mô tả chi tiết hơn, bạn có thể đính kèm mô tả về chức năng mới hoặc bug Liên kết, liên kết ảnh chụp màn hình (tùy chọn). Sử dụng "|" để bọc:\n',
    breaking: "Liệt kê các thay đổi chính không tương thích (tùy chọn):\n",
    footer: "Liệt kê tất cả các thay đổi ISSUES CLOSED  (Optional). E.g.: #31, #34:\n",
    confirmCommit: "xác nhận gửi?"
  },

  // Có cho phép điền tùy chỉnh hay không scope ,Thiết lập như true , Sẽ tự động thêm hai scope type [{ name: 'empty', value: false },{ name: 'custom', value: 'custom' }]
  // allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
  // skip any questions you want
  skipQuestions: ["body", "breaking", "footer"],
  subjectLimit: 100
};
