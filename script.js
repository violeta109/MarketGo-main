/* =========================================================
       MARKETGO - TODO EN UN SOLO INDEX.HTML
       Los datos se guardan en localStorage para que los botones
       sigan funcionando incluso al recargar la página.
       ========================================================= */

const CATS = [
  {
    id: "C001",
    name: "Frutas y verduras",
    icon: "🥦",
    desc: "Frescos, vegetales y productos del día",
  },
  {
    id: "C002",
    name: "Abarrotes",
    icon: "🛒",
    desc: "Arroz, aceite, conservas y despensa",
  },
  {
    id: "C003",
    name: "Lácteos",
    icon: "🥛",
    desc: "Leches, yogures, quesos y derivados",
  },
  {
    id: "C004",
    name: "Bebidas",
    icon: "🥤",
    desc: "Agua, gaseosas, jugos y energizantes",
  },
  {
    id: "C005",
    name: "Limpieza",
    icon: "🧹",
    desc: "Limpieza del hogar y lavandería",
  },
  {
    id: "C006",
    name: "Snacks y golosinas",
    icon: "🍫",
    desc: "Galletas, chocolates y piqueos",
  },
  {
    id: "C007",
    name: "Cuidado personal",
    icon: "🧴",
    desc: "Higiene, cabello y cuidado diario",
  },
  {
    id: "C008",
    name: "Panadería",
    icon: "🍞",
    desc: "Pan fresco y productos horneados",
  },
  { id: "C009", name: "Congelados", icon: "❄️", desc: "Alimentos congelados" },
  {
    id: "C010",
    name: "Mascotas",
    icon: "🐶",
    desc: "Alimentos y accesorios para mascotas",
  },
  {
    id: "C011",
    name: "Despensa seca",
    icon: "🥫",
    desc: "Menestras, cereales y condimentos",
  },
  {
    id: "C012",
    name: "Hogar",
    icon: "🏠",
    desc: "Utensilios y artículos para casa",
  },
];
const SUPPLIERS = [
  {
    ruc: "60100056931",
    name: "Danper Trujillo S.A.C.",
    phone: "044-000001",
    email: "ventas@danper.pe",
    address: "Trujillo",
    contact: "Ventas",
    days: 3,
    payment: "Crédito 30 días",
    category: "Frutas y verduras",
    rating: "Bueno",
    state: "Activo",
  },
  {
    ruc: "81192321442",
    name: "Consorcio de Productores de Fruta (CPF)",
    phone: "01-000002",
    email: "ventas@cpf.pe",
    address: "Lima",
    contact: "Ventas",
    days: 2,
    payment: "Contado",
    category: "Frutas y verduras",
    rating: "Bueno",
    state: "Activo",
  },
  {
    ruc: "10102356713",
    name: "Tu Chacrita Frutas y Verduras Frescas E.I.R.L.",
    phone: "999000003",
    email: "contacto@tuchacrita.pe",
    address: "Lima",
    contact: "Comercial",
    days: 1,
    payment: "Contado",
    category: "Frutas y verduras",
    rating: "Bueno",
    state: "Activo",
  },
  {
    ruc: "40142840004",
    name: "Distribuidora Fruver Fresh E.I.R.L.",
    phone: "999000004",
    email: "ventas@fruverfresh.pe",
    address: "Lima",
    contact: "Ventas",
    days: 2,
    payment: "Crédito 15 días",
    category: "Frutas y verduras",
    rating: "Regular",
    state: "Activo",
  },
  {
    ruc: "50198830005",
    name: "Berfrut S.A.C.",
    phone: "999000005",
    email: "ventas@berfrut.pe",
    address: "Ica",
    contact: "Ventas",
    days: 3,
    payment: "Crédito 30 días",
    category: "Frutas y verduras",
    rating: "Bueno",
    state: "Activo",
  },
  {
    ruc: "60105283416",
    name: "Tambos Perú S.A.C. (TAMPESAC)",
    phone: "999000006",
    email: "ventas@tambos.pe",
    address: "Lima",
    contact: "Comercial",
    days: 2,
    payment: "Crédito 30 días",
    category: "Abarrotes",
    rating: "Bueno",
    state: "Activo",
  },
  {
    ruc: "50100934667",
    name: "Proveedores de Abarrotes Santa Ana S.R.L.",
    phone: "999000007",
    email: "ventas@santaana.pe",
    address: "Lima",
    contact: "Ventas",
    days: 3,
    payment: "Crédito 15 días",
    category: "Abarrotes",
    rating: "Bueno",
    state: "Activo",
  },
  {
    ruc: "90100000008",
    name: "Comercializadora de Abarrotes San Sebastián S.A.C.",
    phone: "999000008",
    email: "ventas@sansebastian.pe",
    address: "Lima",
    contact: "Ventas",
    days: 4,
    payment: "Contado",
    category: "Abarrotes",
    rating: "Regular",
    state: "Activo",
  },
  {
    ruc: "10137894560",
    name: "Avendaño Trading Company SAC (Avendacom)",
    phone: "999000009",
    email: "ventas@avendacom.pe",
    address: "Lima",
    contact: "Comercial",
    days: 2,
    payment: "Crédito 30 días",
    category: "Abarrotes",
    rating: "Bueno",
    state: "Activo",
  },
  {
    ruc: "39100034010",
    name: "Leche Gloria S.A. (Grupo Gloria)",
    phone: "01-000010",
    email: "ventas@gloria.com.pe",
    address: "Lima",
    contact: "Ventas",
    days: 2,
    payment: "Crédito 30 días",
    category: "Lácteos",
    rating: "Bueno",
    state: "Activo",
  },
  {
    ruc: "47100000011",
    name: "Laive S.A.",
    phone: "01-000011",
    email: "ventas@laive.pe",
    address: "Lima",
    contact: "Ventas",
    days: 2,
    payment: "Crédito 30 días",
    category: "Lácteos",
    rating: "Bueno",
    state: "Activo",
  },
  {
    ruc: "70773389512",
    name: "Nestlé Perú",
    phone: "01-000012",
    email: "ventas@nestle.pe",
    address: "Lima",
    contact: "Ventas",
    days: 3,
    payment: "Crédito 30 días",
    category: "Lácteos",
    rating: "Bueno",
    state: "Activo",
  },
  {
    ruc: "18910000513",
    name: "P&D Andina Alimentos",
    phone: "999000013",
    email: "ventas@pdandina.pe",
    address: "Lima",
    contact: "Comercial",
    days: 3,
    payment: "Crédito 15 días",
    category: "Lácteos",
    rating: "Regular",
    state: "Activo",
  },
  {
    ruc: "05178100014",
    name: "Arca Continental Lindley S.A.",
    phone: "01-000014",
    email: "ventas@lindley.pe",
    address: "Lima",
    contact: "Ventas",
    days: 2,
    payment: "Crédito 30 días",
    category: "Bebidas",
    rating: "Bueno",
    state: "Activo",
  },
  {
    ruc: "48010000015",
    name: "Ajeper S.A. (Grupo AJE)",
    phone: "01-000015",
    email: "ventas@aje.pe",
    address: "Lima",
    contact: "Ventas",
    days: 2,
    payment: "Crédito 30 días",
    category: "Bebidas",
    rating: "Bueno",
    state: "Activo",
  },
  {
    ruc: "36108345716",
    name: "CBC Peruana S.A.C.",
    phone: "01-000016",
    email: "ventas@cbc.pe",
    address: "Lima",
    contact: "Comercial",
    days: 3,
    payment: "Crédito 15 días",
    category: "Bebidas",
    rating: "Regular",
    state: "Activo",
  },
  {
    ruc: "15142306917",
    name: "Industrias San Miguel (ISM)",
    phone: "01-000017",
    email: "ventas@ism.pe",
    address: "Lima",
    contact: "Ventas",
    days: 2,
    payment: "Contado",
    category: "Bebidas",
    rating: "Bueno",
    state: "Activo",
  },
  {
    ruc: "94192467918",
    name: "Backus",
    phone: "01-000018",
    email: "ventas@backus.pe",
    address: "Lima",
    contact: "Ventas",
    days: 2,
    payment: "Crédito 30 días",
    category: "Bebidas",
    rating: "Bueno",
    state: "Activo",
  },
  {
    ruc: "84100027569",
    name: "Alicorp",
    phone: "01-000019",
    email: "ventas@alicorp.com.pe",
    address: "Lima",
    contact: "Ventas",
    days: 3,
    payment: "Crédito 30 días",
    category: "Limpieza",
    rating: "Bueno",
    state: "Activo",
  },
  {
    ruc: "33176424720",
    name: "Box Clean",
    phone: "999000020",
    email: "ventas@boxclean.pe",
    address: "Lima",
    contact: "Ventas",
    days: 3,
    payment: "Crédito 15 días",
    category: "Limpieza",
    rating: "Bueno",
    state: "Activo",
  },
  {
    ruc: "19542854921",
    name: "Compañía Kayser S.A.C. (+ASEO)",
    phone: "999000021",
    email: "ventas@kayser.pe",
    address: "Lima",
    contact: "Comercial",
    days: 4,
    payment: "Contado",
    category: "Limpieza",
    rating: "Regular",
    state: "Activo",
  },
  {
    ruc: "40483434322",
    name: "Multilimp SAC (369 Calidad X 3)",
    phone: "999000022",
    email: "ventas@multilimp.pe",
    address: "Lima",
    contact: "Ventas",
    days: 2,
    payment: "Crédito 15 días",
    category: "Limpieza",
    rating: "Bueno",
    state: "Activo",
  },
  {
    ruc: "20203411223",
    name: "A&D Químicos Diversos S.A.",
    phone: "999000023",
    email: "ventas@adquimicos.pe",
    address: "Lima",
    contact: "Ventas",
    days: 3,
    payment: "Crédito 30 días",
    category: "Limpieza",
    rating: "Bueno",
    state: "Activo",
  },
];
SUPPLIERS.push(
  {
    ruc: "50685423701",
    name: "Distribuciones Valle Verde S.A.C.",
    phone: "999321001",
    email: "ventas@valleverde.demo.pe",
    address: "Ate, Lima",
    contact: "Daniel Huerta",
    days: 2,
    payment: "Crédito 15 días",
    category: "Frutas y verduras",
    rating: "Bueno",
    state: "Activo",
  },
  {
    ruc: "70685358912",
    name: "Comercial Mayorista San Gabriel E.I.R.L.",
    phone: "999321002",
    email: "contacto@sangabriel.demo.pe",
    address: "Comas, Lima",
    contact: "Paola Ramos",
    days: 3,
    payment: "Crédito 30 días",
    category: "Abarrotes",
    rating: "Bueno",
    state: "Activo",
  },
  {
    ruc: "80609926733",
    name: "Lácteos del Valle Andino S.R.L.",
    phone: "999321003",
    email: "ventas@valleandino.demo.pe",
    address: "Santa Anita, Lima",
    contact: "Marco Peña",
    days: 2,
    payment: "Contado",
    category: "Lácteos",
    rating: "Bueno",
    state: "Activo",
  },
  {
    ruc: "99643261004",
    name: "Bebidas Costa Central S.A.C.",
    phone: "999321004",
    email: "comercial@costacentral.demo.pe",
    address: "Callao",
    contact: "Lucía Torres",
    days: 2,
    payment: "Crédito 30 días",
    category: "Bebidas",
    rating: "Bueno",
    state: "Activo",
  },
  {
    ruc: "00609991005",
    name: "Higiene Total Distribuciones E.I.R.L.",
    phone: "999321005",
    email: "ventas@higienetotal.demo.pe",
    address: "San Martín de Porres, Lima",
    contact: "Kevin Soto",
    days: 3,
    payment: "Crédito 15 días",
    category: "Limpieza",
    rating: "Regular",
    state: "Activo",
  },
);
SUPPLIERS.push(
  {
    ruc: "60610368001",
    name: "Distribuciones Buen Sabor S.A.C.",
    phone: "999100001",
    email: "ventas@buensabor.demo.pe",
    address: "Lima",
    contact: "Ventas",
    days: 3,
    payment: "Crédito 30 días",
    category: "Snacks y golosinas",
    rating: "Bueno",
    state: "Activo",
  },
  {
    ruc: "40619876002",
    name: "Higiene Total Comercial E.I.R.L.",
    phone: "999100002",
    email: "ventas@higienetotal.demo.pe",
    address: "Lima",
    contact: "Comercial",
    days: 3,
    payment: "Crédito 30 días",
    category: "Cuidado personal",
    rating: "Bueno",
    state: "Activo",
  },
  {
    ruc: "08610832683",
    name: "Panadería San Marcos Distribución S.R.L.",
    phone: "999100003",
    email: "pedidos@sanmarcos.demo.pe",
    address: "Lima",
    contact: "Pedidos",
    days: 1,
    payment: "Contado",
    category: "Panadería",
    rating: "Bueno",
    state: "Activo",
  },
  {
    ruc: "30619423784",
    name: "Frío Andino Alimentos S.A.C.",
    phone: "999100004",
    email: "ventas@frioandino.demo.pe",
    address: "Callao",
    contact: "Ventas",
    days: 4,
    payment: "Crédito 30 días",
    category: "Congelados",
    rating: "Bueno",
    state: "Activo",
  },
  {
    ruc: "70610000005",
    name: "Pet Market Distribuciones E.I.R.L.",
    phone: "999100005",
    email: "ventas@petmarket.demo.pe",
    address: "Lima",
    contact: "Comercial",
    days: 3,
    payment: "Crédito 15 días",
    category: "Mascotas",
    rating: "Bueno",
    state: "Activo",
  },
  {
    ruc: "10618734006",
    name: "Despensa Nacional Mayorista S.A.C.",
    phone: "999100006",
    email: "ventas@despensanacional.demo.pe",
    address: "Lima",
    contact: "Ventas",
    days: 3,
    payment: "Crédito 30 días",
    category: "Despensa seca",
    rating: "Bueno",
    state: "Activo",
  },
  {
    ruc: "88610359857",
    name: "Hogar Práctico Comercial S.R.L.",
    phone: "999100007",
    email: "ventas@hogarpractico.demo.pe",
    address: "Lima",
    contact: "Ventas",
    days: 4,
    payment: "Crédito 15 días",
    category: "Hogar",
    rating: "Bueno",
    state: "Activo",
  },
);
const CLIENTS = [
  {
    doc: "35872136",
    name: "María Elena",
    last: "Quispe Rojas",
    phone: "987654321",
    email: "maria.quispe@demo.pe",
    address: "Av. Los Jardines 125",
    district: "San Juan de Lurigancho",
    type: "Persona natural",
    payment: "Contado",
    limit: 0,
    purchases: 842.6,
    state: "Activo",
  },
  {
    doc: "87211895",
    name: "Carlos Alberto",
    last: "Mendoza Salazar",
    phone: "986321745",
    email: "carlos.mendoza@demo.pe",
    address: "Jr. Las Flores 418",
    district: "San Martín de Porres",
    type: "Persona natural",
    payment: "Crédito 15 días",
    limit: 500,
    purchases: 1540.2,
    state: "Activo",
  },
  {
    doc: "73987521",
    name: "Rosa Isabel",
    last: "Paredes Huamán",
    phone: "985147258",
    email: "rosa.paredes@demo.pe",
    address: "Calle Los Pinos 203",
    district: "Los Olivos",
    type: "Persona natural",
    payment: "Contado",
    limit: 0,
    purchases: 623.45,
    state: "Activo",
  },
  {
    doc: "60607845123",
    name: "Bodega La Esquina S.A.C.",
    last: "La Esquina",
    phone: "999741852",
    email: "compras@laesquina.demo.pe",
    address: "Av. Túpac Amaru 1540",
    district: "Comas",
    type: "Empresa",
    payment: "Crédito 30 días",
    limit: 2500,
    purchases: 4825.7,
    state: "Activo",
  },
  {
    doc: "20591473826",
    name: "Mini Market Santa Rosa E.I.R.L.",
    last: "Santa Rosa",
    phone: "998654123",
    email: "administracion@santarosa.demo.pe",
    address: "Av. Metropolitana 640",
    district: "Ate",
    type: "Empresa",
    payment: "Crédito 30 días",
    limit: 3500,
    purchases: 6920.3,
    state: "Activo",
  },
  {
    doc: "48632157",
    name: "Jorge Luis",
    last: "Ramírez Soto",
    phone: "984753162",
    email: "jorge.ramirez@demo.pe",
    address: "Jr. Lima 820",
    district: "Santa Anita",
    type: "Persona natural",
    payment: "Contado",
    limit: 0,
    purchases: 389.9,
    state: "Activo",
  },
  {
    doc: "55123698",
    name: "Patricia",
    last: "Vargas Cárdenas",
    phone: "983216547",
    email: "patricia.vargas@demo.pe",
    address: "Calle 8 Mz. B Lt. 12",
    district: "Villa El Salvador",
    type: "Persona natural",
    payment: "Crédito 15 días",
    limit: 700,
    purchases: 1187.4,
    state: "Activo",
  },
  {
    doc: "10458712639",
    name: "Distribuidora El Buen Precio S.R.L.",
    last: "El Buen Precio",
    phone: "997852146",
    email: "ventas@buenprecio.demo.pe",
    address: "Av. Pachacútec 910",
    district: "Villa El Salvador",
    type: "Empresa",
    payment: "Crédito 30 días",
    limit: 5000,
    purchases: 9874.5,
    state: "Activo",
  },
  {
    doc: "00985217",
    name: "Luis Fernando",
    last: "Torres Medina",
    phone: "981456237",
    email: "luis.torres@demo.pe",
    address: "Jr. Los Olivos 150",
    district: "San Martín de Porres",
    type: "Persona natural",
    payment: "Contado",
    limit: 0,
    purchases: 215.8,
    state: "Activo",
  },
  {
    doc: "45896321",
    name: "Andrea Milagros",
    last: "Flores Núñez",
    phone: "980123654",
    email: "andrea.flores@demo.pe",
    address: "Calle Las Palmeras 77",
    district: "Surco",
    type: "Persona natural",
    payment: "Contado",
    limit: 0,
    purchases: 1460.15,
    state: "Activo",
  },
  {
    doc: "70567183942",
    name: "Restaurante Sabor de Casa E.I.R.L.",
    last: "Sabor de Casa",
    phone: "996321478",
    email: "compras@sabordecasa.demo.pe",
    address: "Av. Universitaria 2250",
    district: "Los Olivos",
    type: "Empresa",
    payment: "Crédito 15 días",
    limit: 1800,
    purchases: 5360.9,
    state: "Activo",
  },
  {
    doc: "84781236",
    name: "Miguel Ángel",
    last: "Castillo León",
    phone: "979852147",
    email: "miguel.castillo@demo.pe",
    address: "Jr. Primavera 456",
    district: "La Molina",
    type: "Persona natural",
    payment: "Contado",
    limit: 0,
    purchases: 754.3,
    state: "Inactivo",
  },
];

