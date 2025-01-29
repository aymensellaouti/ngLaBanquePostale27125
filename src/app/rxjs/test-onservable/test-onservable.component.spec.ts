import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOnservableComponent } from './test-onservable.component';

describe('TestOnservableComponent', () => {
  let component: TestOnservableComponent;
  let fixture: ComponentFixture<TestOnservableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [TestOnservableComponent]
});
    fixture = TestBed.createComponent(TestOnservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
