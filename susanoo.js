// Susanoo animation dan efek chakra
document.addEventListener('DOMContentLoaded', function() {
    // Tambahkan SVG Susanoo ke container
    const susanooContainer = document.getElementById('susanoo-container');
    if (susanooContainer) {
        // SVG untuk karakter Susanoo
        const susanooSVG = `
        <svg width="320" height="450" viewBox="0 0 320 450" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Aura Susanoo dan Efek Energi -->
          <ellipse cx="160" cy="230" rx="140" ry="170" fill="url(#susanooGlow)" opacity="0.8" class="susanoo-glow"/>
          
          <!-- Tubuh Susanoo -->
          <path d="M140 100 Q160 80 180 100 L190 220 Q160 240 130 220 Z" fill="#4338CA" class="susanoo-body"/>
          
          <!-- Rusuk/Ribcage Susanoo -->
          <path d="M130 140 Q160 130 190 140 L200 200 Q160 220 120 200 Z" fill="#5B21B6" stroke="#818CF8" stroke-width="2" class="susanoo-ribcage"/>
          <path d="M140 150 L140 190" stroke="#818CF8" stroke-width="2" class="susanoo-rib"/>
          <path d="M155 145 L155 195" stroke="#818CF8" stroke-width="2" class="susanoo-rib"/>
          <path d="M170 145 L170 195" stroke="#818CF8" stroke-width="2" class="susanoo-rib"/>
          <path d="M185 150 L185 190" stroke="#818CF8" stroke-width="2" class="susanoo-rib"/>
          
          <!-- Kepala Susanoo (Tengkorak) -->
          <path d="M130 100 Q160 70 190 100 Q200 120 190 140 Q160 150 130 140 Q120 120 130 100 Z" fill="#312E81" class="susanoo-skull"/>
          
          <!-- Mata Susanoo (Sharingan) -->
          <circle cx="145" cy="110" r="8" fill="#111827" class="susanoo-eye"/>
          <circle cx="175" cy="110" r="8" fill="#111827" class="susanoo-eye"/>
          <circle cx="145" cy="110" r="5" fill="#FF0000" class="susanoo-sharingan"/>
          <circle cx="175" cy="110" r="5" fill="#FF0000" class="susanoo-sharingan"/>
          
          <!-- Pola Mangekyo Sharingan -->
          <path d="M140 110 L150 110" stroke="#FFF" stroke-width="1" class="susanoo-pattern"/>
          <path d="M145 105 L145 115" stroke="#FFF" stroke-width="1" class="susanoo-pattern"/>
          <path d="M170 110 L180 110" stroke="#FFF" stroke-width="1" class="susanoo-pattern"/>
          <path d="M175 105 L175 115" stroke="#FFF" stroke-width="1" class="susanoo-pattern"/>
          
          <!-- Tangan Susanoo -->
          <path d="M130 170 L90 220" stroke="#4F46E5" stroke-width="18" stroke-linecap="round" class="susanoo-arm"/>
          <path d="M90 220 L110 260" stroke="#4F46E5" stroke-width="16" stroke-linecap="round" class="susanoo-arm"/>
          <path d="M190 170 L230 220" stroke="#4F46E5" stroke-width="18" stroke-linecap="round" class="susanoo-arm"/>
          <path d="M230 220 L210 260" stroke="#4F46E5" stroke-width="16" stroke-linecap="round" class="susanoo-arm"/>
          
          <!-- Senjata Susanoo - Busur di tangan kiri -->
          <path d="M80 230 Q60 250 80 270" stroke="#818CF8" stroke-width="4" fill="none" class="susanoo-weapon"/>
          <path d="M80 250 L120 250" stroke="#818CF8" stroke-width="2" fill="none" class="susanoo-arrow"/>
          
          <!-- Senjata Susanoo - Pedang di tangan kanan -->
          <path d="M230 250 L280 200" stroke="#A5B4FC" stroke-width="6" class="susanoo-sword"/>
          <path d="M280 200 L290 190" stroke="#C7D2FE" stroke-width="4" class="susanoo-sword-tip"/>
          
          <!-- Kaki Susanoo -->
          <path d="M140 220 L130 300" stroke="#4338CA" stroke-width="22" stroke-linecap="round" class="susanoo-leg"/>
          <path d="M180 220 L190 300" stroke="#4338CA" stroke-width="22" stroke-linecap="round" class="susanoo-leg"/>
          
          <!-- Efek Chakra di sekitar Susanoo -->
          <circle cx="160" cy="180" r="80" fill="url(#chakraGlow)" opacity="0.4" class="chakra-aura"/>
          <path d="M80 180 Q100 200 80 220" stroke="#818CF8" stroke-width="2" stroke-dasharray="5,5" class="chakra-flow"/>
          <path d="M240 180 Q220 200 240 220" stroke="#818CF8" stroke-width="2" stroke-dasharray="5,5" class="chakra-flow"/>
          <path d="M160 80 Q180 100 160 120" stroke="#818CF8" stroke-width="2" stroke-dasharray="5,5" class="chakra-flow"/>
          <path d="M130 250 Q150 270 170 250" stroke="#818CF8" stroke-width="2" stroke-dasharray="5,5" class="chakra-flow"/>
          
          <!-- Efek kilatan/percikan energi -->
          <path d="M100 150 L120 170" stroke="#A5B4FC" stroke-width="2" class="energy-spark"/>
          <path d="M220 150 L200 170" stroke="#A5B4FC" stroke-width="2" class="energy-spark"/>
          <path d="M140 270 L120 290" stroke="#A5B4FC" stroke-width="2" class="energy-spark"/>
          <path d="M180 270 L200 290" stroke="#A5B4FC" stroke-width="2" class="energy-spark"/>
          <path d="M160 140 L170 120" stroke="#A5B4FC" stroke-width="2" class="energy-spark"/>
          
          <!-- Pendar chakra di belakang -->
          <circle cx="100" cy="200" r="10" fill="#4F46E5" opacity="0.6" class="chakra-orb"/>
          <circle cx="220" cy="200" r="10" fill="#4F46E5" opacity="0.6" class="chakra-orb"/>
          <circle cx="160" cy="100" r="10" fill="#4F46E5" opacity="0.6" class="chakra-orb"/>
          <circle cx="130" cy="250" r="8" fill="#4F46E5" opacity="0.6" class="chakra-orb"/>
          <circle cx="190" cy="250" r="8" fill="#4F46E5" opacity="0.6" class="chakra-orb"/>
          
          <!-- Definisi gradien untuk efek glow -->
          <defs>
            <radialGradient id="susanooGlow" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
              <stop offset="0%" stop-color="#818CF8" stop-opacity="0.8"/>
              <stop offset="100%" stop-color="#4338CA" stop-opacity="0"/>
            </radialGradient>
            <radialGradient id="chakraGlow" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
              <stop offset="0%" stop-color="#C7D2FE" stop-opacity="0.8"/>
              <stop offset="100%" stop-color="#4338CA" stop-opacity="0"/>
            </radialGradient>
          </defs>
        </svg>
        `;
        susanooContainer.innerHTML = susanooSVG;
        
        // Tambahkan efek chakra di sekitar Susanoo
        const chakraEffects = [
            {top: '50%', left: '50%', size: 'w-60 h-60', color: 'bg-indigo-600/20', blur: 'blur-xl'},
            {top: '20px', right: '10px', size: 'w-16 h-16', color: 'bg-purple-900/50', blur: 'blur-lg'},
            {top: '40px', left: '10px', size: 'w-8 h-14', color: 'bg-blue-500/40', blur: 'blur-md', rotate: '-rotate-45'},
            {bottom: '40px', right: '10px', size: 'w-10 h-16', color: 'bg-indigo-400/40', blur: 'blur-md', rotate: 'rotate-45'},
            {bottom: '0', left: '50%', size: 'w-56 h-16', color: 'bg-indigo-600/30', blur: 'blur-xl'},
            {top: '33%', left: '50%', size: 'w-72 h-72', color: 'border-4 border-indigo-500/10', blur: ''}
        ];
        
        // Buat elemen untuk efek chakra
        chakraEffects.forEach((effect, index) => {
            let chakraEffect = document.createElement('div');
            let classes = `absolute ${effect.blur} rounded-full transform`;
            
            // Tambahkan posisi
            if (effect.top) chakraEffect.style.top = effect.top;
            if (effect.left) {
                chakraEffect.style.left = effect.left;
                if (effect.left === '50%') chakraEffect.classList.add('-translate-x-1/2');
            }
            if (effect.bottom) chakraEffect.style.bottom = effect.bottom;
            if (effect.right) chakraEffect.style.right = effect.right;
            
            // Tambahkan ukuran dan warna
            chakraEffect.className = classes;
            chakraEffect.classList.add(...effect.size.split(' '));
            chakraEffect.classList.add(...effect.color.split(' '));
            if (effect.rotate) chakraEffect.classList.add(effect.rotate);
            
            // Tambahkan translateY jika diperlukan
            if (effect.top === '50%') chakraEffect.classList.add('-translate-y-1/2');
            
            susanooContainer.appendChild(chakraEffect);
            
            // Tambahkan animasi sesuai dengan jenis efek
            animateChakraEffect(chakraEffect, index);
        });
        
        // Animasi untuk karakter Susanoo
        const susanooSVGElement = susanooContainer.querySelector('svg');
        if (susanooSVGElement) {
            animateSusanoo(susanooSVGElement);
        }
    }
});

