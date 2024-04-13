package com.todoTask.demo.Model;

public class id {

    int id;
    public id(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "id{" +
                "id=" + id +
                '}';
    }
}
