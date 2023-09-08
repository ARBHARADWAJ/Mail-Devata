package com.example.MailApp.model;


import jakarta.persistence.*;
import lombok.*;

@Table(name = "mails")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class MailModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;
    private String toAddress;
    private String fromAddress;
    private  String subject;
    private String Content;

    private  Boolean unread;//if true the user must see it else no prob

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;



}
