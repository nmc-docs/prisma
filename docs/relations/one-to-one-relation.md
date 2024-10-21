---
sidebar_position: 1
---

# Quan hệ 1 - 1

## 1-1 relation

- Trong Prisma, quan hệ one-to-one (một-một) được sử dụng khi một bản ghi trong một bảng chỉ có thể liên kết với một bản ghi duy nhất trong bảng khác. Ví dụ, một `User` có thể có một `Profile`, và mỗi `Profile` chỉ thuộc về một `User`.
- Dưới đây là một ví dụ về quan hệ one-to-one giữa hai bảng `User` và `Profile` với CSDL quan hệ trong Prisma:

![1729490205722](image/one-to-one-relation/1729490205722.png)

:::info

- Trong ví dụ trên:
  - `User` có thể có 0 hoặc 1 `Profile` (vì `profile` field là optional)
  - Một `Profile` bắt buộc phải connect với một `User`
  - Trong bảng `Profile`, trường `userId` là một khóa ngoại (`foreign key`) trỏ đến trường `id` của bảng `User`.
  - Thuộc tính `@unique` ở trường `userId` đảm bảo rằng một `User` chỉ có thể có một `Profile` duy nhất. (bắt buộc phải đặt để ràng buộc)

:::

- Ví dụ bên trên lấy `id` của user làm khóa ngoại, ví dụ sau đây sẽ lấy `email` làm khóa ngoại:

![1729490301219](image/one-to-one-relation/1729490301219.png)

:::caution

- Lưu ý rằng trong cả 2 model, thuộc tính nào làm khóa ngoại thì bắt buộc phải có attribute `@unique`

:::

- Dưới đây là ví dụ trong MongoDB:

![1729490322153](image/one-to-one-relation/1729490322153.png)

![1729490345439](image/one-to-one-relation/1729490345439.png)

## Optional 1-1 relation

- Trong ví dụ trên, khi tạo **Profile** thì ta bắt buộc phải liên kết với 1 **User** cụ thể, để không phải làm vậy, ta đánh dấu chỗ `userId` với `user` trong model **Profile** là optional:

![1729490554132](image/one-to-one-relation/1729490554132.png)
