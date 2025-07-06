// Calculator Logic
class TaxCalculator {
  constructor() {
    this.taxRate = 0.004; // 4x1000 = 0.4%
    this.initializeElements();
    this.bindEvents();
  }

  initializeElements() {
    this.amountInput = document.getElementById("amount-input");
    this.errorMessage = document.getElementById("amount-error");
    this.resultsSection = document.getElementById("results");
    this.discountAmountElement = document.getElementById("discount-amount");
    this.netAmountElement = document.getElementById("net-amount");
    this.grossAmountElement = document.getElementById("gross-amount");
  }

  bindEvents() {
    this.amountInput.addEventListener("input", (e) => this.handleInput(e));
    this.amountInput.addEventListener("keypress", (e) =>
      this.handleKeyPress(e)
    );
    this.amountInput.addEventListener("paste", (e) => this.handlePaste(e));
  }

  handleKeyPress(event) {
    // Allow only numbers, backspace, delete, and arrow keys
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
    ];
    const isNumberKey = /^[0-9]$/.test(event.key);

    if (!isNumberKey && !allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }

  handlePaste(event) {
    const pastedText = (event.clipboardData || window.clipboardData).getData(
      "text"
    );
    const numericValue = this.extractNumericValue(pastedText);

    if (numericValue !== null) {
      // Allow natural paste behavior but update with formatted value
      setTimeout(() => {
        this.amountInput.value = this.formatCurrency(numericValue);
        this.calculateTaxes(numericValue);
      }, 0);
    }
  }

  handleInput(event) {
    const input = event.target;
    let value = input.value;

    // Remove any non-numeric characters except decimal point
    const numericValue = this.extractNumericValue(value);

    if (numericValue === null || numericValue < 0) {
      this.showError("Por favor ingresa un monto válido");
      this.hideResults();
      return;
    }

    if (numericValue > 999999999999) {
      this.showError("El monto no puede ser mayor a $999,999,999,999");
      this.hideResults();
      return;
    }

    this.clearError();

    // Format the input value
    // input.value = this.formatCurrency(numericValue);

    // Calculate and display results
    this.calculateTaxes(numericValue);
  }

  extractNumericValue(value) {
    // Remove all non-numeric characters except decimal point
    const cleaned = value.replace(/[^\d.]/g, "");

    if (cleaned === "" || cleaned === ".") {
      return 0;
    }

    const numericValue = parseFloat(cleaned);
    return isNaN(numericValue) ? null : numericValue;
  }

  formatCurrency(amount) {
    if (amount === 0) return "0";

    // Round to 2 decimal places and format with thousands separators
    return new Intl.NumberFormat("es-CO", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(amount);
  }

  formatCurrencyDisplay(amount) {
    return (
      "$" +
      new Intl.NumberFormat("es-CO", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      }).format(amount)
    );
  }

  calculateTaxes(amount) {
    if (amount <= 0) {
      this.hideResults();
      return;
    }

    // Calculate 4x1000 tax (0.4%)
    const taxAmount = Math.round(amount * this.taxRate);

    // Calculate net amount (what you receive after tax)
    const netAmount = amount - taxAmount;

    // Calculate gross amount (what you need to send to receive exact amount)
    // const grossAmount = Math.ceil(amount / (1 - this.taxRate));
    const grossAmount = amount + taxAmount;

    // Update display
    this.discountAmountElement.textContent =
      this.formatCurrencyDisplay(taxAmount);
    this.netAmountElement.textContent = this.formatCurrencyDisplay(netAmount);
    this.grossAmountElement.textContent =
      this.formatCurrencyDisplay(grossAmount);

    this.showResults();
  }

  showError(message) {
    this.errorMessage.textContent = message;
    this.errorMessage.classList.add("show");
    this.amountInput.classList.add("error");
  }

  clearError() {
    this.errorMessage.classList.remove("show");
    this.amountInput.classList.remove("error");
  }

  showResults() {
    this.resultsSection.classList.add("show");
  }

  hideResults() {
    this.resultsSection.classList.remove("show");
  }
}

// Initialize calculator when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new TaxCalculator();

  // Update Contact Information
  const contactInfo = document.getElementById("email-link");

  const user = "contacto4x1000";
  const domain = "alexpiral.com";
  const subject = encodeURIComponent("Consulta desde la calculadora 4x1000");

  const email = `${user}@${domain}`;
  const link = `mailto:${email}?subject=${subject}`;

  contactInfo.setAttribute("href", link);
});

// SEO and Performance optimizations
// document.addEventListener("DOMContentLoaded", () => {
//   // Add structured data for SEO
//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "WebApplication",
//     name: "Calculadora 4x1000 Colombia",
//     description:
//       "Calculadora gratuita del impuesto 4x1000 (GMF) en Colombia para transacciones bancarias",
//     url: "https://calculadora4x1000.com",
//     applicationCategory: "FinanceApplication",
//     operatingSystem: "Web Browser",
//     offers: {
//       "@type": "Offer",
//       price: "0",
//       priceCurrency: "COP",
//     },
//     author: {
//       "@type": "Organization",
//       name: "Calculadora 4x1000 Colombia",
//     },
//   };

//   const script = document.createElement("script");
//   script.type = "application/ld+json";
//   script.textContent = JSON.stringify(structuredData);
//   document.head.appendChild(script);

// Lazy load non-critical resources
// setTimeout(() => {
//   // Preload fonts if needed
//   const link = document.createElement("link");
//   link.rel = "preload";
//   link.as = "font";
//   link.type = "font/woff2";
//   link.crossOrigin = "anonymous";
//   // document.head.appendChild(link);
// }, 1000);
// });

// Analytics and tracking (placeholder)
// function trackCalculation(amount) {
//   // Add your analytics code here
//   console.log("Calculation performed for amount:", amount);
// }

// // Service Worker registration for PWA capabilities (optional)
// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     // navigator.serviceWorker.register('/sw.js');
//   });
// }
