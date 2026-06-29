document.addEventListener("DOMContentLoaded", () => {
    
    // 1. تفعيل حركة التمرير (Scroll) السلس عند الضغط على زر الشاشة الرئيسية
    const scrollAction = document.getElementById('mainScrollAction');
    const targetSection = document.getElementById('targetContent');
    if (scrollAction && targetSection) {
        scrollAction.addEventListener('click', () => {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    // 2. تفعيل مفتاح إظهار وإخفاء سر البتنجانة (البطاقة الثانية)
    const btnOne = document.getElementById('btnSecretOne');
    const boxOne = document.getElementById('boxSecretOne');
    if (btnOne && boxOne) {
        btnOne.addEventListener('click', () => {
            boxOne.classList.toggle('show-now');
        });
    }

    // 3. تفعيل مفتاح إظهار وإخفاء رسالة بهاء السرية (البطاقة الرابعة)
    const btnTwo = document.getElementById('btnSecretTwo');
    const boxTwo = document.getElementById('boxSecretTwo');
    if (btnTwo && boxTwo) {
        btnTwo.addEventListener('click', () => {
            boxTwo.classList.toggle('show-now');
        });
    }

    // 4. دالة التحقق التلقائي لظهور وانبثاق البطاقات بأنميشن احترافي عند التمرير لأسفل الصفحة
    const cardsList = document.querySelectorAll('.interactive-card');
    const triggerReveal = () => {
        const activationLine = window.innerHeight * 0.9;
        cardsList.forEach(card => {
            const topPos = card.getBoundingClientRect().top;
            if (topPos < activationLine) {
                card.classList.add('reveal');
            }
        });
    };

    // تشغيل لحظي فوري للتأكد من انبثاق البطاقات الأولى المتاحة على الشاشة تلقائياً
    triggerReveal();
    // تفعيل الدالة مع التمرير المستمر
    window.addEventListener('scroll', triggerReveal);
});
