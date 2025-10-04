import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {
  brandName = 'Nipra Oasis';
  currentSlide: number = 0;
  slideInterval: any; // Variable to hold the interval reference

  slides = [
    {
      heading: 'Gas, Water & Pizza – One Place',
      description: 'Nipra brings all daily needs together – quick, reliable, and right at your door.',
      bg: '../../assets/images/jar_water_pizza.png'
    },
    {
      heading: 'Gas at Your Doorstep',
      description: 'Order LPG online and get safe, fast delivery within 1 hour – hassle free!',
      bg: '../../assets/images/gas_3piece.png'
    },
    {
      heading: 'Hot Pizza, Quick Bite',
      description: 'Enjoy fresh, tasty pizzas in small, medium, and large sizes – delivered hot to you.',
      bg: '../../assets/images/Pizza_small_medium_large.png'
    },
    {
      heading: 'Pure Water, Pure Health',
      description: '20L water jars, clean and safe, delivered at your home for just ₹25.',
      bg: '../../assets/images/water_2jar.png'
    }
  ];

  // Go to the next slide
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  // Go to the previous slide
  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  // Start the automatic slide change every 4 seconds
  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000); // Change slide every 4 seconds
  }

  // Stop the automatic slide change (to clear the interval)
  stopAutoSlide() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.startAutoSlide(); // Start auto-sliding when component is initialized
  }

  ngOnDestroy(): void {
    this.stopAutoSlide(); // Clean up the interval when the component is destroyed
  }
}
