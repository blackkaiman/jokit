# Instalare Pagină Produs Custom - Jokit.ro (Gomag)

## 📋 Prezentare Generală

Acest script transformă pagina produsului **"Întreabă-mă Orice"** de pe jokit.ro într-o pagină custom cu design modern, secțiuni de beneficii, carousel carduri cu animație spectaculoasă și recenzii.

**URL Produs:** https://www.jokit.ro/jocuri/joc-de-cărți-întreabă-mă-orice-set-de-întrebări-pentru-părinți-și-copii.html

## 🗂️ Structura Fișierelor

```
Pagina Produs - Intreaba-ma orice/
├── INSTALARE.md                              ← Acest fișier
├── gomag/
│   ├── jokit-imo-gomag.css                  ← Stiluri CSS
│   ├── jokit-imo-gomag.js                   ← JavaScript
│   └── jokit-imo-sectiuni.html              ← HTML pentru descriere produs
├── Intreaba-ma orice - Iconite/             ← Iconițe SVG/PNG
├── Intreaba-ma orice - Poze Carduri/        ← Imagini cărți
└── Intreaba-ma orice - Poze Produs/         ← Imagini produs
```

---

## 📦 PASUL 1: Încărcarea Imaginilor

### 1.1 Creează folderul pentru imagini
În panoul Gomag, mergi la:
- **Conținut → Fișiere → Manager Fișiere**
- Creează un folder nou: `custom/intreaba-ma-orice/`

### 1.2 Încarcă imaginile în subfoldere:
```
custom/intreaba-ma-orice/
├── iconite/
│   ├── Comunicare deschisă.svg
│   ├── Conexiune profundă.svg
│   ├── Cunoaștere reciprocă.svg
│   ├── Dezvolți inteligența emoțională.svg
│   ├── Distracție în familie.svg
│   └── Joc fără ecran.svg
├── carduri/
│   ├── Card_1.jpg
│   ├── Card_2.jpg
│   ├── Card_3.jpg
│   ├── Card_4.jpg
│   ├── Card_5.jpg
│   ├── Card_6.jpg
│   ├── Card_7.jpg
│   ├── Card_8.jpg
│   ├── Intreabama_orice_1.png
│   └── Intrabeama_orice_2.png
└── produs/
    └── (imagini produs suplimentare)
```

---

## 🎨 PASUL 2: Adăugarea CSS-ului

### Opțiunea A - Prin Editor CSS (Recomandat)
1. Mergi la: **Design → Editor CSS**
2. La finalul fișierului CSS existent, adaugă întregul conținut din `jokit-imo-gomag.css`
3. Salvează modificările

### Opțiunea B - Prin Head Custom per Pagină
1. Mergi la: **Catalog → Produse**
2. Editează produsul "Întreabă-mă orice"
3. În tab-ul **SEO**, la secțiunea **Cod în Head** adaugă:
```html
<link rel="stylesheet" href="/files/custom/intreaba-ma-orice/jokit-imo-gomag.css">
```

---

## ⚡ PASUL 3: Adăugarea JavaScript-ului

### Opțiunea A - Prin Script în Footer (Recomandat)
1. Mergi la: **Setări → Scripturi externe**
2. La **Script în Footer** adaugă conținutul din `jokit-imo-gomag.js` înconjurat de tag `<script>`:
```html
<script>
// Conținutul din jokit-imo-gomag.js
</script>
```

