# Image Audit – Minsen Export

Tài liệu này được rà soát theo code hiện tại và thư mục `public/images`.

## Tổng Quan

- Website hiện có bộ ảnh Hero, sản phẩm, factory, process, protection, videos, insights, team và logistics trong `public/images`.
- Ảnh Hero đã được tích hợp.
- Toàn bộ 8 product catalog đã có mapping ảnh riêng.
- Factory `VN-PW-018`, `VN-PW-038` và `VN-PW-052` đã có ảnh exterior; ba factory này cũng có production, product stack, quality control và video poster.
- Ảnh process và Buyer Protection đã được tích hợp vào các section tương ứng.
- Ảnh About, Insights và Factory Videos đã được nối vào giao diện.
- Các factory mock còn lại vẫn cần ảnh riêng nếu muốn hiển thị gallery đầy đủ.

## Ảnh Đang Được Sử Dụng

### Homepage Hero

```text
public/images/hero/hero-vietnam-plywood-factory.jpg
```

Đang dùng tại Hero homepage.

### Product Browse và Product Profile

```text
public/images/products/product-commercial-plywood.jpg
public/images/products/product-film-faced-plywood.jpg
public/images/products/product-packing-plywood.jpg
public/images/products/product-natural-veneer.jpg
public/images/products/product-engineered-veneer.jpg
public/images/products/product-lvl.jpg
public/images/products/product-mdf-hdf.jpg
public/images/products/product-finger-joint-board.jpg
```

Đang dùng cho:

- Commercial Plywood
- Film Faced Plywood
- Packing Plywood
- Natural Veneer
- Engineered Veneer
- LVL
- MDF/HDF
- Finger Joint Board

### Factory Preview và Factory Profile

```text
public/images/factories/vn-pw-018/exterior.jpg
```

Đang dùng đúng theo Factory ID cho `VN-PW-018`, `VN-PW-038` và `VN-PW-052`.

### Factory Videos

```text
public/images/videos/factory-tour-poster.jpg
public/images/videos/veneer-peeling-poster.jpg
public/images/videos/plywood-hot-press-poster.jpg
```

Đang dùng cho ba card video đầu tiên.

### Insights

```text
public/images/insights/insight-vietnam-plywood-sizes.jpg
public/images/insights/insight-plywood-glue-types.jpg
```

Đang dùng cho hai chủ đề đầu tiên.

## Ảnh Đã Có Nhưng Chưa Được Sử Dụng Đúng

### Factory VN-PW-018

```text
public/images/factories/vn-pw-018/production-line.jpg
public/images/factories/vn-pw-018/product-stack.jpg
public/images/factories/vn-pw-018/quality-control.jpg
```

Mô tả:

- `production-line.jpg`: dây chuyền sản xuất plywood.
- `product-stack.jpg`: thành phẩm plywood xếp trong kho.
- `quality-control.jpg`: kiểm tra chất lượng hoặc công đoạn kiểm tra sản phẩm.

Đề xuất sử dụng:

- Gallery trong factory profile `VN-PW-018`.
- Section Production Capability.
- Section Quality Control.

### Network

```text
public/images/network/vietnam-factory-network-map.jpg
public/images/network/vietnam-port-logistics.jpg
```

Mô tả:

- `vietnam-factory-network-map.jpg`: bản đồ mạng lưới nhà máy tại Việt Nam.
- `vietnam-port-logistics.jpg`: cảng biển, container hoặc hoạt động logistics.

Đề xuất sử dụng:

- Page `/network`.
- Homepage section `Explore Vietnam's Wood Manufacturing Network`.
- Section Export Support hoặc Logistics.

### Team

```text
public/images/team/minsen-sourcing-team.jpg
```

Đề xuất sử dụng:

- Page `/about`.
- Section Minsen Sourcing Team.
- CTA tạo niềm tin trước RFQ.

### Quality và Logistics

```text
public/images/quality/quality-control-plywood.jpg
public/images/logistics/export-container-loading.jpg
```

Đề xuất sử dụng:

- `quality-control-plywood.jpg`: Buyer Protection và QC.
- `export-container-loading.jpg`: Export Support và Process.

### Video Poster Chưa Dùng

```text
public/images/videos/container-loading-poster.jpg
```

