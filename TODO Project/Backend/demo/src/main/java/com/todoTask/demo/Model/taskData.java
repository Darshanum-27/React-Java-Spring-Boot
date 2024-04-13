package com.todoTask.demo.Model;

import org.springframework.web.bind.annotation.ModelAttribute;

public class taskData {
    int Id;
    String name;
    String time;
    String DeadLine;

    public taskData(int id, String name, String time, String DeadLine) {
        Id = id;
        this.name = name;
        this.time = time;
        this.DeadLine = DeadLine;
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getDeadLine() {
        return DeadLine;
    }

    public void setDeadLine(String deadline) {
        DeadLine = deadline;
    }

    @Override
    public String toString() {
        return "taskData{" +
                "Id=" + Id +
                ", name='" + name + '\'' +
                ", time='" + time + '\'' +
                ", DeadLine='" + DeadLine + '\'' +
                '}';
    }
}
