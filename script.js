// Ajuste para mostrar diplomas correctamente

document.addEventListener('DOMContentLoaded', () => {
    const estudios = document.querySelectorAll('#about .study ul li');

    estudios.forEach(estudio => {
        estudio.addEventListener('mouseenter', (event) => {
            const diplomaId = estudio.getAttribute('id');
            mostrarDiploma(diplomaId, event);
        });

        estudio.addEventListener('mouseleave', () => {
            ocultarDiploma();
        });
    });

    function mostrarDiploma(diplomaId, event) {
        const diploma = document.createElement('img');
        diploma.src = `./img/${diplomaId}.png`; // Asegúrate de que los nombres de los archivos coincidan con los IDs
        diploma.alt = 'Diploma';
        diploma.id = 'diploma-preview';
        diploma.style.position = 'absolute';
        diploma.style.top = `${event.clientY + 10}px`;
        diploma.style.left = `${event.clientX + 10}px`;
        diploma.style.maxWidth = '300px';
        diploma.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        diploma.style.border = '2px solid white';
        diploma.style.borderRadius = '10px';
        diploma.style.zIndex = '1000';
        document.body.appendChild(diploma);
    }

    function ocultarDiploma() {
        const diploma = document.getElementById('diploma-preview');
        if (diploma) {
            diploma.remove();
        }
    }
});

// Script para agrandar imágenes al hacer clic

document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('#certificates .gallery img');

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            mostrarImagenGrande(image.src, image.alt);
        });
    });

    function mostrarImagenGrande(src, alt) {
        const overlay = document.createElement('div');
        overlay.id = 'image-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = '1000';

        const largeImage = document.createElement('img');
        largeImage.src = src;
        largeImage.alt = alt;
        largeImage.style.maxWidth = '90%';
        largeImage.style.maxHeight = '90%';
        largeImage.style.border = '2px solid white';
        largeImage.style.borderRadius = '10px';
        largeImage.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.5)';

        overlay.appendChild(largeImage);

        overlay.addEventListener('click', () => {
            overlay.remove();
        });

        document.body.appendChild(overlay);
    }
});

// Script para efecto de máquina de escribir

document.addEventListener('DOMContentLoaded', () => {
    const typewriterText = [
        "Bienvenidos a mi portfolio.",
        "Santiago Valentin Cavanna | Desarrollador Web ",
    ];

    let currentTextIndex = 0;
    let currentCharIndex = 0;
    const mainElement = document.querySelector('#main h1');
    const paragraphElement = document.querySelector('#main p');

    function typeWriter() {
        if (currentCharIndex < typewriterText[currentTextIndex].length) {
            if (currentTextIndex === 0) {
                mainElement.textContent += typewriterText[currentTextIndex].charAt(currentCharIndex);
            } else {
                paragraphElement.textContent += typewriterText[currentTextIndex].charAt(currentCharIndex);
            }
            currentCharIndex++;
            setTimeout(typeWriter, 80);
        } else {
            currentCharIndex = 0;
            currentTextIndex++;
            if (currentTextIndex < typewriterText.length) {
                setTimeout(typeWriter, 500);
            }
        }
    }

    typeWriter();
});

// Script para el menú hamburguesa
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('header nav ul');

    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});

// Script para desplazamiento suave al hacer clic en los enlaces del header
document.addEventListener('DOMContentLoaded', () => {
    const headerLinks = document.querySelectorAll('header nav ul li a');

    headerLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                event.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50, // Ajusta el desplazamiento según el tamaño del header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