Đề xuất dùng cho video thứ tư: `Container Loading`.

## Ảnh Còn Thiếu Theo Homepage

### Product Discovery

Homepage hiện hiển thị sáu sản phẩm nhưng chỉ có ba ảnh phù hợp.

#### Packing Plywood

- **Tên file cần thêm:** `public/images/products/product-packing-plywood.jpg`
- **Nội dung:** Plywood đóng gói, pallet hoặc tấm plywood dùng trong packaging.
- **Kích thước:** 1400 × 900px hoặc tỷ lệ 16:9.
- **Alt text:** `Packing plywood panels prepared for industrial packaging`

#### Engineered Veneer

- **Tên file cần thêm:** `public/images/products/product-engineered-veneer.jpg`
- **Nội dung:** Veneer kỹ thuật có vân gỗ đồng đều, xếp thành tấm hoặc cuộn.
- **Kích thước:** 1400 × 900px.
- **Alt text:** `Engineered veneer sheets with consistent decorative grain`

#### LVL

- **Tên file cần thêm:** `public/images/products/product-lvl.jpg`
- **Nội dung:** Thanh LVL hoặc bó LVL dùng cho xây dựng/đóng gói.
- **Kích thước:** 1400 × 900px.
- **Alt text:** `Laminated veneer lumber products prepared for export`

#### MDF/HDF

- **Tên file cần thêm:** `public/images/products/product-mdf-hdf.jpg`
- **Nội dung:** Tấm MDF/HDF xếp pallet, cạnh tấm và bề mặt phẳng.
- **Alt text:** `MDF and HDF wood panels for furniture production`

#### Finger Joint Board

- **Tên file cần thêm:** `public/images/products/product-finger-joint-board.jpg`
- **Nội dung:** Ván ghép thanh với mối finger joint nhìn rõ.
- **Alt text:** `Finger joint wood boards for furniture and interior production`

### Factory Preview

Homepage đang hiển thị ba factory mock:

- `VN-PW-018`: đã có ảnh exterior.
- `VN-PW-038`: chưa có ảnh riêng.
- `VN-PW-052`: chưa có ảnh riêng.

Ảnh cần thêm:

```text
public/images/factories/vn-pw-038/exterior.jpg
public/images/factories/vn-pw-052/exterior.jpg
```

Không dùng ảnh của `VN-PW-018` cho các factory khác.

## Ảnh Còn Thiếu Theo Factory Directory

Dữ liệu hiện có 8 factory mock:

```text
VN-PW-018
VN-PW-038
VN-PW-052
VN-PW-071
VN-PW-107
VN-PW-126
VN-PW-154
VN-PW-201
```

Mỗi factory thật nên có tối thiểu:

```text
public/images/factories/{factory-id}/exterior.jpg
public/images/factories/{factory-id}/production-line.jpg
public/images/factories/{factory-id}/product-stack.jpg
public/images/factories/{factory-id}/quality-control.jpg
public/images/factories/{factory-id}/video-poster.jpg
```

Hiện mới có đủ bộ cho `VN-PW-018`.

## Ảnh Còn Thiếu Theo About Page

Page `/about` hiện chưa sử dụng ảnh team hoặc ảnh hoạt động sourcing.

### Buyer – Factory Meeting

- **Tên file:** `public/images/team/minsen-buyer-factory-meeting.jpg`
- **Nội dung:** Minsen điều phối buyer và đại diện nhà máy trong buổi trao đổi.
- **Alt text:** `Minsen coordinating an international buyer and Vietnamese factory partner`

### Document and Specification Review

- **Tên file:** `public/images/team/minsen-quality-document-review.jpg`
- **Nội dung:** Đội ngũ xem specification, sample hoặc chứng từ xuất khẩu.
- **Alt text:** `Minsen team reviewing plywood specifications and export documents`

### Team Working Image

Ảnh hiện có:

```text
public/images/team/minsen-sourcing-team.jpg
```

Ảnh này cần được tích hợp vào About page.

## Ảnh Còn Thiếu Theo Network Page

Page `/network` hiện chủ yếu dùng visual CSS và chưa hiển thị đúng ảnh bản đồ.

Ảnh cần tích hợp:

```text
public/images/network/vietnam-factory-network-map.jpg
public/images/network/vietnam-port-logistics.jpg
```

