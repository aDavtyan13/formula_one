import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[dropdown]'
})
export class DropdownDirective {
  constructor(private element: ElementRef) {
  }

  private isOpened: boolean = false;

  @HostListener('click', ['$event.target'])
  toggleMenu(): void {
    if (this.isOpened) {
      this.element.nativeElement.nextSibling.style.display = 'none';
      this.isOpened = false;
    } else {
      this.element.nativeElement.nextSibling.style.display = 'block';
      this.isOpened = true;
    }
  }
}
