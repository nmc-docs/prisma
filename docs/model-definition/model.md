---
sidebar_position: 1
---

# Định nghĩa model

- Dưới đây là cách định nghĩa một model:

```plaintext
model User {
  Các cột được định nghĩa tại đây
}
```

- Quy tắc đặt tên model:
  - Tên model chỉ chứa các ký tự chữ cái, chữ số, dấu gạch dưới (\_)
  - Tên model phải bắt đầu bằng chữ cái in hoa và tuân theo quy tắc PascalCase
  - Tên model phải ở dạng số ít (ví dụ như **User**, **Post**)

:::note

- Ta có thể sử dụng `@@map()` để thay đổi lại tên entity trong cơ sở dữ liệu.

:::
