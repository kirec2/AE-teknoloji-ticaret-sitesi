// Çeviri nesnesi
const translations = {
    tr: {
        // Genel
        searchPlaceholder: "Ürün, kategori veya marka ara...",
        searchButton: "Ara",
        
        // Menü
        home: "Ana Sayfa",
        products: "Ürün",
        favorites: "Favori",
        account: "Hesap",
        
        // Ürünler Sayfası
        allProducts: "Tüm Ürünler",
        sortBy: "Sıralama",
        lowestPrice: "En Düşük Fiyat",
        highestPrice: "En Yüksek Fiyat",
        bestSellers: "Çok Satanlar",
        discountRate: "İndirim Oranı",
        highestRated: "Yüksek Puanlılar",
        newest: "Yeni Eklenenler",
        
        // Sepet Sayfası
        product: "Ürün",
        quantity: "Miktar",
        total: "Toplam",
        remove: "Kaldır",
        totalPrice: "Toplam Fiyat",
        
        // Hesap Sayfası
        login: "Giriş Yap",
        register: "Kayıt Ol",
        username: "Kullanıcı Adı",
        password: "Şifre",
        email: "E-posta",
        forgotPassword: "Şifremi Unuttum",
        
        // Favoriler Sayfası
        myFavorites: "Favori Ürünlerim",
        removeFromFavorites: "Favorilerden Çıkar",
        addToCart: "Sepete Ekle",
        noFavorites: "Henüz favori ürününüz bulunmuyor",
        visitProducts: "Ürünleri keşfetmek için ürünler sayfasını ziyaret edebilirsiniz.",
        urunlerimiz: "Ürünlerimiz",
        siparisVer: "Sipariş Ver",
        iletisimeGec: "İletişime Geç"
    },
    en: {
        // General
        searchPlaceholder: "Search for products, categories or brands...",
        searchButton: "Search",
        
        // Menu
        home: "Home",
        products: "Products",
        favorites: "Favorites",
        account: "Account",
        
        // Products Page
        allProducts: "All Products",
        sortBy: "Sort By",
        lowestPrice: "Lowest Price",
        highestPrice: "Highest Price",
        bestSellers: "Best Sellers",
        discountRate: "Discount Rate",
        highestRated: "Highest Rated",
        newest: "Newest",
        
        // Cart Page
        product: "Product",
        quantity: "Quantity",
        total: "Total",
        remove: "Remove",
        totalPrice: "Total Price",
        
        // Account Page
        login: "Login",
        register: "Register",
        username: "Username",
        password: "Password",
        email: "Email",
        forgotPassword: "Forgot Password",
        
        // Favorites Page
        myFavorites: "My Favorites",
        removeFromFavorites: "Remove from Favorites",
        addToCart: "Add to Cart",
        noFavorites: "You don't have any favorite products yet",
        visitProducts: "You can visit the products page to explore products.",
        urunlerimiz: "Our Products",
        siparisVer: "Order Now",
        iletisimeGec: "Contact Us"
    }
};

// Dil değiştirme fonksiyonu
function changeLanguage() {
    const selectedLanguage = document.getElementById('languageSelect').value;
    localStorage.setItem('language', selectedLanguage);
    updatePageContent(selectedLanguage);
}

// Sayfa içeriğini güncelleme fonksiyonu
function updatePageContent(language) {
    const translation = translations[language];
    
    // Arama çubuğu
    const searchInput = document.querySelector('.search-bar-input');
    const searchButton = document.querySelector('.search-bar button');
    if (searchInput) searchInput.placeholder = translation.searchPlaceholder;
    if (searchButton) searchButton.textContent = translation.searchButton;
    
    // Menü öğeleri
    const menuItems = document.querySelectorAll('#MenuItems a');
    if (menuItems.length >= 4) {
        menuItems[0].textContent = translation.home;
        menuItems[1].textContent = translation.products;
        menuItems[2].textContent = translation.favorites;
        menuItems[3].textContent = translation.account;
    }
    
    // Başlıklar
    const titles = document.querySelectorAll('.title');
    titles.forEach(title => {
        if (title.textContent.includes("Tüm Ürünler")) title.textContent = translation.allProducts;
        if (title.textContent.includes("Favori Ürünlerim")) title.textContent = translation.myFavorites;
    });
    
    // Sıralama seçenekleri
    const sortSelect = document.querySelector('select');
    if (sortSelect) {
        const options = sortSelect.querySelectorAll('option');
        if (options.length >= 7) {
            options[0].textContent = translation.sortBy;
            options[1].textContent = translation.lowestPrice;
            options[2].textContent = translation.highestPrice;
            options[3].textContent = translation.bestSellers;
            options[4].textContent = translation.discountRate;
            options[5].textContent = translation.highestRated;
            options[6].textContent = translation.newest;
        }
    }
    
    // Sepet sayfası içeriği
    const cartTable = document.querySelector('.cart-page table');
    if (cartTable) {
        const thElements = cartTable.querySelectorAll('th');
        if (thElements.length >= 3) {
            thElements[0].textContent = translation.product;
            thElements[1].textContent = translation.quantity;
            thElements[2].textContent = translation.total;
        }
        
        const removeLinks = cartTable.querySelectorAll('a');
        removeLinks.forEach(link => {
            if (link.textContent.includes("Remove")) link.textContent = translation.remove;
        });
        
        const totalPrice = document.querySelector('.total-price td:first-child');
        if (totalPrice) totalPrice.textContent = translation.totalPrice;
    }
    
    // Hesap sayfası içeriği
    const formButtons = document.querySelectorAll('.form-button span');
    if (formButtons.length >= 2) {
        formButtons[0].textContent = translation.login;
        formButtons[1].textContent = translation.register;
    }
    
    const formInputs = document.querySelectorAll('form input');
    formInputs.forEach(input => {
        if (input.placeholder.includes("Username")) input.placeholder = translation.username;
        if (input.placeholder.includes("Password")) input.placeholder = translation.password;
        if (input.placeholder.includes("Email")) input.placeholder = translation.email;
    });
    
    const forgotPassword = document.querySelector('form a');
    if (forgotPassword) forgotPassword.textContent = translation.forgotPassword;
    
    // Tüm başlıkları çevir
    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
        const text = heading.textContent.trim();
        for (const key in translations['tr']) {
            if (translations['tr'][key] === text) {
                heading.textContent = translation[key];
                break;
            }
        }
    });
    
    // Tüm butonları çevir
    document.querySelectorAll('button').forEach(button => {
        const text = button.textContent.trim();
        for (const key in translations['tr']) {
            if (translations['tr'][key] === text) {
                button.textContent = translation[key];
                break;
            }
        }
    });
}

// Sayfa yüklendiğinde kaydedilmiş dili yükle
window.onload = function() {
    const savedLanguage = localStorage.getItem('language') || 'tr';
    document.getElementById('languageSelect').value = savedLanguage;
    updatePageContent(savedLanguage);
}

// Menü toggle fonksiyonu
var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}
