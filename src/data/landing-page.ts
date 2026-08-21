export const company = {
  name: "MISO JAPAN",
  legalName: "Công ty TNHH Liên doanh MISO JAPAN",
  descriptor: "Vietnam Plywood Sourcing & Buyer Risk Elimination",
  email: "[official email to be confirmed]",
  whatsapp: "[official WhatsApp to be confirmed]",
  location: "[registered address to be confirmed]",
};

export const navigation = [
  { label: "Products", href: "/products" },
  { label: "Factory Network", href: "/manufacturers" },
  { label: "Sourcing Services", href: "/sourcing" },
  { label: "How It Works", href: "/process" },
  { label: "Factory Videos", href: "/factory-videos" },
  { label: "Insights", href: "/insights" },
  { label: "About MISO JAPAN", href: "/about" },
];

export const heroContent = {
  eyebrow: "Vietnam Plywood Sourcing & Buyer Risk Elimination",
  title: "Source Vietnam plywood with controlled quality and one accountable partner.",
  titleLines: ["Source Vietnam plywood", "with controlled quality", "and one accountable partner."],
  description:
    "MISO JAPAN clarifies your requirements, selects the right Vietnamese manufacturers, controls quality at every step and arranges safe shipment through our 12 control gates.",
  primaryAction: "Submit Your RFQ",
  secondaryAction: "How It Works",
  searchAction: "Find Solutions",
  popularSearches: ["Commercial Plywood", "Film Faced Plywood", "Packing Plywood", "Veneer", "LVL"],
  searchPlaceholder: "What product are you looking for? (e.g. Commercial plywood)",
};

export const heroStats = [
  { value: "230+", label: "Vietnam factory profiles", detail: "Wide & diversified network" },
  { value: "12", label: "Control gates in our system", detail: "Reduce risks at every step" },
  { value: "01", label: "Accountable partner", detail: "One team, one responsibility" },
  { value: "02", label: "Priority export regions", detail: "India & Middle East" },
];

export const buyerConcerns = [
  "Is the factory real and capable?",
  "Can the supplier maintain consistent quality?",
  "Will production stay on schedule?",
  "Are documents and shipment handled correctly?",
  "Who protects our interests when issues arise?",
];

export const products = [
  {
    index: "01",
    name: "Plywood",
    detail: "Commercial, film faced and decorative panels",
    description: "Reliable panels for furniture, construction and interior applications.",
    className: "product-plywood",
  },
  {
    index: "02",
    name: "Veneer",
    detail: "Natural and engineered surfaces",
    description: "Carefully selected wood surfaces with consistent colour, grain and finish.",
    className: "product-veneer",
  },
  {
    index: "03",
    name: "Wood products",
    detail: "Custom specifications and OEM supply",
    description: "A flexible manufacturing network for your technical and volume requirements.",
    className: "product-custom",
  },
];

export const protectionLayers = [
  { number: "01", title: "Verify the factory", description: "We check legal records, production capability, equipment and export experience before cooperation." },
  { number: "02", title: "Select the right supplier", description: "We match your product, standards, quantity and target market with the right manufacturing partner." },
  { number: "03", title: "Negotiate transparently", description: "Clear specifications, pricing, lead times and delivery terms from the start." },
  { number: "04", title: "Supervise production", description: "Progress is followed from raw materials through to finished goods and packing." },
  { number: "05", title: "Control quality", description: "Inspection is aligned with your approved sample and required quality standards." },
  { number: "06", title: "Support export", description: "Documents, container loading, logistics and shipment coordination are handled with care." },
  { number: "07", title: "Build long-term supply", description: "We stay accountable after delivery and help make every next order easier." },
];

export const networkStats = [
  { value: "230+", label: "factory profiles", detail: "Wide & diversified network" },
  { value: "01", label: "accountable partner", detail: "One team, one responsibility" },
  { value: "05", label: "buyer-facing phases", detail: "From inquiry to shipment" },
  { value: "12", label: "control gates", detail: "Reduce risks at every step" },
  { value: "02", label: "priority export regions", detail: "India & Middle East" },
];

export const sourcingSteps = [
  { number: "01", title: "Tell us what you need", description: "Share your product, specifications, quantity and destination." },
  { number: "02", title: "Receive a matched proposal", description: "We shortlist suitable factories and prepare samples or quotations." },
  { number: "03", title: "Approve and produce", description: "Your chosen supplier starts production with our team monitoring progress." },
  { number: "04", title: "Inspect and ship", description: "Quality, documents and logistics are coordinated through delivery." },
];

