package com.todoTask.demo.Repo;

import com.todoTask.demo.Model.taskData;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Repository
@Component
public class Repo {
    List<taskData> t1 = new ArrayList<taskData>(Arrays.asList(new taskData(1,"Clean House","Monday 8:00 AM","EveryDay 8:15 AM"),
                new taskData(2,"Meal Prep","Tuesday 8:00 AM","Wednesday 8:15 AM")));

    public void addTask(taskData data){
        t1.add(data);
        System.out.println(t1);
    }
    public List<taskData> getAllTask(){
        return t1;
    }
    public List<taskData> deleteTask(int id){
        int index = 0;
        for(int i=0;i<t1.size();i++){
            if(t1.get(i).getId() == id){
                index = i;
            }
        }
        t1.remove(index);
        return t1;
    }
}
