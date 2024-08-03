package com.example.taskmanager_prueba.mapper;

import com.example.taskmanager_prueba.model.Task;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;
import java.util.List;
import org.apache.ibatis.annotations.*;


@Mapper
public interface ITaskMapper {

    @Insert("INSERT INTO tasks(name, description, startdate) VALUES(#{name}, #{description}, #{startDate})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    int save(Task task);

    @Select("SELECT * FROM tasks")
    List<Task> findAll();

    @Select("SELECT * FROM tasks WHERE id = #{id}")
    Task findById(Long id);

    @Update("UPDATE tasks SET name = #{name}, description = #{description}, start_date = #{startDate} WHERE id = #{id}")
    int update(Task task);

    @Delete("DELETE FROM tasks WHERE id = #{id}")
    int delete(Long id);
}
