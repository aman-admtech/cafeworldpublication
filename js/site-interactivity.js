/**
 * Cafeworld Publication - Complete Frontend Interactivity Engine
 * Features:
 * 1. Off-Canvas Side Drawer Menu (Opens Right-to-Left with White Background)
 * 2. Swiper Sliders & Carousels (Hero, Books, Testimonials)
 * 3. Lightbox Modal for Images
 */

(function () {
    function initInteractivity() {
        // ==========================================
        // 1. OFF-CANVAS SIDE PANEL MENU (RIGHT TO LEFT)
        // ==========================================
        let sideDrawer = document.getElementById('cw-side-drawer');
        if (!sideDrawer) {
            sideDrawer = document.createElement('div');
            sideDrawer.id = 'cw-side-drawer';
            sideDrawer.innerHTML = `
                <!-- Dark Overlay Backdrop -->
                <div id="cw-drawer-backdrop" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.55);z-index:999998;opacity:0;pointer-events:none;transition:opacity 0.35s ease;backdrop-filter:blur(2px);"></div>
                
                <!-- White Side Drawer Panel (Right to Left) -->
                <div id="cw-drawer-panel" style="position:fixed;top:0;right:0;width:min(85vw, 330px);height:100%;background:#ffffff;z-index:999999;box-shadow:-5px 0 30px rgba(0,0,0,0.22);transform:translateX(100%);transition:transform 0.38s cubic-bezier(0.16, 1, 0.3, 1);display:flex;flex-direction:column;font-family:'Poppins',-apple-system,sans-serif;overflow-y:auto;">
                    
                    <!-- Top Header: Logo & Close Button -->
                    <div style="display:flex;align-items:center;justify-content:space-between;padding:20px 24px;border-bottom:1px solid #f1f5f9;background:#fafafa;">
                        <a href="index.html" style="display:flex;align-items:center;">
                            <img src="images/WhatsApp-Image-2026-09-04-at-9.06.36-PM-768x384.webp" alt="Cafeworld Publication" style="max-height:45px;width:auto;object-fit:contain;" />
                        </a>
                        <button id="cw-drawer-close" aria-label="Close Menu" style="background:#f1f5f9;border:none;width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#334155;font-size:24px;line-height:1;transition:all 0.2s ease;">
                            &times;
                        </button>
                    </div>

                    <!-- Navigation Links -->
                    <nav style="flex:1;padding:24px 18px;">
                        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px;">
                            <li>
                                <a href="index.html" class="cw-drawer-link" style="display:flex;align-items:center;padding:13px 16px;border-radius:8px;color:#1e293b;text-decoration:none;font-size:16px;font-weight:600;transition:all 0.2s ease;">
                                    <span style="margin-right:12px;font-size:18px;">🏠</span> Home
                                </a>
                            </li>
                            <li>
                                <a href="our-published-books.html" class="cw-drawer-link" style="display:flex;align-items:center;padding:13px 16px;border-radius:8px;color:#1e293b;text-decoration:none;font-size:16px;font-weight:600;transition:all 0.2s ease;">
                                    <span style="margin-right:12px;font-size:18px;">📚</span> Our Published books
                                </a>
                            </li>
                            <li>
                                <a href="gallery.html" class="cw-drawer-link" style="display:flex;align-items:center;padding:13px 16px;border-radius:8px;color:#1e293b;text-decoration:none;font-size:16px;font-weight:600;transition:all 0.2s ease;">
                                    <span style="margin-right:12px;font-size:18px;">🖼️</span> Gallery
                                </a>
                            </li>
                            <li>
                                <a href="about-us.html" class="cw-drawer-link" style="display:flex;align-items:center;padding:13px 16px;border-radius:8px;color:#1e293b;text-decoration:none;font-size:16px;font-weight:600;transition:all 0.2s ease;">
                                    <span style="margin-right:12px;font-size:18px;">ℹ️</span> About Us
                                </a>
                            </li>
                            <li>
                                <a href="contact.html" class="cw-drawer-link" style="display:flex;align-items:center;padding:13px 16px;border-radius:8px;color:#1e293b;text-decoration:none;font-size:16px;font-weight:600;transition:all 0.2s ease;">
                                    <span style="margin-right:12px;font-size:18px;">📞</span> Contact Us
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <!-- Bottom Quick Action Buttons -->
                    <div style="padding:20px 24px;border-top:1px solid #f1f5f9;background:#fafafa;display:flex;flex-direction:column;gap:10px;">
                        <a href="tel:+919914022845" style="display:flex;align-items:center;justify-content:center;padding:12px 18px;background:#2563eb;color:#ffffff;border-radius:8px;text-decoration:none;font-weight:600;font-size:15px;box-shadow:0 3px 12px rgba(37,99,235,0.25);">
                            📞 Call: +91 99140 22845
                        </a>
                        <a href="https://wa.me/919914022845?text=Hello%20Cafeworld%20Publication" target="_blank" style="display:flex;align-items:center;justify-content:center;padding:12px 18px;background:#16a34a;color:#ffffff;border-radius:8px;text-decoration:none;font-weight:600;font-size:15px;box-shadow:0 3px 12px rgba(22,163,74,0.25);">
                            💬 Chat on WhatsApp
                        </a>
                    </div>

                </div>
                <style>
                    .cw-drawer-link:hover, .cw-drawer-link:active {
                        background: #f1f5f9 !important;
                        color: #16a34a !important;
                    }
                    #cw-drawer-close:hover {
                        background: #e2e8f0 !important;
                        color: #0f172a !important;
                        transform: scale(1.05);
                    }
                </style>
            `;
            document.body.appendChild(sideDrawer);

            const backdrop = sideDrawer.querySelector('#cw-drawer-backdrop');
            const panel = sideDrawer.querySelector('#cw-drawer-panel');
            const closeBtn = sideDrawer.querySelector('#cw-drawer-close');

            function openDrawer() {
                backdrop.style.opacity = '1';
                backdrop.style.pointerEvents = 'auto';
                panel.style.transform = 'translateX(0)';
                document.body.style.overflow = 'hidden'; // prevent background scrolling
            }

            function closeDrawer() {
                backdrop.style.opacity = '0';
                backdrop.style.pointerEvents = 'none';
                panel.style.transform = 'translateX(100%)';
                document.body.style.overflow = '';
            }

            // Expose globally
            window.openCwSideDrawer = openDrawer;
            window.closeCwSideDrawer = closeDrawer;

            closeBtn.addEventListener('click', closeDrawer);
            backdrop.addEventListener('click', closeDrawer);

            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') closeDrawer();
            });

            // Close when clicking any navigation link
            sideDrawer.querySelectorAll('.cw-drawer-link').forEach(link => {
                link.addEventListener('click', closeDrawer);
            });
        }

        // Connect hamburger button (.elementor-menu-toggle) to open side drawer
        const menuToggles = document.querySelectorAll('.elementor-menu-toggle');
        menuToggles.forEach(toggle => {
            if (toggle.dataset.cwInitialized) return;
            toggle.dataset.cwInitialized = 'true';

            toggle.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                if (window.openCwSideDrawer) {
                    window.openCwSideDrawer();
                }
            });
        });

        // Hide default inline elementor dropdown so it doesn't push page content down
        document.querySelectorAll('.elementor-nav-menu--dropdown').forEach(d => {
            d.style.display = 'none';
        });

        // ==========================================
        // 2. SWIPER SLIDERS & CAROUSELS
        // ==========================================
        if (typeof window.Swiper !== 'undefined') {
            // 2A. Books Carousel (Nested Carousel)
            const bookCarousels = document.querySelectorAll('.elementor-widget-n-carousel .swiper, .elementor-widget-nested-carousel .swiper');
            bookCarousels.forEach(carousel => {
                if (!carousel.classList.contains('swiper-initialized')) {
                    const parent = carousel.closest('.elementor-widget-n-carousel, .elementor-widget-nested-carousel') || carousel;
                    new window.Swiper(carousel, {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        loop: true,
                        autoplay: {
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        },
                        pagination: {
                            el: parent.querySelector('.swiper-pagination'),
                            clickable: true,
                        },
                        navigation: {
                            nextEl: parent.querySelector('.elementor-swiper-button-next, .swiper-button-next'),
                            prevEl: parent.querySelector('.elementor-swiper-button-prev, .swiper-button-prev'),
                        },
                        breakpoints: {
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 15
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 25
                            }
                        }
                    });
                }
            });

            // 2B. Hero Section - Ken Burns Smooth Zoom-In Effect (Single Image, No Sliding)
            const heroBgs = document.querySelectorAll('.elementor-widget-slides .swiper-slide-bg');
            heroBgs.forEach(bg => {
                bg.classList.add('elementor-ken-burns--active');
            });

            if (!document.getElementById('cw-kenburns-style')) {
                const kbStyle = document.createElement('style');
                kbStyle.id = 'cw-kenburns-style';
                kbStyle.textContent = `
                    .elementor-widget-slides .swiper-slide-bg.elementor-ken-burns {
                        animation: cwKenBurnsZoom 14s ease-in-out infinite alternate !important;
                        transform-origin: center center !important;
                        will-change: transform;
                    }
                    @keyframes cwKenBurnsZoom {
                        0% {
                            transform: scale(1);
                        }
                        100% {
                            transform: scale(1.18);
                        }
                    }
                    .elementor-widget-slides .swiper-slide {
                        width: 100% !important;
                        opacity: 1 !important;
                    }
                    .elementor-widget-slides .elementor-swiper-button,
                    .elementor-widget-slides .swiper-pagination {
                        display: none !important;
                    }
                `;
                document.head.appendChild(kbStyle);
            }

            // 2C. Testimonials Carousel
            const testCarousels = document.querySelectorAll('.elementor-widget-testimonial-carousel .swiper');
            testCarousels.forEach(tCarousel => {
                if (!tCarousel.classList.contains('swiper-initialized')) {
                    const parent = tCarousel.closest('.elementor-widget-testimonial-carousel') || tCarousel;
                    new window.Swiper(tCarousel, {
                        slidesPerView: 1,
                        spaceBetween: 25,
                        loop: true,
                        autoplay: {
                            delay: 5000,
                            disableOnInteraction: false,
                        },
                        pagination: {
                            el: parent.querySelector('.swiper-pagination'),
                            clickable: true,
                        },
                        breakpoints: {
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 25
                            }
                        }
                    });
                }
            });

            // 2D. Fallback for any other .swiper container (excluding hero section)
            document.querySelectorAll('.swiper:not(.elementor-slides-wrapper)').forEach(s => {
                if (!s.classList.contains('swiper-initialized')) {
                    new window.Swiper(s, {
                        slidesPerView: 1,
                        loop: true,
                        autoplay: { delay: 4000 }
                    });
                }
            });
        }

        // ==========================================
        // 3. IMAGE LIGHTBOX MODAL
        // ==========================================
        let lightbox = document.getElementById('cw-lightbox-modal');
        if (!lightbox) {
            lightbox = document.createElement('div');
            lightbox.id = 'cw-lightbox-modal';
            lightbox.innerHTML = `
                <div class="cw-lightbox-backdrop" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.88);z-index:999999;display:none;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(4px);animation:cwFadeIn 0.25s ease;">
                    <button class="cw-lightbox-close" style="position:absolute;top:20px;right:25px;background:none;border:none;color:#fff;font-size:36px;font-weight:bold;cursor:pointer;line-height:1;z-index:1000000;padding:5px 12px;">&times;</button>
                    <div style="max-width:90vw;max-height:90vh;display:flex;align-items:center;justify-content:center;">
                        <img id="cw-lightbox-img" src="" alt="Enlarged View" style="max-width:90vw;max-height:85vh;object-fit:contain;border-radius:6px;box-shadow:0 10px 40px rgba(0,0,0,0.6);animation:cwZoomIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);" />
                    </div>
                </div>
                <style>
                    @keyframes cwFadeIn { from { opacity: 0; } to { opacity: 1; } }
                    @keyframes cwZoomIn { from { transform: scale(0.85); opacity: 0; } to { transform: scale(1); opacity: 1; } }
                </style>
            `;
            document.body.appendChild(lightbox);

            const backdrop = lightbox.querySelector('.cw-lightbox-backdrop');
            const lbImg = lightbox.querySelector('#cw-lightbox-img');
            const closeBtn = lightbox.querySelector('.cw-lightbox-close');

            function closeLightbox() {
                backdrop.style.display = 'none';
                lbImg.src = '';
            }

            closeBtn.addEventListener('click', closeLightbox);
            backdrop.addEventListener('click', function (e) {
                if (e.target === backdrop || e.target.tagName !== 'IMG') {
                    closeLightbox();
                }
            });

            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape' && backdrop.style.display === 'flex') {
                    closeLightbox();
                }
            });

            window.openCwLightbox = function (src) {
                if (!src) return;
                lbImg.src = src;
                backdrop.style.display = 'flex';
            };
        }

        // Attach lightbox click handler to all gallery / book images
        const imageLinks = document.querySelectorAll(`
            a[data-elementor-open-lightbox="yes"],
            .gallery a,
            .gallery-item a,
            .elementor-image a,
            .elementor-widget-image a,
            a[href*="images/"],
            a[href$=".webp"],
            a[href$=".jpg"],
            a[href$=".jpeg"],
            a[href$=".png"]
        `);

        imageLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && (href.includes('images/') || href.match(/\.(webp|jpg|jpeg|png|svg)$/i))) {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    window.openCwLightbox(href);
                });
            }
        });

        // Also allow clicking directly on images inside book carousel or gallery
        document.querySelectorAll('.gallery img, .elementor-gallery-item img, .elementor-widget-n-carousel img, .elementor-widget-image img').forEach(img => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', function(e) {
                if (!img.closest('a')) {
                    e.preventDefault();
                    window.openCwLightbox(img.src);
                }
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initInteractivity);
    } else {
        initInteractivity();
    }
    window.addEventListener('load', initInteractivity);
})();
