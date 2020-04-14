package com.chip0llino.meetapp.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Objects;

@Document
public class ServiceUser {
    @Id
    private String email;
    @Indexed
    private String name;
    @Indexed
    private String surname;
    @Field
    private String password;
    @Field("imgLink")
    private String image;

    public ServiceUser(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }

    public String getPassword() {
        return password;
    }

    public String getImage() {
        return image;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ServiceUser user = (ServiceUser) o;
        return email.equals(user.email) &&
                Objects.equals(surname, user.surname) &&
                Objects.equals(name, user.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(email, name, surname);
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("User {").append('\n');;
        sb.append('\t').append("email: '").append(email).append("'").append('\n');
        sb.append('\t').append(", name: '").append(name).append("'").append('\n');
        sb.append('\t').append(", surname: '").append(surname).append("'").append('\n');
        sb.append('\t').append(", image: '").append(image).append("'").append('\n');
        sb.append('\t').append(", password: '").append("'").append(password).append('\n');
        sb.append('}');
        return sb.toString();
    }
}