export const contactContent = {
  eyebrow: "Start your sourcing conversation",
  title: "Tell us what you need to source.",
  description: "Our team will respond with suitable product options and a clear next step within one business day.",
};

export type Locale = "en" | "vi";

const vietnameseContent = {
  navigation: [
    { label: "Sản phẩm", href: "/vi/products" },
    { label: "Nhà máy", href: "/vi/manufacturers" },
    { label: "Dịch vụ sourcing", href: "/vi/sourcing" },
    { label: "Quy trình", href: "/vi/process" },
    { label: "Video nhà máy", href: "/vi/factory-videos" },
    { label: "Kiến thức", href: "/vi/insights" },
    { label: "Về chúng tôi", href: "/vi/about" },
  ],
  heroContent: {
    eyebrow: "Trung tâm sourcing gỗ uy tín từ Việt Nam",
    title: "Mua plywood từ Việt Nam với chất lượng được kiểm soát và một đầu mối chịu trách nhiệm.",
    titleLines: ["Mua plywood từ Việt Nam", "với chất lượng được kiểm soát", "và một đầu mối chịu trách nhiệm."],
    description: "MISO JAPAN phân tích RFQ, lựa chọn năng lực phù hợp và kiểm soát các bước quan trọng trong đơn hàng.",
    primaryAction: "Gửi RFQ",
    secondaryAction: "Cách chúng tôi làm việc",
    searchAction: "Tìm giải pháp",
    popularSearches: ["Plywood thương mại", "Plywood phủ phim", "Plywood đóng gói", "Veneer", "LVL"],
    searchPlaceholder: "Bạn đang tìm sản phẩm gì? (ví dụ: Commercial plywood)",
  },
  buyerConcerns: [
    "Nhà máy có thực sự tồn tại và đủ năng lực không?",
    "Nhà cung cấp có duy trì chất lượng ổn định không?",
    "Tiến độ sản xuất có được đảm bảo không?",
    "Chứng từ và lô hàng có được xử lý đúng không?",
    "Ai bảo vệ quyền lợi khi phát sinh vấn đề?",
  ],
  products: [
    { index: "01", name: "Plywood", detail: "Plywood thương mại, phủ phim và trang trí", description: "Tấm plywood đáng tin cậy cho nội thất, xây dựng và các ứng dụng trang trí.", className: "product-plywood" },
    { index: "02", name: "Veneer", detail: "Veneer tự nhiên và veneer kỹ thuật", description: "Bề mặt gỗ được tuyển chọn với màu sắc, vân gỗ và độ hoàn thiện ổn định.", className: "product-veneer" },
    { index: "03", name: "Sản phẩm gỗ", detail: "Sản xuất theo quy cách và OEM", description: "Mạng lưới sản xuất linh hoạt cho yêu cầu kỹ thuật và sản lượng của bạn.", className: "product-custom" },
  ],
  protectionLayers: [
    { number: "01", title: "Xác minh nhà máy", description: "Kiểm tra pháp lý, năng lực sản xuất, máy móc và kinh nghiệm xuất khẩu trước khi hợp tác." },
    { number: "02", title: "Chọn đúng nhà cung cấp", description: "Kết nối yêu cầu sản phẩm, tiêu chuẩn, số lượng và thị trường với nhà máy phù hợp." },
    { number: "03", title: "Đàm phán minh bạch", description: "Làm rõ thông số, giá, thời gian sản xuất và điều kiện giao hàng ngay từ đầu." },
    { number: "04", title: "Giám sát sản xuất", description: "Theo dõi tiến độ từ nguyên liệu đầu vào đến thành phẩm và đóng gói." },
    { number: "05", title: "Kiểm soát chất lượng", description: "Kiểm tra theo mẫu đã duyệt và tiêu chuẩn chất lượng buyer yêu cầu." },
    { number: "06", title: "Hỗ trợ xuất khẩu", description: "Hỗ trợ chứng từ, đóng container, logistics và điều phối lô hàng." },
    { number: "07", title: "Đồng hành lâu dài", description: "Tiếp tục chịu trách nhiệm sau giao hàng để mỗi đơn tiếp theo dễ dàng hơn." },
  ],
  networkStats: [
    { value: "230+", label: "hồ sơ nhà máy", detail: "Mạng lưới đa dạng" },
    { value: "01", label: "đầu mối chịu trách nhiệm", detail: "Một đội ngũ, một trách nhiệm" },
    { value: "05", label: "giai đoạn dành cho buyer", detail: "Từ yêu cầu đến xuất hàng" },
    { value: "12", label: "control gate", detail: "Giảm rủi ro từng bước" },
    { value: "02", label: "khu vực xuất khẩu", detail: "Ấn Độ & Trung Đông" },
  ],
  sourcingSteps: [
    { number: "01", title: "Gửi nhu cầu", description: "Chia sẻ sản phẩm, quy cách, số lượng và điểm đến của bạn." },
    { number: "02", title: "Nhận đề xuất phù hợp", description: "Chúng tôi chọn nhà máy và chuẩn bị mẫu hoặc báo giá." },
    { number: "03", title: "Duyệt và sản xuất", description: "Nhà máy bắt đầu sản xuất với đội ngũ của chúng tôi theo dõi tiến độ." },
    { number: "04", title: "Kiểm tra và xuất hàng", description: "Chất lượng, chứng từ và logistics được phối hợp đến khi giao hàng." },
  ],
  contactContent: {
    eyebrow: "Bắt đầu trao đổi sourcing",
    title: "Hãy cho chúng tôi biết bạn đang cần gì.",
    description: "Đội ngũ sẽ phản hồi với các lựa chọn sản phẩm phù hợp và bước tiếp theo rõ ràng trong vòng một ngày làm việc.",
  },
};

