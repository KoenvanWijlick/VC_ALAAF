document.addEventListener("DOMContentLoaded", function() {
    /* -------------------------------------------
       1. Dynamically Load Sponsor Images
       ------------------------------------------- */
    fetch('assets/sponsors.json')
      .then(response => response.json())
      .then(data => {
        // data is an array of sponsor image filenames
        const sponsorList = document.querySelector('.sponsor-list');
        if (sponsorList) {
          sponsorList.innerHTML = ''; // Clear any existing content
  
          data.forEach((fileName, index) => {
            const sponsorItem = document.createElement('div');
            sponsorItem.classList.add('sponsor-item');
            // Set a custom property for staggered delay
            sponsorItem.style.setProperty('--fadeDelay', `${index * 0.2}s`);
  
            const img = document.createElement('img');
            img.src = `assets/sponsors/${fileName}`;
            img.alt = fileName.split('.')[0];
  
            sponsorItem.appendChild(img);
            sponsorList.appendChild(sponsorItem);
          });
        }
      })
      .catch(error => console.error('Error loading sponsor images:', error));
  
    /* -------------------------------------------
       2. Wagen Items Slide-in on Scroll
       ------------------------------------------- */
    const wagenItems = document.querySelectorAll('.wagen-item');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
  
    wagenItems.forEach(item => {
      observer.observe(item);
    });
  });
  