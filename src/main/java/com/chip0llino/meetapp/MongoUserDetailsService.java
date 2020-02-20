package com.chip0llino.meetapp;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

// Class for searching users from database to allow to login
@Component
public class MongoUserDetailsService implements UserDetailsService {
    private  static final Logger LOGGER = LoggerFactory.getLogger(MongoUserDetailsService.class);
    @Autowired
    private UsersRepository repository;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        ServiceUser user = repository.findByEmail(email);
        if(user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        LOGGER.info(String.format("Returning user %s - %s", user.getEmail(), user.getPassword()));
        return new ServiceUserAuthorization(user);
    }
}
