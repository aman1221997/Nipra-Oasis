import { Component, OnInit } from '@angular/core';
// import { AppService } from '../services/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public logo: any;
  public brandName = "Nipra Oasis";
  public css: any;
  public links= [
    {
      text: "Home",
      link: "/home"
    },
    {
      text: "Services",
      link: "#",
      hasDropdown: true,
      dropdownItems: [
        { text: "Water", link: "/service/water" },
        { text: "Pizza", link: "/service/pizza" },
        { text: "Gas", link: "/service/gas" }
      ]
    },
    {
      text: "Gallery",
      link: "/gallery"
    },
    {
      text: "FAQs",
      link: "/faq"
    },
    {
      text: "About",
      link: "/about-us"
    },
    {
      text: "Contact",
      link: "/contact-us"
    }
  ];
  
  // Mobile menu properties
  public isMobileMenuOpen: boolean = false;
  public openDropdown: string | null = null;

  constructor() {}

  ngOnInit(): void {
  }


  // Mobile menu methods
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    // Prevent body scroll when menu is open
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.openDropdown = null;
    document.body.style.overflow = 'auto';
  }

  toggleDropdown(linkText: string) {
    this.openDropdown = this.openDropdown === linkText ? null : linkText;
  }

  isDropdownOpen(linkText: string): boolean {
    return this.openDropdown === linkText;
  }
}