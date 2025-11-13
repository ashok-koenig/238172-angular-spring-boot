import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItems } from './list-items';
import { Todo } from '../services/todo';

class MockTodo{
  getItems() {
    return ["Item 1", "Item 2"]
  }
}

describe('ListItems', () => {
  let component: ListItems;
  let fixture: ComponentFixture<ListItems>;
  let mockTodo: MockTodo

  beforeEach(async () => {
    mockTodo = new MockTodo();
    await TestBed.configureTestingModule({
      imports: [ListItems],
      providers: [{provide: Todo, useValue: mockTodo}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load todo items', () => {
    expect(component.items.length).toBe(2)
    expect(component.items[0]).toBe("Item 1")
  });
});
