import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-benefits-presenter',
  templateUrl: './benefits-presenter.html',
  styleUrl: './benefits-presenter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MaterialModule, FormsModule],
  encapsulation: ViewEncapsulation.None
})
export class BenefitsPresenterComponent {
   options: string[][] = [
    ["Łatwe Planowanie", "/images/Icons/tourist.png"],
    ["Elastyczny Budget", "/images/Icons/wallet.png"],
    ["Podróżuj tak jak chcesz", "/images/Icons/bus.png"]
  ]
}
