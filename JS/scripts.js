// Selectors
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
const scrollButton = document.querySelector('.scroll');

// Event listener for menu toggle
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Smooth scroll to top functionality
scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show or hide scroll button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollButton.style.display = 'flex'; // Show button
    } else {
        scrollButton.style.display = 'none'; // Hide button
    }
});

// Optional: Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active'); // Close menu on link click
        }
    });
});

// Gallery Animation

// Horizontal scrolling
function scrollGallery(direction) {
    const gallery = document.querySelector('.gallery');
    const scrollAmount = gallery.clientWidth / 2;
    gallery.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

// Open image in lightbox
function openImage(imgElement) {
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    lightbox.style.display = 'flex';
    lightboxImage.src = imgElement.src;
}

// Close lightbox
function closeImage() {
    const lightbox = document.getElementById('imageLightbox');
    lightbox.style.display = 'none';
}

//toogle menu 
function toggleMenu() {
    const navMenu = document.getElementById("nav-menu");
    const menuToggle = document.querySelector(".menu-toggle");
    
    navMenu.classList.toggle("active");

    // Toggle the icon between "☰" and "X"
    menuToggle.textContent = navMenu.classList.contains("active") ? "✕" : "☰";
}

//For Specialty
function openModal(specialty) {
    console.log("Opening modal for specialty:", specialty); // Log specialty received

    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const description = document.getElementById('modal-description');

    // Assign title and description based on the specialty clicked
    switch (specialty) {
        case 'Dermatology':
            title.innerText = 'Dermatology, Venereology, and Leprosy';
            description.innerText = `Dermatology focuses on the diagnosis and treatment of skin, hair, and nail disorders.
            Venereology addresses sexually transmitted infections (STIs), particularly those affecting the skin and mucous membranes.
            Leprosy, a chronic infectious disease caused by Mycobacterium leprae, affects skin, peripheral nerves, and mucosa.`;
            break;
        case 'Dermatopathology':
            title.innerText = 'Dermatopathology';
            description.innerText = `A specialized field combining dermatology and pathology to diagnose skin diseases at a microscopic level.
            Dermatopathologists analyze biopsies to identify a wide range of skin conditions, including cancers, infections, and inflammatory diseases.`;
            break;
        case 'STDs and HIV':
            title.innerText = 'STDs and HIV';
            description.innerText = `STDs (Sexually Transmitted Diseases) include infections like syphilis, gonorrhea, chlamydia, and genital herpes.
            HIV (Human Immunodeficiency Virus) is a virus that affects the immune system, and without treatment, it can lead to AIDS.
            Dermatologists play a role in diagnosing and managing skin manifestations of STDs and HIV-related skin issues.`;
            break;
        case 'Clinical Dermatology':
            title.innerText = 'Clinical Dermatology';
            description.innerText = `Encompasses the study and treatment of skin disorders in a clinical setting.
            Involves diagnosing, treating, and managing conditions like eczema, psoriasis, acne, and skin cancers.`;
            break;
        case 'Trichology':
            title.innerText = 'Trichology';
            description.innerText = `Focuses on the study and treatment of hair and scalp disorders.
            Addresses conditions like hair loss (alopecia), dandruff, and scalp infections.`;
            break;
        case 'Dermatosurgery':
            title.innerText = 'Dermatosurgery';
            description.innerText = `Surgical branch of dermatology aimed at treating skin conditions, including skin cancers, moles, cysts, and scars.
            Procedures include excisions, grafting, and cosmetic surgeries for skin improvement.`;
            break;
        case 'Laser Treatments':
            title.innerText = 'Laser Treatments';
            description.innerText = `Use of laser technology for various skin conditions, including hair removal, tattoo removal, and treating scars and pigmentation.
            Lasers are also used in anti-aging treatments, as they help stimulate collagen and improve skin texture.`;
            break;
        case 'Skin Allergy':
            title.innerText = 'Skin Allergy';
            description.innerText = `Involves diagnosis and management of allergic skin reactions like contact dermatitis, urticaria (hives), and eczema.
            Treatment includes allergen avoidance, medications, and immunotherapy in some cases.`;
            break;
        case 'Cosmetology':
            title.innerText = 'Cosmetology';
            description.innerText = `Focuses on aesthetic improvements of skin, hair, and nails.
            Includes non-invasive procedures such as chemical peels, fillers, and botox for skin rejuvenation and anti-aging effects.`;
            break;
        default:
            console.error("Specialty not found:", specialty); // Log if specialty not found
            title.innerText = 'Unknown Specialty';
            description.innerText = 'No description available.';
    }

    modal.style.display = "flex"; // Show the modal
    console.log("Modal opened"); // Confirm modal opened
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none"; // Hide the modal
    console.log("Modal closed"); // Confirm modal closed
}

window.onload = function() {
    const modalShown = localStorage.getItem('modalShown');

    if (!modalShown) {
        openModal('Dermatology'); // Change to any specialty you want to open by default
        localStorage.setItem('modalShown', 'true');
    }
};

// About Section 
function toggleCard(button) {
    const card = button.parentElement;
    const details = card.querySelector(".details");
    const brief = card.querySelector(".brief");
    const image = card.querySelector(".person-image");

    if (details.classList.contains("hidden")) {
        details.classList.remove("hidden");
        brief.classList.remove("hidden");
        image.classList.add("image-enlarged");
        button.textContent = "Read Less";
    } else {
        details.classList.add("hidden");
        brief.classList.add("hidden");
        image.classList.remove("image-enlarged");
        button.textContent = "Read More";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const achievements = document.querySelectorAll(".founder-achievements li");
    
    function revealAchievements() {
        achievements.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                item.style.animationPlayState = "running";
            }
        });
    }
    
    window.addEventListener("scroll", revealAchievements);
    revealAchievements(); // Run on page load
});