const englishContent = { navigation, heroContent, buyerConcerns, products, protectionLayers, networkStats, sourcingSteps, contactContent };

export function getLandingContent(locale: Locale) {
  return locale === "vi" ? vietnameseContent : englishContent;
}

export const aboutPageContent = {
  en: {
    eyebrow: "About MISO JAPAN",
    title: "We make Vietnam's wood supply easier to trust.",
    intro: "MISO JAPAN is an international trade promotion and sourcing partner helping buyers reduce risk when purchasing plywood, veneer and wood-based products from Vietnam.",
    missionTitle: "A better way to buy from Vietnam.",
    missionText: "International sourcing should not feel like a leap of faith. We bring structure, local knowledge and accountability to every stage, so buyers can make decisions with clearer information and fewer surprises.",
    networkTitle: "One partner behind your supply chain.",
    networkText: "We work across a qualified manufacturing network while keeping one accountable MISO JAPAN team between the buyer and the supply chain.",
    valuesEyebrow: "What we stand for",
    values: [
      { title: "Buyer-first thinking", text: "We start with your requirements, not with a factory's available stock." },
      { title: "Practical transparency", text: "Clear specifications, realistic timelines and direct communication at every step." },
      { title: "Long-term value", text: "The goal is not one shipment. It is a supply relationship that gets stronger over time." },
    ],
    ctaTitle: "Looking for a reliable wood sourcing partner?",
    ctaText: "Tell us what you need and let our team match you with the right supply options.",
    cta: "Start a conversation",
  },
  vi: {
    eyebrow: "Về MISO JAPAN",
    title: "Giúp nguồn cung gỗ Việt Nam trở nên đáng tin cậy hơn.",
    intro: "MISO JAPAN là đơn vị xúc tiến thương mại và sourcing quốc tế, giúp buyer giảm rủi ro khi mua plywood, veneer và sản phẩm gỗ từ Việt Nam.",
    missionTitle: "Một cách tốt hơn để mua hàng từ Việt Nam.",
    missionText: "Tìm nguồn cung quốc tế không nên là một quyết định đầy rủi ro. Chúng tôi mang đến quy trình rõ ràng, hiểu biết địa phương và trách nhiệm xuyên suốt để buyer ra quyết định với nhiều thông tin hơn và ít bất ngờ hơn.",
    networkTitle: "Một đối tác đứng sau chuỗi cung ứng của bạn.",
    networkText: "Chúng tôi làm việc với mạng lưới nhà máy được qualification và duy trì một đội ngũ MISO JAPAN chịu trách nhiệm xuyên suốt chuỗi cung ứng.",
    valuesEyebrow: "Giá trị chúng tôi theo đuổi",
    values: [
      { title: "Đặt buyer làm trung tâm", text: "Chúng tôi bắt đầu từ yêu cầu của buyer, không bắt đầu từ hàng có sẵn của nhà máy." },
      { title: "Minh bạch thực tế", text: "Thông số, tiến độ và trao đổi được làm rõ ở mọi bước." },
      { title: "Giá trị dài hạn", text: "Mục tiêu không chỉ là một lô hàng, mà là một quan hệ cung ứng bền vững." },
    ],
    ctaTitle: "Bạn đang tìm đối tác sourcing gỗ đáng tin cậy?",
    ctaText: "Hãy chia sẻ nhu cầu để đội ngũ tìm ra phương án cung ứng phù hợp.",
    cta: "Bắt đầu trao đổi",
  },
};

