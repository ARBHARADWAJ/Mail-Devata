package com.example.MailApp.repo;

import com.example.MailApp.model.MailModel;
import com.example.MailApp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MailRepo extends JpaRepository<MailModel,Long> {

    List<MailModel> findByToAddress(String address);


//just to submit then related details witht eh login of user ie after login
}
