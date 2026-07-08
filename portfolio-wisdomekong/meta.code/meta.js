// DOM Elements
const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');
const menuOverlay = document.getElementById('menuOverlay');
const mobileMenu = document.getElementById('mobileMenu');
const walletModal = document.getElementById('walletModal');
const connectWalletBtn = document.getElementById('connectWalletBtn');
const mobileConnectBtn = document.getElementById('mobileConnectBtn');
const modalClose = document.getElementById('modalClose');
const navLinks = document.querySelectorAll('.navlist a');

// Mobile Menu Functions
function openMobileMenu() {
    mobileMenu.classList.add('show');
    menuOverlay.style.display = 'block';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('show');
    menuOverlay.style.display = 'none';
}

// Wallet Modal Functions
function openWalletModal() {
    walletModal.style.display = 'flex';
}

function closeWalletModal() {
    walletModal.style.display = 'none';
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
}

// Event Listeners
menuOpen.addEventListener('click', openMobileMenu);
menuClose.addEventListener('click', closeMobileMenu);
menuOverlay.addEventListener('click', closeMobileMenu);
connectWalletBtn.addEventListener('click', openWalletModal);
mobileConnectBtn.addEventListener('click', function() {
    closeMobileMenu();
    openWalletModal();
});
modalClose.addEventListener('click', closeWalletModal);
walletModal.addEventListener('click', function(e) {
    if (e.target === walletModal) {
        closeWalletModal();
    }
});

// Active nav link on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Nav links smooth scroll
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});


const heroSearch = document.querySelector(".hero-btn");
const heroInput = document.querySelector(".hero-search input");

heroSearch.addEventListener("click", () => {

    const location = heroInput.value.trim();

    if(location===""){
        alert("Please enter a location.");
        return;
    }

    alert(`Searching for ${location}...`);

});

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        navbar.style.background="#fff";
        navbar.style.boxShadow="0 4px 12px rgba(0,0,0,.12)";

    }else{

        navbar.style.background="transparent";
        navbar.style.boxShadow="none";
    }