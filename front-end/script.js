const BASE_URL = 'http://localhost:3001/api';

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
        cargoTracking: "Kargo Takip",
        series: "Seriler",
        
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
        iletisimeGec: "İletişime Geç",
        productDetails: "Ürün Detayları",
        addToCart: "Sepete Ekle",
        addToFavorites: "Favorilere Ekle",
        price: "Fiyat",
        series: "Seri",
        description: "Açıklama",
        reviews: "Kullanıcı Yorumları",
        writeReview: "Yorum Yaz",
        rating: "Puan",
        yourReview: "Yorumunuz...",
        submitReview: "Yorumu Gönder",
        noReviews: "Henüz yorum yok.",
        paymentScreen: "Ödeme Ekranı",
        selectAddress: "Adres Seçiniz:",
        selectCard: "Kart Seçiniz:",
        completePayment: "Ödemeyi Tamamla",
        paymentSuccess: "Ödeme başarılı! Siparişiniz alındı.",
        loading: "Yükleniyor...",
        noAddress: "Kayıtlı adres yok.",
        noCard: "Kayıtlı kart yok.",
        remove: "Kaldır",
        quantity: "Miktar",
        total: "Toplam",
        totalPrice: "Toplam Fiyat",
        checkout: "Ödemeye Geç",
        favorites: "Favori",
        myFavorites: "Favori Ürünlerim",
        noFavorites: "Henüz favori ürününüz bulunmuyor",
        visitProducts: "Ürünleri keşfetmek için ürünler sayfasını ziyaret edebilirsiniz.",
        addressInfo: "Adres Bilgileri",
        cardInfo: "Kart Bilgileri",
        logout: "Çıkış Yap",
        save: "Kaydet",
        city: "İl",
        district: "İlçe",
        neighborhood: "Mahalle",
        address: "Adres",
        cardNumber: "Kart Numarası",
        cardName: "Kart Üzerindeki İsim",
        expiryDate: "Son Kullanma Tarihi",
        // Kişi Bilgileri Sayfası
        accountInfo: "Hesap Bilgileri",
        savedAddresses: "Kayıtlı Adreslerim",
        savedCardInfo: "Kayıtlı Kart Bilgim",
        loading: "Yükleniyor...",
        noSavedAddress: "Henüz kayıtlı adres bulunmuyor.",
        noSavedCard: "Henüz kayıtlı kart bulunmuyor.",
        addressCard: "Adres",
        cardOwner: "Kart Sahibi",
        savedCardDetails: "Kayıtlı Kart Bilgileri",
        maskedCardNumber: "Kart Numarası",
        cardOwnerName: "Kart Sahibi",
        expiryDateLabel: "Son Kullanma Tarihi",
        // Ana Sayfa
        headline1: "Yeni Seri Beybladeler İle Heyecanı Doruklarda Yaşa",
        headline2: "Yakında Burada",
        slogan: "Metalin Ruhunu Hisset!",
        discoverNow: "Şimdi Keşfet →",
        featuredProducts: "Öne Çıkarılan Ürünler",
        latestProducts: "Son Eklenen Ürünler",
        
        // Kargo Takip Sayfası
        cargoTracking: "Kargo Takip",
        trackingNumberPlaceholder: "Takip numarası girin",
        searchButton: "SORGULA"
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
        cargoTracking: "Cargo Tracking",
        series: "Series",
        
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
        iletisimeGec: "Contact Us",
        productDetails: "Product Details",
        addToCart: "Add to Cart",
        addToFavorites: "Add to Favorites",
        price: "Price",
        series: "Series",
        description: "Description",
        reviews: "User Reviews",
        writeReview: "Write a Review",
        rating: "Rating",
        yourReview: "Your review...",
        submitReview: "Submit Review",
        noReviews: "No reviews yet.",
        paymentScreen: "Payment Screen",
        selectAddress: "Select Address:",
        selectCard: "Select Card:",
        completePayment: "Complete Payment",
        paymentSuccess: "Payment successful! Your order has been received.",
        loading: "Loading...",
        noAddress: "No saved address.",
        noCard: "No saved card.",
        remove: "Remove",
        quantity: "Quantity",
        total: "Total",
        totalPrice: "Total Price",
        checkout: "Checkout",
        favorites: "Favorites",
        myFavorites: "My Favorites",
        noFavorites: "You don't have any favorite products yet",
        visitProducts: "You can visit the products page to explore products.",
        addressInfo: "Address Information",
        cardInfo: "Card Information",
        logout: "Logout",
        save: "Save",
        city: "City",
        district: "District",
        neighborhood: "Neighborhood",
        address: "Address",
        cardNumber: "Card Number",
        cardName: "Name on Card",
        expiryDate: "Expiry Date",
        // Account Information Page
        accountInfo: "Account Information",
        savedAddresses: "My Saved Addresses",
        savedCardInfo: "My Saved Card Information",
        loading: "Loading...",
        noSavedAddress: "No saved addresses yet.",
        noSavedCard: "No saved card yet.",
        addressCard: "Address",
        cardOwner: "Card Owner",
        savedCardDetails: "Saved Card Information",
        maskedCardNumber: "Card Number",
        cardOwnerName: "Card Owner",
        expiryDateLabel: "Expiry Date",
        // Home Page
        headline1: "Experience the Excitement at the Peak with the New Series Beyblades",
        headline2: "Coming Soon",
        slogan: "Feel the Spirit of Metal!",
        discoverNow: "Discover Now →",
        featuredProducts: "Featured Products",
        latestProducts: "Latest Products",
        
        // Cargo Tracking Page
        cargoTracking: "Cargo Tracking",
        trackingNumberPlaceholder: "Enter tracking number",
        searchButton: "SEARCH"
    }
};