// Fungsi animasi untuk karakter Susanoo
function animateSusanoo(element) {
    let animationY = [0, -15, 10, -5, 0];
    let animationRotate = [0, 2, -2, 1, 0];
    let animationScale = [1, 1.05, 0.98, 1.02, 1];
    let currentStep = 0;
    const totalSteps = animationY.length;
    const animationDuration = 6000; // 6 detik
    const stepDuration = animationDuration / totalSteps;
    
    // Mulai animasi
    const animate = () => {
        // Interpolasi antara langkah-langkah
        const progress = (Date.now() % animationDuration) / animationDuration;
        const stepIndex = Math.floor(progress * totalSteps);
        const nextStepIndex = (stepIndex + 1) % totalSteps;
        const stepProgress = (progress * totalSteps) % 1;
        
        // Hitung nilai saat ini
        const y = interpolate(animationY[stepIndex], animationY[nextStepIndex], stepProgress);
        const rotate = interpolate(animationRotate[stepIndex], animationRotate[nextStepIndex], stepProgress);
        const scale = interpolate(animationScale[stepIndex], animationScale[nextStepIndex], stepProgress);
        
        // Terapkan transformasi
        element.style.transform = `translateY(${y}px) rotate(${rotate}deg) scale(${scale})`;
        
        requestAnimationFrame(animate);
    };
    
    animate();
}

