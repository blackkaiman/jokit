/**
 * ============================================
 * JOKIT - LIBERTATEA FINANCIARĂ
 * JavaScript pentru Gomag
 * ============================================
 * 
 * INSTRUCȚIUNI:
 * 1. Adaugă acest script în Setări → Scripturi externe → Footer
 * 2. SAU încarcă-l ca fișier extern și referențiază-l
 */

(function() {
    'use strict';

    // ============================================
    // CONFIGURARE - MODIFICĂ AICI!
    // ============================================
    const JOKIT_LF_CONFIG = {
        // Slug-ul produsului din URL (pentru detectare)
        productSlug: 'libertatea-financiar',
        
        // ID-ul produsului în Gomag (confirmat din pagina live)
        productId: '3',
        
        // Prețuri
        priceOld: '90,50',
        priceCurrent: '59,99',
        currency: 'RON',
        
        // Path-ul pentru imagini (modifică după upload)
        imageBasePath: 'https://gomagcdn.ro/domains2/jokit.ro/files/',
        
        // Imaginea hero principală
        heroImage: 'product/original/joc-educatie-financiara-libertatea-financiara-275068.jpg',
    };

    // ============================================
    // DATE STATICE
    // ============================================
    
    // Beneficii
    const BENEFITS = [
        {
            icon: '🎲',
            title: 'Distracție în familie',
            description: 'Serile în familie devin memorabile'
        },
        {
            icon: '🧠',
            title: 'Abilități esențiale în viață',
            description: 'Dezvoltă gândirea financiară strategică'
        },
        {
            icon: '📵',
            title: 'Joc fără ecran',
            description: 'Conectare reală, fără dispozitive'
        },
        {
            icon: '💰',
            title: 'Dezvolți obiceiuri de economisire',
            description: 'Învață să gestionezi banii inteligent'
        },
        {
            icon: '📊',
            title: 'Decizii financiare strategice',
            description: 'Practică luarea deciziilor importante'
        },
        {
            icon: '👨‍👩‍👧‍👦',
            title: 'Învățare în familie',
            description: 'Educație financiară pentru toate vârstele'
        }
    ];

    // Carduri joc - cu descrieri și tipuri pentru stilizare
    const GAME_CARDS = [
        { 
            image: 'PauzaFinanciara.png', 
            title: 'Pauză Financiară',
            description: 'Oprește rândul următorului jucător.',
            type: 'actiune'
        },
        { 
            image: 'Negociere.png', 
            title: 'Negociere',
            description: 'Un jucător, la alegerea ta, trebuie să îți dea o carte la alegerea lui.',
            type: 'actiune'
        },
        { 
            image: 'RecesiuneFinanciara.png', 
            title: 'Recesiune Financiară',
            description: 'Următorul jucător pierde o carte de venituri din selecția de 5 cărți.',
            type: 'negativ'
        },
        { 
            image: 'FondDeUrgenta.png', 
            title: 'Fond de Urgență',
            description: 'Combate Prăbușirea Pieței sau adună și celelalte 4 Cărți de Venituri pentru a câștiga.',
            type: 'venit'
        },
        { 
            image: 'CertificateDeActiuni.png', 
            title: 'Certificate de Acțiuni',
            description: 'Adaugă în colecția ta de venituri pentru a te apropia de Libertatea Financiară.',
            type: 'venit'
        },
        { 
            image: 'AurSiArgint.png', 
            title: 'Aur și Argint',
            description: 'Investiție sigură care te protejează în vremuri de criză.',
            type: 'venit'
        },
        { 
            image: 'ProprietatiImobiliare.png', 
            title: 'Proprietăți Imobiliare',
            description: 'Construiește-ți imperiul imobiliar și generează venituri pasive.',
            type: 'venit'
        },
        { 
            image: 'CupoaneDeObligatiuni.png', 
            title: 'Cupoane de Obligațiuni',
            description: 'Obligațiunile îți oferă stabilitate și venituri garantate.',
            type: 'venit'
        },
        { 
            image: 'Crypto.png', 
            title: 'Crypto',
            description: 'Fură 2 cărți de la un adversar la alegerea ta.',
            type: 'actiune'
        },
        { 
            image: 'Forex.png', 
            title: 'Forex',
            description: 'Fură 2 cărți de la un adversar la alegerea ta.',
            type: 'actiune'
        },
        { 
            image: 'PrabusireaPietei.png', 
            title: 'Prăbușirea Pieței',
            description: 'Toți jucătorii fără Fond de Urgență pierd toate cărțile de venituri.',
            type: 'negativ'
        },
        { 
            image: 'FluctuatieFinanciara.png', 
            title: 'Fluctuație Financiară',
            description: 'Schimbă orice carte din mâna ta cu una de la un adversar.',
            type: 'actiune'
        },
        { 
            image: 'PreluareOstila.png', 
            title: 'Preluare Ostilă',
            description: 'Preia controlul asupra unei cărți de venituri a adversarului.',
            type: 'actiune'
        },
        { 
            image: 'Reglementare.png', 
            title: 'Reglementare',
            description: 'Blochează orice carte de acțiune jucată împotriva ta.',
            type: 'actiune'
        },
        { 
            image: 'ProduseDeLux.png', 
            title: 'Produse de Lux',
            description: 'Fură 2 cărți de la un adversar la alegerea ta.',
            type: 'actiune'
        }
    ];

    // Recenzii
    const REVIEWS = [
        {
            stars: 5,
            text: 'Este cadoul perfect pentru cei care doresc un joc care să fie și distractiv și educativ în același timp. De fiecare dată când plecăm într-o vacanță sau excursie, acest joc este nelipsit. Recomand cu drag!',
            author: 'Maria T.'
        },
        {
            stars: 5,
            text: 'Fiul meu de 8 ani a înțeles regulile rapid, i-a plăcut din prima și chiar a câștigat prima rundă în fața noastră! Este genial cum simplifică concepte complicate de investiții.',
            author: 'Elena S.'
        },
        {
            stars: 5,
            text: 'A devenit rapid preferatul nostru pentru serile de jocuri în familie, fără telefon lângă noi. Râdem, negociem și învățăm strategii reale.',
            author: 'Radu și Carmen M.'
        },
        {
            stars: 5,
            text: 'Combinația perfectă între strategie și lecții de viață. L-am luat cadou pentru nepoți și au fost fascinați. Este educație financiară deghizată într-o joacă super captivantă!',
            author: 'Ioana D.'
        },
        {
            stars: 5,
            text: 'A fost foarte ușor să începem direct să-l jucăm. Este distractiv dar cel mai bine e să-l joci în mai mulți 4-5 persoane.',
            author: 'Alexandra P.'
        },
        {
            stars: 5,
            text: 'Joc excelent pentru educația financiară a copiilor.',
            author: 'Costin G.'
        }
    ];

    // ============================================
    // FUNCȚII UTILITARE
    // ============================================

    function isTargetProduct() {
        var url = decodeURIComponent(window.location.href).toLowerCase();
        return url.indexOf('libertatea-financiar') !== -1 ||
               url.indexOf('libertatea-financiară') !== -1 ||
               url.indexOf('pachet-2-jocuri') !== -1;
    }

    function createStars(count) {
        return '★'.repeat(count) + '☆'.repeat(5 - count);
    }

    // ============================================
    // INIȚIALIZARE LA ÎNCĂRCAREA PAGINII
    // ============================================

    document.addEventListener('DOMContentLoaded', function() {
        if (!isTargetProduct()) {
            console.log('Jokit LF: Nu suntem pe pagina produsului țintă');
            return;
        }

        console.log('Jokit LF: Inițializare pagină custom...');
        
        // Adaugă clasa pe body pentru a activa stilurile custom
        document.body.classList.add('jokit-lf-active');
        
        // Așteaptă puțin pentru ca DOM-ul Gomag să fie complet încărcat
        setTimeout(function() {
            hideGomagDefaults();
            injectCustomSections();
            initCarousels();
            initCardsUnstackAnimation(); // Animația specială de unstacking
            initQuantitySelector();
            initAddToCart();
            initScrollAnimations();
        }, 100);
    });

    // ============================================
    // ANIMAȚIE UNSTACK PENTRU CĂRȚI
    // ============================================
    
    function initCardsUnstackAnimation() {
        const cardsSection = document.getElementById('jokit-cards-section');
        const cards = document.querySelectorAll('.jokit-lf-cards__card');
        
        if (!cardsSection || cards.length === 0) {
            console.log('Jokit LF: Nu am găsit secțiunea de cărți');
            return;
        }

        // Flag pentru a preveni animația multiplă
        let hasAnimated = false;

        // Configurare Intersection Observer pentru a detecta când secțiunea devine vizibilă
        const observerOptions = {
            root: null,
            rootMargin: '-10% 0px -10% 0px', // Se declanșează când secțiunea e 10% în viewport
            threshold: 0.1
        };

        const unstackObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting && !hasAnimated) {
                    hasAnimated = true;
                    
                    // Declanșează animația de unstack pentru fiecare carte
                    cards.forEach(function(card, index) {
                        // Delay progresiv pentru efect de cascadă
                        setTimeout(function() {
                            card.classList.add('is-unstacked');
                        }, index * 80); // 80ms între fiecare carte
                    });
                    
                    // Opțional: oprește observarea după ce animația s-a rulat
                    // unstackObserver.unobserve(cardsSection);
                }
            });
        }, observerOptions);

        unstackObserver.observe(cardsSection);
        
        console.log('Jokit LF: Animație unstack inițializată pentru', cards.length, 'cărți');
    }

    // ============================================
    // ASCUNDERE ELEMENTE GOMAG DEFAULT
    // ============================================

    function hideGomagDefaults() {
        // Selectori pentru elementele Gomag standard
        const selectorsToHide = [
            '.product-gallery',
            '.product-images', 
            '.gallery-container',
            '.product-main-image',
            '.product-thumbs',
            '.product-info .product-price-box',
            '.product-short-description',
            '.add-to-cart-box',
            '.product-attributes',
            '.product-tabs',
            '.tabs-container'
        ];

        selectorsToHide.forEach(function(selector) {
            const elements = document.querySelectorAll(selector);
            elements.forEach(function(el) {
                el.style.display = 'none';
            });
        });

        // Încearcă să găsești containerul principal pentru injectare
        const productContainer = document.querySelector('.product-page-content') || 
                                  document.querySelector('.product-info') ||
                                  document.querySelector('.product-page');
        
        if (productContainer) {
            productContainer.classList.add('jokit-lf-container');
        }
    }

    // ============================================
    // INJECTARE SECȚIUNI CUSTOM
    // ============================================

    function injectCustomSections() {
        // Găsește unde să injectăm
        const targetContainer = document.querySelector('.product-description') ||
                                document.querySelector('.product-page-content') ||
                                document.querySelector('.product-info') ||
                                document.querySelector('main');

        if (!targetContainer) {
            console.error('Jokit LF: Nu am găsit containerul pentru injectare');
            return;
        }

        // Creează wrapper-ul principal
        const wrapper = document.createElement('div');
        wrapper.className = 'jokit-lf-wrapper';
        wrapper.innerHTML = generateAllSections();

        // Inserează la începutul containerului
        if (targetContainer.firstChild) {
            targetContainer.insertBefore(wrapper, targetContainer.firstChild);
        } else {
            targetContainer.appendChild(wrapper);
        }
    }

    function generateAllSections() {
        return `
            ${generateHeroSection()}
            ${generateBenefitsSection()}
            ${generateCardsSection()}
            ${generateDescriptionSection()}
            ${generateSponsorSection()}
            ${generateReviewsSection()}
            ${generateFinalCTA()}
        `;
    }

    // ============================================
    // GENERARE HERO SECTION
    // ============================================

    function generateHeroSection() {
        const imgUrl = JOKIT_LF_CONFIG.imageBasePath + JOKIT_LF_CONFIG.heroImage;
        
        return `
        <section class="jokit-lf-hero">
            <div class="jokit-lf-hero__inner">
                <div class="jokit-lf-hero__content">
                    <h1 class="jokit-lf-hero__title">
                        <span class="jokit-lf-hero__title-main">Libertatea Financiară</span>
                        <span class="jokit-lf-hero__title-sub">Educația financiară prin joc, pentru întreaga familie!</span>
                    </h1>
                    
                    <p class="jokit-lf-hero__description">
                        Pornește într-o călătorie către independența financiară în timp ce te distrezi cu familia și prietenii. Învață concepte reale de investiții într-un mod captivant!
                    </p>
                    
                    <div class="jokit-lf-hero__cta">
                        <div class="jokit-lf-hero__qty-box">
                            <button type="button" class="jokit-lf-hero__qty-btn" id="jokitQtyMinus">−</button>
                            <input type="number" class="jokit-lf-hero__qty-input" id="jokitQtyInput" value="1" min="1">
                            <button type="button" class="jokit-lf-hero__qty-btn" id="jokitQtyPlus">+</button>
                        </div>
                        
                        <button type="button" class="jokit-lf-hero__add-btn" id="jokitAddToCart">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg>
                            Adaugă în coș
                        </button>
                    </div>
                </div>
                
                <div class="jokit-lf-hero__image-wrap">
                    <img src="${imgUrl}" 
                         alt="Joc Libertatea Financiară" 
                         class="jokit-lf-hero__image">
                    
                    <div class="jokit-lf-hero__price-badge">
                        <span class="jokit-lf-hero__price-old">${JOKIT_LF_CONFIG.priceOld} ${JOKIT_LF_CONFIG.currency}</span>
                        <span class="jokit-lf-hero__price-current">${JOKIT_LF_CONFIG.priceCurrent}</span>
                        <span class="jokit-lf-hero__price-currency">${JOKIT_LF_CONFIG.currency}</span>
                    </div>
                </div>
            </div>
            
            <div class="jokit-lf-hero__wave">
                <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
                    <path d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H0Z" fill="#F8F9FA"/>
                </svg>
            </div>
        </section>
        `;
    }

    // ============================================
    // GENERARE BENEFICII SECTION
    // ============================================

    function generateBenefitsSection() {
        let benefitsHTML = '';
        
        BENEFITS.forEach(function(benefit) {
            benefitsHTML += `
                <div class="jokit-lf-benefit jokit-lf-animate">
                    <div class="jokit-lf-benefit__icon">
                        <span style="font-size: 48px;">${benefit.icon}</span>
                    </div>
                    <h3 class="jokit-lf-benefit__title">${benefit.title}</h3>
                    <p class="jokit-lf-benefit__text">${benefit.description}</p>
                </div>
            `;
        });

        return `
        <section class="jokit-lf-benefits">
            <div class="jokit-lf-container">
                <h2 class="jokit-lf-section-title">De ce să alegi Libertatea Financiară?</h2>
                <div class="jokit-lf-benefits__grid">
                    ${benefitsHTML}
                </div>
            </div>
        </section>
        `;
    }

    // ============================================
    // GENERARE CARDURI SECTION - CU UNSTACK ANIMATION
    // ============================================

    function generateCardsSection() {
        let cardsHTML = '';
        
        GAME_CARDS.forEach(function(card) {
            const imgUrl = JOKIT_LF_CONFIG.imageBasePath + 'custom/libertatea-financiara/carduri/' + card.image;
            const cardType = card.type || 'actiune';
            
            cardsHTML += `
                <div class="jokit-lf-cards__card" data-type="${cardType}">
                    <img src="${imgUrl}" 
                         alt="${card.title}"
                         onerror="this.style.background='linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'; this.style.height='200px';">
                    <span class="jokit-lf-cards__card-title">${card.title}</span>
                    <span class="jokit-lf-cards__card-desc">${card.description}</span>
                </div>
            `;
        });

        return `
        <section class="jokit-lf-cards" id="jokit-cards-section">
            <h2 class="jokit-lf-section-title">Descoperă Cărțile de Joc</h2>
            <p class="jokit-lf-cards__subtitle">64 de cărți cu termeni financiari și situații reale de investiții</p>
            
            <div class="jokit-lf-cards__wrapper">
                <button class="jokit-lf-arrow jokit-lf-arrow--prev" id="cardsArrowPrev">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M15 18L9 12L15 6"/>
                    </svg>
                </button>
                
                <div class="jokit-lf-cards__carousel" id="cardsCarousel">
                    <div class="jokit-lf-cards__track" id="cardsTrack">
                        ${cardsHTML}
                    </div>
                </div>
                
                <button class="jokit-lf-arrow jokit-lf-arrow--next" id="cardsArrowNext">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 18L15 12L9 6"/>
                    </svg>
                </button>
            </div>
            
            <div class="jokit-lf-dots" id="cardsDots"></div>
        </section>
        `;
    }

    // ============================================
    // GENERARE DESCRIERE SECTION
    // ============================================

    function generateDescriptionSection() {
        return `
        <section class="jokit-lf-description">
            <div class="jokit-lf-description__inner">
                <h2 class="jokit-lf-section-title">Despre Joc</h2>
                
                <p>Ești gata să pornești într-o călătorie către independența financiară în timp ce te distrezi cu familia și prietenii?</p>
                
                <p><strong>Transformă modul în care te gândești la bani</strong> cu noul nostru joc de masă captivant — Libertatea financiară! Conceput pentru jucători cu vârsta de 7 ani în sus, acest joc este un amestec palpitant de strategie, educație și divertisment pur.</p>
                
                <p>Jocul este dezvoltat în parteneriat cu <strong>XTB</strong>, companie de investiții pe bursele internaționale.</p>
                
                <h3>Ce conține jocul?</h3>
                <p>În jocul Libertatea Financiară fiecare carte este o piatră de temelie pe calea ta spre succes. Cu <strong>64 de cărți de joc</strong> și o broșură de instrucțiuni ușor de înțeles, vei descoperi termenii de bază financiari.</p>
                
                <div class="jokit-lf-card-types">
                    <div class="jokit-lf-card-type jokit-lf-animate">
                        <h4>🔴 Cărțile evenimente negative</h4>
                        <p>Ai grijă la 6 cărți Prăbușirea Pieței care îți pot întoarce lumea peste cap. Doar un Fond de Urgență vă poate proteja activele și vă poate menține în joc.</p>
                    </div>
                    
                    <div class="jokit-lf-card-type jokit-lf-animate">
                        <h4>⚡ Cărțile acțiuni</h4>
                        <p>Cu 6 tipuri de cărți de acțiune, exercitați puterea asupra concurenților cu atacuri strategice. Pauza Financiară, Fluctuația Financiară, Recesiunea Financiară, Preluarea Ostilă, Negocierea și Reglementarea sunt elemente ce influențează finanțele tale.</p>
                    </div>
                    
                    <div class="jokit-lf-card-type jokit-lf-animate">
                        <h4>💰 Cărțile de venituri</h4>
                        <p>Sunt 7 tipuri de cărți de venituri, dar doar 4 dintre ele fac parte din colecția ce duce la libertate financiară. Celelalte 3 surse de venituri le poți folosi pentru a fura 2 cărți de la adversarul tău.</p>
                    </div>
                </div>
                
                <h3>Cum câștigi?</h3>
                <div class="jokit-lf-winning">
                    <div class="jokit-lf-winning__option jokit-lf-animate">
                        <strong>👑 Dominanță</strong>
                        <p>Fii ultimul în picioare. Elimină-ți concurenții cu manevre financiare acerbe.</p>
                    </div>
                    <div class="jokit-lf-winning__option jokit-lf-animate">
                        <strong>🏆 Libertate financiară</strong>
                        <p>Colectează toate cele 5 carduri de libertate financiară: fond de urgență, certificate de acțiuni, aur și argint, imobiliare și cupoane de obligațiuni.</p>
                    </div>
                </div>
                
                <h3>Distracție în familie cu fler financiar</h3>
                <p>Libertatea financiară nu este doar un joc; este o experiență de învățare adaptată familiilor care doresc să insufle înțelepciune financiară. Cu instrucțiuni clare și definiții ale termenilor financiari, este perfect pentru familiile care doresc să învețe și să crească împreună.</p>
                
                <p><strong>Alăturați-vă revoluției în educația financiară astăzi. Obțineți Libertatea Financiară și începeți căutarea pentru a deveni cel mai bun guru financiar!</strong></p>
            </div>
        </section>
        `;
    }

    // ============================================
    // GENERARE SPONSOR SECTION
    // ============================================

    function generateSponsorSection() {
        return `
        <section class="jokit-lf-sponsor">
            <div class="jokit-lf-container">
                <p class="jokit-lf-sponsor__title">Dezvoltat în parteneriat cu</p>
                <div class="jokit-lf-sponsor__logo">XTB</div>
                <p class="jokit-lf-sponsor__text">
                    Jocul a apărut în parteneriat cu <strong>XTB România</strong> și este conceput să prezinte concepte financiare esențiale într-un mod ludic. XTB este una dintre cele mai mari companii de investiții din lume, cu prezență în România de peste 16 ani.
                </p>
            </div>
        </section>
        `;
    }

    // ============================================
    // GENERARE REVIEWS SECTION
    // ============================================

    function generateReviewsSection() {
        let reviewsHTML = '';
        
        REVIEWS.forEach(function(review) {
            reviewsHTML += `
                <div class="jokit-lf-review">
                    <div class="jokit-lf-review__stars">${createStars(review.stars)}</div>
                    <p class="jokit-lf-review__text">"${review.text}"</p>
                    <span class="jokit-lf-review__author">— ${review.author}</span>
                </div>
            `;
        });

        return `
        <section class="jokit-lf-reviews">
            <div class="jokit-lf-container">
                <h2 class="jokit-lf-section-title">Ce spun clienții noștri</h2>
                
                <div class="jokit-lf-reviews__wrapper">
                    <button class="jokit-lf-arrow jokit-lf-arrow--prev" id="reviewsArrowPrev">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M15 18L9 12L15 6"/>
                        </svg>
                    </button>
                    
                    <div class="jokit-lf-cards__carousel" id="reviewsCarousel">
                        <div class="jokit-lf-reviews__track" id="reviewsTrack">
                            ${reviewsHTML}
                        </div>
                    </div>
                    
                    <button class="jokit-lf-arrow jokit-lf-arrow--next" id="reviewsArrowNext">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 18L15 12L9 6"/>
                        </svg>
                    </button>
                </div>
                
                <div class="jokit-lf-dots" id="reviewsDots"></div>
            </div>
        </section>
        `;
    }

    // ============================================
    // GENERARE FINAL CTA
    // ============================================

    function generateFinalCTA() {
        return `
        <section class="jokit-lf-final-cta">
            <div class="jokit-lf-container">
                <h2 class="jokit-lf-final-cta__title">Ești gata să joci?</h2>
                <p class="jokit-lf-final-cta__text">Începe aventura către libertatea financiară împreună cu familia ta!</p>
                <div class="jokit-lf-final-cta__price">${JOKIT_LF_CONFIG.priceCurrent} ${JOKIT_LF_CONFIG.currency}</div>
                <button type="button" class="jokit-lf-final-cta__btn" id="jokitFinalAddToCart">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    Adaugă în coș
                </button>
            </div>
        </section>
        `;
    }

    // ============================================
    // INIȚIALIZARE CAROUSELS
    // ============================================

    function initCarousels() {
        initCarousel('cards');
        initCarousel('reviews');
    }

    function initCarousel(type) {
        const track = document.getElementById(type + 'Track');
        const dotsContainer = document.getElementById(type + 'Dots');
        const prevBtn = document.getElementById(type + 'ArrowPrev');
        const nextBtn = document.getElementById(type + 'ArrowNext');

        if (!track) return;

        const items = track.children;
        let currentIndex = 0;
        let visibleItems = getVisibleItems(type);
        let totalPages = Math.ceil(items.length / visibleItems);

        function getVisibleItems(carouselType) {
            const width = window.innerWidth;
            if (carouselType === 'reviews') {
                if (width < 768) return 1;
                if (width < 992) return 2;
                return 3;
            } else {
                if (width < 576) return 2;
                if (width < 768) return 3;
                if (width < 992) return 4;
                return 5;
            }
        }

        function createDots() {
            if (!dotsContainer) return;
            dotsContainer.innerHTML = '';
            
            for (let i = 0; i < totalPages; i++) {
                const dot = document.createElement('button');
                dot.className = 'jokit-lf-dot' + (i === 0 ? ' active' : '');
                dot.addEventListener('click', function() {
                    currentIndex = i;
                    updateCarousel();
                });
                dotsContainer.appendChild(dot);
            }
        }

        function updateCarousel() {
            const itemWidth = items[0].offsetWidth;
            const gap = type === 'reviews' ? 30 : 24;
            const moveDistance = (itemWidth + gap) * visibleItems * currentIndex;
            
            track.style.transform = 'translateX(-' + moveDistance + 'px)';

            if (dotsContainer) {
                const dots = dotsContainer.querySelectorAll('.jokit-lf-dot');
                dots.forEach(function(dot, i) {
                    dot.classList.toggle('active', i === currentIndex);
                });
            }

            if (prevBtn) prevBtn.disabled = currentIndex === 0;
            if (nextBtn) nextBtn.disabled = currentIndex >= totalPages - 1;
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateCarousel();
                }
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                if (currentIndex < totalPages - 1) {
                    currentIndex++;
                    updateCarousel();
                }
            });
        }

        // Resize handler
        let resizeTimeout;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function() {
                visibleItems = getVisibleItems(type);
                totalPages = Math.ceil(items.length / visibleItems);
                currentIndex = Math.min(currentIndex, totalPages - 1);
                createDots();
                updateCarousel();
            }, 200);
        });

        // Touch support
        let touchStartX = 0;
        const carousel = track.parentElement;
        
        carousel.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        carousel.addEventListener('touchend', function(e) {
            const touchEndX = e.changedTouches[0].screenX;
            const swipeThreshold = 50;
            
            if (touchStartX - touchEndX > swipeThreshold && currentIndex < totalPages - 1) {
                currentIndex++;
                updateCarousel();
            } else if (touchEndX - touchStartX > swipeThreshold && currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        }, { passive: true });

        // Init
        createDots();
        updateCarousel();
    }

    // ============================================
    // QUANTITY SELECTOR
    // ============================================

    function initQuantitySelector() {
        // Căutăm butoanele cu multiple selectori pentru compatibilitate
        const minusBtn = document.getElementById('jokitQtyMinus') || 
                         document.getElementById('qtyminus') || 
                         document.querySelector('.jokit-lf-hero__qty-btn.minus');
        const plusBtn = document.getElementById('jokitQtyPlus') || 
                        document.getElementById('qtyplus') || 
                        document.querySelector('.jokit-lf-hero__qty-btn.plus');
        const qtyInput = document.getElementById('jokitQtyInput') || 
                         document.getElementById('quantity') || 
                         document.querySelector('.jokit-lf-hero__qty-input');

        console.log('LF Quantity selector init:', { minusBtn, plusBtn, qtyInput });

        if (!qtyInput) return;

        if (minusBtn) {
            minusBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                let val = parseInt(qtyInput.value) || 1;
                if (val > 1) {
                    qtyInput.value = val - 1;
                }
                console.log('LF Minus clicked, value:', qtyInput.value);
            });
        }

        if (plusBtn) {
            plusBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                let val = parseInt(qtyInput.value) || 1;
                if (val < 99) {
                    qtyInput.value = val + 1;
                }
                console.log('LF Plus clicked, value:', qtyInput.value);
            });
        }

        qtyInput.addEventListener('change', function() {
            let val = parseInt(this.value) || 1;
            if (val < 1) val = 1;
            if (val > 99) val = 99;
            this.value = val;
        });
    }

    // ============================================
    // ADD TO CART - INTEGRARE GOMAG
    // ============================================

    function initAddToCart() {
        const addBtns = document.querySelectorAll('#jokitAddToCart, #jokitFinalAddToCart');

        addBtns.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                
                const qtyInput = document.getElementById('jokitQtyInput');
                const qty = qtyInput ? parseInt(qtyInput.value) || 1 : 1;

                // Încearcă să folosească funcția Gomag nativă
                if (typeof $ !== 'undefined' && $.Gomag && $.Gomag.addToCart) {
                    // Metoda Gomag standard cu parametrii corecți
                    // 'p' = product id, 'l' = 'd' (din descriere)
                    $.Gomag.addToCart({
                        'p': parseInt(JOKIT_LF_CONFIG.productId),
                        'l': 'd'
                    });
                } else if (typeof addToCart === 'function') {
                    // Funcție globală alternativă
                    addToCart(JOKIT_LF_CONFIG.productId, qty);
                } else {
                    // Fallback - folosește formularul Gomag existent
                    const gomagQtyInput = document.querySelector('input[name="quantity"]');
                    const gomagAddBtn = document.querySelector('.add-to-cart-btn, .btn-add-to-cart, [data-action="add-to-cart"]');
                    
                    if (gomagQtyInput && gomagAddBtn) {
                        gomagQtyInput.value = qty;
                        gomagAddBtn.click();
                    } else {
                        // Redirect la URL direct de adăugare în coș (Gomag standard)
                        window.location.href = '/cos-de-cumparaturi/adauga/' + JOKIT_LF_CONFIG.productId + '/' + qty;
                    }
                }

                // Animație vizuală
                showNotification(qty);
            });
        });
    }

    function showNotification(qty) {
        let notification = document.querySelector('.jokit-lf-notification');
        
        if (!notification) {
            notification = document.createElement('div');
            notification.className = 'jokit-lf-notification';
            document.body.appendChild(notification);
        }

        notification.innerHTML = '✓ ' + qty + ' x Libertatea Financiară adăugat în coș!';
        
        setTimeout(function() {
            notification.classList.add('show');
        }, 100);

        setTimeout(function() {
            notification.classList.remove('show');
        }, 3000);
    }

    // ============================================
    // SCROLL ANIMATIONS
    // ============================================

    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.jokit-lf-animate');
        
        if (!animatedElements.length) return;

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry, index) {
                if (entry.isIntersecting) {
                    setTimeout(function() {
                        entry.target.classList.add('is-visible');
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(function(el) {
            observer.observe(el);
        });
    }

})();
