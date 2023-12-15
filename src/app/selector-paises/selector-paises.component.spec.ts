import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorPaisesComponent } from './selector-paises.component';

describe('SelectorPaisesComponent', () => {
  let component: SelectorPaisesComponent;
  let fixture: ComponentFixture<SelectorPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectorPaisesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectorPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
