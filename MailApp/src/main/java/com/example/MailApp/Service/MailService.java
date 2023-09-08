package com.example.MailApp.Service;

import com.example.MailApp.repo.MailRepo;
import org.hibernate.annotations.NaturalId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MailService {
    @Autowired
    private MailRepo mailRepo;
}
