package com.example.MailApp.Service;

import com.example.MailApp.model.User;
import com.example.MailApp.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;


}
