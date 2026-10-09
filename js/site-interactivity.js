/**
 * Cafeworld Publication - Complete Frontend Interactivity Engine
 * Restores: Mobile Hamburger Menu, Hero & Book Swiper Sliders, Lightbox Modal
 */

(function () {
    function initInteractivity() {
        // ==========================================
        // 1. MOBILE HAMBURGER MENU TOGGLE
        // ==========================================
        const menuToggles = document.querySelectorAll('.elementor-menu-toggle');
        menuToggles.forEach(toggle => {
            // Avoid duplicate listeners
            if (toggle.dataset.cwInitialized) return;
            toggle.dataset.cwInitialized = 'true';

            toggle.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                
                const isOpen = toggle.classList.contains('elementor-active');
                if (isOpen) {
                    toggle.classList.remove('elementor-active');
                    toggle.setAttribute('aria-expanded', 'false');
                } else {
                    toggle.classList.add('elementor-active');
                    toggle.setAttribute('aria-expanded', 'true');
                }

                // Find dropdown container (usually sibling or inside widget)
                const widget = toggle.closest('.elementor-widget-nav-menu');
                if (widget) {
                    const dropdown = widget.querySelector('.elementor-nav-menu--dropdown');
                    if (dropdown) {
                        if (!isOpen) {
                            dropdown.classList.add('elementor-active');
                            dropdown.setAttribute('aria-hidden', 'false');
                            dropdown.style.display = 'block';
                        } else {
                            dropdown.classList.remove('elementor-active');
                            dropdown.setAttribute('aria-hidden', 'true');
                            dropdown.style.display = 'none';
                        }
                    }
                }
            });
        });

        // Close mobile menu when clicking outside or on a link
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.elementor-widget-nav-menu')) {
                menuToggles.forEach(toggle => {
                    toggle.classList.remove('elementor-active');
                    toggle.setAttribute('aria-expanded', 'false');
                });
                document.querySelectorAll('.elementor-nav-menu--dropdown').forEach(d => {
                    d.classList.remove('elementor-active');
                    d.setAttribute('aria-hidden', 'true');
                    d.style.display = 'none';
                });
            }
        });

        // Close menu when clicking on any menu link
        document.querySelectorAll('.elementor-nav-menu--dropdown a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggles.forEach(t => t.classList.remove('elementor-active'));
                document.querySelectorAll('.elementor-nav-menu--dropdown').forEach(d => {
                    d.classList.remove('elementor-active');
                    d.style.display = 'none';
                });
            });
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

            // 2B. Hero Slides
            const heroSlides = document.querySelectorAll('.elementor-widget-slides .swiper');
            heroSlides.forEach(slides => {
                if (!slides.classList.contains('swiper-initialized')) {
                    const parent = slides.closest('.elementor-widget-slides') || slides;
                    new window.Swiper(slides, {
                        slidesPerView: 1,
                        loop: true,
                        speed: 600,
                        autoplay: {
                            delay: 5000,
                            disableOnInteraction: false,
                        },
                        pagination: {
                            el: parent.querySelector('.swiper-pagination'),
                            clickable: true,
                        },
                        navigation: {
                            nextEl: parent.querySelector('.elementor-swiper-button-next, .swiper-button-next'),
                            prevEl: parent.querySelector('.elementor-swiper-button-prev, .swiper-button-prev'),
                        }
                    });
                }
            });

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

            // 2D. Fallback for any other .swiper container
            document.querySelectorAll('.swiper').forEach(s => {
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
                // If not wrapped in a link that already handles it
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
    // Also run after window load to ensure Swiper is fully loaded
    window.addEventListener('load', initInteractivity);
})();
