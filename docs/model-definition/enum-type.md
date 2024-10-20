---
sidebar_position: 3
---

# enum và type

## enum

- Quy tắc đặt tên enum:
  - Chỉ chứa các kí tự chữ cái, chữ số, dấu gạch dưới (\_)
  - Tuân theo quy tắc đặt tên PascalCase
  - Tên enum phải ở dạng số ít (ví dụ như Role,...)

:::caution

- Enum không hỗ trợ trong CSDL **SQLite** và **Microsoft SQL Server**

:::

- Ví dụ trong relation databse:

```plaintext
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  role  Role    @default(USER)
}

enum Role {
  USER
  ADMIN
}
```

- Ví dụ về MongoDB:

```plaintext
model User {
  id    String  @id @default(auto()) @map("_id") @db.ObjectId
  email String  @unique
  name  String?
  role  Role    @default(USER)
}

enum Role {
  USER
  ADMIN
}
```

## type

:::caution

- Composite types chỉ hỗ trợ đối với **MongoDB**

:::

- Quy tắc đặt tên:

  - Bắt đầu bằng chữ cái và chỉ chứa các kí tự chữ cái, chữ số, dấu gạch dưới (\_)
  - Tuân theo quy tắc đặt tên PascalCase.

- Ví dụ:

```plaintext
model Product {
  id     String  @id @default(auto()) @map("_id") @db.ObjectId
  name   String
  photos Photo[]
}

type Photo {
  height Int
  width  Int
  url    String
}
```
