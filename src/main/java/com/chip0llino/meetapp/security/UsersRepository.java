package com.chip0llino.meetapp.security;

import com.chip0llino.meetapp.entities.ServiceUser;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsersRepository extends MongoRepository <ServiceUser, String> {
    ServiceUser findByEmail(String email);
}
