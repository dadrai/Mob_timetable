import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RaspAuditorPage } from './rasp-auditor.page';

describe('RaspAuditorPage', () => {
  let component: RaspAuditorPage;
  let fixture: ComponentFixture<RaspAuditorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RaspAuditorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
