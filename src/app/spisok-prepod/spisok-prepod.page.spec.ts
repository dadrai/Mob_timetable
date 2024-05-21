import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { SpisokPrepodPage } from './spisok-prepod.page';
import { IonicModule } from '@ionic/angular';


describe('SpisokPrepodPage', () => {
  let component: SpisokPrepodPage;
  let fixture: ComponentFixture<SpisokPrepodPage>;

  beforeEach(async(() => {
    
    fixture = TestBed.createComponent(SpisokPrepodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