export const detailPageContent = {
  en: {
    products: { eyebrow: "Product categories", title: "Wood products selected for serious buyers.", description: "From commercial plywood to custom wood products, we help you find the right specification and the right factory for your market." },
    protection: { eyebrow: "Buyer protection", title: "A safer way to source from Vietnam.", description: "Seven practical layers reduce uncertainty and keep your order moving from factory verification to final shipment." },
    network: { eyebrow: "Our manufacturing network", title: "A qualified network. One accountable partner.", description: "Access suitable Vietnamese manufacturing capabilities without managing every factory relationship by yourself." },
    process: { eyebrow: "Our process", title: "A clear path from inquiry to shipment.", description: "We turn your product brief into a matched supplier proposal, controlled production and a coordinated export process." },
  },
  vi: {
    products: { eyebrow: "Danh mục sản phẩm", title: "Sản phẩm gỗ được chọn cho buyer chuyên nghiệp.", description: "Từ plywood thương mại đến sản phẩm gỗ theo yêu cầu, chúng tôi giúp bạn tìm đúng quy cách và đúng nhà máy cho thị trường của mình." },
    protection: { eyebrow: "Bảo vệ Buyer", title: "Một cách an tâm hơn để sourcing từ Việt Nam.", description: "7 lớp bảo vệ thực tế giúp giảm rủi ro và giữ đơn hàng đi đúng hướng từ xác minh nhà máy đến khi xuất hàng." },
    network: { eyebrow: "Mạng lưới sản xuất", title: "Mạng lưới được qualification. Một đầu mối chịu trách nhiệm.", description: "Tiếp cận năng lực sản xuất phù hợp mà không phải tự mình quản lý từng mối quan hệ nhà máy." },
    process: { eyebrow: "Quy trình của chúng tôi", title: "Lộ trình rõ ràng từ yêu cầu đến xuất hàng.", description: "Chúng tôi biến yêu cầu sản phẩm thành đề xuất nhà cung cấp phù hợp, sản xuất được kiểm soát và quy trình xuất khẩu đồng bộ." },
  },
};

export const productCatalog = [
  { slug: "commercial-plywood", name: "Commercial Plywood", viName: "Plywood thương mại", category: "Plywood", description: "Reliable plywood for furniture, construction and interior applications.", specs: "3–25mm · Eucalyptus, Acacia · MR / E1", className: "product-plywood" },
  { slug: "film-faced-plywood", name: "Film Faced Plywood", viName: "Plywood phủ phim", category: "Plywood", description: "Durable panels for concrete formwork and demanding construction projects.", specs: "12–21mm · Phenolic film · WBP glue", className: "product-custom" },
  { slug: "packing-plywood", name: "Packing Plywood", viName: "Plywood đóng gói", category: "Plywood", description: "Cost-effective panels for packaging, pallets and industrial protection.", specs: "2.7–18mm · Poplar, mixed hardwood · MR", className: "product-veneer" },
  { slug: "natural-veneer", name: "Natural Veneer", viName: "Veneer tự nhiên", category: "Veneer", description: "Selected wood surfaces with natural grain, colour and character.", specs: "0.2–3mm · Acacia, Rubberwood, Eucalyptus", className: "product-veneer" },
  { slug: "engineered-veneer", name: "Engineered Veneer", viName: "Veneer kỹ thuật", category: "Veneer", description: "Consistent decorative surfaces for scalable furniture production.", specs: "0.2–1.2mm · Custom patterns and finish", className: "product-plywood" },
  { slug: "lvl", name: "LVL", viName: "LVL", category: "Wood Panels", description: "Structural laminated veneer lumber for packaging and construction.", specs: "Custom size · Eucalyptus, Poplar · OEM", className: "product-custom" },
  { slug: "mdf-hdf", name: "MDF / HDF", viName: "MDF / HDF", category: "Wood Panels", description: "Stable engineered panels for furniture and interior components.", specs: "Custom thickness · E0 / E1 · Melamine", className: "product-plywood" },
  { slug: "finger-joint-board", name: "Finger Joint Board", viName: "Ván ghép thanh", category: "Wood Panels", description: "Custom-sized boards for furniture, doors and interior products.", specs: "Rubberwood, Acacia · Custom edge and finish", className: "product-veneer" },
];

