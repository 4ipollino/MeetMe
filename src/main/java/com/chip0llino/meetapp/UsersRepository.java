package com.chip0llino.meetapp;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsersRepository extends MongoRepository <ServiceUser, String> {
    ServiceUser findByEmail(String email);
}
