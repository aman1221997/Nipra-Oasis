import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public currentIndex: number = 0;
  public currentItem: string | null = null;
  public isModalOpen = false;
  public galleryImages = [
    '../../assets/gallery/jar1.jpeg',
    '../../assets/gallery/jar2.jpeg',
    '../../assets/gallery/jar3.jpeg',
    '../../assets/gallery/pizza1.jpeg',
    '../../assets/gallery/pizza2.jpeg',
    '../../assets/gallery/pizza3.jpeg',
    '../../assets/gallery/pizza4.jpeg',
    '../../assets/gallery/pizza5.jpeg',
    '../../assets/gallery/pizza6.jpeg',
    '../../assets/gallery/pizza7.jpeg',
    '../../assets/gallery/single_gas.png'
  ]

  asrOpenModal(index: number): void {
    this.currentIndex = index;
    this.currentItem = this.galleryImages[this.currentIndex];
    this.isModalOpen = true;
  }

  asrCloseModal(): void {
    this.isModalOpen = false;
  }

  asrNextItem(): void {
    this.currentIndex = (this.currentIndex + 1) % this.galleryImages.length;
    this.currentItem = this.galleryImages[this.currentIndex];
  }

  asrPrevItem(): void {
    this.currentIndex = (this.currentIndex - 1 + this.galleryImages.length) % this.galleryImages.length;
    this.currentItem = this.galleryImages[this.currentIndex];
  }
  constructor() { }

  ngOnInit(): void {
  }

}
