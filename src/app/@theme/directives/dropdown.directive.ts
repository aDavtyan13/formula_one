import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[dropdown]'
})
export class DropdownDirective {
  constructor() {
  }

  @HostBinding('class.open') isOpen = false;

  @HostListener('click', ['$event'])
  toggleOpen(event: any) {
    if (!event.target.classList.contains('js-clickable-btn')) {
      this.isOpen = !this.isOpen;
    }
  }
}
