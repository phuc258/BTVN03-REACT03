# BTVN03 - React TypeScript Learning Project

Dự án học tập về React và TypeScript, bao gồm các ví dụ và lý thuyết về TypeScript types, interfaces và React Hooks.

## Tác giả

- Trần Đình Phúc
- Hồ Đăng Quang
- Hán Thành Dương
- Nguyễn Ngọc Tín
- Nguyễn Đức Anh Tài
- Lê Nhật Quang
- Trần Thị Huyền Trân
- Phan Trọng Tiến
- Võ Đăng Khoa

## Mô tả

Đây là bài tập về nhà số 3 (BTVN03), tập trung vào việc học và thực hành:

- TypeScript với React
- Type Annotation, Interface và Type Alias
- Enum và Union Types
- Generics
- Tất cả các React Hooks phổ biến

## Nội dung học tập

### TypeScript Basics

1. **Type Annotation, Interface & Type** (`/type-annotation`)
   - Type Annotation cho biến, hàm
   - Interface và cách sử dụng
   - Type Alias và sự khác biệt với Interface
   - So sánh chi tiết Type vs Interface

2. **Enum & Union Types** (`/enum-union-types`)
   - Enum types
   - Union types
   - Literal types

3. **Generics** (`/generics`)
   - Generic functions
   - Generic interfaces
   - Generic constraints

### React Hooks

1. **useState & Props** (`/usestate-props`)
2. **useEffect** (`/useeffect`)
3. **useContext** (`/usecontext`)
4. **useReducer** (`/usereducer`)
5. **useRef** (`/useref`)
6. **useMemo & useCallback** (`/usememo-usecallback`)
7. **useLayoutEffect** (`/uselayouteffect`)
8. **useDebugValue & useId** (`/usedebugvalue-useid`)

## Cấu trúc thư mục

```
src/
├── components/
│   └── Layout.tsx          # Layout chính với sidebar navigation
├── pages/
│   ├── Type_Annotation_Interface_Type.tsx
│   ├── Enum_Union_Type.tsx
│   ├── Generics.tsx
│   ├── useState_Props.tsx
│   ├── UseEffect.tsx
│   ├── UseContext.tsx
│   ├── UseReducer.tsx
│   ├── UseRef.tsx
│   ├── UseMemo_UseCallback.tsx
│   ├── UseLayoutEffectuseImperativeHandle.tsx
│   ├── UseDebugValue_useId.tsx
│   ├── MenuPage.tsx
│   └── NotFoundPage.tsx
├── routes/
│   └── MainRoute.tsx       # Cấu hình routing
├── App.tsx
└── main.tsx
```

## Cài đặt và chạy dự án

### Cài đặt dependencies

```bash
npm install
```

### Chạy development server

```bash
npm run dev
```

Ứng dụng sẽ chạy tại [http://localhost:5173](http://localhost:5173)

### Build cho production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Scripts

- `npm run dev` - Chạy development server
- `npm run build` - Build dự án cho production
- `npm run lint` - Kiểm tra lỗi với ESLint
- `npm run preview` - Preview production build

## Ghi chú

- Mỗi trang đều có phần demo và lý thuyết chi tiết
- Sử dụng Tailwind CSS cho styling
- Code được viết với TypeScript strict mode
- Có sidebar navigation để dễ dàng di chuyển giữa các bài học
