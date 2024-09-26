// جلب العناصر
const modal = document.getElementById('galleryModal');
const openBtn = document.getElementById('openGallery');
const closeBtn = document.querySelector('.close');

// فتح النافذة المنبثقة
openBtn.onclick = function() {
    modal.style.display = 'block';
}

// إغلاق النافذة عند الضغط على زر الإغلاق
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// إغلاق النافذة إذا تم النقر خارجها
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