// Fungsi untuk animasi efek chakra
function animateChakraEffect(element, index) {
    // Animasi berbeda untuk setiap jenis efek
    switch(index) {
        case 0: // Efek chakra utama
            animateMainChakra(element);
            break;
        case 1: // Efek Amaterasu
            animateAmaterasu(element);
            break;
        case 2: // Efek Percikan 1
            animateSpark(element, -45, -30, -50, -35, -45);
            break;
        case 3: // Efek Percikan 2
            animateSpark(element, 45, 60, 40, 55, 45);
            break;
        case 4: // Lingkaran bawah
            animateBaseCircle(element);
            break;
        case 5: // Gelombang Chakra
            animateChakraWave(element);
            break;
    }
}

// Animasi untuk efek chakra utama
function animateMainChakra(element) {
    let scaleValues = [1, 1.6, 1.3, 1.5, 1];
    let opacityValues = [0.3, 0.6, 0.4, 0.7, 0.3];
    let radiusValues = ["50%", "45%", "50%", "40%", "50%"];
    animateProperty(element, 10000, scaleValues, opacityValues, radiusValues);
}

// Animasi untuk efek Amaterasu
function animateAmaterasu(element) {
    let scaleValues = [1, 1.8, 0.9, 1.6, 1];
    let opacityValues = [0.3, 0.7, 0.5, 0.8, 0.3];
    let xValues = [0, 8, -5, 3, 0];
    let yValues = [0, -5, 3, -8, 0];
    
    // Animasi skala dan opasitas
    animateProperty(element, 4000, scaleValues, opacityValues);
    
    // Animasi posisi X dan Y
    animatePosition(element, 4000, xValues, yValues);
}