### Opțiunea B - Prin fișier extern
1. Încarcă `jokit-imo-gomag.js` în **Conținut → Fișiere → custom/intreaba-ma-orice/**
2. Adaugă în footer:
```html
<script src="/files/custom/intreaba-ma-orice/jokit-imo-gomag.js"></script>
```

---

## 📝 PASUL 4: Adăugarea Secțiunilor HTML

### 4.1 Editează Descrierea Produsului
1. Mergi la: **Catalog → Produse**
2. Editează produsul "Întreabă-mă orice"
3. În câmpul **Descriere** (mod HTML/Source), **înlocuiește** conținutul existent cu cel din `jokit-imo-sectiuni.html`

### 4.2 Alternative - Dacă vrei să păstrezi descrierea existentă
Adaugă secțiunile HTML **după** descrierea existentă, în același câmp.

---

## 🔧 PASUL 5: Configurare Finală

### 5.1 Actualizează URL-urile imaginilor
În fișierul `jokit-imo-gomag.js`, la secțiunea `CONFIG`, verifică path-urile:

```javascript
const JOKIT_IMO_CONFIG = {
    // Actualizează cu URL-urile tale reale
    imageBasePath: 'https://gomagcdn.ro/domains2/jokit.ro/files/',
    // ...
};
```

### 5.2 Verifică ID-ul produsului
În Gomag, produsul are un ID specific. Verifică URL-ul de editare al produsului:
- Ex: `admin.gomag.ro/products/edit/3` → ID-ul este `3`

Actualizează în `jokit-imo-gomag.js`:
```javascript
productId: '3', // Înlocuiește cu ID-ul real al produsului
```

### 5.3 Verifică Slug-ul produsului
Scriptul detectează produsul după slug. Slug-ul actual este:
```javascript
productSlug: 'intreab', // Fragment din URL care identifică produsul
```

---

## 🎨 Scheme de Culori

Acest produs folosește o paletă caldă, orientată pe familie:

| Culoare | Hex | Utilizare |
|---------|-----|-----------|
| Roșu (Părinți) | `#E74C3C` | Secțiunea roșie, CTA-uri |
| Galben (Copii) | `#FBC02D` | Secțiunea albă/galbenă |
| Verde (Succes) | `#27AE60` | "Cum câștigi" |
| Bej cald | `#FDF5E6` | Fundal secțiuni |

---

## 🧪 PASUL 6: Testare

1. **Golește cache-ul Gomag**: Setări → Cache → Golește cache
2. **Accesează pagina produsului** în mod incognito
3. **Verifică**:
   - [ ] Secțiunea Hero se afișează corect cu produs și preț
   - [ ] "Ce conține setul" arată cele 3 statistici
   - [ ] Beneficiile au iconițe vizibile
   - [ ] Secțiunile Părinți/Copii sunt afișate corect
   - [ ] Carousel-ul de carduri funcționează + animație unstack
   - [ ] "Cum câștigi" - cele 3 victorii
   - [ ] Recenziile se afișează și se pot naviga
   - [ ] Butonul "Adaugă în coș" funcționează
   - [ ] CTA-ul final funcționează

---

## ⚠️ Rezolvarea Problemelor

### CSS-ul nu se încarcă
- Verifică dacă fișierul CSS este încărcat corect în Manager Fișiere
- Golește cache-ul browser-ului (Ctrl+Shift+R)

### JavaScript nu funcționează
- Deschide Console din browser (F12 → Console)
- Verifică dacă există erori roșii
- Asigură-te că nu există conflicte cu alt JavaScript

### Imaginile nu se afișează
- Verifică URL-urile în Manager Fișiere
- Path-ul trebuie să fie exact (case-sensitive)
- Verifică dacă imaginile sunt în subfolderele corecte (iconite/, carduri/)

### Elementele Gomag default se văd
- Scriptul ascunde automat elementele standard
- Dacă nu funcționează, adaugă în CSS:
```css
.jokit-imo-active .product-gallery,
.jokit-imo-active .product-details { 
    display: none !important; 
}
```

### Animația de unstack nu funcționează
- Verifică în consolă dacă apare mesajul "Jokit IMO: Animație unstack inițializată"
- Scroll până la secțiunea de cărți pentru a declanșa animația

---

## 📞 Suport

Dacă întâmpini probleme:
1. Verifică consola browser-ului pentru erori (F12 → Console)
2. Asigură-te că toate fișierele sunt încărcate corect
3. Testează în mod incognito pentru a exclude cache-ul
4. Verifică că produsul are ID-ul și slug-ul corecte în config

---

## 📋 Diferențe față de "Libertatea Financiară"

| Aspect | Libertatea Financiară | Întreabă-mă Orice |
|--------|----------------------|-------------------|
| Prefix clase CSS | `jokit-lf-` | `jokit-imo-` |
| Clasa body | `jokit-lf-active` | `jokit-imo-active` |
| Paletă principală | Albastru/Auriu | Roșu/Galben |
| Tip joc | Educație financiară | Conectare familială |
| Slug detectare | `libertatea-financiar` | `intreab` |

---

**Versiune:** 1.0.0 pentru Gomag  
**Data:** Decembrie 2024  
**Site:** https://www.jokit.ro
