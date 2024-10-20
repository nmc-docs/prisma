---
sidebar_position: 1
---

# Quan hệ 1 - 1

## 1-1 relation

- Trong Prisma, quan hệ one-to-one (một-một) được sử dụng khi một bản ghi trong một bảng chỉ có thể liên kết với một bản ghi duy nhất trong bảng khác. Ví dụ, một `User` có thể có một `Profile`, và mỗi `Profile` chỉ thuộc về một `User`.
- Dưới đây là một ví dụ về quan hệ one-to-one giữa hai bảng `User` và `Profile` với CSDL quan hệ trong Prisma:

```prisma
model User {
  id       Int      @id @default(autoincrement())
  email    String   @unique
  name     String?
  profile  Profile?
}

model Profile {
  id     Int    @id @default(autoincrement())
  bio    String
  userId Int    @unique
  user   User   @relation(fields: [userId], references: [id])
}
```

:::info

- Trong ví dụ trên:
  - `User` có thể có 0 hoặc 1 `Profile` (vì `profile` field là optional)
  - Một `Profile` bắt buộc phải connect với một `User`
  - Trong bảng `Profile`, trường `userId` là một khóa ngoại (`foreign key`) trỏ đến trường `id` của bảng `User`.
  - Thuộc tính `@unique` ở trường `userId` đảm bảo rằng một `User` chỉ có thể có một `Profile` duy nhất. (bắt buộc phải đặt để ràng buộc)

:::

- Ví dụ bên trên lấy `id` của user làm khóa ngoại, ví dụ sau đây sẽ lấy `email` làm khóa ngoại:

```plaintext
model User {
  id      Int      @id @default(autoincrement())
  email   String   @unique // <-- add unique attribute
  profile Profile?
}

model Profile {
  id        Int    @id @default(autoincrement())
  user      User   @relation(fields: [userEmail], references: [email])
  userEmail String @unique // relation scalar field (used in the `@relation` attribute above)
}
```

- Dưới đây là ví dụ trong MongoDB:

```prisma
model User {
  id      String   @id @default(auto()) @map("_id") @db.ObjectId
  profile Profile?
}

model Profile {
  id     String @id @default(auto()) @map("_id") @db.ObjectId
  user   User   @relation(fields: [userId], references: [id])
  userId String @unique @db.ObjectId // relation scalar field (used in the `@relation` attribute above)
}
```

```plaintext
model User {
  id      String   @id @default(auto()) @map("_id") @db.ObjectId
  email   String   @unique // <-- add unique attribute
  profile Profile?
}

model Profile {
  id        String @id @default(auto()) @map("_id") @db.ObjectId
  user      User   @relation(fields: [userEmail], references: [email])
  userEmail String @unique @db.ObjectId // relation scalar field (used in the `@relation` attribute above)
}
```

## Optional 1-1 relation

- Trong ví dụ trên, khi tạo **Profile** thì ta bắt buộc phải liên kết với 1 **User** cụ thể, để không phải làm vậy, ta đánh dấu chỗ `userId` với `user` trong model **Profile** là optional:

```plaintext
model User {
  id       Int      @id @default(autoincrement())
  email    String   @unique
  name     String?
  profile  Profile?
}

model Profile {
  id     Int    @id @default(autoincrement())
  bio    String
  userId Int?   @unique
  user   User?  @relation(fields: [userId], references: [id])
}
```
