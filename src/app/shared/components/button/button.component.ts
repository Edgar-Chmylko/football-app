import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  OnInit,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  @Input() context!: string;

  icon!: string;

  router = inject(Router);

  @HostListener('click', ['$event.target'])
  onClick() {
    this.router.navigate(['']);
  }

  ngOnInit() {
    switch (this.context) {
      case 'Back':
        this.icon = 'arrow_back';
        break;
      case 'Home':
        this.icon = 'home';
        break;
      default:
        return 
    }
  }
}
