// Sidevav Elements
const sidebarEl = document.querySelector('.sidebar');
const sidebarOverlayEl = document.querySelector('.sidebar-overlay');
const sidebarOpenBtnEl = document.querySelector('.sidebar__open-btn');
const sidebarCloseBtnEl = document.querySelector('.sidebar__close-btn');
// Navigation Elements
const navEl = document.querySelector('.main-nav');
// Sowcase Elements 
const galeryListEl = document.querySelector('.galery-list');

function openSidebar() {
    sidebarOverlayEl.classList.add('open');
    sidebarEl.classList.add('open');
}

function closeSidebar() {
    sidebarOverlayEl.classList.remove('open');
    sidebarEl.classList.remove('open');
}

// On open sidebar 
sidebarOpenBtnEl.addEventListener('click', openSidebar);

// On close sidebar by button click
sidebarCloseBtnEl.addEventListener('click', closeSidebar);

// On close sidebar by overly click 
sidebarOverlayEl.addEventListener('click', closeSidebar);

// Close sidebar on navigation end
navEl.addEventListener('click', (ev) => {    
    if (ev.target.tagName.toLowerCase() === 'a') {
        closeSidebar();
    }
});

function openImageViewer(ev) {
    const imageViewPopupTemplate = document.getElementById('image-viewer-dialog');
        // Get template 
        const imageViewPopupTemplateClone = imageViewPopupTemplate.content.cloneNode(true);
        const closeImageViewerBtnEl = imageViewPopupTemplateClone.querySelector('.image-viewer-dialog__close-btn');
        // Set selected image and text
        const imageViewerImageEl = imageViewPopupTemplateClone.querySelector('.image-viewer-dialog__image');
        imageViewerImageEl.src = ev.target.src;
        const imageViewerTextEl = imageViewPopupTemplateClone.querySelector('.image-viewer-dialog__text');
        imageViewerTextEl.textContent = ev.target.dataset.text;
        // Add to DOM 
        document.body.appendChild(imageViewPopupTemplateClone);
        // On image viwer close 
        closeImageViewerBtnEl.addEventListener('click', (el) => {
            document.body.lastElementChild.remove();
        });
}

// On galery image preview 
galeryListEl.addEventListener('click', (ev) => {
    if (ev.target.tagName.toLowerCase() === 'img') {
        openImageViewer(ev);
    }
});