const NAMES = {
  "Frutas y verduras": [
    "Manzana roja",
    "Plátano de seda",
    "Naranja valencia",
    "Mandarina",
    "Papaya",
    "Piña golden",
    "Mango kent",
    "Palta fuerte",
    "Tomate italiano",
    "Cebolla roja",
    "Papa blanca",
    "Papa amarilla",
    "Zanahoria",
    "Lechuga crespa",
    "Pepino fresco",
  ],
  Abarrotes: [
    "Arroz extra 5 kg",
    "Arroz superior 1 kg",
    "Aceite vegetal 1 L",
    "Aceite vegetal 900 ml",
    "Azúcar rubia 1 kg",
    "Atún en agua 170 g",
    "Atún en aceite 170 g",
    "Mayonesa 950 g",
    "Ketchup 500 g",
    "Fideos spaghetti 500 g",
    "Fideos cabello de ángel 250 g",
    "Salsa de tomate 160 g",
    "Vinagre blanco 500 ml",
    "Café instantáneo 200 g",
    "Chocolate para taza 90 g",
  ],
  Lácteos: [
    "Leche evaporada 410 g",
    "Leche UHT entera 1 L",
    "Leche UHT descremada 1 L",
    "Yogurt fresa 1 L",
    "Yogurt natural 1 L",
    "Yogurt bebible 330 ml",
    "Queso fresco 250 g",
    "Queso edam 250 g",
    "Queso mozzarella 250 g",
    "Mantequilla 180 g",
    "Crema de leche 200 ml",
    "Bebida láctea chocolate 1 L",
    "Leche chocolatada 330 ml",
    "Manjar blanco 250 g",
    "Queso parmesano 100 g",
  ],
  Bebidas: [
    "Agua mineral 625 ml",
    "Agua mineral 2.5 L",
    "Agua con gas 625 ml",
    "Gaseosa cola 1.5 L",
    "Gaseosa amarilla 1.5 L",
    "Gaseosa naranja 1.5 L",
    "Jugo de naranja 1 L",
    "Néctar durazno 1 L",
    "Bebida energética 473 ml",
    "Bebida isotónica 500 ml",
    "Té helado 500 ml",
    "Agua saborizada 1 L",
    "Bebida de manzana 1 L",
    "Gaseosa cola 3 L",
    "Refresco familiar 2.25 L",
  ],
  Limpieza: [
    "Detergente polvo 1 kg",
    "Detergente líquido 1 L",
    "Lavavajillas 750 ml",
    "Lejía 1 L",
    "Desinfectante 1 L",
    "Limpiador multiuso 500 ml",
    "Limpiavidrios 500 ml",
    "Suavizante 1 L",
    "Jabón para ropa 250 g",
    "Esponja doble uso x3",
    "Paño microfibra x2",
    "Bolsas basura mediana x20",
    "Papel higiénico x4",
    "Toalla de papel x2",
    "Ambientador 360 ml",
  ],
  "Snacks y golosinas": [
    "Galletas chocolate 6 pack",
    "Galletas soda 6 pack",
    "Galletas vainilla 6 pack",
    "Chips de papa 150 g",
    "Chizitos 100 g",
    "Maní salado 100 g",
    "Chocolate leche 90 g",
    "Chocolate relleno 50 g",
    "Caramelos surtidos 100 g",
    "Chicles menta 10 un",
    "Wafer chocolate 60 g",
    "Barra cereal 6 un",
    "Alfajor clásico 60 g",
    "Gomitas frutales 100 g",
    "Palitos salados 100 g",
  ],
  "Cuidado personal": [
    "Shampoo familiar 400 ml",
    "Acondicionador 400 ml",
    "Jabón corporal 125 g",
    "Jabón antibacterial 90 g",
    "Pasta dental 90 g",
    "Cepillo dental adulto",
    "Desodorante aerosol 150 ml",
    "Desodorante roll-on 50 ml",
    "Papel facial x100",
    "Crema corporal 400 ml",
    "Gel para cabello 250 g",
    "Protector solar 120 ml",
    "Máquina afeitar x3",
    "Toallas higiénicas x10",
    "Algodón 100 g",
  ],
  Panadería: [
    "Pan francés x10",
    "Pan integral x500 g",
    "Pan molde blanco 500 g",
    "Pan molde integral 500 g",
    "Tostadas clásicas 200 g",
    "Tostadas integrales 200 g",
    "Bizcocho familiar 400 g",
    "Queque vainilla 350 g",
    "Croissant x4",
    "Pan hamburguesa x6",
    "Pan hot dog x6",
    "Muffin chocolate x4",
    "Galleta de avena 250 g",
    "Empanada de carne x1",
    "Rosca dulce 300 g",
  ],
  Congelados: [
    "Arveja congelada 500 g",
    "Choclo congelado 500 g",
    "Mix verduras 500 g",
    "Hamburguesa res x4",
    "Hamburguesa pollo x4",
    "Nuggets pollo 500 g",
    "Papas prefritas 1 kg",
    "Filete pescado 500 g",
    "Salchipapa congelada 500 g",
    "Pizza familiar congelada",
    "Pollo broaster congelado 1 kg",
    "Alitas BBQ congeladas 1 kg",
    "Tequeños x12",
    "Ravioles congelados 500 g",
    "Helado familiar 1 L",
  ],
  Mascotas: [
    "Alimento perro adulto 2 kg",
    "Alimento perro cachorro 2 kg",
    "Alimento gato adulto 1 kg",
    "Alimento gato esterilizado 1 kg",
    "Snack dental perro 150 g",
    "Premios para perro 100 g",
    "Arena sanitaria 4 kg",
    "Arena aglomerante 10 kg",
    "Pañitos mascotas x50",
    "Shampoo mascota 250 ml",
    "Plato plástico mascota",
    "Juguete pelota mediana",
    "Correa nylon mediana",
    "Collar mascota mediano",
    "Alimento húmedo gato 85 g",
  ],
  "Despensa seca": [
    "Lenteja 500 g",
    "Frejol canario 500 g",
    "Arveja seca 500 g",
    "Quinua 500 g",
    "Avena en hojuelas 500 g",
    "Harina preparada 1 kg",
    "Harina sin preparar 1 kg",
    "Maicena 200 g",
    "Sal yodada 1 kg",
    "Pimienta molida 50 g",
    "Comino molido 50 g",
    "Orégano seco 20 g",
    "Canela en polvo 50 g",
    "Caldo de gallina x12",
    "Cereal maíz 500 g",
  ],
  Hogar: [
    "Bolsas herméticas x20",
    "Bolsas para freezer x15",
    "Film transparente 30 m",
    "Papel aluminio 10 m",
    "Vasos descartables x50",
    "Platos descartables x25",
    "Cubiertos descartables x25",
    "Servilletas x100",
    "Encendedor cocina",
    "Fósforos x10 cajas",
    "Guantes domésticos",
    "Escoba doméstica",
    "Recogedor plástico",
    "Tacho pequeño 10 L",
    "Taper plástico 1 L",
  ],
};
const ICONS = {
  "Frutas y verduras": [
    "🍎",
    "🍌",
    "🍊",
    "🍊",
    "🍈",
    "🍍",
    "🥭",
    "🥑",
    "🍅",
    "🧅",
    "🥔",
    "🥔",
    "🥕",
    "🥬",
    "🥒",
  ],
  Abarrotes: [
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
  ],
  Lácteos: [
    "🥫",
    "🥛",
    "🥛",
    "🥛",
    "🥛",
    "🥤",
    "🧀",
    "🧀",
    "🧀",
    "🧈",
    "🥛",
    "🥛",
    "🥛",
    "🍯",
    "🧀",
  ],
  Bebidas: [
    "💧",
    "💧",
    "💧",
    "🥤",
    "🥤",
    "🥤",
    "🧃",
    "🧃",
    "⚡",
    "🧃",
    "🧋",
    "💧",
    "🧃",
    "🥤",
    "🧃",
  ],
  Limpieza: [
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
  ],
  "Snacks y golosinas": [
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
  ],
  "Cuidado personal": [
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
  ],
  Panadería: [
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
  ],
  Congelados: [
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
  ],
  Mascotas: [
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
  ],
  "Despensa seca": [
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
  ],
  Hogar: [
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
    "📦",
  ],
};
const PERISHABLE_DAYS = {
  "Frutas y verduras": 5,
  Lácteos: 30,
  Panadería: 7,
  Congelados: 180,
};
const UNIT_BY_CAT = {
  "Frutas y verduras": "Kg",
  Abarrotes: "Unidad",
  Lácteos: "Unidad",
  Bebidas: "Unidad",
  Limpieza: "Unidad",
  "Snacks y golosinas": "Unidad",
  "Cuidado personal": "Unidad",
  Panadería: "Unidad",
  Congelados: "Unidad",
  Mascotas: "Unidad",
  "Despensa seca": "Unidad",
  Hogar: "Unidad",
};
function isoDatePlus(days) {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}
function makeBarcode(n) {
  return "775" + String(100000000 + n).slice(-9);
}
function makeProduct(code, name, cat, i) {
  const s = SUP_BY_CAT[cat][i % SUP_BY_CAT[cat].length];
  const perish = Object.prototype.hasOwnProperty.call(PERISHABLE_DAYS, cat);
  const days = (PERISHABLE_DAYS[cat] || 730) + ((i % 5) - 2);
  const unit = UNIT_BY_CAT[cat];
  const buy = +(2.5 + i * 0.83 + (cat.length % 5)).toFixed(2);
  return {
    code,
    name,
    description: `${name}. Producto seleccionado para venta minorista en tienda de abarrotes.`,
    category: cat,
    supplier: s.name,
    supplierRuc: s.ruc,
    icon: ICONS[cat][i],
    unit,
    buy,
    sell: +(buy * 1.32).toFixed(2),
    stock: 20 + ((i * 7) % 70),
    min: 10 + (i % 3) * 5,
    estado: "Disponible",
    brand: ["MarketGo", "Andina", "Del Campo", "Casa Real", "Buen Sabor"][
      i % 5
    ],
    presentation: (name.match(/\d+\s?(?:kg|g|ml|L|un|m)/i) || [])[0] || unit,
    barcode: makeBarcode(Number(code.slice(1))),
    lot: `LT-${new Date().getFullYear()}-${code}`,
    expiryDate: perish ? isoDatePlus(days) : "",
    storage:
      cat === "Lácteos"
        ? "Refrigerado"
        : cat === "Congelados"
          ? "Congelado"
          : cat === "Frutas y verduras"
            ? "Fresco / ventilado"
            : "Ambiente seco",
    origin: "Perú",
    perishable: perish,
  };
}
const SUP_BY_CAT = {};
SUPPLIERS.forEach((s) => (SUP_BY_CAT[s.category] ??= []).push(s));
let products = [];
let code = 1;
Object.entries(NAMES).forEach(([cat, names]) =>
  names.forEach((name, i) =>
    products.push(
      makeProduct("P" + String(code++).padStart(3, "0"), name, cat, i),
    ),
  ),
);
const offers = [
  {
    id: "OF001",
    name: "Bebidas refrescantes",
    product: "Agua San Luis 625 ml",
    discount: "15%",
    old: 1.99,
    new: 1.69,
    icon: "💧",
    state: "Activa",
  },
  {
    id: "OF002",
    name: "Abarrotes del día",
    product: "Arroz extra 5 kg",
    discount: "10%",
    old: 24.9,
    new: 22.41,
    icon: "🍚",
    state: "Activa",
  },
  {
    id: "OF003",
    name: "Lácteos familiares",
    product: "Leche Gloria 1 L",
    discount: "12%",
    old: 4.5,
    new: 3.96,
    icon: "🥛",
    state: "Activa",
  },
  {
    id: "OF004",
    name: "Limpieza en casa",
    product: "Detergente 1 kg",
    discount: "8%",
    old: 13.5,
    new: 12.42,
    icon: "🧴",
    state: "Programada",
  },
];
let users = JSON.parse(localStorage.getItem("marketgo_users") || "null") || [
  {
    dni: "00000000",
    name: "Administrador",
    last: "MarketGo",
    email: "admin@marketgo.pe",
    pass: "1234",
    role: "ADMIN",
  },
  {
    dni: "11111111",
    name: "Ana",
    last: "Martines",
    email: "ana@marketgo.pe",
    pass: "1234",
    role: "CLIENTE",
  },
];
let current = JSON.parse(localStorage.getItem("marketgo_current") || "null");
let cart = JSON.parse(localStorage.getItem("marketgo_cart") || "[]");
let orders = JSON.parse(localStorage.getItem("marketgo_orders") || "[]");
let suppliers =
  JSON.parse(localStorage.getItem("marketgo_suppliers") || "null") || [];
