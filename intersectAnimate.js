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