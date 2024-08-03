package com.example.taskmanager_prueba.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Task {

    private Long id;
    private String name;
    private String description;
    private LocalDate startDate;

}