// Dil değiştirme fonksiyonu
window.changeLanguage = function() {
    const selectedLanguage = document.getElementById('languageSelect').value;
    console.log('changeLanguage çağrıldı, seçilen dil:', selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
    updatePageContent(selectedLanguage);
    // Favoriler sayfasındaysak, dinamik favori ürünleri tekrar yükle
    if (window.location.pathname.includes('favoriler.html')) {
        if (typeof loadFavorites === 'function') loadFavorites(selectedLanguage);
    }
};

// Sayfa içeriğini güncelleme fonksiyonu
function updatePageContent(language) {
    console.log('updatePageContent çağrıldı, dil:', language, 'sayfa:', window.location.pathname);
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
        // Kargo Takip linki varsa çevir
        if (menuItems.length >= 5) {
            menuItems[4].textContent = translation.cargoTracking;
        }
    }
    
    // Başlıklar
    const titles = document.querySelectorAll('.title');
    titles.forEach(title => {
        if (title.textContent.includes("Tüm Ürünler")) title.textContent = translation.allProducts;
        if (title.textContent.includes("Favori Ürünlerim")) title.textContent = translation.myFavorites;
        if (title.textContent.includes("Seriler")) title.textContent = translation.series;
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

    // Ürün detayları
    const productDetails = document.querySelector('h3, .product-details-title');
    if (productDetails && productDetails.textContent.match(/Product Details|Ürün Detayları/)) productDetails.textContent = translation.productDetails;
    const addToCartBtn = document.getElementById('add-to-cart');
    if (addToCartBtn) addToCartBtn.textContent = translation.addToCart;
    const addToFavBtn = document.getElementById('add-to-favorites');
    if (addToFavBtn) addToFavBtn.textContent = translation.addToFavorites;
    const priceLabel = document.getElementById('product-price');
    if (priceLabel) priceLabel.previousSibling && (priceLabel.previousSibling.textContent = translation.price);
    const seriesLabel = document.getElementById('product-series');
    if (seriesLabel) seriesLabel.previousSibling && (seriesLabel.previousSibling.textContent = translation.series);
    const descLabel = document.getElementById('product-description');
    if (descLabel) descLabel.previousSibling && (descLabel.previousSibling.textContent = translation.description);
    // Yorumlar
    const reviewsTitle = document.querySelector('.reviews-title');
    if (reviewsTitle) reviewsTitle.textContent = translation.reviews;
    const writeReview = document.querySelector('#add-review-section h3');
    if (writeReview) writeReview.textContent = translation.writeReview;
    const ratingLabel = document.querySelector('#add-review-form label');
    if (ratingLabel) ratingLabel.childNodes[0].textContent = translation.rating + ':';
    const reviewTextarea = document.getElementById('review-comment');
    if (reviewTextarea) reviewTextarea.placeholder = translation.yourReview;
    const submitReviewBtn = document.querySelector('#add-review-form button');
    if (submitReviewBtn) submitReviewBtn.textContent = translation.submitReview;
    // Favoriler sayfası
    const favoritesTitle = document.getElementById('favorites-title');
    if (favoritesTitle) favoritesTitle.textContent = translation.myFavorites;
    const favoritesEmptyTitle = document.getElementById('favorites-empty-title');
    if (favoritesEmptyTitle) favoritesEmptyTitle.textContent = translation.noFavorites;
    const favoritesEmptyDesc = document.getElementById('favorites-empty-desc');
    if (favoritesEmptyDesc) favoritesEmptyDesc.innerHTML = translation.visitProducts.replace('ürünler sayfasını', `<a href='ürünler.html' id='favorites-empty-link'>${translation.products || 'Ürünler'}</a>`);
    // Favori ürün kartı butonları
    document.querySelectorAll('#remove-favorite-btn').forEach(btn => btn.textContent = translation.removeFromFavorites || translation.remove);
    document.querySelectorAll('#add-to-cart-btn').forEach(btn => btn.textContent = translation.addToCart);
    // Sepet, favoriler, ödeme, adres/kart, vs. için benzer şekilde devam et...
    // ... diğer alanlar ...
    // Ana sayfa başlık ve buton çevirileri
    if (window.location.pathname.endsWith('file.html') || window.location.pathname === '/' || window.location.pathname === '/file.html') {
        var mainHeadline = document.getElementById('main-headline');
        if (mainHeadline) mainHeadline.innerHTML = translation.headline1 + '<br><span id="main-headline2">' + translation.headline2 + '</span>';
        var mainSlogan = document.getElementById('main-slogan');
        if (mainSlogan) mainSlogan.textContent = translation.slogan;
        var discoverBtn = document.getElementById('discover-now-btn');
        if (discoverBtn) discoverBtn.textContent = translation.discoverNow;
        var featuredTitle = document.getElementById('featured-products-title');
        if (featuredTitle) featuredTitle.textContent = translation.featuredProducts;
        var latestTitle = document.getElementById('latest-products-title');
        if (latestTitle) latestTitle.textContent = translation.latestProducts;
    }

    // Kişi Bilgileri Sayfası çevirileri
    console.log('Kişi bilgileri sayfası kontrol ediliyor, pathname:', window.location.pathname);
    if (window.location.pathname.includes('kişi-bilgileri.html')) {
        console.log('Kişi bilgileri sayfası çevirileri uygulanıyor');
        
        // Ana başlık
        const accountInfoTitle = document.querySelector('.profile-menu h2');
        if (accountInfoTitle) {
            console.log('Ana başlık çevriliyor:', accountInfoTitle.textContent, '→', translation.accountInfo);
            accountInfoTitle.textContent = translation.accountInfo;
        }

        // Menü butonları
        const menuButtons = document.querySelectorAll('.menu-button');
        console.log('Menü butonları bulundu:', menuButtons.length);
        menuButtons.forEach(button => {
            if (button.textContent.includes('Adres Bilgileri')) {
                console.log('Adres Bilgileri butonu çevriliyor:', button.textContent, '→', translation.addressInfo);
                button.textContent = translation.addressInfo;
            }
            if (button.textContent.includes('Kart Bilgileri')) {
                console.log('Kart Bilgileri butonu çevriliyor:', button.textContent, '→', translation.cardInfo);
                button.textContent = translation.cardInfo;
            }
            if (button.textContent.includes('Çıkış Yap')) {
                console.log('Çıkış Yap butonu çevriliyor:', button.textContent, '→', translation.logout);
                button.textContent = translation.logout;
            }
        });

        // Kayıtlı adresler başlığı
        const savedAddressesTitle = document.querySelector('#saved-addresses h3');
        if (savedAddressesTitle) savedAddressesTitle.textContent = translation.savedAddresses;

        // Kayıtlı kart bilgisi başlığı
        const savedCardTitle = document.querySelector('#saved-card h3');
        if (savedCardTitle) savedCardTitle.textContent = translation.savedCardInfo;

        // Yükleniyor mesajları
        const loadingElements = document.querySelectorAll('#address-list div, #card-info div');
        loadingElements.forEach(element => {
            if (element.textContent.includes('Yükleniyor')) element.textContent = translation.loading;
        });

        // Form başlıkları
        const addressContentTitle = document.querySelector('#address-content h2');
        if (addressContentTitle) addressContentTitle.textContent = translation.addressInfo;

        const paymentContentTitle = document.querySelector('#payment-content h2');
        if (paymentContentTitle) paymentContentTitle.textContent = translation.cardInfo;

        // Form etiketleri
        const formLabels = document.querySelectorAll('.form-group label');
        formLabels.forEach(label => {
            if (label.textContent.includes('İl')) label.textContent = translation.city;
            if (label.textContent.includes('İlçe')) label.textContent = translation.district;
            if (label.textContent.includes('Mahalle')) label.textContent = translation.neighborhood;
            if (label.textContent.includes('Adres')) label.textContent = translation.address;
            if (label.textContent.includes('Kart Numarası')) label.textContent = translation.cardNumber;
            if (label.textContent.includes('Kart Üzerindeki İsim')) label.textContent = translation.cardName;
            if (label.textContent.includes('Son Kullanma Tarihi')) label.textContent = translation.expiryDate;
        });

        // Kaydet butonları
        const saveButtons = document.querySelectorAll('.save-button');
        saveButtons.forEach(button => {
            if (button.textContent.includes('Kaydet')) button.textContent = translation.save;
        });
    }

    // Kargo Takip Sayfası çevirileri
    if (window.location.pathname.includes('kargo-takip.html')) {
        // Ana başlık
        const trackingTitle = document.querySelector('.tracking-box h2');
        if (trackingTitle) trackingTitle.textContent = translation.cargoTracking;

        // Takip numarası placeholder
        const trackingInput = document.getElementById('tracking-number');
        if (trackingInput) trackingInput.placeholder = translation.trackingNumberPlaceholder;

        // Sorgula butonu
        const searchButton = document.querySelector('#tracking-form button');
        if (searchButton) {
            searchButton.innerHTML = `🔍 ${translation.searchButton}`;
        }
    }
}

// Sayfa yüklendiğinde kaydedilmiş dili yükle - Her sayfa kendi event listener'ını yönetiyor

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

// Kullanıcı giriş yaptıysa Hesap linkini değiştir
window.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('#MenuItems a');
    // 4. link Hesap linki
    if (menuItems.length >= 4) {
        // Giriş kontrolü: localStorage'da token varsa giriş yapılmış kabul edilir
        if (localStorage.getItem('token')) {
            menuItems[3].setAttribute('href', 'kişi-bilgileri.html');
        } else {
            menuItems[3].setAttribute('href', 'kayıt.html');
        }
    }
});

