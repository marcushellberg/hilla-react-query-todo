package com.example.application.endpoints;

import com.example.application.data.Todo;
import com.example.application.data.TodoRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;

import java.util.List;

@Endpoint
@AnonymousAllowed
public class TodoEndpoint {

    private final TodoRepository repo;

    public TodoEndpoint(TodoRepository repo) {
        this.repo = repo;
    }

    public List<Todo> findAll() {
        return repo.findAll();
    }

    public Todo save(Todo todo) {
        return repo.save(todo);
    }
}
