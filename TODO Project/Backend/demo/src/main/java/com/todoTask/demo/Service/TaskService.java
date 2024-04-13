package com.todoTask.demo.Service;

import com.todoTask.demo.Model.taskData;
import com.todoTask.demo.Model.id;
import com.todoTask.demo.Repo.Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    Repo r;
    public void addTask(taskData t){
        r.addTask(t);
    }

    public List<taskData> getAllTask(){
        return r.getAllTask();
    }

    public List<taskData> deleteTask(int id){
        return r.deleteTask(id);
    }

}