export type Factory = {
  id: string;
  location: string;
  region: "North" | "Central" | "South";
  products: string[];
  materials: string[];
  thicknessRange: string;
  monthlyCapacity: string;
  exportMarkets: string[];
  certifications: string[];
  oem: boolean;
  verified: boolean;
  years: number;
  employees: string;
  score: number;
};

export const factories: Factory[] = [
  { id: "VN-PW-018", location: "Bac Ninh, Vietnam", region: "North", products: ["Commercial Plywood", "Packing Plywood", "Veneer"], materials: ["Acacia", "Eucalyptus"], thicknessRange: "3–25mm", monthlyCapacity: "180 containers", exportMarkets: ["India", "Middle East", "Korea"], certifications: ["E1", "CARB P2"], oem: true, verified: true, years: 14, employees: "220+", score: 4.8 },
  { id: "VN-PW-038", location: "Bac Giang, Vietnam", region: "North", products: ["Commercial Plywood", "Film Faced Plywood", "LVL"], materials: ["Eucalyptus", "Poplar"], thicknessRange: "5–25mm", monthlyCapacity: "240 containers", exportMarkets: ["India", "Middle East", "USA"], certifications: ["E0", "E1", "FSC"], oem: true, verified: true, years: 12, employees: "150+", score: 4.9 },
  { id: "VN-PW-052", location: "Thai Nguyen, Vietnam", region: "North", products: ["Packing Plywood", "MDF / HDF"], materials: ["Mixed Hardwood", "Eucalyptus"], thicknessRange: "2.7–18mm", monthlyCapacity: "120 containers", exportMarkets: ["India", "Japan"], certifications: ["E1"], oem: false, verified: true, years: 9, employees: "110+", score: 4.5 },
  { id: "VN-PW-071", location: "Thanh Hoa, Vietnam", region: "Central", products: ["Commercial Plywood", "Natural Veneer"], materials: ["Acacia", "Rubberwood"], thicknessRange: "3–21mm", monthlyCapacity: "160 containers", exportMarkets: ["Middle East", "Korea", "Japan"], certifications: ["E1", "FSC"], oem: true, verified: true, years: 17, employees: "260+", score: 4.7 },
  { id: "VN-PW-107", location: "Binh Dinh, Vietnam", region: "Central", products: ["Film Faced Plywood", "Commercial Plywood", "LVL"], materials: ["Eucalyptus", "Acacia"], thicknessRange: "9–30mm", monthlyCapacity: "210 containers", exportMarkets: ["India", "Middle East", "Europe"], certifications: ["WBP", "CARB P2"], oem: true, verified: true, years: 11, employees: "190+", score: 4.6 },
  { id: "VN-PW-126", location: "Nghe An, Vietnam", region: "Central", products: ["Natural Veneer", "Engineered Veneer", "Finger Joint Board"], materials: ["Acacia", "Rubberwood"], thicknessRange: "0.2–3mm", monthlyCapacity: "90 containers", exportMarkets: ["India", "Korea", "Japan"], certifications: ["FSC", "E1"], oem: true, verified: true, years: 8, employees: "95+", score: 4.4 },
  { id: "VN-PW-154", location: "Dong Nai, Vietnam", region: "South", products: ["Commercial Plywood", "MDF / HDF", "Furniture Plywood"], materials: ["Rubberwood", "Eucalyptus"], thicknessRange: "3–25mm", monthlyCapacity: "200 containers", exportMarkets: ["Middle East", "USA", "Europe"], certifications: ["E0", "E1", "FSC"], oem: true, verified: true, years: 19, employees: "320+", score: 4.9 },
  { id: "VN-PW-201", location: "Binh Duong, Vietnam", region: "South", products: ["Fancy Plywood", "Natural Veneer", "MDF / HDF"], materials: ["Rubberwood", "Acacia"], thicknessRange: "0.5–25mm", monthlyCapacity: "140 containers", exportMarkets: ["India", "Middle East", "Korea"], certifications: ["E1", "CARB P2"], oem: true, verified: true, years: 15, employees: "180+", score: 4.7 },
];

export const factoryFilterOptions = {
  products: ["Commercial Plywood", "Film Faced Plywood", "Packing Plywood", "Natural Veneer", "MDF / HDF", "LVL"],
  materials: ["Acacia", "Eucalyptus", "Rubberwood", "Poplar", "Mixed Hardwood"],
  regions: ["North", "Central", "South"],
  markets: ["India", "Middle East", "Korea", "Japan", "USA", "Europe"],
};
