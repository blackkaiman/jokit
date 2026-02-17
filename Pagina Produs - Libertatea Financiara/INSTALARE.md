# Instalare Pagină Produs Custom - Jokit.ro (Gomag)

## 📋 Prezentare Generală

Acest script transformă pagina produsului "Libertatea Financiară" de pe jokit.ro într-o pagină custom cu design modern, secțiuni de beneficii, carousel carduri cu animație spectaculoasă și recenzii.

## 🗂️ Structura Fișierelor

```
Pagina Produs - Libertatea Financiara/
├── INSTALARE.md                          ← Acest fișier
├── preview.html                          ← Preview local pentru testare
├── gomag/
│   ├── jokit-lf-gomag.css               ← Stilurile CSS
│   ├── jokit-lf-gomag.js                ← Scriptul JavaScript
│   └── jokit-lf-sectiuni.html           ← HTML pentru descriere produs
├── jokit.ro - Libertatea Financiara - Iconite/    ← Iconițe SVG
├── jokit.ro - Libertatea Financiară - Poze Carduri/  ← Imagini carduri
└── jokit.ro - Libertatea Financiara - Poze Produs/   ← Imagini produs
```

---

## 📦 PASUL 1: Încărcarea Imaginilor

### 1.1 Creează folderul pentru imagini
În panoul Gomag, mergi la:
- **Conținut → Fișiere → Manager Fișiere**
- Creează un folder nou: `custom/libertatea-financiara/`

### 1.2 Încarcă imaginile în subfoldere:
```
custom/libertatea-financiara/
├── iconite/
│   ├── distracție-in-familie.svg
│   ├── abilitati-esentiale.svg
│   ├── joc-fara-ecran.svg
│   ├── obiceiuri-economisire.svg
│   ├── decizii-strategice.svg
│   └── invatare-in-familie.svg
├── carduri/
│   ├── FondDeUrgenta.png
│   ├── CertificateDeActiuni.png
│   ├── AurSiArgint.png
│   └── ... (toate cardurile)
├── produs/
│   └── hero-card.png
└── background.png
```

---

## 🎨 PASUL 2: Adăugarea CSS-ului

### Opțiunea A - Prin Editor CSS (Recomandat)
1. Mergi la: **Design → Editor CSS**
2. La finalul fișierului CSS existent, adaugă întregul conținut din `jokit-lf-gomag.css`
3. Salvează modificările

### Opțiunea B - Prin Head Custom per Pagină
1. Mergi la: **Catalog → Produse**
2. Editează produsul "Libertatea Financiară"
3. În tab-ul **SEO**, la secțiunea **Cod în Head** adaugă:
```html
<link rel="stylesheet" href="/files/custom/libertatea-financiara/jokit-lf-gomag.css">
```

---

## ⚡ PASUL 3: Adăugarea JavaScript-ului

### Opțiunea A - Prin Script în Footer
1. Mergi la: **Setări → Scripturi externe**
2. La **Script în Footer** adaugă conținutul din `jokit-lf-gomag.js` înconjurat de tag `<script>`:
```html
<script>
// Conținutul din jokit-lf-gomag.js
</script>
```

### Opțiunea B - Prin fișier extern
1. Încarcă `jokit-lf-gomag.js` în **Conținut → Fișiere → custom/libertatea-financiara/**
2. Adaugă în footer:
```html
<script src="/files/custom/libertatea-financiara/jokit-lf-gomag.js"></script>
```

---

## 📝 PASUL 4: Adăugarea Secțiunilor HTML

### 4.1 Editează Descrierea Produsului
1. Mergi la: **Catalog → Produse**
2. Editează produsul "Libertatea Financiară"
3. În câmpul **Descriere** (mod HTML/Source), **înlocuiește** conținutul existent cu cel din `jokit-lf-sectiuni.html`

### 4.2 Alternative - Dacă vrei să păstrezi descrierea existentă
Adaugă secțiunile HTML **după** descrierea existentă, în același câmp.

---

## 🔧 PASUL 5: Configurare Finală

### 5.1 Actualizează URL-urile imaginilor
În fișierul `jokit-lf-gomag.js`, la secțiunea `CONFIG`, actualizează path-urile:

```javascript
const JOKIT_LF_CONFIG = {
    // Actualizează cu URL-urile tale reale
    imageBasePath: 'https://gomagcdn.ro/domains2/jokit.ro/files/custom/libertatea-financiara/',
    // ...
};
```

### 5.2 Verifică ID-ul produsului
În Gomag, produsul are un ID specific. Verifică URL-ul de editare al produsului:
- Ex: `admin.gomag.ro/products/edit/123` → ID-ul este `123`

Actualizează în `jokit-lf-gomag.js`:
```javascript
productId: '6', // Înlocuiește cu ID-ul real al produsului
```

---

## 🧪 PASUL 6: Testare

1. **Golește cache-ul Gomag**: Setări → Cache → Golește cache
2. **Accesează pagina produsului** în mod incognito
3. **Verifică**:
   - [ ] Secțiunea Hero se afișează corect
   - [ ] Beneficiile au iconițe vizibile
   - [ ] Carousel-ul de carduri funcționează
   - [ ] Recenziile se afișează și se pot naviga
   - [ ] Butonul "Adaugă în coș" funcționează

---

## ⚠️ Rezolvarea Problemelor

### CSS-ul nu se încarcă
- Verifică dacă fișierul CSS este încărcat corect în Manager Fișiere
- Golește cache-ul browser-ului (Ctrl+Shift+R)

### JavaScript nu funcționează
- Deschide Console din browser (F12 → Console)
- Verifică dacă există erori roșii
- Asigură-te că jQuery este încărcat înainte de scriptul custom

### Imaginile nu se afișează
- Verifică URL-urile în Manager Fișiere
- Path-ul trebuie să fie exact (case-sensitive)

### Elementele Gomag default se văd
- Scriptul ascunde automat elementele standard
- Dacă nu funcționează, adaugă în CSS:
```css
.jokit-lf-active .product-gallery,
.jokit-lf-active .product-details { 
    display: none !important; 
}
```

---

## 📞 Suport

Dacă întâmpini probleme:
1. Verifică consola browser-ului pentru erori
2. Asigură-te că toate fișierele sunt încărcate corect
3. Testează în mod incognito pentru a exclude cache-ul

---

**Versiune:** 1.2.0 pentru Gomag
**Data:** Ianuarie 2026
**Site:** https://www.jokit.ro

---

## 🎬 PREVIEW LOCAL

Pentru a testa local înainte de încărcarea în Gomag:
1. Deschide `preview.html` în browser
2. Toate stilurile și animațiile funcționează independent
3. Compară cu site-ul live după instalare
