import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatTreeModule} from '@angular/material/tree';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatBadgeModule} from '@angular/material/badge';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ErrorPresenter } from './presenters/error-presenter/error-presenter';


@NgModule({
    imports: [
      CommonModule,
      MatButtonModule,
      MatInputModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatToolbarModule,
      MatTableModule,
      MatTabsModule,
      MatPaginatorModule,
      MatSortModule,
      MatRadioModule,
      MatSelectModule,
      MatSnackBarModule,
      MatFormFieldModule,
      MatCheckboxModule,
      MatChipsModule,
      MatTooltipModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatDialogModule,
      MatAutocompleteModule,
      MatSliderModule,
      MatStepperModule,
      MatExpansionModule,
      MatMenuModule,
      MatCardModule,
      MatTreeModule,
      DragDropModule,
      MatBadgeModule,
      FormsModule,
      MatButtonToggleModule,
      // ErrorPresenter
    ],
    exports: [
      CommonModule,
      MatButtonModule,
      MatInputModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatToolbarModule,
      MatTableModule,
      MatTabsModule,
      MatPaginatorModule,
      MatSortModule,
      MatRadioModule,
      MatSelectModule,
      MatSnackBarModule,
      MatFormFieldModule,
      MatCheckboxModule,
      MatChipsModule,
      MatTooltipModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatDialogModule,
      MatAutocompleteModule,
      MatSliderModule,
      MatStepperModule,
      MatExpansionModule,
      MatMenuModule,
      MatCardModule,
      MatTreeModule,
      DragDropModule,
      MatBadgeModule,
      FormsModule,
      MatButtonToggleModule,
      ErrorPresenter
    ],

    declarations: [ErrorPresenter]

  })
  export class MaterialModule { }