// Favori ürünleri dinamik olarak çek ve göster
async function loadFavorites(languageParam) {
    const favoritesContainer = document.getElementById('favorites-list');
    if (!favoritesContainer) return;

    const language = languageParam || localStorage.getItem('language') || 'tr';

    try {
        const response = await fetch(`${BASE_URL}/favorites`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        favoritesContainer.innerHTML = '';

        if (data.length === 0) {
            const emptyMessage = document.createElement('p');
            emptyMessage.textContent = translations[language].noFavorites;
            emptyMessage.classList.add('text-center', 'py-5');
            favoritesContainer.appendChild(emptyMessage);
            return;
        }

        let row;
        data.forEach((product, idx) => {
            if (idx % 4 === 0) {
                row = document.createElement('div');
                row.className = 'row-2';
                favoritesContainer.appendChild(row);
            }
            const col = document.createElement('div');
            col.className = 'col-4';
            col.innerHTML = `
                <a href="ürün-detayları.html?id=${product._id}">
                  <img src="${product.imageUrl}" alt="${product.name}">
                  <h4>${product.name}</h4>
                  <p>${product.price} TL</p>
                  <span style='font-size:13px;color:#888;'>${product.series}</span>
                </a>
                <div class="product-actions">
                  <button class="remove-favorite" data-product-id="${product._id}">${translations[language].removeFromFavorites}</button>
                  <button class="add-to-cart" data-product-id="${product._id}">${translations[language].addToCart}</button>
                </div>
            `;
            // Favoriden çıkarma
            col.querySelector('.remove-favorite').onclick = async (e) => {
                await removeFromFavorites({ target: { dataset: { productId: product._id } } });
            };
            // Sepete ekleme
            col.querySelector('.add-to-cart').onclick = async (e) => {
                await addToCart({ target: { dataset: { productId: product._id } } });
            };
            row.appendChild(col);
        });
    } catch (error) {
        console.error('Error loading favorites:', error);
        if (favoritesContainer) {
            favoritesContainer.innerHTML = `<p class="text-center py-5">${translations[language].loading}</p>`;
        }
    }
}

// Favorilerden çıkarma fonksiyonu
async function removeFromFavorites(event) {
    const productId = event.target.dataset.productId;
    const favoritesContainer = document.getElementById('favorites-list');
    if (!favoritesContainer) return;

    try {
        const response = await fetch(`${BASE_URL}/favorites/remove/${productId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Favori ürün kartını DOM'dan kaldır
        const productCard = event.target.closest('.product-card');
        if (productCard) {
            productCard.remove();
        }

        // Favori ürünlerin sayısını güncelle
        const favoritesCount = document.querySelector('.favorites-count');
        if (favoritesCount) {
            const response = await fetch(`${BASE_URL}/favorites/count`);
            if (response.ok) {
                const data = await response.json();
                favoritesCount.textContent = data.count;
            }
        }

        alert(translations[localStorage.getItem('language') || 'tr'].removeFromFavorites);
        loadFavorites(); // Sayfayı yeniden yükle
    } catch (error) {
        console.error('Error removing from favorites:', error);
        alert(translations[localStorage.getItem('language') || 'tr'].removeFromFavorites);
    }
}

// Sepete ekleme fonksiyonu
async function addToCart(event) {
    const productId = event.target.dataset.productId;
    const cartContainer = document.getElementById('cart-items');
    if (!cartContainer) return;

    try {
        const response = await fetch(`${BASE_URL}/cart/add/${productId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const cartItem = document.createElement('li');
        cartItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        cartItem.innerHTML = `
            <div class="d-flex align-items-center">
                <img src="${data.imageUrl}" alt="${data.name}" class="cart-item-img me-3">
                <div>
                    <h6 class="cart-item-name">${data.name}</h6>
                    <p class="cart-item-price">${data.price} TL</p>
                </div>
            </div>
            <div class="d-flex align-items-center">
                <button class="btn btn-sm btn-danger me-2" onclick="removeFromCart('${data.id}')">X</button>
                <span class="cart-item-quantity">${data.quantity}</span>
                <button class="btn btn-sm btn-primary ms-2" onclick="increaseQuantity('${data.id}')">+</button>
            </div>
        `;
        cartContainer.appendChild(cartItem);

        // Sepet toplam fiyatını güncelle
        const totalPriceElement = document.querySelector('.total-price td:first-child');
        if (totalPriceElement) {
            const response = await fetch(`${BASE_URL}/cart/total`);
            if (response.ok) {
                const data = await response.json();
                totalPriceElement.textContent = `${translations[localStorage.getItem('language') || 'tr'].totalPrice}: ${data.totalPrice} TL`;
            }
        }

        alert(translations[localStorage.getItem('language') || 'tr'].addToCart);
        loadFavorites(); // Favorileri yeniden yükle
    } catch (error) {
        console.error('Error adding to cart:', error);
        alert(translations[localStorage.getItem('language') || 'tr'].addToCart);
    }
}

// Sepetten çıkarma fonksiyonu (Bu fonksiyonun tanımı yok, bu yüzden buraya eklenmedi)
// Sepet miktarı artırma/azaltma fonksiyonları (Bu fonksiyonların tanımı yok, bu yüzden buraya eklenmedi)

// Mobil arama çubuğu iyileştirmesi
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-bar-input');
    const searchBar = document.querySelector('.search-bar');
    
    if (searchInput && searchBar) {
        // Mobilde arama çubuğuna tıklandığında focus ol
        searchBar.addEventListener('click', function(e) {
            if (e.target !== searchInput) {
                searchInput.focus();
            }
        });
        
        // Input'a focus olduğunda mobilde zoom'u önle
        searchInput.addEventListener('focus', function() {
            if (window.innerWidth <= 768) {
                this.style.fontSize = '16px';
            }
        });
        
        // Input'tan çıkıldığında font boyutunu geri al
        searchInput.addEventListener('blur', function() {
            if (window.innerWidth <= 768) {
                this.style.fontSize = '16px';
            }
        });
        
        // Mobilde input'a dokunulduğunda scroll'u engelle
        searchInput.addEventListener('touchstart', function(e) {
            e.stopPropagation();
        });
        
        // Mobilde input'a yazı yazılırken scroll'u engelle
        searchInput.addEventListener('input', function(e) {
            if (window.innerWidth <= 768) {
                e.stopPropagation();
            }
        });
    }
});
