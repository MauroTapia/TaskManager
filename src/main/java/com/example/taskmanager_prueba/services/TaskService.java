package com.example.taskmanager_prueba.services;

import com.example.taskmanager_prueba.mapper.ITaskMapper;
import com.example.taskmanager_prueba.model.Task;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final ITaskMapper taskMapper;

    public Task saveTask(Task task) {
        taskMapper.save(task);
        return task;
    }

    public List<Task> getAllTasks() {
        return taskMapper.findAll();
    }

    public Task findById(Long id) {
        return taskMapper.findById(id);
    }

    public Task updateTask(Long id, Task task) {
        Task existingTask = taskMapper.findById(id);
        if (existingTask != null) {
            existingTask.setName(task.getName());
            existingTask.setDescription(task.getDescription());
            existingTask.setStartDate(task.getStartDate());
            taskMapper.update(existingTask);
            return existingTask;
        }
        return null;
    }

    public boolean deleteTask(Long id) {
        Task existingTask = taskMapper.findById(id);
        if (existingTask != null) {
            taskMapper.delete(id);
            return true;
        }
        return false;
    }
}