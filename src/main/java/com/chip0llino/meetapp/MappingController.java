package com.chip0llino.meetapp;

import com.mongodb.MongoWriteException;
import org.apache.catalina.filters.ExpiresFilter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
public class MappingController {
    private  static final Logger LOGGER = LoggerFactory.getLogger(MappingController
            .class);
    @Autowired
    private UsersRepository repository;

    @Autowired
    PasswordEncoder passEncoder() {
        return new MyPassEncoder();
    }

    @PostMapping("/register")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public String registerUser(@RequestBody ServiceUser user) {
        try {
            user.setPassword(passEncoder().encode(user.getPassword()));
            repository.insert(user);
            LOGGER.info(String.format("Successfully registered user %s", user.getEmail()));
            return (String.format("Successfully registered user %s", user.getEmail()));
        }
        catch (DuplicateKeyException | com.mongodb.DuplicateKeyException e)
        {
            LOGGER.error(e.getMessage());
            throw new UserExistsException(user);
        }
    }

    @PostMapping("/getUser")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public String getUser(@RequestBody String username) {
        try {
            LOGGER.info(String.format("Searching user with email: %s", username));
            repository.findByEmail(username);
        }
        catch (DuplicateKeyException | com.mongodb.DuplicateKeyException e)
        {
            LOGGER.error(e.getMessage());
        }
        return "123";
    }
}
