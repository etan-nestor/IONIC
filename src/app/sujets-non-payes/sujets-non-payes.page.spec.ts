import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SujetsNonPayesPage } from './sujets-non-payes.page';

describe('SujetsNonPayesPage', () => {
  let component: SujetsNonPayesPage;
  let fixture: ComponentFixture<SujetsNonPayesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SujetsNonPayesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SujetsNonPayesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
