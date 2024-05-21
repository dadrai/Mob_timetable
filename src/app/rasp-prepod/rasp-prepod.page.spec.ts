import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RaspPrepodPage } from './rasp-prepod.page';

describe('RaspPrepodPage', () => {
  let component: RaspPrepodPage;
  let fixture: ComponentFixture<RaspPrepodPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RaspPrepodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