// Animasi untuk percikan chakra
function animateSpark(element, start, pos1, pos2, pos3, end) {
    let scaleValues = [1, 1.5, 0.8, 1.3, 1];
    let opacityValues = [0.4, 0.8, 0.3, 0.7, 0.4];
    let rotateValues = [start, pos1, pos2, pos3, end];
    
    // Animasi skala dan opasitas
    animateProperty(element, 3000, scaleValues, opacityValues);
    
    // Animasi rotasi
    animateRotation(element, 3000, rotateValues);
}

// Animasi untuk lingkaran bawah
function animateBaseCircle(element) {
    let widthValues = [224, 256, 208, 240, 224]; // 14rem, 16rem, 13rem, 15rem, 14rem
    let opacityValues = [0.3, 0.5, 0.3, 0.6, 0.3];
    let yValues = [0, -3, 2, -5, 0];
    
    // Animasi lebar dan opasitas
    animateProperty(element, 6000, null, opacityValues, null, widthValues);
    
    // Animasi posisi Y
    animatePosition(element, 6000, null, yValues);
}

// Animasi untuk gelombang chakra
function animateChakraWave(element) {
    let scaleValues = [1, 1.2, 1.1, 1.3, 1];
    let opacityValues = [0.2, 0, 0.2, 0, 0.2];
    let borderValues = [4, 2, 4, 1, 4];
    
    // Animasi khusus untuk gelombang
    const animateWave = () => {
        const duration = 8000;
        const startTime = Date.now();
        
        const updateWave = () => {
            const elapsed = (Date.now() - startTime) % duration;
            const progress = elapsed / duration;
            const steps = scaleValues.length;
            const stepIndex = Math.floor(progress * steps);
            const nextStepIndex = (stepIndex + 1) % steps;
            const stepProgress = (progress * steps) % 1;
            
            // Interpolasi nilai
            const scale = interpolate(scaleValues[stepIndex], scaleValues[nextStepIndex], stepProgress);
            const opacity = interpolate(opacityValues[stepIndex], opacityValues[nextStepIndex], stepProgress);
            const borderWidth = interpolate(borderValues[stepIndex], borderValues[nextStepIndex], stepProgress);
            
            // Terapkan nilai
            element.style.transform = `translate(-50%, -50%) scale(${scale})`;
            element.style.opacity = opacity;
            element.style.borderWidth = `${borderWidth}px`;
            
            requestAnimationFrame(updateWave);
        };
        
        updateWave();
    };
    
    animateWave();
}

