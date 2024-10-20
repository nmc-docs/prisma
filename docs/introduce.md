---
sidebar_position: 1
slug: /
---

# Giới thiệu về Prisma

## Prisma là gì?

**Prisma** là một công cụ phát triển cơ sở dữ liệu (ORM - Object-Relational Mapping) hiện đại, giúp đơn giản hóa việc làm việc với cơ sở dữ liệu trong các ứng dụng. Prisma hỗ trợ nhiều cơ sở dữ liệu quan hệ như PostgreSQL, MySQL, SQLite và Microsoft SQL Server.

Prisma bao gồm ba thành phần chính:

1. **Prisma Client**: Đây là một thư viện tự động tạo code để tương tác với cơ sở dữ liệu từ mã JavaScript hoặc TypeScript của bạn. Bạn có thể sử dụng Prisma Client để truy vấn, tạo, cập nhật và xóa dữ liệu từ cơ sở dữ liệu một cách dễ dàng.
2. **Prisma Migrate**: Công cụ quản lý migrations cho cơ sở dữ liệu. Nó cho phép bạn dễ dàng quản lý các thay đổi trong cấu trúc dữ liệu khi phát triển dự án, như thêm bảng mới, thay đổi cột, hoặc chỉnh sửa khóa chính.
3. **Prisma Studio**: Giao diện người dùng trực quan giúp bạn xem và quản lý dữ liệu trong cơ sở dữ liệu một cách trực tiếp từ trình duyệt.

Prisma không chỉ hỗ trợ tốt cho các ứng dụng web mà còn giúp đồng bộ hóa mã nguồn với cấu trúc cơ sở dữ liệu, giảm thiểu lỗi cú pháp và logic.

## Cài đặt

### Cài đặt Prisma và Prisma Client

```ba
npm i -D prisma && npm i @prisma/client
```

### Khởi tạo Prisma

```bash
npx prisma init
```

- Lệnh này sẽ tạo ra thư mục `prisma/` chứa file `schema.prisma`, nơi bạn sẽ định nghĩa cấu trúc cơ sở dữ liệu của mình. Đồng thời, nó cũng tạo file `.env` để cấu hình kết nối cơ sở dữ liệu.

### Thiết lập URI để kết nối tới CSDL

- Vào file **.env** để cập nhật URI để kết nối tới CSDL:

```plaintext title=".env"
DATABASE_URL="mysql://root:ptit_15092002@localhost:3306/ptit_db"
```

### Định nghĩa model

- Vào file **prisma/schema.prisma** để định nghĩa các entity (model):

```plaintext title="prisma/schema.prisma"
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql" // Sửa lại tên provider tùy theo database bạn sử dụng
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### Migrate

- Sau khi định nghĩa xong model, ta chạy lệnh:

```bash
npx prisma migrate dev
```

- Câu lệnh `npx prisma migrate dev` được sử dụng trong quá trình **PHÁT TRIỂN** để áp dụng các thay đổi về cấu trúc cơ sở dữ liệu (migrations) dựa trên định nghĩa trong file `schema.prisma`. Cụ thể, nó thực hiện các nhiệm vụ sau:

1. **Tạo Migration mới**: Khi bạn chỉnh sửa file `schema.prisma` (ví dụ, thêm bảng, thay đổi cột, xóa bảng, v.v.), lệnh này sẽ tạo một migration mới để lưu trữ các thay đổi.
2. **Áp dụng Migration**: Sau khi migration được tạo, lệnh này sẽ áp dụng migration đó lên cơ sở dữ liệu hiện tại, cập nhật cơ sở dữ liệu theo những thay đổi bạn đã định nghĩa.
3. **Đồng bộ Prisma Client**: Lệnh này cũng tự động tạo lại Prisma Client, đồng bộ hóa mã nguồn với những thay đổi trong cấu trúc cơ sở dữ liệu để bạn có thể sử dụng ngay lập tức các mô hình dữ liệu mới trong ứng dụng.

- Nếu bạn thêm một bảng mới `User` trong file `schema.prisma`:

```prisma title="prisma/schema.prisma"
model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
}
```

Sau khi chạy `npx prisma migrate dev`, một migration mới sẽ được tạo và áp dụng để tạo bảng `User` trong cơ sở dữ liệu của bạn.

:::note

- Khi deploy hoặc ở môi trường production, hãy chạy lệnh:

```bash
npx prisma migrate deploy
```

:::

### Generate

- Cuối cùng, ta chạy lệnh:

```bash
npx prisma generate
```

- Lệnh `npx prisma generate` được sử dụng để tạo lại Prisma Client sau khi bạn đã chỉnh sửa file `schema.prisma`. Prisma Client là một thư viện được tự động tạo ra giúp bạn tương tác với cơ sở dữ liệu một cách dễ dàng trong ứng dụng của mình.

- Cụ thể, lệnh này thực hiện các nhiệm vụ sau:

1. **Tạo Prisma Client**: Sau khi chạy lệnh, Prisma sẽ dựa vào file `schema.prisma` để tạo ra Prisma Client tương ứng với mô hình dữ liệu trong dự án của bạn.
2. **Đồng bộ hóa mã nguồn**: Prisma Client sẽ được cập nhật để phản ánh các thay đổi mới nhất trong file `schema.prisma`. Điều này giúp bạn sử dụng các mô hình, phương thức truy vấn, và các trường dữ liệu mới ngay lập tức trong ứng dụng.

- Sử dụng lệnh này:
  - Sau khi chỉnh sửa file `schema.prisma`.
  - Sau khi áp dụng migrations hoặc thay đổi cấu trúc cơ sở dữ liệu.
  - Khi cần đồng bộ các mô hình dữ liệu trong code với cơ sở dữ liệu hiện tại.

## Sử dụng Prisma Client để thực hiện truy vấn

```ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB
```

```ts
// run inside `async` function
const newUser = await prisma.user.create({
  data: {
    name: "Alice",
    email: "alice@prisma.io",
  },
});

const users = await prisma.user.findMany();
```
