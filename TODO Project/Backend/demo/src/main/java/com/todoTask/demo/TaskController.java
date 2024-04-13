package com.todoTask.demo;

import com.todoTask.demo.Model.taskData;
import com.todoTask.demo.Service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@Controller
@CrossOrigin(origins = "http://localhost:3000")
@ResponseBody
public class TaskController {

    @Autowired
    TaskService s;

    @PostMapping("/createTask")
    public void createTask(@RequestBody taskData t){
        System.out.println(t);
        s.addTask(t);
    }
    @GetMapping("/getAllData")
    public List<taskData> getAllData(){
        return s.getAllTask();
    }

    @PostMapping("/deleteTask/{id}")
    public List<taskData> deleteTask(@PathVariable("id") int id){
        System.out.println(id);
        return  s.deleteTask(id);
    }
}
