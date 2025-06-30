const lightbox = GLightbox({ selector: '.glightbox' });

const fullGalleryData = [
  { src: '/img/Invitating-to-Party.png', title: 'Invitating to Party', category: 'HTML', url: 'InvitedFormOnCeremony.html', description: 'A festive invitation form designed for events and celebrations.' },
  { src: '/img/My-Photo-Gallery.png', title: 'My Photo Gallery', category: 'HTML', url: 'PhotoGallery.html', description: 'A stunning photo gallery showcasing images in a grid layout.' },
  { src: '/img/School-Time-Table.png', title: 'My School Time Table', category: 'HTML', url: 'SchoolTimetable.html', description: 'A structured class timetable for school subjects and periods.' },
  { src: '/img/Admission-Form.png', title: 'Fill Admission Form', category: 'HTML', url: 'ClzAdmissionForm.html', description: 'A college admission form designed with input fields and validation.' },
  { src: '/img/Web-Design-Test.png', title: 'Web Design Frontend Test', category: 'CSS', url: 'quiz.html', description: 'An interactive web design quiz to test frontend knowledge.' },
  { src: '/img/Gym-Plan.png', title: 'Gym Plan and Training', category: 'CSS', url: 'AarifGym.html', description: 'A workout planner page featuring gym schedules and routines.' },
  { src: '/img/Restaurant-Menu.png', title: 'Restaurant Menu', category: 'CSS', url: 'AarifRestaurant.html', description: 'A stylish restaurant menu design with dishes and prices.' },
  { src: '/img/Aarif-Book-Store.png', title: 'Aarif Book Store', category: 'CSS', url: 'https://mdtasleemaarif.github.io/Aarif-eBook-Store/', description: 'An elegant online book store interface with book categories.' },
  { src: '/img/Registration.png', title: 'Log-in/Sign-up Form', category: 'CSS', url: 'https://mdtasleemaarif.github.io/Registration-Project/', description: 'A stylish login and registration form with field validation.' },
  { src: '/img/Tic-Tac-Toe.png', title: 'Tic Tac Toe', category: 'JavaScript', url: 'https://mdtasleemaarif.github.io/gamezone/', description: 'A classic 2-player tic tac toe game with interactive logic.' },
  { src: '/img/BMI-Calculator.png', title: 'BMI Calculator', category: 'JavaScript', url: 'BMICalculater.html', description: 'A BMI calculator that takes height and weight to compute index.' },
  { src: '/img/Digital-Clock.png', title: 'Digital Clock & Set Alarm', category: 'JavaScript', url: 'digitalclock.html', description: 'A real-time digital clock with alarm setting functionality.' },
  { src: '/img/Smart-Calculator.png', title: 'Smart Calculator', category: 'JavaScript', url: 'Calculater.html', description: 'A smart calculator for basic and scientific operations.' },
  { src: '/img/Rock-Paper-Scissor.png', title: 'Rock Paper Scissor', category: 'JavaScript', url: 'RockPaperSissor.html', description: 'An interactive rock-paper-scissor game vs computer.' },
  { src: '/img/Expension.png', title: 'Track You Expension', category: 'JavaScript', url: 'expension.html', description: 'A personal expense tracker to log and analyze spending.' }
];

let loadedCount = 0;
const itemsPerLoad = 6;
const container = document.getElementById('gallery-container');

function loadGalleryItems() {
  const slice = fullGalleryData.slice(loadedCount, loadedCount + itemsPerLoad);
  slice.forEach((item, i) => {
    const col = document.createElement('div');
    col.className = `col-lg-4 col-md-6 gallery-item ${item.category}`;
    col.innerHTML = `
      <div class="h_gallery_item">
        <div class="g_img_item">
          <a href="${item.url}" target="_blank" class="glightbox">
            <img src="${item.src}" alt="${item.title}">
          </a>
        </div>
        <div class="g_item_text">
          <h4 onclick="window.open('${item.url}', '_blank')">${item.title}</h4>
          <p style="color:hsl(39, 100%, 50%); font-weight: bold;">${item.description}</p>
          <a href="${item.url}" target="_blank" class="btn btn-sm btn-outline-primary mt-2">View Project</a>
        </div>
      </div>`;
    container.appendChild(col);
    gsap.from(col, { opacity: 0, y: 50, duration: 0.6, delay: i * 0.1 });
  });
  loadedCount += itemsPerLoad;
  if (loadedCount >= fullGalleryData.length) {
    document.getElementById('loadMoreBtn').style.display = 'none';
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadGalleryItems();

  document.getElementById('loadMoreBtn').addEventListener('click', function (e) {
    e.preventDefault();
    loadGalleryItems();
    lightbox.reload();
  });

  const filterButtons = document.querySelectorAll('.gallery_filter li');
  const galleryItems = () => document.querySelectorAll('.gallery-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('.gallery_filter li.active')?.classList.remove('active');
      button.classList.add('active');
      const filter = button.getAttribute('data-filter');
      galleryItems().forEach(item => {
        item.style.display = (filter === '*' || item.classList.contains(filter)) ? 'block' : 'none';
      });
    });
  });

  gsap.to("#animated-title", {
    textShadow: "0 0 25px rgba(130,200,255,0.7)",
    repeat: -1,
    yoyo: true,
    duration: 1.5,
    ease: "sine.inOut"
  });
});