// For Treatment Page
document.addEventListener("DOMContentLoaded", function () {
    const treatments = {
        'local-skin-care': {
            title: 'Local Skin Care',
            description: [
                "Focuses on treatments and products tailored for individual skin types.",
                "Includes cleansers, moisturizers, sunscreens, and targeted treatments.",
                "Promotes overall skin health and addresses specific concerns like dryness, acne, or sensitivity."
            ]
        },
        'botox': {
            title: 'Botulinum Toxin (BOTOX)',
            description: [
                "A neurotoxin that temporarily paralyzes muscles.",
                "Reduces the appearance of wrinkles and fine lines, particularly on the forehead and around the eyes.",
                "Procedure typically takes a few minutes and results last for several months."
            ]
        },
        'dermal-fillers': {
            title: 'Dermal Fillers',
            description: [
                "Injectable substances that restore volume and fullness to the skin.",
                "Used to smooth wrinkles, enhance lips, and contour the face.",
                "Results are immediate and can last from several months to years, depending on the type used."
            ]
        },
        'chemical-peeling': {
            title: 'Chemical Peeling',
            description: [
                "Involves applying a chemical solution to exfoliate the outer layer of skin.",
                "Improves skin texture, tone, and the appearance of fine lines and sun damage.",
                "Recovery time varies depending on the depth of the peel (superficial, medium, or deep)."
            ]
        },
        'microdermabrasion': {
            title: 'Microdermabrasion',
            description: [
                "A non-invasive procedure that exfoliates the skin using tiny crystals or a diamond-tipped wand.",
                "Promotes cell turnover and rejuvenation, improving skin texture and tone.",
                "No downtime; patients can usually return to normal activities immediately."
            ]
        },
        'prp': {
            title: 'Platelet Rich Plasma (PRP)',
            description: [
                "Utilizes the patient's own blood components to promote healing and rejuvenation.",
                "Commonly used for hair restoration and skin rejuvenation.",
                "Procedure involves drawing blood, processing it, and injecting the PRP into the targeted areas."
            ]
        },
        'skin-grafting': {
            title: 'Skin Grafting',
            description: [
                "A surgical procedure that involves transplanting skin from one area of the body to another.",
                "Used to treat areas with severe skin loss due to injury, surgery, or disease.",
                "Helps restore the appearance and function of the affected area."
            ]
        },
        'microneedling': {
            title: 'Microneedling',
            description: [
                "Involves using tiny needles to create micro-injuries in the skin, stimulating collagen production.",
                "Improves the appearance of scars, stretch marks, and overall skin texture.",
                "Minimal downtime, with results becoming more apparent over time."
            ]
        },
        'hair-transplant': {
            title: 'Hair Transplant',
            description: [
                "A surgical procedure that moves hair follicles from a donor site to a balding area.",
                "Effective for treating male and female pattern baldness.",
                "Results can take several months to fully develop."
            ]
        },
        'acne-treatment': {
            title: 'Acne Treatment',
            description: [
                "Includes a variety of approaches such as topical treatments, oral medications, and laser therapy.",
                "Aims to reduce breakouts and improve skin appearance.",
                "Personalized treatment plans are essential for effective results."
            ]
        }
    };

    const treatmentCards = document.querySelectorAll('.treatment-card');
    const descriptionContainer = document.getElementById('treatment-description');

    treatmentCards.forEach(card => {
        card.addEventListener('click', () => {
            const treatmentId = card.getAttribute('data-treatment-id');
            const treatment = treatments[treatmentId];

            // Clear previous content
            descriptionContainer.innerHTML = '';

            if (treatment) {
                const title = document.createElement('h2');
                title.textContent = treatment.title;
                descriptionContainer.appendChild(title);

                const list = document.createElement('ul');
                treatment.description.forEach(item => {
                    const listItem = document.createElement('li');
                    listItem.textContent = item;
                    list.appendChild(listItem);
                });
                descriptionContainer.appendChild(list);
                descriptionContainer.style.display = 'block'; // Show the description
            }
        });
    });
});

//Contact Us

// Animate cards on scroll
function animateOnScroll() {
    const cards = document.querySelectorAll('.contact-card, .map-section, .qr-section');
    
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = `fadeInUp 0.8s forwards`;
        }, index * 200);
    });
}

// Run animation when content loads
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Add hover effect to cards
const cards = document.querySelectorAll('.contact-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

//equipment
// Optional: If you want more control over the animation (pause on hover, etc.)
const equipmentSection = document.querySelector('.equipment-section');
const equipmentImages = document.querySelector('.equipment-images');

// Pause the animation on hover
equipmentSection.addEventListener('mouseenter', () => {
  equipmentImages.style.animationPlayState = 'paused';
});

equipmentSection.addEventListener('mouseleave', () => {
  equipmentImages.style.animationPlayState = 'running';
});
// Horizontal scrolling
function scrollGallery(direction) {
    const gallery = document.querySelector('.gallery');
    const scrollAmount = gallery.clientWidth / 2;
    gallery.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }
  
  // Open image in modal
  function openImage(imgElement) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = 'flex';
    modalImage.src = imgElement.src;
  }
  
  // Close modal
  function closeImage() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
  }
  

