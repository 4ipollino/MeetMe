package com.chip0llino.meetapp.security;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

//TODO: Make more complex :)
public class MyPassEncoder implements PasswordEncoder {
    final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @Override
    public String encode(CharSequence rawPassword) {
        return String.valueOf(rawPassword.toString().hashCode());

    }

    @Override
    public boolean matches(CharSequence rawPassword, String encodedPassword) {
        return String.valueOf(rawPassword.toString().hashCode())
                .equals(encodedPassword);
    }
}
