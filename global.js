// ============ GLOBAL SETTINGS ============
let currentCurrency = localStorage.getItem('currency') || 'IDR';
let currentTheme = localStorage.getItem('themeColor') || 'green';

// Format angka berdasarkan mata uang
function formatCurrency(amount) {
    if (currentCurrency === 'IDR') {
        return 'Rp ' + new Intl.NumberFormat('id-ID').format(amount);
    } else if (currentCurrency === 'USD') {
        const usd = amount / 15500;
        return '$ ' + new Intl.NumberFormat('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(usd);
    } else if (currentCurrency === 'SGD') {
        const sgd = amount / 11500;
        return 'S$ ' + new Intl.NumberFormat('en-SG', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(sgd);
    } else if (currentCurrency === 'MYR') {
        const myr = amount / 3500;
        return 'RM ' + new Intl.NumberFormat('ms-MY', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(myr);
    }
    return 'Rp ' + new Intl.NumberFormat('id-ID').format(amount);
}

// Format angka saja (tanpa mata uang)
function formatNumber(amount) {
    if (currentCurrency === 'IDR') {
        return new Intl.NumberFormat('id-ID').format(amount);
    } else if (currentCurrency === 'USD') {
        const usd = amount / 15500;
        return new Intl.NumberFormat('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(usd);
    } else if (currentCurrency === 'SGD') {
        const sgd = amount / 11500;
        return new Intl.NumberFormat('en-SG', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(sgd);
    } else if (currentCurrency === 'MYR') {
        const myr = amount / 3500;
        return new Intl.NumberFormat('ms-MY', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(myr);
    }
    return new Intl.NumberFormat('id-ID').format(amount);
}

// Dapatkan simbol mata uang
function getCurrencySymbol() {
    if (currentCurrency === 'IDR') return 'Rp';
    if (currentCurrency === 'USD') return '$';
    if (currentCurrency === 'SGD') return 'S$';
    if (currentCurrency === 'MYR') return 'RM';
    return 'Rp';
}

// Load Dark Mode
function loadDarkModeGlobal() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }
}

// Load Theme Color
function loadThemeColorGlobal() {
    const saved = localStorage.getItem('themeColor');
    if (saved) {
        document.body.classList.add(`theme-${saved}`);
    }
}

// Inisialisasi global
function initGlobalSettings() {
    loadDarkModeGlobal();
    loadThemeColorGlobal();
}

// Panggil saat halaman load
initGlobalSettings();