/**
 * ============================================
 * JOKIT - ÎNTREABĂ-MĂ ORICE
 * JavaScript pentru Gomag
 * ============================================
 */

(function() {
    'use strict';

    // ============================================
    // CONFIGURAȚIE PRODUS
    // ============================================
    const CONFIG = {
        productId: '3', // ID-ul produsului în Gomag
        productSlug: 'intreab', // Slug unic pentru identificare
        basePath: '/cdn/shop/products/', // Calea către imagini pe server
        debug: false
    };

    // ============================================
    // DATE PRODUS
    // ============================================
    const PRODUCT_DATA = {
        name: 'Întreabă-mă Orice',
        subtitle: 'Set de întrebări pentru părinți și copii',
        price: {
            old: '90,50',
            current: '59,99',
            currency: 'RON',
            discount: '-34%'
        },
        description: 'Un joc de cărți care transformă conversațiile obișnuite în momente speciale. 62 de întrebări atent selectate vă ajută să vă descoperiți mai bine și să creați amintiri de neuitat.',
        contents: {
            totalCards: 62,
            parentCards: 31,
            childCards: 31
        },
        benefits: [
            {
                icon: '💬',
                title: 'Comunicare Deschisă',
                iconFile: 'comunicare.png'
            },
            {
                icon: '❤️',
                title: 'Conexiune Profundă',
                iconFile: 'conexiune.png'
            },
            {
                icon: '🎯',
                title: 'Întrebări Gândite',
                iconFile: 'intrebari.png'
            },
            {
                icon: '👨‍👩‍👧‍👦',
                title: 'Quality Time',
                iconFile: 'qualitytime.png'
            },
            {
                icon: '🌈',
                title: 'Amintiri Frumoase',
                iconFile: 'amintiri.png'
            },
            {
                icon: '🎲',
                title: 'Distracție Garantată',
                iconFile: 'distractie.png'
            }
        ],
        sections: {
            parents: {
                title: 'Întrebări către Părinți',
                badge: '31 CĂRȚI ROȘII → 62 ÎNTREBĂRI COPII',
                description: 'Întrebările pe fundal roșu le pun copiii către părinți.',
                examples: [
                    'Ai făcut armata?',
                    'Ce îți plăcea să faci cel mai mult când erai copil?',
                    'Ce te făcea fericit când erai mic?'
                ]
            },
            children: {
                title: 'Întrebări către Copii',
                badge: '31 CĂRȚI GALBENE → 62 ÎNTREBĂRI PĂRINȚI',
                description: 'Întrebările pe fundal alb le pun părinții către copii.',
                examples: [
                    'Care este cel mai bun prieten al tău și de ce?',
                    'Ce lucruri interesante ai aflat astăzi?',
                    'Ce te face să te simți iubit?'
                ]
            }
        },
        cardImages: [
            { file: 'Card_1.jpg', title: 'Întrebare pentru Părinți', type: 'parinti' },
            { file: 'Card_2.jpg', title: 'Întrebare pentru Copii', type: 'copii' },
            { file: 'Card_3.jpg', title: 'Întrebare pentru Părinți', type: 'parinti' },
            { file: 'Card_4.jpg', title: 'Întrebare pentru Copii', type: 'copii' },
            { file: 'Card_5.jpg', title: 'Întrebare pentru Părinți', type: 'parinti' },
            { file: 'Card_6.jpg', title: 'Întrebare pentru Copii', type: 'copii' },
            { file: 'Card_7.jpg', title: 'Întrebare pentru Părinți', type: 'parinti' },
            { file: 'Card_8.jpg', title: 'Întrebare pentru Copii', type: 'copii' }
        ],
        galleryImages: [
            'IMG_1095-yes Edited.jpg',
            'IMG_1105 Edited.jpg',
            'IMG_1113 Edited.jpg',
            'IMG_1114 Edited.jpg',
            'IMG_1121 Edited.jpg',
            'IMG_1125 Edited.jpg',
            'IMG_1130 Edited.jpg',
            'IMG_1132 Edited.jpg'
        ],
        howToWin: [
            {
                icon: '🗣️',
                title: 'Conversații Sincere',
                desc: 'Răspundeți sincer și deschis la întrebări'
            },
            {
                icon: '👂',
                title: 'Ascultare Activă',
                desc: 'Ascultă cu atenție și curiozitate răspunsurile'
            },
            {
                icon: '💝',
                title: 'Momente de Calitate',
                desc: 'Bucurați-vă împreună de timpul petrecut'
            }
        ],
        reviews: [
            {
                stars: 5,
                text: 'Cel mai frumos mod de a petrece o seară în familie! Am descoperit lucruri noi despre copiii mei.',
                author: 'Elena M.'
            },
            {
                stars: 5,
                text: 'Copiii mei abia așteaptă să jucăm. Întrebările sunt foarte bine gândite pentru toate vârstele.',
                author: 'Andrei P.'
            },
            {
                stars: 5,
                text: 'Un cadou perfect pentru orice familie! Recomand cu căldură.',
                author: 'Diana C.'
            },
            {
                stars: 5,
                text: 'Am râs, ne-am emoționat și am creat amintiri frumoase. Mulțumim!',
                author: 'Mihai & Ana'
            }
        ]
    };

    // ============================================
    // VERIFICARE PAGINĂ PRODUS
    // ============================================
    function isProductPage() {
        const url = decodeURIComponent(window.location.href).toLowerCase();
        return url.includes('întreabă-mă-orice') ||
               url.includes('intreaba-ma-orice') ||
               url.includes('întreb') ||
               url.includes(CONFIG.productSlug) || 
               document.querySelector('[data-product-id="' + CONFIG.productId + '"]') !== null;
    }

    // ============================================
    // INIȚIALIZARE
    // ============================================
    function init() {
        if (!isProductPage()) {
            if (CONFIG.debug) console.log('JOKIT IMO: Nu suntem pe pagina produsului');
            return;
        }

        console.log('🎴 JOKIT Întreabă-mă Orice - Inițializare...');
        
        // Adaugă clasa pe body pentru stiluri CSS
        document.body.classList.add('jokit-imo-active');
        
        // Injectează HTML personalizat
        setTimeout(() => {
            injectCustomHTML();
            initCarousels();
            initScrollAnimations();
            initUnstackAnimation();
        }, 100);
    }

    // ============================================
    // GENERARE HTML
    // ============================================
    function generateHeroHTML() {
        return `
        <div class="jokit-imo-hero-wrapper">
            <section class="jokit-imo-hero">
                <div class="jokit-imo-hero__container">
                    <!-- Imaginea Produsului -->
                    <div class="jokit-imo-hero__product-image">
                        <img src="hero-image.png" alt="${PRODUCT_DATA.name}">
                        
                        <!-- Badge Preț pe Imagine -->
                        <div class="jokit-imo-hero__price-badge-full">
                            <span class="jokit-imo-hero__badge-old">${PRODUCT_DATA.price.old} ${PRODUCT_DATA.price.currency}</span>
                            <div class="jokit-imo-hero__badge-main">
                                <span class="jokit-imo-hero__badge-value">${PRODUCT_DATA.price.current}</span>
                                <span class="jokit-imo-hero__badge-currency">${PRODUCT_DATA.price.currency}</span>
                            </div>
                            <span class="jokit-imo-hero__badge-um">preț final</span>
                        </div>
                    </div>
                    
                    <!-- Conținut Text -->
                    <div class="jokit-imo-hero__content">
                        <h1 class="jokit-imo-hero__title">
                            <span class="jokit-imo-hero__title-main">${PRODUCT_DATA.name}</span>
                            <span class="jokit-imo-hero__title-sub">${PRODUCT_DATA.subtitle}</span>
                        </h1>
                        
                        <p class="jokit-imo-hero__description">
                            ${PRODUCT_DATA.description}
                        </p>
                        
                        <!-- Opțiuni de Cumpărare -->
                        <div class="jokit-imo-purchase-options">
                            <!-- Opțiunea Pachet Complet -->
                            <label class="jokit-imo-purchase-option jokit-imo-purchase-option--selected">
                                <input type="radio" name="purchase-option" checked>
                                <div class="jokit-imo-purchase-option__radio"></div>
                                <div class="jokit-imo-purchase-option__content">
                                    <div class="jokit-imo-purchase-option__header">
                                        <span class="jokit-imo-purchase-option__title">Pachet: Libertatea Financiară + Întreabă-mă Orice</span>
                                        <span class="jokit-imo-purchase-option__badge jokit-imo-purchase-option__badge--best">BEST VALUE</span>
                                    </div>
                                    <span class="jokit-imo-purchase-option__desc">2 jocuri pentru toată familia + Transport Gratuit</span>
                                </div>
                                <div class="jokit-imo-purchase-option__price">
                                    <span class="jokit-imo-purchase-option__old">180,99 lei</span>
                                    <span class="jokit-imo-purchase-option__amount">109,98 lei</span>
                                    <span class="jokit-imo-purchase-option__savings">🎁 -39%</span>
                                </div>
                            </label>
                            
                            <div class="jokit-imo-purchase-divider"><span>SAU</span></div>
                            
                            <!-- Opțiunea 2x Întreabă-mă Orice -->
                            <label class="jokit-imo-purchase-option">
                                <input type="radio" name="purchase-option">
                                <div class="jokit-imo-purchase-option__radio"></div>
                                <div class="jokit-imo-purchase-option__content">
                                    <div class="jokit-imo-purchase-option__header">
                                        <span class="jokit-imo-purchase-option__title">2x Întreabă-mă Orice + Transport Gratuit</span>
                                        <span class="jokit-imo-purchase-option__badge">POPULAR</span>
                                    </div>
                                    <span class="jokit-imo-purchase-option__desc">Un joc pentru tine + unul cadou</span>
                                </div>
                                <div class="jokit-imo-purchase-option__price">
                                    <span class="jokit-imo-purchase-option__savings">Economisești 71 lei</span>
                                </div>
                            </label>
                            
                            <div class="jokit-imo-purchase-divider"><span>SAU</span></div>
                            
                            <!-- Opțiunea Standard -->
                            <label class="jokit-imo-purchase-option">
                                <input type="radio" name="purchase-option">
                                <div class="jokit-imo-purchase-option__radio"></div>
                                <div class="jokit-imo-purchase-option__content">
                                    <div class="jokit-imo-purchase-option__header">
                                        <span class="jokit-imo-purchase-option__title">Un joc "Întreabă-mă Orice"</span>
                                    </div>
                                    <span class="jokit-imo-purchase-option__desc">Reducere de 20.5 lei față de prețul original</span>
                                </div>
                                <div class="jokit-imo-purchase-option__price">
                                    <span class="jokit-imo-purchase-option__amount">${PRODUCT_DATA.price.current} lei</span>
                                </div>
                            </label>
                        </div>
                        
                        <!-- Buton Adaugă în Coș -->
                        <div class="jokit-imo-hero__cta-row">
                            <button class="jokit-imo-hero__add-to-cart">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="9" cy="21" r="1"/>
                                    <circle cx="20" cy="21" r="1"/>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                                </svg>
                                Adaugă în Coș
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Wave Separator -->
            <div class="jokit-imo-hero__wave">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FDF5E6"/>
                </svg>
            </div>
        </div>
        `;
    }

    function generateGalleryHTML() {
        const slides = PRODUCT_DATA.galleryImages.map((img, i) => `
            <div class="jokit-imo-gallery__slide">
                <img src="Intreaba-ma orice - Poze Produs/${img}" alt="Imagine ${i + 1}">
            </div>
        `).join('');

        return `
        <section class="jokit-imo-gallery">
            <div class="jokit-imo-gallery__container">
                <h2 class="jokit-imo-gallery__title jokit-imo-animate">📸 Galerie Imagini</h2>
                <div class="jokit-imo-gallery__carousel-wrapper">
                    <button class="jokit-imo-gallery__arrow jokit-imo-gallery__arrow--prev">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="15 18 9 12 15 6"/>
                        </svg>
                    </button>
                    <div class="jokit-imo-gallery__carousel">
                        <div class="jokit-imo-gallery__track">
                            ${slides}
                        </div>
                    </div>
                    <button class="jokit-imo-gallery__arrow jokit-imo-gallery__arrow--next">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9 18 15 12 9 6"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
        `;
    }

    function generateContentsHTML() {
        return `
        <section class="jokit-imo-contents">
            <div class="jokit-imo-contents__container">
                <h2 class="jokit-imo-contents__title jokit-imo-animate">Ce conține <span>setul</span>?</h2>
                <div class="jokit-imo-contents__grid">
                    <div class="jokit-imo-contents__item jokit-imo-animate">
                        <div class="jokit-imo-contents__number">${PRODUCT_DATA.contents.totalCards}</div>
                        <div class="jokit-imo-contents__label">Cărți în Total</div>
                        <div class="jokit-imo-contents__desc">Întrebări pentru toată familia</div>
                    </div>
                    <div class="jokit-imo-contents__item jokit-imo-animate">
                        <div class="jokit-imo-contents__number" style="color: #E74C3C;">62</div>
                        <div class="jokit-imo-contents__label">Cărți ale Copiilor</div>
                        <div class="jokit-imo-contents__desc">Întrebări pe fundal roșu puse de copii către părinți</div>
                    </div>
                    <div class="jokit-imo-contents__item jokit-imo-animate">
                        <div class="jokit-imo-contents__number" style="color: #FFA000;">62</div>
                        <div class="jokit-imo-contents__label">Cărți ale Părinților</div>
                        <div class="jokit-imo-contents__desc">Întrebări pe fundal alb puse de părinți către copii</div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }

    function generateBenefitsHTML() {
        const benefitItems = PRODUCT_DATA.benefits.map(b => `
            <div class="jokit-imo-benefits__item jokit-imo-animate">
                <div class="jokit-imo-benefits__icon">
                    <img src="Intreaba-ma orice - Iconite/${b.iconFile}" alt="${b.title}" onerror="this.outerHTML='<span style=\\"font-size:3rem;\\">${b.icon}</span>'">
                </div>
                <h3 class="jokit-imo-benefits__item-title">${b.title}</h3>
            </div>
        `).join('');

        return `
        <section class="jokit-imo-benefits">
            <div class="jokit-imo-benefits__container">
                <h2 class="jokit-imo-benefits__title jokit-imo-animate">✨ De ce vei iubi acest joc?</h2>
                <div class="jokit-imo-benefits__grid">
                    ${benefitItems}
                </div>
            </div>
        </section>
        `;
    }

    function generateSectionsHTML() {
        return `
        <section class="jokit-imo-sections">
            <div class="jokit-imo-sections__container">
                <h2 class="jokit-imo-sections__title jokit-imo-animate">Două tipuri de <span>întrebări</span></h2>
                <div class="jokit-imo-sections__grid">
                    <!-- Secțiunea Părinți -->
                    <div class="jokit-imo-section-card jokit-imo-section-card--parinti jokit-imo-animate">
                        <span class="jokit-imo-section-card__badge">${PRODUCT_DATA.sections.parents.badge}</span>
                        <h3 class="jokit-imo-section-card__title">${PRODUCT_DATA.sections.parents.title}</h3>
                        <p class="jokit-imo-section-card__desc">${PRODUCT_DATA.sections.parents.description}</p>
                        <ul class="jokit-imo-section-card__examples">
                            ${PRODUCT_DATA.sections.parents.examples.map(e => `<li>${e}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <!-- Secțiunea Copii -->
                    <div class="jokit-imo-section-card jokit-imo-section-card--copii jokit-imo-animate">
                        <span class="jokit-imo-section-card__badge">${PRODUCT_DATA.sections.children.badge}</span>
                        <h3 class="jokit-imo-section-card__title">${PRODUCT_DATA.sections.children.title}</h3>
                        <p class="jokit-imo-section-card__desc">${PRODUCT_DATA.sections.children.description}</p>
                        <ul class="jokit-imo-section-card__examples">
                            ${PRODUCT_DATA.sections.children.examples.map(e => `<li>${e}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        `;
    }

    function generateCardsHTML() {
        const cardItems = PRODUCT_DATA.cardImages.map((card, i) => `
            <div class="jokit-imo-cards__card" data-type="${card.type}">
                <img src="Intreaba-ma orice - Poze Carduri/${card.file}" alt="${card.title}">
                <span class="jokit-imo-cards__card-title">${card.title}</span>
                <span class="jokit-imo-cards__card-desc">Card ${i + 1}</span>
            </div>
        `).join('');

        return `
        <section class="jokit-imo-cards">
            <div class="jokit-imo-cards__container">
                <h2 class="jokit-imo-cards__title jokit-imo-animate">🎴 Previzualizează Cărțile</h2>
                <div class="jokit-imo-cards__carousel-wrapper">
                    <button class="jokit-imo-cards__arrow jokit-imo-cards__arrow--prev">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="15 18 9 12 15 6"/>
                        </svg>
                    </button>
                    <div class="jokit-imo-cards__carousel">
                        <div class="jokit-imo-cards__track">
                            ${cardItems}
                        </div>
                    </div>
                    <button class="jokit-imo-cards__arrow jokit-imo-cards__arrow--next">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9 18 15 12 9 6"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
        `;
    }

    function generateHowToWinHTML() {
        const items = PRODUCT_DATA.howToWin.map(item => `
            <div class="jokit-imo-win-item jokit-imo-animate">
                <div class="jokit-imo-win-item__icon">${item.icon}</div>
                <h3 class="jokit-imo-win-item__title">${item.title}</h3>
                <p class="jokit-imo-win-item__desc">${item.desc}</p>
            </div>
        `).join('');

        return `
        <section class="jokit-imo-howtowin">
            <div class="jokit-imo-howtowin__container">
                <h2 class="jokit-imo-howtowin__title jokit-imo-animate">💡 Cum câștigă toată lumea?</h2>
                <p class="jokit-imo-howtowin__intro jokit-imo-animate">În acest joc nu există învinși - toți câștigă timp de calitate!</p>
                <div class="jokit-imo-howtowin__grid">
                    ${items}
                </div>
            </div>
        </section>
        `;
    }

    function generateReviewsHTML() {
        const reviewItems = PRODUCT_DATA.reviews.map(r => `
            <div class="jokit-imo-review">
                <div class="jokit-imo-review__stars">${'★'.repeat(r.stars)}</div>
                <p class="jokit-imo-review__text">${r.text}</p>
                <div class="jokit-imo-review__author">${r.author}</div>
            </div>
        `).join('');

        return `
        <section class="jokit-imo-reviews">
            <div class="jokit-imo-reviews__container">
                <h2 class="jokit-imo-reviews__title jokit-imo-animate">💬 Ce spun familiile care s-au jucat deja Întreabă-mă Orice</h2>
                <div class="jokit-imo-reviews__carousel-wrapper">
                    <button class="jokit-imo-reviews__arrow jokit-imo-reviews__arrow--prev">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="15 18 9 12 15 6"/>
                        </svg>
                    </button>
                    <div class="jokit-imo-reviews__track">
                        ${reviewItems}
                    </div>
                    <button class="jokit-imo-reviews__arrow jokit-imo-reviews__arrow--next">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9 18 15 12 9 6"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
        `;
    }

    function generateCTAHTML() {
        return `
        <section class="jokit-imo-cta">
            <div class="jokit-imo-cta__container">
                <h2 class="jokit-imo-cta__title jokit-imo-animate">Începe Conversațiile care Contează!</h2>
                <p class="jokit-imo-cta__subtitle jokit-imo-animate">Comandă acum și bucură-te de momente speciale în familie</p>
                <button class="jokit-imo-cta__btn jokit-imo-animate">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="9" cy="21" r="1"/>
                        <circle cx="20" cy="21" r="1"/>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                    </svg>
                    Adaugă în Coș - ${PRODUCT_DATA.price.current} ${PRODUCT_DATA.price.currency}
                </button>
            </div>
        </section>
        `;
    }

    function generateFooterHTML() {
        return `
        <footer class="jokit-imo-footer">
            <div class="jokit-imo-footer__container">
                <div class="jokit-imo-footer__brand">🎴 JOKIT</div>
                <p class="jokit-imo-footer__tagline">Jocuri care conectează familii</p>
                <p class="jokit-imo-footer__copyright">© ${new Date().getFullYear()} JOKIT. Toate drepturile rezervate.</p>
            </div>
        </footer>
        `;
    }

    // ============================================
    // INJECTARE HTML
    // ============================================
    function injectCustomHTML() {
        const productInfo = document.querySelector('.product-info');
        if (!productInfo) {
            console.warn('JOKIT IMO: Nu s-a găsit .product-info');
            return;
        }

        // Creează containerul principal
        const wrapper = document.createElement('div');
        wrapper.className = 'jokit-imo-wrapper';
        wrapper.innerHTML = `
            ${generateHeroHTML()}
            <div class="jokit-imo-main-bg">
                ${generateGalleryHTML()}
                ${generateContentsHTML()}
                ${generateBenefitsHTML()}
                ${generateSectionsHTML()}
                ${generateCardsHTML()}
                ${generateHowToWinHTML()}
                ${generateReviewsHTML()}
                ${generateCTAHTML()}
            </div>
            ${generateFooterHTML()}
        `;

        // Inserează după product-info
        productInfo.parentNode.insertBefore(wrapper, productInfo.nextSibling);

        // Inițializează controlul cantității
        initQuantityControls();

        console.log('✅ JOKIT IMO: HTML injectat cu succes!');
    }

    // ============================================
    // CONTROLUL CANTITĂȚII
    // ============================================
    function initQuantityControls() {
        const qtyInput = document.querySelector('.jokit-imo-hero__qty-input');
        const decreaseBtn = document.querySelector('.jokit-imo-hero__qty-btn.minus');
        const increaseBtn = document.querySelector('.jokit-imo-hero__qty-btn.plus');

        console.log('Quantity controls init:', { qtyInput, decreaseBtn, increaseBtn });

        if (!qtyInput) return;

        if (decreaseBtn) {
            decreaseBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                let val = parseInt(qtyInput.value) || 1;
                if (val > 1) {
                    qtyInput.value = val - 1;
                }
                console.log('Minus clicked, value:', qtyInput.value);
            });
        }

        if (increaseBtn) {
            increaseBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                let val = parseInt(qtyInput.value) || 1;
                qtyInput.value = val + 1;
                console.log('Plus clicked, value:', qtyInput.value);
            });
        }

        // Add to cart buttons
        const addToCartBtns = document.querySelectorAll('.jokit-imo-hero__add-to-cart, .jokit-imo-cta__btn');
        addToCartBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const qty = parseInt(qtyInput?.value) || 1;
                
                // Metoda 1: API Gomag nativ (jQuery)
                if (typeof $ !== 'undefined' && $.Gomag && $.Gomag.addToCart) {
                    $.Gomag.addToCart({
                        'p': parseInt(CONFIG.productId),
                        'l': 'd'
                    });
                }
                // Metoda 2: funcție globală
                else if (typeof addToCart === 'function') {
                    addToCart(CONFIG.productId, qty);
                }
                // Metoda 3: click pe butonul Gomag ascuns
                else {
                    const gomagQtyInput = document.querySelector('input[name="quantity"]');
                    const gomagAddBtn = document.querySelector('.add-to-cart-box .btn-cart, .add-to-cart, .add2cart, .btn-add-to-cart, [data-action="add-to-cart"]');
                    
                    if (gomagQtyInput && gomagAddBtn) {
                        gomagQtyInput.value = qty;
                        gomagAddBtn.click();
                    } else {
                        // Metoda 4: redirect direct la URL coș Gomag
                        window.location.href = '/cos-de-cumparaturi/adauga/' + CONFIG.productId + '/' + qty;
                    }
                }
                
                // Notificare vizuală
                showCartNotification(qty);
            });
        });
    }

    function showCartNotification(qty) {
        let notif = document.querySelector('.jokit-imo-notification');
        if (!notif) {
            notif = document.createElement('div');
            notif.className = 'jokit-imo-notification';
            notif.style.cssText = 'position:fixed;top:20px;right:20px;background:#27AE60;color:#fff;padding:16px 24px;border-radius:12px;font-weight:600;z-index:99999;transform:translateX(120%);transition:transform 0.3s ease;box-shadow:0 4px 20px rgba(0,0,0,0.15);';
            document.body.appendChild(notif);
        }
        notif.textContent = '✓ ' + qty + 'x ' + PRODUCT_DATA.name + ' adăugat în coș!';
        setTimeout(() => { notif.style.transform = 'translateX(0)'; }, 50);
        setTimeout(() => { notif.style.transform = 'translateX(120%)'; }, 3000);
    }

    // ============================================
    // INIȚIALIZARE CAROUSEL-URI
    // ============================================
    function initCarousels() {
        // Gallery carousel
        initCarousel(
            '.jokit-imo-gallery__track',
            '.jokit-imo-gallery__arrow--prev',
            '.jokit-imo-gallery__arrow--next',
            300
        );

        // Cards carousel
        initCarousel(
            '.jokit-imo-cards__track',
            '.jokit-imo-cards__arrow--prev',
            '.jokit-imo-cards__arrow--next',
            310
        );

        // Reviews carousel
        initCarousel(
            '.jokit-imo-reviews__track',
            '.jokit-imo-reviews__arrow--prev',
            '.jokit-imo-reviews__arrow--next',
            385
        );
    }

    function initCarousel(trackSelector, prevSelector, nextSelector, scrollAmount) {
        const track = document.querySelector(trackSelector);
        const prevBtn = document.querySelector(prevSelector);
        const nextBtn = document.querySelector(nextSelector);

        if (!track || !prevBtn || !nextBtn) return;

        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }

    // ============================================
    // ANIMAȚII SCROLL (Intersection Observer)
    // ============================================
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.jokit-imo-animate');

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            animatedElements.forEach(el => observer.observe(el));
        } else {
            // Fallback pentru browsere vechi
            animatedElements.forEach(el => el.classList.add('is-visible'));
        }
    }

    // ============================================
    // ANIMAȚIE UNSTACK CARDURI
    // ============================================
    function initUnstackAnimation() {
        const cardsSection = document.querySelector('.jokit-imo-cards');
        const cards = document.querySelectorAll('.jokit-imo-cards__card');

        if (!cardsSection || !cards.length) return;

        const unstackObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Adaugă clasa pentru animația de desfacere
                    cards.forEach(card => {
                        card.classList.add('is-unstacked');
                    });
                    // Oprește observarea după ce s-a animat
                    unstackObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        });

        unstackObserver.observe(cardsSection);
    }

    // ============================================
    // PORNIRE
    // ============================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
