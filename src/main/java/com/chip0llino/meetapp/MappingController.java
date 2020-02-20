package com.chip0llino.meetapp;

import com.mongodb.MongoWriteException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class MappingController {
    private  static final Logger LOGGER = LoggerFactory.getLogger(MappingController
            .class);
    @Autowired
    private UsersRepository repository;

    @PostMapping("/register")
    @ResponseBody
    public String registerUser(@RequestBody ServiceUser user) {
        try {
            repository.insert(user);
            LOGGER.info(String.format("Successfully registered user %s", user.getEmail()));
            return ("{\"result\": \"ok\", \"status\":\"200\"}, \"path\":\"/register\"");
        }
        catch (DuplicateKeyException | com.mongodb.DuplicateKeyException e)
        {
            LOGGER.error(e.getMessage());
            throw new UserExistsException(user);
        }
    }

    @RequestMapping("/login")
    public void loginUser(@RequestBody ServiceUser user) {
        LOGGER.debug("logged in");
    }
}