SUPPLIERS.forEach((seed) => {
  if (!suppliers.some((x) => x.ruc === seed.ruc)) suppliers.push(seed);
});
let clients =
  JSON.parse(localStorage.getItem("marketgo_clients") || "null") ||
  CLIENTS.slice();
const PRODUCT_DATA_VERSION = "2026.10.06.3";
let storedProducts = JSON.parse(
  localStorage.getItem("marketgo_products") || "null",
);
let storedProductVersion = localStorage.getItem("marketgo_products_version");
if (
  storedProducts &&
  Array.isArray(storedProducts) &&
  storedProducts.length &&
  storedProductVersion === PRODUCT_DATA_VERSION
)
  products = storedProducts;
else {
  localStorage.setItem("marketgo_products_version", PRODUCT_DATA_VERSION);
  localStorage.setItem("marketgo_products", JSON.stringify(products));
}
let purchaseOrders = JSON.parse(
  localStorage.getItem("marketgo_purchase_orders") || "[]",
);
let inventoryMoves = JSON.parse(
  localStorage.getItem("marketgo_inventory") || "[]",
);
let employeeMeta =
  JSON.parse(localStorage.getItem("marketgo_employee_meta") || "null") || {};
let poDraft = [];
if (!inventoryMoves.length) inventoryMoves = [];
if (!purchaseOrders.length) purchaseOrders = [];
function save() {
  localStorage.setItem("marketgo_users", JSON.stringify(users));
  localStorage.setItem("marketgo_current", JSON.stringify(current));
  localStorage.setItem("marketgo_cart", JSON.stringify(cart));
  localStorage.setItem("marketgo_orders", JSON.stringify(orders));
  localStorage.setItem("marketgo_suppliers", JSON.stringify(suppliers));
  localStorage.setItem("marketgo_clients", JSON.stringify(clients));
  localStorage.setItem("marketgo_products", JSON.stringify(products));
  localStorage.setItem("marketgo_products_version", PRODUCT_DATA_VERSION);
  localStorage.setItem(
    "marketgo_purchase_orders",
    JSON.stringify(purchaseOrders),
  );
  localStorage.setItem("marketgo_inventory", JSON.stringify(inventoryMoves));
  localStorage.setItem("marketgo_employee_meta", JSON.stringify(employeeMeta));
}
function esc(s) {
  return String(s ?? "").replace(
    /[&<>'"]/g,
    (m) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[m],
  );
}
function money(n) {
  return "S/ " + Number(n).toFixed(2);
}
function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.style.display = "block";
  clearTimeout(window.tt);
  window.tt = setTimeout(() => (t.style.display = "none"), 2400);
}
function showAuth(which) {
  document
    .getElementById("loginForm")
    .classList.toggle("hidden", which !== "login");
  document
    .getElementById("registerForm")
    .classList.toggle("hidden", which !== "register");
  document
    .getElementById("tabLogin")
    .classList.toggle("active", which === "login");
  document
    .getElementById("tabRegister")
    .classList.toggle("active", which === "register");
  document.getElementById("authMsg").innerHTML = "";
}
function register(e) {
  e.preventDefault();
  const u = {
    dni: regDni.value.trim(),
    name: regName.value.trim(),
    last: regLast.value.trim(),
    email: regEmail.value.trim().toLowerCase(),
    pass: regPass.value,
    role: regRole.value,
  };
  if (users.some((x) => x.email === u.email || x.dni === u.dni)) {
    msgAuth("Ya existe una cuenta con ese correo o identificación.", "error");
    return;
  }
  users.push(u);
  save();
  msgAuth("Registro correcto. Ahora puedes iniciar sesión.", "success");
  showAuth("login");
  loginId.value = u.email;
}
function msgAuth(msg, type) {
  document.getElementById("authMsg").innerHTML =
    `<div class="${type}">${msg}</div>`;
}
function login(e) {
  e.preventDefault();
  const q = loginId.value.trim().toLowerCase(),
    p = loginPass.value;
  const u = users.find(
    (x) =>
      (x.email.toLowerCase() === q || x.dni.toLowerCase() === q) &&
      x.pass === p,
  );
  if (!u) {
    msgAuth("Correo/identificación o contraseña incorrectos.", "error");
    return;
  }
  current = u;
  save();
  boot();
}
function boot() {
  document.getElementById("auth").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
  document.getElementById("userName").textContent =
    current.name + " " + current.last;
  document.getElementById("userRole").textContent = current.role;
  document.getElementById("welcomeName").textContent = current.name;
  document.getElementById("profileName").textContent =
    current.name + " " + current.last;
  document.getElementById("profileDni").textContent = current.dni;
  document.getElementById("profileFull").textContent =
    current.name + " " + current.last;
  document.getElementById("profileEmail").textContent = current.email;
  document.getElementById("profileRole").textContent =
    current.role === "ADMIN"
      ? "Administrador MarketGo"
      : current.role === "EMPLEADO"
        ? "Empleado MarketGo"
        : "Cliente MarketGo";
  document.getElementById("profileRole2").textContent = current.role;
  document.getElementById("avatar").textContent = (
    current.name[0] || "U"
  ).toUpperCase();
  buildMenu();
  fillFilters();
  renderHome();
  renderProducts();
  renderCart();
  renderOrders();
  renderSuppliers();
  renderClients();
  renderReports();
  renderAdminProducts();
  renderDashboard();
  renderPurchaseOrders();
  renderInventory();
  renderEmployees();
  updateCartCount();
}
function logout() {
  current = null;
  save();
  document.getElementById("app").classList.add("hidden");
  document.getElementById("auth").classList.remove("hidden");
  showAuth("login");
  loginPass.value = "";
  toast("Sesión cerrada");
}
function menuItem(id, label, icon) {
  return `<button class="side-btn" data-module="${id}" 
  onclick="openModule('${id}')">${icon} ${label}</button>`;
}
//acceso empleado
function buildMenu() {
  let html =
    menuItem("home", "Inicio", "🏠") +
    menuItem("categories", "Categorías", "📂") +
    menuItem("products", "Productos", "📦") +
    menuItem("offers", "Ofertas", "🏷️") +
    menuItem("cart", "Carrito", "🛒") +
    menuItem("orders", "Pedidos", "📋") +
    menuItem("profile", "Mi perfil", "👤");
  if (current.role === "EMPLEADO" || current.role === "ADMIN")
    html +=
      menuItem("dashboard", "Panel de control", "📈") +
      menuItem("suppliers", "Proveedores", "🏪") +
      menuItem("clients", "Clientes", "👥") +
      menuItem("purchases", "Órdenes de compra", "🧾") +
      menuItem("inventory", "Movimientos de stock", "📦") +
      menuItem("reports", "Reportes", "📊");
  if (current.role === "ADMIN")
    html +=
      menuItem("employees", "Empleados", "👥") +
      menuItem("admin-products", "Administrar productos", "⚙️");
  document.getElementById("sideMenu").innerHTML = html;
}
const titles = {
  home: "Inicio",
  categories: "Categorías",
  products: "Productos",
  offers: "Ofertas",
  cart: "Carrito",
  orders: "Mis pedidos",
  profile: "Mi perfil",
  dashboard: "Panel de control",
  suppliers: "Proveedores",
  clients: "Clientes",
  purchases: "Órdenes de compra",
  inventory: "Movimientos de stock",
  employees: "Empleados",
  reports: "Reportes",
  "admin-products": "Administrar productos",
};
function openModule(id) {
  document
    .querySelectorAll(".module")
    .forEach((x) => x.classList.remove("active"));
  const m = document.getElementById("mod-" + id);
  if (m) m.classList.add("active");
  document
    .querySelectorAll(".side-btn")
    .forEach((b) => b.classList.toggle("active", b.dataset.module === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (id === "cart") renderCart();
  if (id === "orders") renderOrders();
  if (id === "suppliers") renderSuppliers();
  if (id === "clients") renderClients();
  if (id === "reports") renderReports();
  if (id === "admin-products") renderAdminProducts();
  if (id === "products") renderProducts();
  if (id === "dashboard") renderDashboard();
  if (id === "purchases") renderPurchaseOrders();
  if (id === "inventory") renderInventory();
  if (id === "employees") renderEmployees();
}
function renderHome() {
  document.getElementById("homeCategories").innerHTML = CATS.map(
    (c) =>
      `<button class="category-card" onclick="filterByCategory('${esc(c.name)}')"><div class="cat-icon">${c.icon}</div><h4>${esc(c.name)}</h4><p>${esc(c.desc)}</p><b style="font-size:11px;color:var(--green2)">Ver productos →</b></button>`,
  ).join("");
  document.getElementById("homeOffers").innerHTML = offers
    .slice(0, 3)
    .map(offerCard)
    .join("");
  document.getElementById("allCategories").innerHTML = CATS.map(
    (c) =>
      `<button class="category-card" onclick="filterByCategory('${esc(c.name)}')"><div class="cat-icon">${c.icon}</div><h4>${esc(c.name)}</h4><p>${products.filter((p) => p.category === c.name).length} productos</p><b style="font-size:11px;color:var(--green2)">Ver productos →</b></button>`,
  ).join("");
  document.getElementById("allOffers").innerHTML = offers
    .map(offerCard)
    .join("");
}
function offerCard(o) {
  return `<article class="offer-card"><div class="offer-img"><span class="discount">-${esc(o.discount)}</span>${o.icon}</div><div class="offer-body"><small>${esc(o.state)}</small><h4>${esc(o.name)}</h4><p style="font-size:11px;color:var(--muted)">${esc(o.product)}</p><div><span class="old">${money(o.old)}</span><span class="new">${money(o.new)}</span></div><div class="card-actions"><button class="add-btn" onclick="addToCartByName('${esc(o.product)}',${o.new})">Agregar</button><button class="view-btn" onclick="filterByName('${esc(o.product)}')">Ver producto</button></div></div></article>`;
}
function fillFilters() {
  const catOpts =
    '<option value="">Todas las categorías</option>' +
    CATS.map((c) => `<option>${esc(c.name)}</option>`).join("");
  categoryFilter.innerHTML = catOpts;
  adminCatFilter.innerHTML = catOpts;
  pCategory.innerHTML = CATS.map((c) => `<option>${esc(c.name)}</option>`).join(
    "",
  );
  sCategory.innerHTML = CATS.map((c) => `<option>${esc(c.name)}</option>`).join(
    "",
  );
  supplierFilter.innerHTML =
    '<option value="">Todos los proveedores</option>' +
    suppliers.map((s) => `<option>${esc(s.name)}</option>`).join("");
  pSupplier.innerHTML = suppliers
    .map((s) => `<option>${esc(s.name)}</option>`)
    .join("");
}
function filterByCategory(cat) {
  openModule("products");
  categoryFilter.value = cat;
  productSearch.value = "";
  renderProducts();
  toast("Mostrando " + cat);
}
function filterByName(name) {
  openModule("products");
  productSearch.value = name;
  renderProducts();
}
function searchProducts() {
  openModule("products");
  productSearch.value = globalSearch.value.trim();
  renderProducts();
}
function clearFilters() {
  productSearch.value = "";
  categoryFilter.value = "";
  supplierFilter.value = "";
  renderProducts();
}
function renderProducts() {
  let q = (document.getElementById("productSearch")?.value || "").toLowerCase(),
    cat = categoryFilter?.value || "",
    sup = supplierFilter?.value || "";
  let list = products.filter(
    (p) =>
      (!q ||
        (p.name + " " + p.code + " " + p.category + " " + p.supplier)
          .toLowerCase()
          .includes(q)) &&
      (!cat || p.category === cat) &&
      (!sup || p.supplier === sup),
  );
  productGrid.innerHTML = list.length
    ? list
        .map(
          (p) =>
            `<article class="product-card"><button class="fav" onclick="toggleFav(this)">♡</button><div class="product-image">${p.icon}</div><h4>${esc(p.name)}</h4><div class="meta">${esc(p.code)} · ${esc(p.category)}<br>Proveedor: ${esc(p.supplier)}<br>Stock: ${p.stock} ${esc(p.unit)}</div><div class="price-row"><strong>${money(p.sell)}</strong><button class="small-add" onclick="addToCart('${p.code}')">+</button></div></article>`,
        )
        .join("")
    : `<div class="panel" style="grid-column:1/-1"><div class="empty"><div class="emoji">🔎</div><h3>No se encontraron productos</h3><p>Prueba con otro nombre o selecciona otra categoría.</p></div></div>`;
}
function toggleFav(b) {
  b.textContent = b.textContent === "♡" ? "♥" : "♡";
  toast(
    b.textContent === "♥" ? "Agregado a favoritos" : "Quitado de favoritos",
  );
}
function addToCart(code) {
  const p = products.find((x) => x.code === code);
  if (!p) return;
  const x = cart.find((i) => i.code === code);
  if (x) x.qty++;
  else cart.push({ code, qty: 1 });
  save();
  updateCartCount();
  renderCart();
  toast("Producto agregado al carrito");
}
function addToCartByName(name, price) {
  const p = products.find((x) => x.name === name);
  if (p) addToCart(p.code);
  else {
    cart.push({ code: "OF-" + name, qty: 1, name, price, icon: "🏷️" });
    save();
    updateCartCount();
    renderCart();
    toast("Oferta agregada al carrito");
  }
}
function updateCartCount() {
  cartCount.textContent = cart.reduce((a, x) => a + x.qty, 0);
}
function getCartItems() {
  return cart.map((i) => {
    const p = products.find((x) => x.code === i.code);
    return p ? { ...p, qty: i.qty } : i;
  });
}
function renderCart() {
  const items = getCartItems();
  if (!items.length) {
    cartPanel.innerHTML =
      '<div class="panel"><div class="empty"><div class="emoji">🛒</div><h3>Tu carrito está vacío</h3><p>Agrega productos para comenzar tu compra.</p><button class="primary" style="margin-top:14px" onclick="openModule(\'products\')">Comprar productos</button></div></div>';
    return;
  }
  let subtotal = items.reduce((a, p) => a + p.sell * p.qty, 0),
    discount = 0,
    tax = subtotal * 0.18,
    total = subtotal + tax - discount;
  cartPanel.innerHTML = `<div class="panel"><div class="cart-list">${items.map((p) => `<div class="cart-item"><div class="cart-img">${p.icon}</div><div><strong>${esc(p.name)}</strong><small style="display:block;color:var(--muted);font-size:11px">${esc(p.category)}</small></div><div class="unit">${money(p.sell)}</div><div class="qty"><button onclick="changeQty('${p.code}',-1)">−</button><input value="${p.qty}" readonly><button onclick="changeQty('${p.code}',1)">+</button></div><strong class="subtotal">${money(p.sell * p.qty)}</strong><button class="remove" onclick="removeCart('${p.code}')">×</button></div>`).join("")}</div><div class="summary"><div><span>Subtotal</span><strong>${money(subtotal)}</strong></div><div><span>IGV (18%)</span><strong>${money(tax)}</strong></div><div><span>Descuentos</span><strong>-${money(discount)}</strong></div><div class="total"><span>Total</span><strong>${money(total)}</strong></div><div class="form-actions"><button class="secondary" onclick="emptyCart()">Vaciar carrito</button><button class="primary" onclick="checkout()">Proceder al pago</button></div></div></div>`;
}
function changeQty(code, d) {
  const x = cart.find((i) => i.code === code);
  if (!x) return;
  x.qty += d;
  if (x.qty < 1) cart = cart.filter((i) => i.code !== code);
  save();
  updateCartCount();
  renderCart();
}
function removeCart(code) {
  cart = cart.filter((i) => i.code !== code);
  save();
  updateCartCount();
  renderCart();
  toast("Producto eliminado");
}
function emptyCart() {
  if (confirm("¿Vaciar todo el carrito?")) {
    cart = [];
    save();
    updateCartCount();
    renderCart();
    toast("Carrito vacío");
  }
}
function checkout() {
  if (!cart.length) return;
  const items = getCartItems(),
    total = items.reduce((a, p) => a + p.sell * p.qty, 0) * 1.18;
  const o = {
    id: "PED-" + String(Date.now()).slice(-6),
    date: new Date().toISOString().slice(0, 10),
    items: items.map((p) => ({ name: p.name, qty: p.qty })),
    total,
    payment: "Pago en línea",
    status: "Pendiente",
    address: "Dirección registrada por el cliente",
  };
  orders.unshift(o);
  cart = [];
  save();
  updateCartCount();
  renderOrders();
  openModule("orders");
  toast("Pedido registrado correctamente");
}
function renderOrders() {
  const q = (orderSearch?.value || "").toLowerCase(),
    st = orderStatus?.value || "";
  const list = orders.filter(
    (o) =>
      (!q || (o.id + " " + o.date).toLowerCase().includes(q)) &&
      (!st || o.status === st),
  );
  statTotalOrders.textContent = orders.length;
  statPending.textContent = orders.filter(
    (o) => o.status === "Pendiente",
  ).length;
  statProcess.textContent = orders.filter((o) => o.status === "Enviado").length;
  statDelivered.textContent = orders.filter(
    (o) => o.status === "Entregado",
  ).length;
  ordersList.innerHTML = list.length
    ? list
        .map(
          (o) =>
            `<article class="order-card"><div class="order-top"><div><strong>${o.id}</strong><small style="display:block;color:var(--muted);margin-top:4px">${o.date}</small></div><span class="status ${o.status === "Cancelado" ? "cancel" : ""}">${o.status}</span></div><div style="margin-top:10px;font-size:12px">${o.items.map((i) => `${i.qty} × ${esc(i.name)}`).join(", ")}</div><div class="order-info"><div><span>Total pagado</span><strong>${money(o.total)}</strong></div><div><span>Pago</span><strong>${esc(o.payment)}</strong></div><div><span>Dirección</span><strong>${esc(o.address)}</strong></div><div><span>Acciones</span><strong><button class="export" onclick="viewOrder('${o.id}')">Ver detalle</button> <button class="export" onclick="reorder('${o.id}')">Volver a pedir</button></strong></div></div></article>`,
        )
        .join("")
    : '<div class="panel"><div class="empty"><div class="emoji">📋</div><h3>No tienes pedidos registrados</h3><p>Cuando realices una compra, aparecerá aquí.</p><button class="primary" style="margin-top:14px" onclick="openModule(\'products\')">Comprar productos</button></div></div>';
}
function viewOrder(id) {
  const o = orders.find((x) => x.id === id);
  if (!o) return;
  printArea.innerHTML = `<h1>MarketGo</h1><h2>Comprobante ${o.id}</h2><p>Fecha: ${o.date}</p><hr><p>${o.items.map((i) => `${i.qty} × ${esc(i.name)}`).join("<br>")}</p><h2>Total: ${money(o.total)}</h2>`;
  printArea.style.display = "block";
  window.print();
  setTimeout(() => (printArea.style.display = "none"), 500);
}
function reorder(id) {
  const o = orders.find((x) => x.id === id);
  if (!o) return;
  o.items.forEach((i) => {
    const p = products.find((x) => x.name === i.name);
    if (p) {
      const x = cart.find((c) => c.code === p.code);
      if (x) x.qty += i.qty;
      else cart.push({ code: p.code, qty: i.qty });
    }
  });
  save();
  updateCartCount();
  openModule("cart");
  toast("Productos agregados nuevamente al carrito");
}

function renderDashboard() {
  if (!document.getElementById("kpiProducts")) return;
  const invValue = products.reduce(
    (a, p) => a + (Number(p.buy) || 0) * (Number(p.stock) || 0),
    0,
  );
  const low = products.filter((p) => Number(p.stock) <= Number(p.min));
  kpiInventory.textContent = money(invValue);
  kpiProducts.textContent = products.length;
  kpiLowText.textContent = low.length + " con stock bajo";
  kpiPurchases.textContent = purchaseOrders.length;
  kpiPendingText.textContent =
    purchaseOrders.filter((o) => o.status === "Pendiente").length +
    " pendientes";
  kpiSuppliers.textContent = suppliers.filter(
    (s) => s.state === "Activo",
  ).length;
  if (document.getElementById("kpiClients"))
    kpiClients.textContent = clients.filter((c) => c.state === "Activo").length;
  lowStockList.innerHTML = low.length
    ? low
        .slice(0, 8)
        .map(
          (p) =>
            `<div class="mini-row"><div><strong>${esc(p.name)}</strong><small>${esc(p.code)} · mínimo ${p.min} ${esc(p.unit)}</small><div class="stock-bar"><i style="width:${Math.min(100, Math.max(4, (p.stock / (p.min || 1)) * 50))}%"></i></div></div><span class="pill ${p.stock === 0 ? "danger" : "warn"}">${p.stock === 0 ? "Agotado" : p.stock + " " + p.unit}</span></div>`,
        )
        .join("")
    : '<div class="empty-state">✓ No hay alertas de stock.</div>';
  const acts = inventoryMoves.slice(0, 6);
  recentActivity.innerHTML = acts.length
    ? acts
        .map(
          (m) =>
            `<div class="activity"><div class="activity-icon">${m.type === "ENTRADA" ? "📥" : "📤"}</div><div><strong>${esc(m.product)}</strong><small>${esc(m.type)} · ${esc(m.document)} · ${esc(m.date)}</small></div><b style="margin-left:auto">${m.type === "ENTRADA" ? "+" : "-"}${m.qty}</b></div>`,
        )
        .join("")
    : '<div class="empty-state">Aún no hay movimientos registrados.</div>';
  renderOperationalOrders();
}
function renderPoSupplierInfo() {
  const s = suppliers.find((x) => x.name === poSupplier.value);
  poSupplierInfo.innerHTML = s
    ? `<div class="info-grid"><div class="info"><small>RUC</small><strong>${esc(s.ruc)}</strong></div><div class="info"><small>Contacto</small><strong>${esc(s.contact)}</strong></div><div class="info"><small>Entrega</small><strong>${s.days} días</strong></div><div class="info"><small>Condición</small><strong>${esc(s.payment)}</strong></div></div>`
    : "";
  if (s) poPayment.value = s.payment;
}
function populatePoProducts() {
  poProduct.innerHTML = products
    .filter((p) => p.stock >= 0)
    .map(
      (p) =>
        `<option value="${esc(p.code)}">${esc(p.code)} · ${esc(p.name)} · ${money(p.buy)}</option>`,
    )
    .join("");
  const p = products.find((x) => x.code === poProduct.value);
  if (p) poBuyPrice.value = p.buy;
}
function newPurchaseOrder() {
  poDraft = [];
  poDate.value = new Date().toISOString().slice(0, 10);
  poSupplier.innerHTML = suppliers
    .filter((s) => s.state === "Activo")
    .map((s) => `<option>${esc(s.name)}</option>`)
    .join("");
  populatePoProducts();
  renderPoSupplierInfo();
  renderPoDraft();
  openModule("purchases");
}
function addPoItem() {
  const p = products.find((x) => x.code === poProduct.value);
  const qty = Math.max(1, Number(poQty.value || 1));
  const buy = Number(poBuyPrice.value || p?.buy || 0);
  if (!p || buy <= 0)
    return toast("Selecciona un artículo y precio de compra válido");
  const existing = poDraft.find((x) => x.code === p.code);
  if (existing) {
    existing.qty += qty;
    existing.buy = buy;
  } else poDraft.push({ code: p.code, name: p.name, unit: p.unit, qty, buy });
  renderPoDraft();
}
function removePoItem(i) {
  poDraft.splice(i, 1);
  renderPoDraft();
}
function renderPoDraft() {
  if (!document.getElementById("poItems")) return;
  const subtotal = poDraft.reduce((a, x) => a + x.qty * x.buy, 0),
    tax = subtotal * 0.18,
    total = subtotal + tax,
    qty = poDraft.reduce((a, x) => a + x.qty, 0);
  poItems.innerHTML = poDraft.length
    ? poDraft
        .map(
          (x, i) =>
            `<div class="po-item"><div><strong>${esc(x.name)}</strong><small>${esc(x.code)} · ${esc(x.unit)}</small></div><input type="number" min="1" value="${x.qty}" onchange="poDraft[${i}].qty=Math.max(1,Number(this.value));renderPoDraft()"><input type="number" min="0" step="0.01" value="${x.buy.toFixed(2)}" onchange="poDraft[${i}].buy=Number(this.value);renderPoDraft()"><strong>${money(x.qty * x.buy)}</strong><button class="remove" onclick="removePoItem(${i})">×</button></div>`,
        )
        .join("")
    : '<div class="empty-state">Agrega artículos a la orden. Puedes registrar 3 o más productos.</div>';
  poItemCount.textContent = poDraft.length + " artículos";
  poSummaryItems.textContent = poDraft.length;
  poSummaryQty.textContent = qty;
  poSummarySubtotal.textContent = money(subtotal);
  poSummaryTax.textContent = money(tax);
  poSummaryTotal.textContent = money(total);
}
function clearPoDraft() {
  poDraft = [];
  renderPoDraft();
}
function savePurchaseOrder() {
  if (!poSupplier.value || !poDraft.length)
    return toast("Selecciona proveedor y agrega al menos un artículo");
  const subtotal = poDraft.reduce((a, x) => a + x.qty * x.buy, 0),
    tax = subtotal * 0.18;
  const o = {
    id: "OC-" + String(Date.now()).slice(-7),
    date: poDate.value || new Date().toISOString().slice(0, 10),
    supplier: poSupplier.value,
    payment: poPayment.value,
    items: JSON.parse(JSON.stringify(poDraft)),
    subtotal,
    tax,
    total: subtotal + tax,
    status: "Pendiente",
    createdBy: current ? current.name + " " + current.last : "Sistema",
  };
  purchaseOrders.unshift(o);
  save();
  renderPurchaseOrders();
  renderDashboard();
  toast("Orden de compra " + o.id + " registrada correctamente");
  poDraft = [];
  renderPoDraft();
}
function renderPurchaseOrders() {
  if (!document.getElementById("purchaseOrderTable")) return;
  const q = (poSearch?.value || "").toLowerCase();
  const list = purchaseOrders.filter((o) =>
    (o.id + " " + o.supplier + " " + o.date).toLowerCase().includes(q),
  );
  purchaseOrderTable.innerHTML = list.length
    ? list
        .map(
          (o) =>
            `<tr><td><strong>${o.id}</strong></td><td>${o.date}</td><td>${esc(o.supplier)}</td><td>${o.items.length} / ${o.items.reduce((a, x) => a + x.qty, 0)} un.</td><td>${money(o.total)}</td><td><span class="badge-status ${o.status.toLowerCase()}">${o.status}</span></td><td>${o.status === "Pendiente" ? `<button class="export" onclick="receivePurchaseOrder('${o.id}')">Recibir mercadería</button>` : ""} <button class="export" onclick="printPurchaseOrder('${o.id}')">Ver / imprimir</button></td></tr>`,
        )
        .join("")
    : '<tr><td colspan="7"><div class="empty-state">No hay órdenes de compra registradas.</div></td></tr>';
}
function receivePurchaseOrder(id) {
  const o = purchaseOrders.find((x) => x.id === id);
  if (!o || o.status !== "Pendiente") return;
  if (
    !confirm(
      "¿Confirmar recepción de la mercadería de " +
        id +
        "? El stock será actualizado.",
    )
  )
    return;
  o.status = "Recibida";
  o.receivedDate = new Date().toISOString().slice(0, 10);
  o.items.forEach((x) => {
    const p = products.find((y) => y.code === x.code);
    if (p) {
      p.stock = Number(p.stock) + Number(x.qty);
      inventoryMoves.unshift({
        date: o.receivedDate,
        type: "ENTRADA",
        document: o.id,
        product: p.name,
        qty: x.qty,
        user: current ? current.name + " " + current.last : "Sistema",
        detail: "Recepción de orden de compra",
      });
    }
  });
  save();
  renderPurchaseOrders();
  renderAdminProducts();
  renderReports();
  renderInventory();
  renderDashboard();
  toast("Recepción registrada y stock actualizado");
}
function printPurchaseOrder(id) {
  const o = purchaseOrders.find((x) => x.id === id);
  if (!o) return;
  printArea.innerHTML = `<div style="font-family:Arial;padding:25px"><h1>MarketGo</h1><h2>ORDEN DE COMPRA ${o.id}</h2><p>Fecha: ${o.date}</p><p>Proveedor: ${esc(o.supplier)}</p><p>Condición: ${esc(o.payment)}</p><hr><table style="width:100%;border-collapse:collapse;margin-top:15px"><tr><th style="text-align:left;border-bottom:1px solid #ccc;padding:8px">Código</th><th style="text-align:left;border-bottom:1px solid #ccc;padding:8px">Artículo</th><th style="padding:8px">Cant.</th><th style="padding:8px">P. compra</th><th style="padding:8px">Total</th></tr>${o.items.map((x) => `<tr><td style="padding:8px">${x.code}</td><td style="padding:8px">${esc(x.name)}</td><td style="padding:8px;text-align:center">${x.qty}</td><td style="padding:8px">${money(x.buy)}</td><td style="padding:8px">${money(x.qty * x.buy)}</td></tr>`).join("")}</table><h3 style="text-align:right;margin-top:20px">Total: ${money(o.total)}</h3></div>`;
  printArea.style.display = "block";
  window.print();
  setTimeout(() => (printArea.style.display = "none"), 500);
}
function renderInventory() {
  if (!document.getElementById("inventoryTable")) return;
  invUnits.textContent = products.reduce((a, p) => a + Number(p.stock || 0), 0);
  invEntries.textContent = inventoryMoves.filter(
    (x) => x.type === "ENTRADA",
  ).length;
  invExits.textContent = inventoryMoves.filter(
    (x) => x.type === "SALIDA",
  ).length;
  invAlerts.textContent = products.filter(
    (p) => Number(p.stock) <= Number(p.min),
  ).length;
  inventoryTable.innerHTML = inventoryMoves.length
    ? inventoryMoves
        .map(
          (m) =>
            `<tr><td>${m.date}</td><td><span class="badge-status ${m.type === "ENTRADA" ? "recibida" : "cancelada"}">${m.type}</span></td><td>${esc(m.document)}</td><td>${esc(m.product)}</td><td>${m.qty}</td><td>${esc(m.user)}</td><td>${esc(m.detail || "")}</td></tr>`,
        )
        .join("")
    : '<tr><td colspan="7"><div class="empty-state">Sin movimientos todavía.</div></td></tr>';
}
function exportInventory() {
  exportCSV("marketgo_movimientos_stock.csv", [
    [
      "Fecha",
      "Tipo",
      "Documento",
      "Producto",
      "Cantidad",
      "Usuario",
      "Detalle",
    ],
    ...inventoryMoves.map((m) => [
      m.date,
      m.type,
      m.document,
      m.product,
      m.qty,
      m.user,
      m.detail,
    ]),
  ]);
}
function renderEmployees() {
  if (!document.getElementById("employeeTable")) return;
  const list = users.filter((u) => u.role === "EMPLEADO" || u.role === "ADMIN");
  employeeTable.innerHTML =
    list
      .map((u) => {
        const meta = employeeMeta[u.dni] || {};
        return `<tr><td>${esc(u.dni)}</td><td><strong>${esc(u.name + " " + u.last)}</strong></td><td>${esc(u.email)}</td><td>${esc(meta.position || (u.role === "ADMIN" ? "Administrador(a)" : "Empleado"))}</td><td>${esc(meta.area || "Administración")}</td><td>${esc(meta.hireDate || "-")}</td><td><span class="pill">${esc(meta.state || "Activo")}</span></td><td><button class="export" onclick="editEmployee('${esc(u.dni)}')">Editar</button><button class="export danger" onclick="deactivateEmployee('${esc(u.dni)}')">${meta.state === "Inactivo" ? "Activar" : "Desactivar"}</button></td></tr>`;
      })
      .join("") ||
    '<tr><td colspan="8">No hay empleados registrados.</td></tr>';
}
function openEmployeeModal(dni = "") {
  editEmployeeIndex.value = dni;
  employeeModalTitle.textContent = dni
    ? "Editar empleado"
    : "Registrar empleado";
  const u = users.find((x) => x.dni === dni) || {};
  const m = employeeMeta[dni] || {};
  eDni.value = u.dni || "";
  eDni.readOnly = !!dni;
  eName.value = u.name || "";
  eLast.value = u.last || "";
  eEmail.value = u.email || "";
  ePhone.value = m.phone || "";
  ePosition.value = m.position || "Cajero(a)";
  eArea.value = m.area || "Ventas";
  eHireDate.value = m.hireDate || new Date().toISOString().slice(0, 10);
  eState.value = m.state || "Activo";
  employeeModal.classList.add("show");
}
function editEmployee(dni) {
  openEmployeeModal(dni);
}
function saveEmployee() {
  const dni = eDni.value.trim();
  if (
    !/^\d{8}$/.test(dni) ||
    !eName.value.trim() ||
    !eLast.value.trim() ||
    !eEmail.value.trim()
  )
    return toast("Completa DNI, nombres, apellidos y correo");
  let u = users.find((x) => x.dni === dni);
  if (!u) {
    if (
      users.some(
        (x) => x.email.toLowerCase() === eEmail.value.trim().toLowerCase(),
      )
    )
      return toast("El correo ya está registrado");
    u = {
      dni,
      name: eName.value.trim(),
      last: eLast.value.trim(),
      email: eEmail.value.trim().toLowerCase(),
      pass: "1234",
      role: "EMPLEADO",
    };
    users.push(u);
  } else {
    u.name = eName.value.trim();
    u.last = eLast.value.trim();
    u.email = eEmail.value.trim().toLowerCase();
    if (u.role !== "ADMIN") u.role = "EMPLEADO";
  }
  employeeMeta[dni] = {
    phone: ePhone.value.trim(),
    position: ePosition.value,
    area: eArea.value,
    hireDate: eHireDate.value,
    state: eState.value,
  };
  save();
  renderEmployees();
  closeModal("employeeModal");
  toast("Empleado registrado correctamente");
}
function deactivateEmployee(dni) {
  const u = users.find((x) => x.dni === dni);
  if (!u) return;
  const m = employeeMeta[dni] || {};
  m.state = m.state === "Inactivo" ? "Activo" : "Inactivo";
  employeeMeta[dni] = m;
  save();
  renderEmployees();
  toast(m.state === "Activo" ? "Empleado activado" : "Empleado desactivado");
}
function renderClients() {
  if (!document.getElementById("clientTable")) return;
  const q = (clientSearch?.value || "").toLowerCase(),
    type = clientTypeFilter?.value || "",
    st = clientStatusFilter?.value || "";
  const list = clients.filter(
    (c) =>
      (!q ||
        (c.doc + " " + c.name + " " + c.last + " " + c.phone + " " + c.email)
          .toLowerCase()
          .includes(q)) &&
      (!type || c.type === type) &&
      (!st || c.state === st),
  );
  clientTable.innerHTML = list.length
    ? list
        .map((c) => {
          const i = clients.indexOf(c);
          return `<tr><td><strong>${esc(c.doc)}</strong></td><td><strong>${esc(c.name + " " + c.last)}</strong></td><td>${esc(c.phone)}</td><td>${esc(c.email)}</td><td>${esc(c.district)}</td><td><span class="tag">${esc(c.type)}</span></td><td>${c.payment === "Contado" ? '<span class="tag gray">Contado</span>' : `<span class="tag gold">${esc(c.payment)}</span><small style="display:block;color:var(--muted);margin-top:3px">Límite ${money(c.limit)}</small>`}</td><td>${money(c.purchases)}</td><td><span class="pill">${esc(c.state)}</span></td><td><button class="export" onclick="editClient(${i})">Editar</button><button class="export danger" onclick="toggleClient(${i})">${c.state === "Inactivo" ? "Activar" : "Desactivar"}</button></td></tr>`;
        })
        .join("")
    : '<tr><td colspan="10"><div class="empty-state">No se encontraron clientes.</div></td></tr>';
  clientTotal.textContent = clients.length;
  clientActive.textContent = clients.filter((c) => c.state === "Activo").length;
  clientCredit.textContent = clients.filter(
    (c) => c.payment !== "Contado" && c.state === "Activo",
  ).length;
  clientSales.textContent = money(
    clients.reduce((a, c) => a + Number(c.purchases || 0), 0),
  );
}
function openClientModal(i = "") {
  editClientIndex.value = i;
  clientModalTitle.textContent =
    i === "" ? "Registrar cliente" : "Editar cliente";
  const c = i === "" ? {} : clients[Number(i)];
  cType.value = c.type || "Persona natural";
  cDoc.value = c.doc || "";
  cName.value = c.name || "";
  cLast.value = c.last || "";
  cPhone.value = c.phone || "";
  cEmail.value = c.email || "";
  cAddress.value = c.address || "";
  cDistrict.value = c.district || "San Juan de Lurigancho";
  cPayment.value = c.payment || "Contado";
  cLimit.value = c.limit ?? 0;
  cPurchases.value = c.purchases ?? 0;
  cState.value = c.state || "Activo";
  cDoc.readOnly = i !== "";
  clientModal.classList.add("show");
}
function editClient(i) {
  openClientModal(i);
}
function saveClient() {
  const c = {
    doc: cDoc.value.trim(),
    name: cName.value.trim(),
    last: cLast.value.trim(),
    phone: cPhone.value.trim(),
    email: cEmail.value.trim().toLowerCase(),
    address: cAddress.value.trim(),
    district: cDistrict.value,
    type: cType.value,
    payment: cPayment.value,
    limit: Number(cLimit.value || 0),
    purchases: Number(cPurchases.value || 0),
    state: cState.value,
  };
  if (!c.doc || !c.name || !c.phone) {
    return toast("Completa documento, nombre y celular");
  }
  if (
    clients.some(
      (x, idx) =>
        x.doc === c.doc && String(idx) !== String(editClientIndex.value),
    )
  ) {
    return toast("El documento ya está registrado");
  }
  const i = editClientIndex.value;
  if (i === "") clients.push(c);
  else clients[Number(i)] = c;
  save();
  renderClients();
  closeModal("clientModal");
  toast("Cliente registrado correctamente");
}
function toggleClient(i) {
  clients[i].state = clients[i].state === "Activo" ? "Inactivo" : "Activo";
  save();
  renderClients();
  toast(
    clients[i].state === "Activo" ? "Cliente activado" : "Cliente desactivado",
  );
}
function exportClients() {
  exportCSV("marketgo_clientes.csv", [
    [
      "Documento",
      "Nombres/Razón social",
      "Apellidos/Nombre comercial",
      "Celular",
      "Correo",
      "Dirección",
      "Distrito",
      "Tipo",
      "Condición de pago",
      "Límite crédito",
      "Compras acumuladas",
      "Estado",
    ],
    ...clients.map((c) => [
      c.doc,
      c.name,
      c.last,
      c.phone,
      c.email,
      c.address,
      c.district,
      c.type,
      c.payment,
      c.limit,
      c.purchases,
      c.state,
    ]),
  ]);
}

function renderSuppliers() {
  const q = (supplierSearch?.value || "").toLowerCase();
  const list = suppliers.filter((s) =>
    (s.name + " " + s.ruc + " " + s.category).toLowerCase().includes(q),
  );
  supplierTable.innerHTML =
    list
      .map(
        (s, i) =>
          `<tr><td>${esc(s.ruc)}</td><td>${esc(s.name)}</td><td>${esc(s.phone)}</td><td>${esc(s.category)}</td><td>${
            products
              .filter((p) => p.supplier === s.name)
              .map((p) => p.name)
              .join(", ") || "—"
          }</td><td>${esc(s.rating)}</td><td>${esc(s.state)}</td><td><button class="export" onclick="editSupplier(${i})">Editar</button><button class="export danger" onclick="deleteSupplier(${i})">Eliminar</button></td></tr>`,
      )
      .join("") ||
    '<tr><td colspan="8">No se encontraron proveedores.</td></tr>';
}
function openSupplierModal() {
  editSupplierIndex.value = "";
  supplierModalTitle.textContent = "Nuevo proveedor";
  [
    "sRuc",
    "sName",
    "sPhone",
    "sEmail",
    "sAddress",
    "sContact",
    "sDays",
  ].forEach((id) => (document.getElementById(id).value = ""));
  sPayment.value = "Contado";
  sRating.value = "Bueno";
  sState.value = "Activo";
  supplierModal.classList.add("show");
}
function editSupplier(i) {
  const s = suppliers[i];
  editSupplierIndex.value = i;
  supplierModalTitle.textContent = "Editar proveedor";
  sRuc.value = s.ruc;
  sName.value = s.name;
  sPhone.value = s.phone;
  sEmail.value = s.email;
  sAddress.value = s.address;
  sContact.value = s.contact;
  sDays.value = s.days;
  sPayment.value = s.payment;
  sCategory.value = s.category;
  sRating.value = s.rating;
  sState.value = s.state;
  supplierModal.classList.add("show");
}
function saveSupplier() {
  const s = {
    ruc: sRuc.value.trim(),
    name: sName.value.trim(),
    phone: sPhone.value.trim(),
    email: sEmail.value.trim(),
    address: sAddress.value.trim(),
    contact: sContact.value.trim(),
    days: Number(sDays.value || 0),
    payment: sPayment.value,
    category: sCategory.value,
    rating: sRating.value,
    state: sState.value,
  };
  if (!s.ruc || !s.name) {
    toast("Completa RUC y razón social");
    return;
  }
  const i = editSupplierIndex.value;
  if (i === "") suppliers.push(s);
  else suppliers[Number(i)] = s;
  save();
  fillFilters();
  renderSuppliers();
  closeModal("supplierModal");
  toast("Proveedor guardado");
}
function deleteSupplier(i) {
  if (confirm("¿Eliminar este proveedor?")) {
    suppliers.splice(i, 1);
    save();
    fillFilters();
    renderSuppliers();
    toast("Proveedor eliminado");
  }
}
function renderReports() {
  reportProducts.textContent = products.length;
  if (document.getElementById("reportCategories"))
    reportCategories.textContent = CATS.length;
  reportSuppliers.textContent = suppliers.length;
  if (document.getElementById("reportClients"))
    reportClients.textContent = clients.length;
  reportOffers.textContent = offers.length;
  reportTable.innerHTML = products
    .map(
      (p) =>
        `<tr><td>${p.code}</td><td>${esc(p.name)}<div class="inventory-detail">${esc(p.brand || "")} · ${esc(p.presentation || p.unit)}</div></td><td>${esc(p.category)}</td><td>${esc(p.supplier)}</td><td>${money(p.sell)}</td><td>${p.stock}</td><td>${p.expiryDate || "N/A"}</td><td>${esc(p.lot || "N/D")}</td><td>${p.estado}</td></tr>`,
    )
    .join("");
}
function renderAdminProducts() {
  const q = (adminProductSearch?.value || "").toLowerCase(),
    cat = adminCatFilter?.value || "",
    sf = stockFilter?.value || "";
  const list = products.filter(
    (p) =>
      (!q ||
        (
          p.name +
          " " +
          p.code +
          " " +
          p.supplier +
          " " +
          (p.brand || "") +
          " " +
          (p.barcode || "")
        )
          .toLowerCase()
          .includes(q)) &&
      (!cat || p.category === cat) &&
      (!sf ||
        (sf === "low" && p.stock <= p.min) ||
        (sf === "out" && p.stock === 0) ||
        (sf === "expiry" &&
          p.expiryDate &&
          Math.ceil(
            (new Date(p.expiryDate + "T00:00:00") - new Date()) / 86400000,
          ) <= 30)),
  );
  adminProductTable.innerHTML = list
    .map((p) => {
      const i = products.indexOf(p);
      return `<tr><td>${p.code}</td><td>${esc(p.name)}<div class="inventory-detail">${esc(p.brand || "")} · ${esc(p.presentation || p.unit)}<br>EAN: ${esc(p.barcode || "N/D")}</div></td><td>${esc(p.category)}</td><td>${esc(p.supplier)}</td><td>${money(p.sell)}</td><td>${p.stock}</td><td>${p.expiryDate || "N/A"}</td><td>${esc(p.lot || "N/D")}</td><td>${p.stock === 0 ? "Agotado" : p.stock <= p.min ? "Stock bajo" : "Disponible"}</td><td><button class="export" onclick="openProductModal(${i})">Editar</button><button class="export danger" onclick="deleteProduct(${i})">Eliminar</button></td></tr>`;
    })
    .join("");
}
function openProductModal(i = "") {
  editProductIndex.value = i;
  pCategory.innerHTML = CATS.map((c) => `<option>${esc(c.name)}</option>`).join(
    "",
  );
  pSupplier.innerHTML = suppliers
    .map((s) => `<option>${esc(s.name)}</option>`)
    .join("");
  if (i === "") {
    productModalTitle.textContent = "Nuevo producto";
    pCode.value = "P" + String(products.length + 1).padStart(3, "0");
    pName.value = "";
    pDesc.value = "";
    pBrand.value = "";
    pPresentation.value = "";
    pBuy.value = "";
    pSell.value = "";
    pStock.value = 0;
    pMin.value = 10;
    pBarcode.value = makeBarcode(products.length + 1);
    pLot.value =
      "LT-" +
      new Date().getFullYear() +
      "-" +
      String(products.length + 1).padStart(4, "0");
    pExpiry.value = "";
    pStorage.value = "Ambiente seco";
    pOrigin.value = "Perú";
  } else {
    const p = products[i];
    productModalTitle.textContent = "Editar producto";
    pCode.value = p.code;
    pName.value = p.name;
    pDesc.value = p.description || "";
    pBrand.value = p.brand || "";
    pPresentation.value = p.presentation || "";
    pCategory.value = p.category;
    pSupplier.value = p.supplier;
    pUnit.value = p.unit;
    pBuy.value = p.buy;
    pSell.value = p.sell;
    pStock.value = p.stock;
    pMin.value = p.min;
    pBarcode.value = p.barcode || "";
    pLot.value = p.lot || "";
    pExpiry.value = p.expiryDate || "";
    pStorage.value = p.storage || "Ambiente seco";
    pOrigin.value = p.origin || "Perú";
  }
  productModal.classList.add("show");
}
function saveProduct() {
  const p = {
    code: pCode.value.trim(),
    name: pName.value.trim(),
    description: pDesc.value.trim(),
    brand: pBrand.value.trim(),
    presentation: pPresentation.value.trim(),
    category: pCategory.value,
    supplier: pSupplier.value,
    supplierRuc:
      (suppliers.find((s) => s.name === pSupplier.value) || {}).ruc || "",
    icon: "📦",
    unit: pUnit.value,
    buy: Number(pBuy.value || 0),
    sell: Number(pSell.value || 0),
    stock: Number(pStock.value || 0),
    min: Number(pMin.value || 0),
    barcode: pBarcode.value.trim(),
    lot: pLot.value.trim(),
    expiryDate: pExpiry.value,
    storage: pStorage.value,
    origin: pOrigin.value.trim() || "Perú",
    perishable: !!pExpiry.value,
    estado: "Disponible",
  };
  if (!p.code || !p.name) {
    toast("Completa código y nombre");
    return;
  }
  const i = editProductIndex.value;
  if (i === "") products.push(p);
  else products[Number(i)] = p;
  save();
  renderProducts();
  renderAdminProducts();
  renderReports();
  renderDashboard();
  closeModal("productModal");
  toast("Producto guardado con ficha completa");
}
function deleteProduct(i) {
  if (confirm("¿Eliminar este producto?")) {
    products.splice(i, 1);
    save();
    renderProducts();
    renderAdminProducts();
    renderReports();
    renderDashboard();
    toast("Producto eliminado");
  }
}
function closeModal(id) {
  document.getElementById(id).classList.remove("show");
}
function exportCSV(filename, rows) {
  const csv = rows
    .map((r) =>
      r.map((v) => '"' + String(v ?? "").replace(/"/g, '""') + '"').join(";"),
    )
    .join("\n");
  const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
  toast("Archivo Excel generado");
}
function exportCategories() {
  exportCSV("marketgo_categorias.csv", [
    ["Código", "Categoría", "Descripción"],
    ...CATS.map((c) => [c.id, c.name, c.desc]),
  ]);
}
function exportSuppliers() {
  exportCSV("marketgo_proveedores.csv", [
    [
      "RUC",
      "Razón social",
      "Teléfono",
      "Correo",
      "Dirección",
      "Categoría",
      "Puntualidad",
      "Estado",
    ],
    ...suppliers.map((s) => [
      s.ruc,
      s.name,
      s.phone,
      s.email,
      s.address,
      s.category,
      s.rating,
      s.state,
    ]),
  ]);
}
function exportProducts() {
  exportCSV("marketgo_productos.csv", [
    [
      "Código",
      "Producto",
      "Marca",
      "Presentación",
      "Categoría",
      "Proveedor",
      "EAN",
      "Lote",
      "Caducidad",
      "Almacenamiento",
      "Precio compra",
      "Precio venta",
      "Stock",
      "Stock mínimo",
      "Estado",
    ],
    ...products.map((p) => [
      p.code,
      p.name,
      p.brand,
      p.presentation,
      p.category,
      p.supplier,
      p.barcode,
      p.lot,
      p.expiryDate || "N/A",
      p.storage,
      p.buy,
      p.sell,
      p.stock,
      p.min,
      p.estado,
    ]),
  ]);
}
function exportReport() {
  exportProducts();
}
function printReport() {
  printArea.innerHTML = `<h1>MarketGo</h1><h2>Reporte de productos</h2><p>Fecha: ${new Date().toLocaleString("es-PE")}</p><table style="width:100%;border-collapse:collapse;margin-top:15px"><tr><th style="border:1px solid #ccc;padding:6px">Código</th><th style="border:1px solid #ccc;padding:6px">Producto</th><th style="border:1px solid #ccc;padding:6px">Categoría</th><th style="border:1px solid #ccc;padding:6px">Proveedor</th><th style="border:1px solid #ccc;padding:6px">Stock</th></tr>${products.map((p) => `<tr><td style="border:1px solid #ccc;padding:6px">${p.code}</td><td style="border:1px solid #ccc;padding:6px">${esc(p.name)}</td><td style="border:1px solid #ccc;padding:6px">${esc(p.category)}</td><td style="border:1px solid #ccc;padding:6px">${esc(p.supplier)}</td><td style="border:1px solid #ccc;padding:6px">${p.stock}</td></tr>`).join("")}</table>`;
  printArea.style.display = "block";
  window.print();
  setTimeout(() => (printArea.style.display = "none"), 500);
}
function seedOperationalDemo() {
  // Datos ficticios de demostración para que el sistema parezca una operación en marcha.
  const today = new Date();
  const iso = (d) =>
    new Date(today.getTime() - d * 86400000).toISOString().slice(0, 10);
  // Credenciales de administración y empleados ficticios.
  const staff = [
    [
      "10000001",
      "Luis",
      "Paredes",
      "luis.paredes@marketgo.pe",
      "ADMIN",
      "Gerente de Operaciones",
      "Administración",
      "2024-01-08",
    ],
    [
      "10000002",
      "Andrea",
      "Salazar",
      "andrea.salazar@marketgo.pe",
      "EMPLEADO",
      "Jefa de Compras",
      "Compras",
      "2024-03-12",
    ],
    [
      "10000003",
      "Miguel",
      "Torres",
      "miguel.torres@marketgo.pe",
      "EMPLEADO",
      "Encargado de Almacén",
      "Logística",
      "2024-05-20",
    ],
    [
      "10000004",
      "Carla",
      "Ramos",
      "carla.ramos@marketgo.pe",
      "EMPLEADO",
      "Cajera Principal",
      "Ventas",
      "2025-01-15",
    ],
    [
      "10000005",
      "Diego",
      "Huamán",
      "diego.huaman@marketgo.pe",
      "EMPLEADO",
      "Auxiliar de Almacén",
      "Logística",
      "2025-02-03",
    ],
    [
      "10000006",
      "Paola",
      "Vargas",
      "paola.vargas@marketgo.pe",
      "EMPLEADO",
      "Supervisora de Ventas",
      "Ventas",
      "2025-04-18",
    ],
    [
      "10000007",
      "Jorge",
      "Mendoza",
      "jorge.mendoza@marketgo.pe",
      "EMPLEADO",
      "Reponedor",
      "Operaciones",
      "2025-07-07",
    ],
    [
      "10000008",
      "Sofía",
      "Castillo",
      "sofia.castillo@marketgo.pe",
      "EMPLEADO",
      "Atención al Cliente",
      "Servicio",
      "2025-09-22",
    ],
  ];
  staff.forEach((x, i) => {
    if (!users.some((u) => u.dni === x[0]))
      users.push({
        dni: x[0],
        name: x[1],
        last: x[2],
        email: x[3],
        pass: "1234",
        role: x[4],
      });
    employeeMeta[x[0]] = {
      position: x[5],
      area: x[6],
      hireDate: x[7],
      state: "Activo",
    };
  });
  const admin = users.find((u) => u.email === "admin@marketgo.pe");
  if (admin) admin.pass = "Admin2026*";
  // Catálogo adicional: 120 SKUs realistas, con perecibles y lotes.
  if (!localStorage.getItem("marketgo_catalog_v4")) {
    const catalog = [
      ["Abarrotes", "Arroz Extra Costeño 5 kg", "Costeño", "5 kg", "Bolsa"],
      ["Abarrotes", "Aceite Vegetal Primor 1 L", "Primor", "1 L", "Unidad"],
      ["Abarrotes", "Azúcar Rubia 1 kg", "Cartavio", "1 kg", "Bolsa"],
      [
        "Abarrotes",
        "Atún Florida en aceite 170 g",
        "Florida",
        "170 g",
        "Unidad",
      ],
      [
        "Abarrotes",
        "Fideos Spaghetti 500 g",
        "Don Vittorio",
        "500 g",
        "Unidad",
      ],
      ["Abarrotes", "Lenteja 500 g", "Costeño", "500 g", "Bolsa"],
      ["Abarrotes", "Frejol Canario 500 g", "Costeño", "500 g", "Bolsa"],
      ["Abarrotes", "Harina sin preparar 1 kg", "Blanca Flor", "1 kg", "Bolsa"],
      ["Abarrotes", "Mayonesa 950 g", "Alacena", "950 g", "Unidad"],
      ["Abarrotes", "Salsa de tomate 160 g", "Molitalia", "160 g", "Unidad"],
      ["Bebidas", "Agua sin gas 625 ml", "San Luis", "625 ml", "Unidad"],
      ["Bebidas", "Gaseosa Inca Kola 3 L", "Inca Kola", "3 L", "Unidad"],
      ["Bebidas", "Gaseosa Coca-Cola 1.5 L", "Coca-Cola", "1.5 L", "Unidad"],
      ["Bebidas", "Jugo de naranja 1 L", "Gloria", "1 L", "Unidad"],
      ["Bebidas", "Bebida energizante 473 ml", "Volt", "473 ml", "Unidad"],
      ["Bebidas", "Agua mineral 2.5 L", "Cielo", "2.5 L", "Unidad"],
      ["Bebidas", "Té helado limón 500 ml", "Free Tea", "500 ml", "Unidad"],
      ["Bebidas", "Bebida de avena 1 L", "Laive", "1 L", "Unidad"],
      ["Bebidas", "Néctar durazno 1 L", "Frugos", "1 L", "Unidad"],
      ["Bebidas", "Agua con gas 625 ml", "San Luis", "625 ml", "Unidad"],
      ["Lácteos", "Leche evaporada 400 g", "Gloria", "400 g", "Unidad"],
      ["Lácteos", "Yogur fresa 1 kg", "Gloria", "1 kg", "Unidad"],
      ["Lácteos", "Yogur natural 1 kg", "Laive", "1 kg", "Unidad"],
      ["Lácteos", "Queso fresco 250 g", "Laive", "250 g", "Unidad"],
      ["Lácteos", "Mantequilla 200 g", "Gloria", "200 g", "Unidad"],
      ["Lácteos", "Leche UHT entera 1 L", "Gloria", "1 L", "Unidad"],
      ["Lácteos", "Leche UHT descremada 1 L", "Laive", "1 L", "Unidad"],
      [
        "Lácteos",
        "Yogur bebible vainilla 330 ml",
        "Gloria",
        "330 ml",
        "Unidad",
      ],
      ["Lácteos", "Queso edam 500 g", "Laive", "500 g", "Unidad"],
      ["Lácteos", "Crema de leche 200 ml", "Nestlé", "200 ml", "Unidad"],
      ["Limpieza", "Detergente polvo 3 kg", "Bolívar", "3 kg", "Unidad"],
      ["Limpieza", "Lavavajilla limón 750 ml", "Ayudín", "750 ml", "Unidad"],
      ["Limpieza", "Lejía 1 L", "Clorox", "1 L", "Unidad"],
      ["Limpieza", "Desinfectante floral 900 ml", "Poett", "900 ml", "Unidad"],
      ["Limpieza", "Suavizante 1.5 L", "Downy", "1.5 L", "Unidad"],
      ["Limpieza", "Limpiavidrios 500 ml", "Sapolio", "500 ml", "Unidad"],
      ["Limpieza", "Esponja multiuso x3", "Scotch-Brite", "x3", "Pack"],
      ["Limpieza", "Limpiador pisos 1 L", "Sapolio", "1 L", "Unidad"],
      ["Limpieza", "Jabón ropa 200 g", "Bolívar", "200 g", "Unidad"],
      ["Limpieza", "Guantes domésticos talla M", "Virutex", "M", "Par"],
      ["Snacks y golosinas", "Galleta soda 6 pack", "Field", "6 pack", "Pack"],
      [
        "Snacks y golosinas",
        "Galleta chocolate 6 pack",
        "Tentación",
        "6 pack",
        "Pack",
      ],
      ["Snacks y golosinas", "Papas fritas 150 g", "Lays", "150 g", "Unidad"],
      ["Snacks y golosinas", "Chizitos 100 g", "Frito Lay", "100 g", "Unidad"],
      [
        "Snacks y golosinas",
        "Chocolate con leche 100 g",
        "Sublime",
        "100 g",
        "Unidad",
      ],
      [
        "Snacks y golosinas",
        "Caramelo surtido 500 g",
        "Ambrosoli",
        "500 g",
        "Bolsa",
      ],
      ["Snacks y golosinas", "Chicle menta x10", "Trident", "x10", "Pack"],
      [
        "Snacks y golosinas",
        "Wafer chocolate 90 g",
        "Casino",
        "90 g",
        "Unidad",
      ],
      [
        "Snacks y golosinas",
        "Gomitas frutales 100 g",
        "Mogul",
        "100 g",
        "Unidad",
      ],
      ["Snacks y golosinas", "Maní salado 150 g", "Karinto", "150 g", "Unidad"],
      [
        "Cuidado personal",
        "Shampoo familiar 650 ml",
        "Pantene",
        "650 ml",
        "Unidad",
      ],
      ["Cuidado personal", "Jabón tocador 125 g", "Dove", "125 g", "Unidad"],
      ["Cuidado personal", "Pasta dental 90 g", "Colgate", "90 g", "Unidad"],
      ["Cuidado personal", "Papel higiénico x4", "Elite", "x4", "Pack"],
      [
        "Cuidado personal",
        "Desodorante aerosol 150 ml",
        "Rexona",
        "150 ml",
        "Unidad",
      ],
      [
        "Cuidado personal",
        "Acondicionador 650 ml",
        "Pantene",
        "650 ml",
        "Unidad",
      ],
      [
        "Cuidado personal",
        "Cepillo dental medio",
        "Colgate",
        "Unidad",
        "Unidad",
      ],
      ["Cuidado personal", "Toallas húmedas x80", "Huggies", "x80", "Pack"],
      ["Cuidado personal", "Jabón líquido 400 ml", "Dove", "400 ml", "Unidad"],
      [
        "Cuidado personal",
        "Crema corporal 400 ml",
        "Nivea",
        "400 ml",
        "Unidad",
      ],
      ["Panadería", "Pan francés x10", "MarketGo", "x10", "Pack"],
      ["Panadería", "Pan integral 500 g", "Bimbo", "500 g", "Unidad"],
      ["Panadería", "Pan molde blanco 500 g", "Bimbo", "500 g", "Unidad"],
      ["Panadería", "Croissant mantequilla x4", "MarketGo", "x4", "Pack"],
      ["Panadería", "Bizcocho vainilla 400 g", "MarketGo", "400 g", "Unidad"],
      ["Panadería", "Pan hamburguesa x6", "Bimbo", "x6", "Pack"],
      ["Panadería", "Tostadas 250 g", "Bimbo", "250 g", "Unidad"],
      ["Panadería", "Queque marmoleado 450 g", "MarketGo", "450 g", "Unidad"],
      ["Panadería", "Rosquitas 300 g", "MarketGo", "300 g", "Unidad"],
      ["Panadería", "Pan hot dog x6", "Bimbo", "x6", "Pack"],
      ["Congelados", "Nuggets de pollo 500 g", "Redondos", "500 g", "Bolsa"],
      ["Congelados", "Hamburguesa carne x8", "San Fernando", "x8", "Caja"],
      ["Congelados", "Papas prefritas 1 kg", "McCain", "1 kg", "Bolsa"],
      ["Congelados", "Arvejas congeladas 500 g", "La Huerta", "500 g", "Bolsa"],
      ["Congelados", "Choclo congelado 500 g", "La Huerta", "500 g", "Bolsa"],
      ["Congelados", "Filete de pollo 1 kg", "San Fernando", "1 kg", "Bolsa"],
      ["Congelados", "Pizza familiar 450 g", "Bresler", "450 g", "Unidad"],
      ["Congelados", "Helado vainilla 1 L", "D’Onofrio", "1 L", "Unidad"],
      ["Congelados", "Mixto verduras 500 g", "La Huerta", "500 g", "Bolsa"],
      ["Congelados", "Hamburguesa pollo x6", "San Fernando", "x6", "Caja"],
      ["Mascotas", "Alimento perro adulto 3 kg", "Ricocan", "3 kg", "Bolsa"],
      ["Mascotas", "Alimento gato 1 kg", "Ricocat", "1 kg", "Bolsa"],
      ["Mascotas", "Arena sanitaria 5 kg", "Mimaskot", "5 kg", "Bolsa"],
      ["Mascotas", "Snacks perro 100 g", "Mimaskot", "100 g", "Bolsa"],
      ["Mascotas", "Shampoo mascota 250 ml", "Ricocan", "250 ml", "Unidad"],
      ["Mascotas", "Alimento cachorro 1 kg", "Ricocan", "1 kg", "Bolsa"],
      [
        "Mascotas",
        "Alimento gato esterilizado 1 kg",
        "Ricocat",
        "1 kg",
        "Bolsa",
      ],
      ["Mascotas", "Arena aglomerante 10 kg", "Mimaskot", "10 kg", "Bolsa"],
      ["Mascotas", "Juguete pelota mediana", "Mimaskot", "Unidad", "Unidad"],
      ["Mascotas", "Comedero plástico mediano", "Mimaskot", "Unidad", "Unidad"],
      [
        "Despensa seca",
        "Avena instantánea 500 g",
        "3 Ositos",
        "500 g",
        "Bolsa",
      ],
      ["Despensa seca", "Quinua 500 g", "Costeño", "500 g", "Bolsa"],
      ["Despensa seca", "Canela molida 50 g", "McCormick", "50 g", "Unidad"],
      ["Despensa seca", "Orégano 30 g", "Sibarita", "30 g", "Unidad"],
      ["Despensa seca", "Caldo de gallina x8", "Maggi", "x8", "Caja"],
      ["Despensa seca", "Sal yodada 1 kg", "Emsal", "1 kg", "Bolsa"],
      ["Despensa seca", "Pimienta negra 50 g", "Sibarita", "50 g", "Unidad"],
      ["Despensa seca", "Cocoa 160 g", "Winter’s", "160 g", "Unidad"],
      ["Despensa seca", "Gelatina fresa 150 g", "Universal", "150 g", "Caja"],
      ["Despensa seca", "Mermelada fresa 250 g", "Fanny", "250 g", "Unidad"],
      ["Hogar", "Bolsas basura 50 L x20", "Virutex", "x20", "Pack"],
      ["Hogar", "Foco LED 12W", "Philips", "12W", "Unidad"],
      ["Hogar", "Papel aluminio 10 m", "Reynolds", "10 m", "Unidad"],
      ["Hogar", "Film transparente 30 m", "Alusa", "30 m", "Unidad"],
      ["Hogar", "Escoba doméstica", "Virutex", "Unidad", "Unidad"],
      ["Hogar", "Recogedor plástico", "Virutex", "Unidad", "Unidad"],
      ["Hogar", "Trapeador algodón", "Virutex", "Unidad", "Unidad"],
      ["Hogar", "Taper hermético 1 L", "Rey", "1 L", "Unidad"],
      ["Hogar", "Vaso plástico x6", "Rey", "x6", "Pack"],
      ["Hogar", "Plato descartable x25", "Rey", "x25", "Pack"],
      ["Frutas y verduras", "Papa blanca 1 kg", "Valle Verde", "1 kg", "Kg"],
      ["Frutas y verduras", "Papa amarilla 1 kg", "Valle Verde", "1 kg", "Kg"],
      [
        "Frutas y verduras",
        "Tomate italiano 1 kg",
        "Valle Verde",
        "1 kg",
        "Kg",
      ],
      ["Frutas y verduras", "Cebolla roja 1 kg", "Valle Verde", "1 kg", "Kg"],
      ["Frutas y verduras", "Zanahoria 1 kg", "Valle Verde", "1 kg", "Kg"],
      [
        "Frutas y verduras",
        "Plátano de seda 1 kg",
        "Valle Verde",
        "1 kg",
        "Kg",
      ],
      ["Frutas y verduras", "Manzana royal 1 kg", "Valle Verde", "1 kg", "Kg"],
      [
        "Frutas y verduras",
        "Naranja para jugo 1 kg",
        "Valle Verde",
        "1 kg",
        "Kg",
      ],
      [
        "Frutas y verduras",
        "Lechuga americana 1 und",
        "Valle Verde",
        "1 und",
        "Unidad",
      ],
      ["Frutas y verduras", "Pepino 1 kg", "Valle Verde", "1 kg", "Kg"],
    ];
    catalog.forEach((x, i) => {
      const code = "P" + String(products.length + i + 1).padStart(4, "0");
      const cat = x[0],
        fresh =
          cat === "Frutas y verduras" ||
          cat === "Lácteos" ||
          cat === "Panadería" ||
          cat === "Congelados";
      const supplier =
        suppliers.find((s) => s.category === cat) || suppliers[0];
      const buy = Number((2.2 + (i % 17) * 1.15).toFixed(2));
      const sell = Number((buy * 1.28 + 0.35).toFixed(2));
      const expiry = fresh
        ? new Date(
            today.getTime() +
              (cat === "Frutas y verduras" ? 4 + (i % 10) : 25 + (i % 70)) *
                86400000,
          )
            .toISOString()
            .slice(0, 10)
        : "";
      products.push({
        code,
        name: x[1],
        description:
          "Producto de demostración para operación de tienda y control de inventario.",
        brand: x[2],
        presentation: x[3],
        category: cat,
        supplier: supplier.name,
        supplierRuc: supplier.ruc,
        icon: CATS.find((c) => c.name === cat)?.icon || "📦",
        unit: x[4],
        buy,
        sell,
        stock: 10 + ((i * 7) % 85),
        min: 8 + (i % 12),
        barcode: "775" + String(100000000 + i).padStart(9, "0"),
        lot: "LT26-" + String(i + 1).padStart(4, "0"),
        expiryDate: expiry,
        storage: fresh
          ? cat === "Congelados"
            ? "Congelado"
            : cat === "Lácteos"
              ? "Refrigerado"
              : "Fresco / ventilado"
          : "Ambiente seco",
        origin: "Perú",
        perishable: fresh,
        estado: "Disponible",
      });
    });
    localStorage.setItem("marketgo_catalog_v4", "1");
  }
  // Pedidos de venta ficticios para el panel operativo e historial.
  if (!localStorage.getItem("marketgo_orders_v4")) {
    const names = [
      "María Elena Quispe Rojas",
      "Carlos Alberto Mendoza Salazar",
      "Rosa Isabel Paredes Huamán",
      "Bodega La Esquina S.A.C.",
      "José Luis Ramírez",
      "Patricia Flores Gómez",
      "Comercial El Ahorro S.R.L.",
      "Lucía Fernández",
      "Miguel Ángel Soto",
      "MiniMarket Los Olivos",
      "Ana Torres",
      "Pedro Castillo",
    ];
    const statuses = [
      "Entregado",
      "Entregado",
      "En preparación",
      "Pendiente",
      "Entregado",
      "Enviado",
      "Entregado",
      "En preparación",
      "Pendiente",
      "Entregado",
      "Entregado",
      "Enviado",
    ];
    for (let i = 0; i < 12; i++) {
      const p1 = products[(i * 7) % products.length],
        p2 = products[(i * 11 + 3) % products.length],
        items = [
          { code: p1.code, name: p1.name, qty: 1 + (i % 4), price: p1.sell },
          {
            code: p2.code,
            name: p2.name,
            qty: 1 + ((i + 1) % 3),
            price: p2.sell,
          },
        ];
      const subtotal = items.reduce((a, x) => a + x.qty * x.price, 0),
        o = {
          id: "PED-" + String(260900 + i + 1),
          date: iso(i + (i % 3) * 2),
          items,
          total: Number((subtotal * 1.18).toFixed(2)),
          payment: i % 3 === 0 ? "Yape" : i % 3 === 1 ? "Tarjeta" : "Efectivo",
          address:
            [
              "San Juan de Lurigancho",
              "Los Olivos",
              "San Martín de Porres",
              "Ate",
              "Comas",
            ][i % 5] + ", Lima",
          status: statuses[i],
          customer: names[i],
        };
      orders.push(o);
    }
    localStorage.setItem("marketgo_orders_v4", "1");
  }
  // Órdenes de compra de proveedores.
  if (!localStorage.getItem("marketgo_po_v4")) {
    for (let i = 0; i < 8; i++) {
      const supplier = suppliers[(i * 3) % suppliers.length],
        p1 = products[(i * 5) % products.length],
        p2 = products[(i * 5 + 2) % products.length],
        items = [
          {
            code: p1.code,
            name: p1.name,
            unit: p1.unit,
            qty: 8 + i * 2,
            buy: p1.buy,
          },
          {
            code: p2.code,
            name: p2.name,
            unit: p2.unit,
            qty: 10 + i,
            buy: p2.buy,
          },
        ];
      const subtotal = items.reduce((a, x) => a + x.qty * x.buy, 0);
      purchaseOrders.push({
        id: "OC-2609" + String(20 + i),
        date: iso(i + 1),
        supplier: supplier.name,
        payment: supplier.payment,
        items,
        subtotal,
        tax: subtotal * 0.18,
        total: subtotal * 1.18,
        status: i < 2 ? "Pendiente" : i === 2 ? "Pendiente" : "Recibida",
        createdBy: ["Andrea Salazar", "Luis Paredes", "Miguel Torres"][i % 3],
      });
    }
    localStorage.setItem("marketgo_po_v4", "1");
  }
  // Kardex ficticio con entradas y salidas.
  if (!localStorage.getItem("marketgo_inventory_v4")) {
    for (let i = 0; i < 28; i++) {
      const p = products[(i * 9) % products.length];
      inventoryMoves.push({
        date: iso(i % 14),
        type: i % 3 === 0 ? "SALIDA" : "ENTRADA",
        document:
          i % 3 === 0
            ? "PED-" + String(260800 + i)
            : "OC-2609" + String(10 + (i % 8)),
        product: p.name,
        qty: 3 + (i % 12),
        user: [
          "Miguel Torres",
          "Diego Huamán",
          "Carla Ramos",
          "Andrea Salazar",
        ][i % 4],
        detail:
          i % 3 === 0
            ? "Venta registrada y stock descontado"
            : "Recepción de mercadería del proveedor",
      });
    }
    localStorage.setItem("marketgo_inventory_v4", "1");
  }
  save();
}
function renderOperationalOrders() {
  const el = document.getElementById("operationalOrdersTable");
  if (!el) return;
  const list = orders
    .slice()
    .sort((a, b) => String(b.date).localeCompare(String(a.date)))
    .slice(0, 8);
  el.innerHTML =
    list
      .map(
        (o) =>
          `<tr><td><strong>${esc(o.id)}</strong></td><td>${esc(o.customer || "Cliente registrado")}</td><td>${esc(o.date)}</td><td>${o.items?.reduce((a, x) => a + Number(x.qty || 0), 0) || 0} un.</td><td>${money(o.total)}</td><td>${esc(o.payment || "Contado")}</td><td><span class="badge-status ${o.status === "Entregado" ? "recibida" : o.status === "Pendiente" ? "pendiente" : "warn"}">${esc(o.status)}</span></td></tr>`,
      )
      .join("") || '<tr><td colspan="7">No hay pedidos.</td></tr>';
}
seedOperationalDemo();
// Credenciales demo: admin@marketgo.pe / Admin2026*
window.addEventListener("DOMContentLoaded", () => {
  if (current) boot();
  else showAuth("login");
});
