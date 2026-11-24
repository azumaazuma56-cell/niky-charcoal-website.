/**
 * PT NIKY CHARCOAL INDONESIA — Official Website Engine
 * Features:
 * 1. Full Bilingual Engine (English & Bahasa Indonesia)
 * 2. Interactive Ocean Container Load & Freight Calculator
 * 3. Product Specification Modals & COA Inspector
 * 4. RFQ Form with Dynamic WhatsApp Quotation Builder
 * 5. Floating WhatsApp Support Simulator
 * 6. Responsive Mobile Navigation & Scroll Spy
 */

(function () {
    "use strict";

    // 1. BUSINESS CONFIGURATION
    const CONFIG = {
        companyName: "PT NIKY CHARCOAL INDONESIA",
        whatsappNumber: "6281234567890", // Official WhatsApp Business Number
        email: "export@nikycharcoal.com",
        defaultLanguage: "EN"
    };

    // 2. DICTIONARY / TRANSLATIONS (EN & ID)
    const TRANSLATIONS = {
        EN: {
            top_bar_status: "Direct Export Sourcing • 2026/2027 Factory Quota Open • Ports: Tanjung Perak (IDSUB) & Tanjung Priok (IDJKT)",
            nav_home: "Home",
            nav_about: "About Us",
            nav_products: "Products",
            nav_production: "Production & QC",
            nav_quality: "Certificates",
            nav_packaging: "Packaging",
            nav_docs: "Export Docs",
            nav_contact: "Contact",
            btn_rfq_nav: "Request Quotation",

            // Hero
            hero_pill: "100% NATURAL COCONUT SHELL BRIQUETTES",
            h1_line1: "Premium Indonesian",
            h1_line2: "Coconut Charcoal",
            h1_line3: "For Global Markets",
            hero_desc: "PT NIKY CHARCOAL INDONESIA delivers high-density Cube, Hexagonal, and Circle charcoal briquettes. Engineered for consistent heat (>7,400 kcal/kg), odorless burn, white ash (<2.5%), and up to 3+ hours duration. Shipped directly from Indonesia to international ports.",
            feat1_t: "Zero Chemical",
            feat1_d: "100% pure food-grade binder",
            feat2_t: "2.5 – 3.5 Hours",
            feat2_d: "Steady burning time",
            feat3_t: "Private Label",
            feat3_d: "Custom box & carton OEM",
            btn_rfq: "Request Free Quotation",
            btn_wa: "WhatsApp Inquiry",
            btn_catalog: "View Specifications",

            // Stats
            st1: "Natural Coconut Shell",
            st2: "Tons Monthly Capacity",
            st3: "Export Destination Countries",
            st4: "Tanjung Perak & Priok Ports",

            // About
            about_eyebrow: "COMPANY PROFILE & CORE IDENTITY",
            about_title: "Building Enduring Trust with Global Charcoal Buyers",
            about_subtitle: "PT NIKY CHARCOAL INDONESIA was established with a singular mission: to supply international buyers with fully verified, export-grade coconut charcoal briquettes backed by honest specifications and meticulous export logistics.",
            ab_model_t: "Transparent Business Model",
            ab_model_d: "As a premier Indonesian export trading management company, PT NIKY CHARCOAL INDONESIA partners directly with audited, dedicated charcoal briquette production facilities in East Java, Central Java, and South Sulawesi.",
            ab_model_sub: "We operate with radical transparency: rather than making unverified claims, we manage every step of the supply chain—from raw coconut shell batch selection, carbonization oversight, third-party laboratory analysis (COA), to container stuffing and export customs clearance.",
            ab_vis_t: "Our Vision",
            ab_vis_d: "To be recognized internationally as Indonesia's most reliable and transparent coconut charcoal export partner, setting the benchmark for consistency and integrity.",
            ab_mis_t: "Our Mission",
            ab_mis_d: "Deliver certified zero-chemical charcoal briquettes on schedule, provide verified laboratory results before shipment, and safeguard our buyers' brand reputation.",
            ab_map_t: "Strategic Sourcing & Loading Ports",
            ab_map_d: "Direct shipping routes from Indonesia's leading deep-water container terminals.",

            // Products
            prod_eyebrow: "EXPORT SPECIFICATIONS",
            prod_title: "Our Coconut Charcoal Briquette Catalog",
            prod_subtitle: "Crafted strictly from mature coconut shells without wood fillers or synthetic accelerants. Each batch is drop-tested and lab-certified for maximum heat output and clean combustion.",
            cube_desc: "Precision square-cut briquettes. Internationally preferred for premium Shisha and Hookah lounges due to zero odor, zero sparks, and silky white ash.",
            hex_desc: "Extruded hexagonal sticks featuring an engineered airflow center-hole. Creates optimal continuous convection, prolonged burning, and ultra-high heat for premium BBQ and Korean grill.",
            circle_desc: "Uniform round tablet / disc briquettes molded under extreme hydraulic pressure. Provides swift ignition, smooth heat distribution, and compact storage efficiency.",
            sp_size: "Standard Sizes",
            sp_burn: "Burning Time",
            sp_ash: "Ash Content",
            sp_cal: "Calorific Value",
            sp_moist: "Moisture",
            btn_view_spec: "View Full Specifications",
            btn_quote_this: "Quote This Product",
            cat_down_t: "Need Custom Technical Specifications or Tailored Dimensions?",
            cat_down_d: "We accommodate bespoke shapes (Flat, Pillow, Jumbo Cube), custom moisture tolerances, and buyer-specific packaging barcodes.",
            btn_download_spec: "Download Tech Datasheet (PDF)",

            // Production
            qc_eyebrow: "RIGOROUS MANUFACTURING STANDARDS",
            qc_title: "7-Stage Production & Quality Control",
            qc_subtitle: "Every single metric ton we ship undergoes systematic quality gates—from raw coconut shell carbonization to final pre-shipment container sealing.",
            st_1_t: "Aged Shell Harvesting",
            st_1_d: "Only mature, dense coconut shells from Sulawesi & Sumatra. Immature shells are strictly discarded to prevent volatile smoke.",
            st_2_t: "Kiln Carbonization",
            st_2_d: "Pyrolysis carbonization in closed kilns at 500°C–600°C, maximizing fixed carbon while expelling unwanted volatiles.",
            st_3_t: "Pulverizing & Starch Blend",
            st_3_d: "Milled to fine 60-80 mesh powder. Blended exclusively with 3-5% natural food-grade tapioca starch. Zero chemicals added.",
            st_4_t: "High-Pressure Hydraulic Press",
            st_4_d: "Heavy industrial stamping eliminates internal air pockets, producing high density briquettes that resist cracking.",
            st_5_t: "72-Hour Oven Drying",
            st_5_d: "Thermostatically controlled drying ovens extract moisture uniformly down to strictly below 6% total moisture.",
            st_6_t: "Laboratory Drop & Ash QC",
            st_6_d: "Triple 1-meter drop test and burning calorific verification conducted on random samples from every production batch.",
            st_7_t: "Pre-Shipment Inspection",
            st_7_d: "Inner bag heat sealing, desiccants placement, master carton weight audit, and optional third-party surveyor supervision.",
            qc_matrix_t: "Standard Quality Control Checkpoints",
            qc_chk1_t: "Drop Test (1m × 3)",
            qc_chk1_d: "100% resistance to shattering or edge crumbling.",
            qc_chk2_t: "Ignition & Spark Test",
            qc_chk2_d: "Zero explosive sparks, zero noxious odor, zero black smoke.",
            qc_chk3_t: "Ash Color Check",
            qc_chk3_d: "Pure white to light pearl-grey, minimal ash residue.",
            qc_chk4_t: "Container Moisture Barrier",
            qc_chk4_d: "Heavy-gauge inner plastic liner + silica gel packs per carton.",

            // Quality
            qa_eyebrow: "VERIFIED CERTIFICATIONS",
            qa_title: "Quality Assurance & Official Laboratory Reports",
            qa_subtitle: "We present genuine, verifiable test certificates. Buyer trust is our bedrock: we never display fabricated badges or unverified claims.",
            coa_card_title: "Certificate of Analysis (COA)",
            coa_card_sub: "Standard ASTM Laboratory Testing Profile",
            btn_inspect_coa: "🔍 Inspect Full Report",
            coa_note: "💡 Each export container receives an independent, freshly issued COA prior to vessel departure.",
            comp_title: "Compliance & Document Availability",
            comp_desc: "Transparent overview of testing documents issued with our shipments:",

            // Packaging & Calc
            pack_eyebrow: "LOGISTICS & OEM SOLUTIONS",
            pack_title: "Packaging Options & Container Load Capability",
            pack_subtitle: "From custom retail-ready private branding to heavy-duty master cartons, we prepare orders to withstand long-haul ocean transits in full compliance with carrier standards.",
            pack_types_t: "Export Packaging Specifications",
            pack_types_d: "We provide tailored packaging configurations suited for retail shelves and bulk distributors:",
            calc_t: "Container Load Estimator",
            calc_d: "Calculate estimated carton quantity, net weight, and gross container payload:",
            lbl_c_size: "Container Equipment Type",
            lbl_p_opt: "Packaging Configuration",
            lbl_pallet: "Loading Method",
            res_cartons: "Total Master Cartons",
            res_net_weight: "Estimated Net Weight",
            res_gross_weight: "Estimated Gross Weight",
            res_cbm: "Volume Utilization",
            lbl_ports: "Loading Ports",
            lbl_inco: "Supported Incoterms",
            lbl_moq: "Standard MOQ",

            // Docs
            docs_eyebrow: "INTERNATIONAL TRADE COMPLIANCE",
            docs_title: "Export Documentation Suite",
            docs_subtitle: "Clear, error-free documentation ensures rapid customs clearance at destination ports. Our export team coordinates every requisite certificate before the vessel sails.",
            trans_t: "Our Commitment to Accurate Trade Documentation:",
            trans_d: "We differentiate clearly between mandatory standard shipping documents provided automatically for each shipment, and optional destination-specific consular authentications or third-party surveys (e.g. SGS / Intertek inspection) which can be coordinated upon buyer contract terms.",

            // Contact
            contact_eyebrow: "START YOUR ORDER",
            contact_title: "Request Quotation & Inquire Today",
            contact_subtitle: "Submit your target specifications, destination port, and volume. Our export desk responds with a detailed proforma quotation within 24 business hours.",
            con_office_t: "Export Sales Desk",
            con_office_d: "Connect directly with our international export management team:",
            lbl_email: "Official Corporate Email",
            lbl_wa: "WhatsApp Business Hotline",
            lbl_address: "Head Office & Operations",
            wa_ban_t: "Need Immediate Pricing on FOB / CIF Terms?",
            btn_instant_chat: "Instant WhatsApp Chat",
            rfq_form_title: "Official Request for Quotation (RFQ)",
            rfq_form_sub: "Fill out the details below. We will calculate estimated pricing and freight:",
            f_name: "Full Name",
            f_company: "Company / Business Name",
            f_country: "Country",
            f_email: "Business Email",
            f_phone: "WhatsApp / Phone",
            f_product: "Product Variant",
            f_qty: "Estimated Order Quantity",
            f_port: "Destination Sea Port",
            f_pack_req: "Packaging & OEM Requirements",
            f_msg: "Specific Requirements or Additional Notes",
            btn_send_rfq: "Submit RFQ & Request Pricing",
            btn_send_wa: "Send to WhatsApp",
            form_notice: "🔒 Your contact details are held in strict business confidence. No spam.",

            // Footer
            foot_desc: "Professional export trading corporation of 100% natural Indonesian coconut shell charcoal briquettes. Dedicated to transparent specifications, consistent calorific heat, and punctual sea freight fulfillment worldwide.",
            foot_h_prod: "Product Variants",
            foot_h_trade: "Trade & Logistics",
            foot_h_contact: "Export Contact",
            foot_rights: "All Rights Reserved. Export Compliance & Verified Specifications.",

            // WhatsApp Widget
            wa_bubble_msg: "Hello! Welcome to PT NIKY CHARCOAL INDONESIA. Are you looking for Shisha Cube, Hexagonal, or BBQ Charcoal quotation?",
            wa_start_chat: "Start WhatsApp Chat"
        },
        ID: {
            top_bar_status: "Sourcing Ekspor Langsung • Kuota Pabrik 2026/2027 Dibuka • Pelabuhan: Tanjung Perak (IDSUB) & Tanjung Priok (IDJKT)",
            nav_home: "Beranda",
            nav_about: "Tentang Kami",
            nav_products: "Produk",
            nav_production: "Produksi & QC",
            nav_quality: "Sertifikasi",
            nav_packaging: "Kemasan",
            nav_docs: "Dokumen Ekspor",
            nav_contact: "Kontak & RFQ",
            btn_rfq_nav: "Minta Penawaran",

            // Hero
            hero_pill: "100% ARANG BRIKET TEMPURUNG KELAPA ALAMI",
            h1_line1: "Briket Arang Kelapa",
            h1_line2: "Kualitas Ekspor Premium",
            h1_line3: "Dari Indonesia ke Dunia",
            hero_desc: "PT NIKY CHARCOAL INDONESIA memasok briket arang Cube, Hexagonal, dan Circle dengan kepadatan tinggi. Dirancang khusus untuk panas stabil (>7.400 kcal/kg), bebas bau, abu putih (<2.5%), dan durasi bakar hingga 3+ jam. Dikirim langsung dari pelabuhan ekspor Indonesia.",
            feat1_t: "Bebas Bahan Kimia",
            feat1_d: "100% perekat tapioka alami food-grade",
            feat2_t: "2.5 – 3.5 Jam",
            feat2_d: "Durasi pembakaran stabil",
            feat3_t: "Private Label OEM",
            feat3_d: "Kustomisasi merek & kemasan karton",
            btn_rfq: "Minta Penawaran Harga",
            btn_wa: "Chat WhatsApp",
            btn_catalog: "Lihat Spesifikasi Lengkap",

            // Stats
            st1: "Tempurung Kelapa Murni",
            st2: "Ton Kapasitas Bulanan",
            st3: "Negara Tujuan Ekspor",
            st4: "Pelabuhan Perak & Priok",

            // About
            about_eyebrow: "PROFIL PERUSAHAAN & INTEGRITAS",
            about_title: "Membangun Kepercayaan Buyer Internasional",
            about_subtitle: "PT NIKY CHARCOAL INDONESIA didirikan dengan komitmen utama: menyediakan briket arang kelapa kualitas ekspor terverifikasi dengan data laboratorium transparan dan manajemen logistik perdagangan yang profesional.",
            ab_model_t: "Model Bisnis Terbuka & Transparan",
            ab_model_d: "Sebagai perusahaan trading ekspor profesional di Indonesia, PT NIKY CHARCOAL INDONESIA bermitra langsung dengan pabrik-pabrik produksi briket terkurasi dan tersertifikasi di Jawa Timur, Jawa Tengah, dan Sulawesi Selatan.",
            ab_model_sub: "Kami mengutamakan transparansi: kami mengawasi langsung pemilihan batok kelapa tua, karbonisasi tertutup, pengujian lab independen (COA), hingga pengawasan pemuatan kontainer dan kepabeanan ekspor.",
            ab_vis_t: "Visi Perusahaan",
            ab_vis_d: "Menjadi mitra ekspor briket arang kelapa Indonesia yang paling tepercaya dan konsisten di pasar internasional.",
            ab_mis_t: "Misi Perusahaan",
            ab_mis_d: "Menghadirkan briket murni tanpa kimia tepat waktu, menyediakan hasil uji lab terverifikasi sebelum kirim, dan menjaga reputasi merek buyer kami.",
            ab_map_t: "Sourcing & Pelabuhan Muat",
            ab_map_d: "Rute pelayaran langsung dari terminal peti kemas laut dalam utama di Indonesia.",

            // Products
            prod_eyebrow: "SPESIFIKASI TEKNIS EKSPOR",
            prod_title: "Katalog Briket Arang Kelapa",
            prod_subtitle: "Diproduksi murni dari tempurung kelapa tua berkualitas tanpa campuran kayu atau zat akselerator berbahaya. Setiap lot lolos uji jatuh (drop test) dan uji laboratorium.",
            cube_desc: "Briket potongan kubus presisi. Menjadi pilihan utama lounge Shisha & Hookah internasional berkat abu putih halus, tanpa percikan api, dan tanpa aroma kimiawi.",
            hex_desc: "Briket bentuk heksagonal dengan lubang sirkulasi udara di tengah. Menghasilkan radiasi panas tinggi dan durasi ekstra panjang untuk restoran BBQ dan panggangan komersial.",
            circle_desc: "Briket koin / bulat dipress hidrolik bertekanan tinggi. Mudah menyala, pembakaran merata, dan sangat praktis untuk pemanggangan meja maupun bakaran dupa.",
            sp_size: "Ukuran Standar",
            sp_burn: "Waktu Bakar",
            sp_ash: "Kadar Abu",
            sp_cal: "Nilai Kalori",
            sp_moist: "Kadar Air",
            btn_view_spec: "Lihat Detail Spesifikasi",
            btn_quote_this: "Minta Penawaran Varian Ini",
            cat_down_t: "Butuh Spesifikasi Khusus atau Ukuran Kustom?",
            cat_down_d: "Kami melayani pembuatan bentuk khusus (Flat, Pillow, Jumbo Cube), toleransi kadar air kustom, dan cetak barcode buyer.",
            btn_download_spec: "Unduh Lembar Spek (PDF)",

            // Production
            qc_eyebrow: "STANDAR MANUFAKTUR KETAT",
            qc_title: "7 Tahap Produksi & Kontrol Kualitas",
            qc_subtitle: "Setiap metrik ton yang kami ekspor melalui gerbang kontrol kualitas sistematis—mulai dari seleksi batok kelapa hingga penyegelan kontainer.",
            st_1_t: "Seleksi Batok Kelapa Tua",
            st_1_d: "Hanya tempurung kelapa tua berkepadatan tinggi dari Sulawesi & Sumatra. Tempurung muda dieliminasi untuk menghindari asap pekat.",
            st_2_t: "Karbonisasi Kiln Tertutup",
            st_2_d: "Proses pirolisis pada suhu 500°C–600°C untuk memaksimalkan karbon terikat dan membuang zat volatil yang tidak diinginkan.",
            st_3_t: "Penggilingan & Campuran Tapioka",
            st_3_d: "Digiling hingga kehalusan 60-80 mesh dan dicampur 3-5% tepung tapioka alami food-grade. Nol bahan kimia sintetis.",
            st_4_t: "Press Hidrolik Tekanan Tinggi",
            st_4_d: "Penekanan hidrolik berkekuatan tinggi menghilangkan rongga udara, menghasilkan briket padat yang tidak mudah retak.",
            st_5_t: "Pengeringan Oven 72 Jam",
            st_5_d: "Oven dengan pengatur suhu otomatis mengeringkan briket secara merata hingga kadar air berada di bawah 6%.",
            st_6_t: "Uji Lab & Drop Test",
            st_6_d: "Uji jatuh 3x dari ketinggian 1 meter dan pengetesan kalori pembakaran dari sampel acak setiap batch produksi.",
            st_7_t: "Inspeksi Pra-Pengapalan",
            st_7_d: "Penyegelan kantong plastik dalam, penambahan silica gel, penimbangan master karton, dan supervisi surveyor pihak ketiga jika diminta.",
            qc_matrix_t: "Titik Kritis Pemeriksaan Mutu (QC)",
            qc_chk1_t: "Uji Jatuh (1m × 3 Kali)",
            qc_chk1_d: "100% tahan benturan tanpa hancur atau sudut pecah.",
            qc_chk2_t: "Uji Pembakaran & Percikan",
            qc_chk2_d: "Bebas percikan api meletup, bebas bau menyengat, bebas jelaga hitam.",
            qc_chk3_t: "Warna Abu Putih Alami",
            qc_chk3_d: "Abu berwarna putih bersih hingga abu-abu mutiara dengan residu minimal.",
            qc_chk4_t: "Proteksi Kelembapan Kontainer",
            qc_chk4_d: "Plastik dalam PE tebal kedap udara + desiccant silica gel pada setiap karton.",

            // Quality
            qa_eyebrow: "SERTIFIKASI TERVERIFIKASI",
            qa_title: "Jaminan Mutu & Hasil Uji Laboratorium Resmi",
            qa_subtitle: "Kami hanya menampilkan hasil uji laboratorium yang nyata dan dapat dipertanggungjawabkan. Integritas adalah prinsip utama kami.",
            coa_card_title: "Certificate of Analysis (COA)",
            coa_card_sub: "Profil Pengujian Standar Laboratorium ASTM",
            btn_inspect_coa: "🔍 Lihat Salinan Laporan",
            coa_note: "💡 Setiap kontainer ekspor memperoleh COA independen terbaru sebelum kapal diberangkatkan.",
            comp_title: "Kelayakan & Ketersediaan Dokumen",
            comp_desc: "Gambaran transparan ketersediaan dokumen uji yang menyertai pengiriman kami:",

            // Packaging & Calc
            pack_eyebrow: "SOLUSI LOGISTIK & OEM",
            pack_title: "Pilihan Kemasan & Estimasi Muatan Kontainer",
            pack_subtitle: "Mulai dari kemasan ritel bermerek pribadi hingga master box karton berstandar laut, barang siap melintasi rute pengapalan jarak jauh.",
            pack_types_t: "Spesifikasi Kemasan Ekspor",
            pack_types_d: "Kami menyediakan konfigurasi pengemasan sesuai kebutuhan ritel maupun distributor grosir:",
            calc_t: "Kalkulator Muatan Kontainer",
            calc_d: "Hitung perkiraan jumlah karton, berat bersih, dan berat kotor pengapalan:",
            lbl_c_size: "Tipe Ukuran Kontainer",
            lbl_p_opt: "Pilihan Konfigurasi Kemasan",
            lbl_pallet: "Metode Pemuatan",
            res_cartons: "Total Master Karton",
            res_net_weight: "Estimasi Berat Bersih",
            res_gross_weight: "Estimasi Berat Kotor",
            res_cbm: "Pemanfaatan Volume",
            lbl_ports: "Pelabuhan Muat",
            lbl_inco: "Pilihan Incoterms",
            lbl_moq: "Minimum Pemesanan (MOQ)",

            // Docs
            docs_eyebrow: "KEPATUHAN PERDAGANGAN INTERNASIONAL",
            docs_title: "Paket Dokumen Ekspor",
            docs_subtitle: "Dokumen yang lengkap dan akurat menjamin kelancaran kepabeanan di negara tujuan. Tim ekspor kami mengoordinasikan seluruh perizinan sebelum kapal bertolak.",
            trans_t: "Komitmen Kami pada Keaslian Dokumen:",
            trans_d: "Kami membedakan secara tegas dokumen standar ekspor yang otomatis disertakan pada setiap pengiriman, dengan dokumen khusus per negara atau sertifikasi pihak ketiga (seperti SGS / Carsurin) yang dapat dikoordinasikan sesuai kesepakatan kontrak.",

            // Contact
            contact_eyebrow: "MULAI PESANAN ANDA",
            contact_title: "Minta Penawaran Harga & Hubungi Kami",
            contact_subtitle: "Kirimkan spesifikasi yang Anda butuhkan, pelabuhan tujuan, dan estimasi kuantitas. Tim ekspor kami akan membalas dengan proforma quotation resmi dalam 24 jam kerja.",
            con_office_t: "Meja Layanan Ekspor",
            con_office_d: "Hubungi langsung tim pemasaran dan ekspor resmi kami:",
            lbl_email: "Email Resmi Perusahaan",
            lbl_wa: "Hotline WhatsApp Bisnis",
            lbl_address: "Kantor & Operasional",
            wa_ban_t: "Butuh Harga Cepat untuk FOB / CIF?",
            btn_instant_chat: "Chat WhatsApp Langsung",
            rfq_form_title: "Formulir Permintaan Penawaran (RFQ)",
            rfq_form_sub: "Isi data kebutuhan di bawah ini untuk estimasi harga dan biaya angkut:",
            f_name: "Nama Lengkap",
            f_company: "Nama Perusahaan / Bisnis",
            f_country: "Negara",
            f_email: "Email Bisnis",
            f_phone: "Nomor WhatsApp / Telepon",
            f_product: "Pilihan Varian Produk",
            f_qty: "Estimasi Kuantitas Pesanan",
            f_port: "Pelabuhan Laut Tujuan",
            f_pack_req: "Kebutuhan Kemasan & OEM",
            f_msg: "Catatan Tambahan atau Spesifikasi Khusus",
            btn_send_rfq: "Kirim Permintaan Penawaran",
            btn_send_wa: "Kirim Melalui WhatsApp",
            form_notice: "🔒 Data kontak Anda terlindungi secara profesional dan rahasia.",

            // Footer
            foot_desc: "Perusahaan trading ekspor resmi briket arang tempurung kelapa 100% alami Indonesia. Mengedepankan spesifikasi transparan, panas kalori konsisten, dan kepastian pengiriman laut ke seluruh dunia.",
            foot_h_prod: "Varian Produk",
            foot_h_trade: "Logistik & Ekspor",
            foot_h_contact: "Kontak Ekspor",
            foot_rights: "Hak Cipta Dilindungi. Kepatuhan Standar Perdagangan Internasional.",

            // WhatsApp Widget
            wa_bubble_msg: "Halo! Selamat datang di PT NIKY CHARCOAL INDONESIA. Anda memerlukan penawaran briket Cube Shisha, Hexagonal, atau BBQ?",
            wa_start_chat: "Mulai Chat WhatsApp"
        }
    };

    // 3. LANGUAGE SWITCHING ENGINE
    let currentLang = localStorage.getItem("niky_lang") || CONFIG.defaultLanguage;

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem("niky_lang", lang);

        const dict = TRANSLATIONS[lang] || TRANSLATIONS.EN;
        const currentLangLabel = document.getElementById("currentLangLabel");
        if (currentLangLabel) {
            currentLangLabel.textContent = lang;
        }

        // Translate all data-i18n attributes
        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            const key = el.getAttribute("data-i18n");
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });

        // Update html lang attribute
        document.documentElement.lang = lang.toLowerCase();
    }

    // 4. CONTAINER LOAD CALCULATOR LOGIC
    function initContainerCalculator() {
        const sizeSelect = document.getElementById("calcContainerSize");
        const packSelect = document.getElementById("calcPackOption");
        const palletSelect = document.getElementById("calcPalletOption");

        const resCartons = document.getElementById("resCartons");
        const resNetWeight = document.getElementById("resNetWeight");
        const resGrossWeight = document.getElementById("resGrossWeight");
        const resCbm = document.getElementById("resCbm");

        if (!sizeSelect || !packSelect || !palletSelect) return;

        function updateCalculations() {
            const size = sizeSelect.value;       // "20ft" or "40ftHC"
            const pack = packSelect.value;       // "10kg_boxes" or "20kg_master"
            const pallet = palletSelect.value;   // "floor" or "palletized"

            let cartons = 0;
            let netTons = 0;
            let grossTons = 0;
            let cbm = 0;

            if (size === "20ft") {
                if (pack === "10kg_boxes") {
                    if (pallet === "floor") {
                        cartons = 1800;
                        netTons = 18.00;
                        grossTons = 18.90;
                        cbm = 28.5;
                    } else {
                        cartons = 1440; // 10 pallets x 144 cartons
                        netTons = 14.40;
                        grossTons = 15.35;
                        cbm = 26.0;
                    }
                } else { // 20kg master carton
                    if (pallet === "floor") {
                        cartons = 900;
                        netTons = 18.00;
                        grossTons = 18.80;
                        cbm = 28.0;
                    } else {
                        cartons = 720;
                        netTons = 14.40;
                        grossTons = 15.20;
                        cbm = 25.5;
                    }
                }
            } else { // 40ft High Cube
                if (pack === "10kg_boxes") {
                    if (pallet === "floor") {
                        cartons = 2650;
                        netTons = 26.50;
                        grossTons = 27.80;
                        cbm = 56.5;
                    } else {
                        cartons = 2160; // 20 pallets x 108 cartons
                        netTons = 21.60;
                        grossTons = 22.95;
                        cbm = 52.0;
                    }
                } else { // 20kg master carton
                    if (pallet === "floor") {
                        cartons = 1320;
                        netTons = 26.40;
                        grossTons = 27.60;
                        cbm = 55.0;
                    } else {
                        cartons = 1080;
                        netTons = 21.60;
                        grossTons = 22.80;
                        cbm = 51.5;
                    }
                }
            }

            // Format numbers nicely
            resCartons.textContent = cartons.toLocaleString() + " Cartons";
            resNetWeight.textContent = netTons.toFixed(2) + " Metric Tons";
            resGrossWeight.textContent = grossTons.toFixed(2) + " Metric Tons";
            resCbm.textContent = "~ " + cbm.toFixed(1) + " CBM";
        }

        sizeSelect.addEventListener("change", updateCalculations);
        packSelect.addEventListener("change", updateCalculations);
        palletSelect.addEventListener("change", updateCalculations);

        // Run once on load
        updateCalculations();
    }

    // 5. MODAL DIALOG CONTROLLER
    function initModals() {
        const openBtns = document.querySelectorAll(".open-spec-btn, .open-spec-link");
        const closeBtns = document.querySelectorAll("[data-close-modal]");
        const coaBtn = document.getElementById("viewCoaModalBtn");

        // Product spec buttons
        openBtns.forEach(function (btn) {
            btn.addEventListener("click", function (e) {
                e.preventDefault();
                const targetId = btn.getAttribute("data-target");
                const dialog = document.getElementById(targetId);
                if (dialog && typeof dialog.showModal === "function") {
                    dialog.showModal();
                }
            });
        });

        // COA Modal
        if (coaBtn) {
            coaBtn.addEventListener("click", function () {
                const dlgCoa = document.getElementById("dlg-coa");
                if (dlgCoa && typeof dlgCoa.showModal === "function") {
                    dlgCoa.showModal();
                }
            });
        }

        // Close buttons
        closeBtns.forEach(function (btn) {
            btn.addEventListener("click", function () {
                const dialog = btn.closest("dialog");
                if (dialog && typeof dialog.close === "function") {
                    dialog.close();
                }
            });
        });

        // Close when clicking modal backdrop
        document.querySelectorAll("dialog").forEach(function (dlg) {
            dlg.addEventListener("click", function (e) {
                const rect = dlg.getBoundingClientRect();
                const isInDialog = (
                    rect.top <= e.clientY &&
                    e.clientY <= rect.top + rect.height &&
                    rect.left <= e.clientX &&
                    e.clientX <= rect.left + rect.width
                );
                if (!isInDialog) {
                    dlg.close();
                }
            });
        });

        // Pre-fill RFQ button handlers
        document.querySelectorAll(".rfq-prefill-btn").forEach(function (btn) {
            btn.addEventListener("click", function () {
                const productName = btn.getAttribute("data-product-name");
                const productSelect = document.getElementById("rfqProduct");
                const contactSection = document.getElementById("contact");

                // Close active modal if any
                const dialog = btn.closest("dialog");
                if (dialog && typeof dialog.close === "function") {
                    dialog.close();
                }

                // Preselect in form
                if (productSelect && productName) {
                    for (let i = 0; i < productSelect.options.length; i++) {
                        if (productSelect.options[i].value.includes(productName.split(" ")[0])) {
                            productSelect.selectedIndex = i;
                            break;
                        }
                    }
                }

                // Smooth scroll to contact
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                }

                showToast(`Selected "${productName}" for quotation.`, "success");
            });
        });
    }

    // 6. RFQ FORM & WHATSAPP GENERATOR
    function initRfqForm() {
        const form = document.getElementById("rfqForm");
        const sendViaWaBtn = document.getElementById("sendViaWaBtn");

        if (!form) return;

        function getFormData() {
            return {
                name: (document.getElementById("rfqName") || {}).value || "",
                company: (document.getElementById("rfqCompany") || {}).value || "",
                country: (document.getElementById("rfqCountry") || {}).value || "",
                email: (document.getElementById("rfqEmail") || {}).value || "",
                phone: (document.getElementById("rfqPhone") || {}).value || "",
                product: (document.getElementById("rfqProduct") || {}).value || "",
                quantity: (document.getElementById("rfqQuantity") || {}).value || "",
                destination: (document.getElementById("rfqDestination") || {}).value || "",
                packaging: (document.getElementById("rfqPackaging") || {}).value || "",
                message: (document.getElementById("rfqMessage") || {}).value || ""
            };
        }

        // WhatsApp Direct Link Generator
        if (sendViaWaBtn) {
            sendViaWaBtn.addEventListener("click", function () {
                const data = getFormData();

                let text = `*OFFICIAL RFQ INQUIRY — PT NIKY CHARCOAL INDONESIA*\n\n`;
                text += `👤 *Name:* ${data.name || "(Not provided)"}\n`;
                text += `🏢 *Company:* ${data.company || "(Not provided)"}\n`;
                text += `🌍 *Country:* ${data.country || "(Not provided)"}\n`;
                text += `📧 *Email:* ${data.email || "(Not provided)"}\n`;
                text += `📱 *Phone:* ${data.phone || "(Not provided)"}\n\n`;
                text += `📦 *Product of Interest:* ${data.product}\n`;
                text += `⚖️ *Estimated Quantity:* ${data.quantity}\n`;
                text += `🚢 *Destination Port:* ${data.destination || "(To be quoted)"}\n`;
                text += `📦 *Packaging:* ${data.packaging}\n`;
                if (data.message) {
                    text += `📝 *Notes:* ${data.message}\n`;
                }
                text += `\nPlease provide FOB/CIF quotation and current factory lead times. Thank you.`;

                const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
                window.open(url, "_blank");
                showToast("Opening WhatsApp with your quotation details...", "success");
            });
        }

        // Standard Form Submission
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // Validate mandatory fields
            const data = getFormData();
            if (!data.name.trim() || !data.email.trim() || !data.country.trim() || !data.phone.trim()) {
                showToast("Please fill in all required fields marked with *", "error");
                return;
            }

            // Create mailto fallback link
            const subject = encodeURIComponent(`[RFQ] Charcoal Briquettes Inquiry - ${data.company || data.name} (${data.country})`);
            const body = encodeURIComponent(
                `Dear PT NIKY CHARCOAL INDONESIA Export Desk,\n\n` +
                `I would like to officially request a quotation with the following requirements:\n\n` +
                `Name: ${data.name}\n` +
                `Company: ${data.company}\n` +
                `Country: ${data.country}\n` +
                `Phone/WhatsApp: ${data.phone}\n` +
                `Email: ${data.email}\n` +
                `Product Variant: ${data.product}\n` +
                `Estimated Volume: ${data.quantity}\n` +
                `Destination Port: ${data.destination}\n` +
                `Packaging Preference: ${data.packaging}\n` +
                `Additional Requirements: ${data.message}\n\n` +
                `Best regards,\n${data.name}`
            );

            // Trigger mail client
            window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;

            showToast("Thank you! Your quotation request has been prepared for dispatch.", "success");
            form.reset();
        });
    }

    // 7. TOAST NOTIFICATION UTILITY
    function showToast(message, type) {
        const container = document.getElementById("toastContainer");
        if (!container) return;

        const toast = document.createElement("div");
        toast.className = `toast ${type === "success" ? "success" : ""}`;

        const icon = type === "success" ? "✅" : "⚠️";
        toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;

        container.appendChild(toast);

        setTimeout(function () {
            toast.style.opacity = "0";
            toast.style.transform = "translateX(-20px)";
            setTimeout(function () {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 4000);
    }

    // 8. FLOATING WHATSAPP CHAT TOGGLE
    function initWhatsAppWidget() {
        const trigger = document.getElementById("waFloatBtn");
        const popup = document.getElementById("waPopup");
        const closeBtn = document.getElementById("closeWaPopup");

        if (!trigger || !popup) return;

        trigger.addEventListener("click", function () {
            popup.classList.toggle("active");
        });

        if (closeBtn) {
            closeBtn.addEventListener("click", function () {
                popup.classList.remove("active");
            });
        }
    }

    // 9. MOBILE NAVIGATION & SCROLL SPY
    function initNavigation() {
        const burger = document.getElementById("burgerToggle");
        const nav = document.getElementById("navMenu");
        const navLinks = document.querySelectorAll(".nav-link");

        if (burger && nav) {
            burger.addEventListener("click", function () {
                const isOpen = nav.classList.toggle("active");
                burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
            });

            // Close mobile menu when clicking a link
            navLinks.forEach(function (link) {
                link.addEventListener("click", function () {
                    nav.classList.remove("active");
                    burger.setAttribute("aria-expanded", "false");
                });
            });
        }

        // Scroll Spy: Highlight active menu item as user scrolls
        const sections = document.querySelectorAll("section[id]");

        window.addEventListener("scroll", function () {
            const scrollPos = window.scrollY + 120;

            sections.forEach(function (section) {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                const id = section.getAttribute("id");

                if (scrollPos >= top && scrollPos < top + height) {
                    navLinks.forEach(function (link) {
                        link.classList.remove("active");
                        if (link.getAttribute("href") === `#${id}`) {
                            link.classList.add("active");
                        }
                    });
                }
            });
        });
    }

    // 10. TECH DATASHEET DOWNLOAD SIMULATOR
    function initDownloadButton() {
        const downloadBtn = document.getElementById("downloadSpecBtn");
        if (downloadBtn) {
            downloadBtn.addEventListener("click", function () {
                showToast("Opening PT Niky Charcoal Full Technical Datasheet...", "success");
                // Open modal with specifications
                const dlg = document.getElementById("dlg-cube");
                if (dlg && typeof dlg.showModal === "function") {
                    dlg.showModal();
                }
            });
        }
    }

    // 11. INITIALIZATION ON DOM CONTENT LOADED
    document.addEventListener("DOMContentLoaded", function () {
        // Set dynamic copyright year
        const yearEl = document.getElementById("currentYear");
        if (yearEl) {
            yearEl.textContent = new Date().getFullYear();
        }

        // Language toggle button
        const langToggleBtn = document.getElementById("langToggle");
        if (langToggleBtn) {
            langToggleBtn.addEventListener("click", function () {
                const nextLang = currentLang === "EN" ? "ID" : "EN";
                applyLanguage(nextLang);
                showToast(nextLang === "EN" ? "Switched language to English." : "Bahasa diubah ke Bahasa Indonesia.", "success");
            });
        }

        // Apply saved or default language
        applyLanguage(currentLang);

        // Initialize features
        initContainerCalculator();
        initModals();
        initRfqForm();
        initWhatsAppWidget();
        initNavigation();
        initDownloadButton();
    });

})();
