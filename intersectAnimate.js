import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
  allowNestedScroll: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  // console.log(e);
});


document.querySelectorAll('.table-responsive').forEach((el)=>{
    const l = new Lenis({
      autoRaf: true,
      orientation: 'horizontal',
      wrapper: el
    });
})

const observer = new IntersectionObserver((entries)=>{
	entries.forEach((entry)=>{
		// console.log(entry)
		if (entry.isIntersecting) {
			entry.target.classList.add('show')
		} else {
			if (entry.target.classList.contains('replay')) 
				entry.target.classList.remove('show')
		}
	})
});

const animateElements = document.querySelectorAll('[class*=animate--]');
animateElements.forEach((el)=> observer.observe(el));