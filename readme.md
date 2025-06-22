# DevTool Helper Suite 🛠️

เครื่องมือช่วยเหลือนักพัฒนาที่รวบรวมยูทิลิตี้ที่จำเป็นไว้ในที่เดียว

## 📋 รายการเครื่องมือ

### 1. JSON Formatter
- **จัดรูปแบบ JSON** ให้อ่านง่าย (Pretty Print)
- **บีบอัด JSON** เพื่อลดขนาดไฟล์
- **ตรวจสอบความถูกต้อง** ของ JSON
- แสดงข้อผิดพลาดเมื่อ JSON ไม่ถูกต้อง

### 2. Base64 Encoder/Decoder
- **เข้ารหัส** ข้อความเป็น Base64
- **ถอดรหัส** Base64 กลับเป็นข้อความ
- รองรับข้อความภาษาไทยและอักขระพิเศษ

### 3. Unix Timestamp Converter
- **แปลง Unix Timestamp** เป็นวันที่และเวลาที่อ่านได้
- **แปลงวันที่** เป็น Unix Timestamp
- **ดูเวลาปัจจุบัน** และ Timestamp ปัจจุบัน
- รองรับรูปแบบวันที่ภาษาไทย

### 4. URL Encoder/Decoder
- **เข้ารหัส URL** สำหรับใช้ในลิงก์
- **ถอดรหัส URL** ที่ถูกเข้ารหัสแล้ว
- จัดการอักขระพิเศษและภาษาไทยใน URL

### 5. Text Counter
- **นับจำนวนตัวอักษร** (รวมและไม่รวมช่องว่าง)
- **นับจำนวนคำ** (รองรับภาษาไทย)
- **นับจำนวนบรรทัด**
- **นับจำนวนย่อหน้า**

### 6. Case Converter
- **UPPERCASE** - ตัวพิมพ์ใหญ่ทั้งหมด
- **lowercase** - ตัวพิมพ์เล็กทั้งหมด
- **Title Case** - ตัวแรกของแต่ละคำเป็นตัวพิมพ์ใหญ่
- **camelCase** - รูปแบบสำหรับตัวแปรในโปรแกรม
- **PascalCase** - รูปแบบสำหรับชื่อคลาส
- **snake_case** - คั่นด้วยขีดล่าง
- **kebab-case** - คั่นด้วยขีดกลาง

## 🚀 วิธีการใช้งาน

1. **เลือกเครื่องมือ** ที่ต้องการจากแท็บด้านบน
2. **ใส่ข้อมูล** ในช่อง Input
3. **กดปุ่ม** เพื่อประมวลผล
4. **คัดลอกผลลัพธ์** ด้วยปุ่ม Copy

## 💻 การติดตั้งและรัน

### ความต้องการของระบบ
- Node.js 18+ 
- npm หรือ yarn หรือ pnpm

### ขั้นตอนการติดตั้ง

```bash
# ติดตั้ง dependencies
npm install
# หรือ
yarn install
# หรือ
pnpm install

# รันในโหมด development
npm run dev
# หรือ
yarn dev
# หรือ
pnpm dev
```

เปิดเบราว์เซอร์และไปที่ `http://localhost:3000`

### การ Build สำหรับ Production

```bash
# Build โปรเจค
npm run build

# รัน production server
npm start
```

## 🛠️ เทคโนโลยีที่ใช้

- **Next.js 15** - React Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI Components
- **Lucide React** - Icons

## 📁 โครงสร้างโปรเจค

```
devtools-suite/
├── app/
│   ├── page.tsx          # หน้าหลักที่รวมเครื่องมือทั้งหมด
│   ├── layout.tsx        # Layout หลัก
│   └── globals.css       # CSS หลัก
├── components/
│   └── ui/              # shadcn/ui components
├── public/              # Static files
└── README.md           # ไฟล์นี้
```

**สร้างด้วย ❤️ สำหรับชุมชนนักพัฒนาไทย**
```