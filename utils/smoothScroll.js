// smoothScroll.js
// Utility for smooth scrolling to sections on the page

const smoothScroll = (targetId) => {
  try {
    const targetElement = document.querySelector(targetId);
    if (!targetElement) {
      console.error(`Element not found for smooth scrolling: ${targetId}`);
      return;
    }
    window.scrollTo({
      top: targetElement.offsetTop - 60, // Adjust for header height
      behavior: 'smooth',
    });
    console.log(`Smooth scroll to ${targetId} executed.`);
  } catch (error) {
    console.error('Error executing smooth scroll:', error.message, error.stack);
  }
};

export default smoothScroll;