import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponentComponent } from './first-component.component';

describe('FirstComponentComponent', () => {
  let component: FirstComponentComponent;
  let fixture: ComponentFixture<FirstComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'first-project'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('first-project');
  });

  it('should use title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('first-project');
  });

  it('should concat title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toEqual('Mon composant app - first-project');
  });
});
