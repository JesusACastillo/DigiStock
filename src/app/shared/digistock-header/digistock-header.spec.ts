import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigistockHeader } from './digistock-header';

describe('DigistockHeader', () => {
  let component: DigistockHeader;
  let fixture: ComponentFixture<DigistockHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigistockHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigistockHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
