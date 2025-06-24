# Calculadora 4x1000 Colombia

Una calculadora web gratuita para calcular el impuesto 4x1000 (GMF - Gravamen a los Movimientos Financieros) en Colombia.

## 🌐 Demo

**[Ver calculadora en vivo](https://calculadora4x1000.alexpiral.com/)**

## 📋 Descripción

Esta herramienta permite a los usuarios calcular automáticamente:

- **Descuento por 4x1000**: Impuesto que se descuenta automáticamente (0.4%)
- **Monto neto**: Dinero que efectivamente llega a tu cuenta
- **Monto a enviar**: Cantidad necesaria para que llegue el monto exacto deseado

## ✨ Características

- 🧮 Cálculo automático en tiempo real
- 📱 Diseño responsive y mobile-first
- ♿ Accesible (WCAG 2.1)
- 🚀 Carga rápida (sin dependencias externas)
- 🔍 SEO optimizado con structured data

## 🛠️ Tecnologías

- **HTML5**: Estructura semántica
- **CSS3**: Diseño moderno con CSS Custom Properties
- **JavaScript (ES6+)**: Lógica de cálculo vanilla
- **JSON-LD**: Structured data para SEO

## 📁 Estructura del Proyecto

```
calculadora-4x1000/
├── index.html          # Página principal
├── main.js            # Lógica de la calculadora
├── main.min.js        # Versión minificada
├── styles.css         # Estilos principales
├── styles.min.css     # Versión minificada
├── favicon.svg        # Favicon en SVG
├── robots.txt         # Configuración para crawlers
├── sitemap.xml        # Mapa del sitio
├── images/            # Imágenes y recursos
│   └── calculadora-4x1000-preview.png
├── CLAUDE.md          # Guía para Claude Code
└── README.md          # Este archivo
```

## 🚀 Instalación y Uso

### Desarrollo Local

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/alex16jpv/calculadora-4x1000.git
   cd calculadora-4x1000
   ```

2. **Sirve los archivos**:

   ```bash
   # Con Python
   python -m http.server 8000

   # Con Node.js
   npx serve .

   # Con PHP
   php -S localhost:8000
   ```

3. **Abre en el navegador**:
   ```
   http://localhost:8000
   ```

### Despliegue

Este es un sitio estático que puede desplegarse en cualquier servidor web:

- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Apache/Nginx**

No requiere configuración especial de servidor.

## 🧮 Cómo Funciona

### Fórmula del 4x1000

```javascript
const taxRate = 0.004; // 0.4%
const taxAmount = Math.round(amount * taxRate);
const netAmount = amount - taxAmount;
const grossAmount = amount + taxAmount;
```

### Ejemplo de Cálculo

- **Monto original**: $100.000 COP
- **Impuesto 4x1000**: $100.000 × 0.004 = $400 COP
- **Monto neto**: $100.000 - $400 = $99.600 COP
- **Para recibir $100.000**: Enviar $100.400 COP

## 🔧 Personalización

### Modificar la Tasa de Impuesto

```javascript
// En main.js línea 4
this.taxRate = 0.004; // Cambiar aquí
```

### Cambiar Colores del Tema

```css
/* En styles.css */
:root {
  --primary-color: #1e40af;
  --secondary-color: #3b82f6;
  /* Modificar variables CSS */
}
```

## 📈 SEO y Optimización

- ✅ Meta tags completos (Open Graph, Twitter Cards)
- ✅ Structured data (WebApplication + FAQPage)
- ✅ Sitemap XML
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Favicon optimizado
- ✅ Lighthouse score: 100/100

## ♿ Accesibilidad

- ✅ HTML semántico
- ✅ ARIA labels y roles
- ✅ Contraste de colores WCAG AA
- ✅ Navegación por teclado
- ✅ Lectores de pantalla compatibles

## 🌍 Información del Impuesto 4x1000

El impuesto 4x1000 (GMF) es un tributo colombiano que se aplica sobre transacciones financieras:

- **Tasa**: 0.4% (4 pesos por cada 1.000)
- **Aplicación**: Retiros, transferencias, algunos depósitos
- **Entidad**: Administrado por la DIAN
- **Vigencia**: Impuesto temporal prorrogado

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 👤 Autor

**Alexander Valencia**

- 🌐 Website: [alexpiral.com](https://www.alexpiral.com)
- 🧮 Más calculadoras: [calculadoras.alexpiral.com](https://calculadoras.alexpiral.com)
- 📧 Email: contacto4x1000@alexpiral.com
