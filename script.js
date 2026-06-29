// الانتظار حتى تحميل عناصر الصفحة بالكامل
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. تأثير ظهور البطاقات تدريجياً أثناء الـ Scroll
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        observer.observe(card);
    });

    // 2. حركة زرار السكرول بسلاسة لأسفل
    const scrollBtn = document.getElementById('scrollBtn');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', () => {
            document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 3. تفعيل زرار سر الـ بتنجانة
    const factBtn = document.getElementById('factBtn');
    const factBox = document.getElementById('factBox');
    if (factBtn && factBox) {
        factBtn.addEventListener('click', () => {
            factBox.style.display = factBox.style.display === 'block' ? 'none' : 'block';
        });
    }

    // 4. تفعيل زرار رسالة بهاء السرية
    const loveBtn = document.getElementById('loveBtn');
    const loveBox = document.getElementById('loveBox');
    if (loveBtn && loveBox) {
        loveBtn.addEventListener('click', () => {
            loveBox.style.display = loveBox.style.display === 'block' ? 'none' : 'block';
        });
    }
});