// Fungsi pembantu untuk animasi properti umum
function animateProperty(element, duration, scaleValues, opacityValues, radiusValues, widthValues) {
    const startTime = Date.now();
    
    const updateAnimation = () => {
        const elapsed = (Date.now() - startTime) % duration;
        const progress = elapsed / duration;
        const steps = scaleValues ? scaleValues.length : opacityValues.length;
        const stepIndex = Math.floor(progress * steps);
        const nextStepIndex = (stepIndex + 1) % steps;
        const stepProgress = (progress * steps) % 1;
        
        // Interpolasi dan terapkan transformasi jika ada nilai skala
        if (scaleValues) {
            const scale = interpolate(scaleValues[stepIndex], scaleValues[nextStepIndex], stepProgress);
            // Tambahkan transformasi sesuai dengan elemen (beberapa mungkin sudah memiliki translate)
            if (element.style.transform.includes('translate')) {
                element.style.transform = element.style.transform.replace(/scale\([^)]*\)/, '') + ` scale(${scale})`;
            } else {
                element.style.transform = `scale(${scale})`;
            }
        }
        
        // Terapkan opasitas jika disediakan
        if (opacityValues) {
            const opacity = interpolate(opacityValues[stepIndex], opacityValues[nextStepIndex], stepProgress);
            element.style.opacity = opacity;
        }
        
        // Terapkan border-radius jika disediakan
        if (radiusValues) {
            const radius = radiusValues[stepIndex]; // Tidak perlu interpolasi untuk string
            element.style.borderRadius = radius;
        }
        
        // Terapkan lebar jika disediakan
        if (widthValues) {
            const width = interpolate(widthValues[stepIndex], widthValues[nextStepIndex], stepProgress);
            element.style.width = `${width}px`;
        }
        
        requestAnimationFrame(updateAnimation);
    };
    
    updateAnimation();
}

// Fungsi pembantu untuk animasi posisi
function animatePosition(element, duration, xValues, yValues) {
    const startTime = Date.now();
    
    const updatePosition = () => {
        const elapsed = (Date.now() - startTime) % duration;
        const progress = elapsed / duration;
        const steps = xValues ? xValues.length : yValues.length;
        const stepIndex = Math.floor(progress * steps);
        const nextStepIndex = (stepIndex + 1) % steps;
        const stepProgress = (progress * steps) % 1;
        
        let translateX = '';
        let translateY = '';
        
        // Interpolasi X jika disediakan
        if (xValues) {
            const x = interpolate(xValues[stepIndex], xValues[nextStepIndex], stepProgress);
            translateX = `translateX(${x}px)`;
        }
        
        // Interpolasi Y jika disediakan
        if (yValues) {
            const y = interpolate(yValues[stepIndex], yValues[nextStepIndex], stepProgress);
            translateY = `translateY(${y}px)`;
        }
        
        // Terapkan transformasi
        if (element.style.transform.includes('scale')) {
            // Pertahankan scale jika sudah ada
            element.style.transform = `${translateX} ${translateY} ` + element.style.transform.match(/scale\([^)]*\)/)[0];
        } else {
            element.style.transform = `${translateX} ${translateY}`;
        }
        
        requestAnimationFrame(updatePosition);
    };
    
    updatePosition();
}

// Fungsi pembantu untuk animasi rotasi
function animateRotation(element, duration, rotateValues) {
    const startTime = Date.now();
    
    const updateRotation = () => {
        const elapsed = (Date.now() - startTime) % duration;
        const progress = elapsed / duration;
        const steps = rotateValues.length;
        const stepIndex = Math.floor(progress * steps);
        const nextStepIndex = (stepIndex + 1) % steps;
        const stepProgress = (progress * steps) % 1;
        
        // Interpolasi rotasi
        const rotate = interpolate(rotateValues[stepIndex], rotateValues[nextStepIndex], stepProgress);
        
        // Terapkan transformasi rotasi
        if (element.style.transform.includes('scale')) {
            // Pertahankan scale jika sudah ada
            element.style.transform = `rotate(${rotate}deg) ` + element.style.transform.match(/scale\([^)]*\)/)[0];
        } else {
            element.style.transform = `rotate(${rotate}deg)`;
        }
        
        requestAnimationFrame(updateRotation);
    };
    
    updateRotation();
}

// Fungsi utilitas untuk interpolasi nilai
function interpolate(start, end, progress) {
    return start + (end - start) * progress;
}