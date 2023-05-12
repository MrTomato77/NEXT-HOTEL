1. เลือก React Start Project ยังไง? Next, Vite, Create react app
    - CRA (CSR) ❌ Vanila react, Zero-config
    - Vite (SSR, CSR) ❌ Vanila react, Fast Refresh
    - Next.js (SSR) ✅ File based & API routing and more features

2. เลือก UI Framework
    - MUI ✅ More components templates include Date range picker, Design for Andriod
    - AntD ✅ More components templates include Date range picker
    - Bootstrap ❌ Hard to customize, None DRP
    - Semetic UI ❌ Hard to maintain, None DRP

3. วิธีการ route ระหว่างหน้าจอ
    - React router ❌ Rather not compatible with SSR
    - built-in routing with Next.js ✅ Auto routing

4. วิธีการเก็บ session => แยก login กับไม่ login
    - Local storage + React default sanitize ✅ ป้องกัน CSRF และ XSS 
    - Cookies ❌ โดน CSRF ได้ เพราะ cookies จะถูกส่งไปพร้อมกับ header

5. การยิง API => fetch, axios, ......
    - Axios ✅ - implement สั้นอ่านง่าย, Error handling ดี
    - GraphQL ❌ - Querier for API

6. Library 3rd party ที่ต้องใช้ ✅
    - null

------------------------------------------------------------

X. Requirements.
- Good documentation
- Good community
- date picker and date range picker bundled
- well code maintenance
