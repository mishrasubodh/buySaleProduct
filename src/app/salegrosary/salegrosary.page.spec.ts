import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalegrosaryPage } from './salegrosary.page';

describe('SalegrosaryPage', () => {
  let component: SalegrosaryPage;
  let fixture: ComponentFixture<SalegrosaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalegrosaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalegrosaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
