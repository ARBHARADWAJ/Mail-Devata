package com.example.MailApp.repo;

import com.example.MailApp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo
        extends JpaRepository<User,Long> {
    User findByEmail(String email);
    User findByEmailAndPassword(String email,String password);
    //just for logins purpose

}
