package com.chip0llino.meetapp;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
public class UserExistsException extends RuntimeException {
    public UserExistsException(ServiceUser user) {
        super(String.format("User with email %s already exists!", user.getEmail()));
    }
}
