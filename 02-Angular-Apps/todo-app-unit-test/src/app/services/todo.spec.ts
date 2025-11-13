import { TestBed } from '@angular/core/testing';

import { Todo } from './todo';

describe('Todo', () => {
  let service: Todo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Todo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add todo item', () => {
    service.addItem("Item 1")
    expect(service.todoItems.length).toBe(1)
  });

  it('should get all todo items', () => {
    service.addItem("Item 1")
    service.addItem("Item 2")
    const items = service.getItems()
    expect(items.length).toBe(2)
  });
});
