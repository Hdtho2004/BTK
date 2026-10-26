# 1951–1954 — Website dòng thời gian lịch sử

Website 1 trang (static), thiết kế theo phong cách triển lãm lịch sử. Không cần cài đặt, không cần Node.js hay framework, không cần backend.

## Đăng lên GitHub Pages

1. Giải nén file ZIP. Bạn sẽ thấy ngay `index.html`, `style.css`, `app.js`, thư mục `assets/` và các tệp hướng dẫn.
2. Tạo repository mới trên GitHub (ví dụ `lich-su-1951-1954`).
3. Tải **toàn bộ nội dung bên trong** thư mục giải nén vào **gốc** repository, không đặt `index.html` sâu trong thư mục con.
4. Trên GitHub vào **Settings → Pages → Build and deployment → Deploy from a branch**; chọn branch `main`, thư mục `/(root)` và Save.
5. Trang sẽ có địa chỉ dạng `https://TEN_TAI_KHOAN.github.io/lich-su-1951-1954/` (thay phần chữ in hoa bằng tài khoản GitHub của bạn). Nếu repo đặt đúng tên `TEN_TAI_KHOAN.github.io`, địa chỉ sẽ là trang gốc.

Để xem thử: mở trực tiếp `index.html` bằng trình duyệt; mọi tính năng chính hoạt động không cần máy chủ. Bạn cũng có thể dùng VS Code Live Server.

## Những gì được tích hợp

- 11 cột mốc giai đoạn 1951–1954, từ Đại hội II đến ngày giải phóng Hà Nội.
- Trục thời gian dọc, ảnh và phân tích ngắn bên cạnh mốc thời gian; nhấn để đọc thêm.
- Chuyển nhanh giữa các năm, thanh tiến độ đọc, hiệu ứng khi cuộn.
- Giao diện thích ứng điện thoại / máy tính, giảm chuyển động theo thiết lập người dùng.
- Nguồn dẫn ở mỗi sự kiện, ghi chú phân biệt ảnh tư liệu đúng sự kiện và ảnh bối cảnh.

## Ảnh, sử dụng ngoại tuyến, chỉnh sửa

Ảnh tư liệu tải qua Wikimedia Commons khi người xem có mạng. **Ảnh tư liệu không nằm trong ZIP**, vì môi trường dựng website không thể sao chép trực tiếp các ảnh từ Commons. Bù lại, tất cả các mốc có hình SVG dự phòng **đã nằm trong ZIP**, nên giao diện không bị mất bố cục khi không có Internet.

Muốn đưa ảnh thật vào ZIP về sau: tải ảnh từ trang Wikimedia Commons tương ứng sau khi kiểm tra giấy phép, đặt vào `assets/photos/`, rồi sửa `src` của thẻ ảnh trong `index.html` thành đường dẫn cục bộ. Xem `CREDITS-ANH-VA-NGUON.md` để mở trang tệp gốc.

Sửa nội dung: mở `index.html` trong trình biên tập; tìm id của cột mốc hoặc tiêu đề muốn sửa. Màu sắc, font và bố cục nằm trong `style.css`; phần tương tác trong `app.js`.

## Nguồn thông tin

Nội dung biên tập từ các tài liệu chính thống: Báo điện tử Chính phủ, Thông tấn xã Việt Nam, cơ quan lưu trữ, Bảo tàng Lịch sử Quốc gia, U.S. Office of the Historian. Danh sách chi tiết ở `CREDITS-ANH-VA-NGUON.md`.

Website học tập, không phải công trình nghiên cứu chuyên khảo. Cách gọi "giai đoạn vàng" là luận đề để đánh giá, không phải thuật ngữ phân kỳ lịch sử chính thức.