Nên bổ sung thêm nếu ảnh hiện tại là ảnh minh họa tĩnh:

- Bản đồ SVG có thể click theo North, Central, South.
- Ảnh nhà máy theo từng khu vực.
- Ảnh cảng biển/logistics theo thị trường xuất khẩu.

## Ảnh Còn Thiếu Theo Buyer Protection

Page Buyer Protection hiện dùng icon/CSS, chưa có ảnh thật cho từng lớp bảo vệ.

Nên bổ sung một bộ ảnh:

```text
public/images/protection/factory-verification.jpg
public/images/protection/supplier-selection.jpg
public/images/protection/production-supervision.jpg
public/images/protection/quality-control.jpg
public/images/protection/export-support.jpg
```

Mô tả:

- Factory Verification: kiểm tra mặt ngoài nhà máy và giấy tờ.
- Supplier Selection: đội ngũ đánh giá mẫu hoặc trao đổi với nhà máy.
- Production Supervision: theo dõi dây chuyền sản xuất.
- Quality Control: đo độ dày, độ ẩm hoặc kiểm tra bề mặt.
- Export Support: đóng container và chuẩn bị chứng từ.

## Ảnh Còn Thiếu Theo Process Page

Process page hiện dùng card text, chưa có ảnh minh họa từng bước.

Nên bổ sung:

```text
public/images/process/buyer-inquiry.jpg
public/images/process/factory-matching.jpg
public/images/process/sample-approval.jpg
public/images/process/quality-inspection.jpg
public/images/process/container-shipment.jpg
```

## Ảnh Còn Thiếu Theo Insights

Insights hiện có ba card nhưng ảnh thứ ba đang dùng lại ảnh `insight-vietnam-plywood-sizes.jpg`.

Ảnh cần thêm:

```text
public/images/insights/insight-plywood-quality-checklist.jpg
```

Mô tả:

- Checklist kiểm tra bề mặt.
- Đo độ dày.
- Kiểm tra độ ẩm.
- Kiểm tra kích thước.
- Đóng gói trước shipment.

Alt text:

```text
Plywood quality inspection checklist before international shipment
```

## Ảnh Còn Thiếu Theo Product Detail

Mỗi product detail page nên có ba ảnh:

```text
{product-slug}-main.jpg
{product-slug}-edge.jpg
{product-slug}-application.jpg
```

Ví dụ:

```text
public/images/products/commercial-plywood-main.jpg
public/images/products/commercial-plywood-edge.jpg
public/images/products/commercial-plywood-application.jpg
```

Nội dung cần thể hiện:

- Main: hình tổng thể sản phẩm.
- Edge: lớp lõi, cạnh tấm và độ dày.
- Application: sản phẩm trong nội thất, xây dựng, packaging hoặc flooring.

## Thống Kê Ảnh Cần Bổ Sung

### Ưu tiên cao

- 5 ảnh product còn thiếu.
- 2 ảnh factory cho `VN-PW-038` và `VN-PW-052`.
- 2 ảnh About: buyer meeting và document review.
- 1 ảnh Insights quality checklist.
- 1 ảnh Factory video container loading đang chưa được dùng.

### Ưu tiên trung bình

- Gallery đầy đủ cho 7 factory còn lại.
- Bộ ảnh Buyer Protection.
- Bộ ảnh Process.
- Ảnh application cho từng sản phẩm.
- Ảnh edge/core cho từng sản phẩm.

### Ưu tiên thấp

- Ảnh team bổ sung.
- Ảnh theo từng tỉnh/khu vực.
- Ảnh logistics theo từng thị trường India và Middle East.
- Ảnh cho các bài Insights mở rộng.

## Quy Tắc Không Dùng Sai Ảnh

- Không dùng ảnh `VN-PW-018` cho factory ID khác.
- Không dùng commercial plywood cho packing plywood, LVL hoặc MDF/HDF.
- Không dùng natural veneer cho engineered veneer nếu chưa xác nhận ảnh phù hợp.
- Không lặp ảnh insight chỉ để lấp card.
- Nếu chưa có ảnh đúng, dùng visual CSS hoặc placeholder có nhãn rõ ràng.
- Khi có ảnh thật, thay placeholder theo đúng slug hoặc Factory ID.
