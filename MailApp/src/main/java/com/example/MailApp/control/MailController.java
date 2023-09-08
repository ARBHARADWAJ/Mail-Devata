package com.example.MailApp.control;

import com.example.MailApp.model.MailModel;
import com.example.MailApp.model.User;
import com.example.MailApp.repo.MailRepo;
import com.example.MailApp.repo.UserRepo;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("api/mail")
@CrossOrigin("http://vyasree:3000")
public class MailController {
    @Autowired
    MailRepo mailRepo;

    @Autowired
    UserRepo userRepo;

    @GetMapping("/home")
    public  String hello(){
        return  "Hello";
    }




    @PostMapping("/register")
    public ResponseEntity<Boolean> AddRecord(@RequestBody User user, HttpServletRequest request){

            if(userRepo.findByEmail(user.getEmail())!=null){
                return ResponseEntity.status(HttpStatus.CONFLICT).body(false);
            }
            else{
                User new_user=new User();

                new_user.setFirstname(user.getFirstname());
                new_user.setLastname(user.getLastname());
                new_user.setEmail(user.getEmail());
                new_user.setPassword(user.getPassword());
                System.out.println(new_user);
                userRepo.save(new_user);

                return ResponseEntity.ok(true);
            }
        }

    @PostMapping("/login")
    public ResponseEntity<Boolean> Login(@RequestBody User user, HttpServletRequest request){
        System.out.println("login");
        User user1=userRepo.findByEmail(user.getEmail());
        if(user1==null || !user1.getPassword().equals(user.getPassword())){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(false);
        }
        HttpSession session=request.getSession(true);
        session.setAttribute("email",user1.getEmail());
        session.setMaxInactiveInterval(60*30);
        return  ResponseEntity.ok(true);
    }

    @GetMapping("/{inbox}")
    public List<MailModel> inbox(@PathVariable String inbox){
        System.out.println(inbox);
        return mailRepo.findByToAddress(inbox);
    }



    @PostMapping("/send")
    public  boolean sendEmail(@RequestBody MailModel mailModel){

        System.out.println("juest entered"+mailModel);
        MailModel mailModel1=new MailModel();
        if(userRepo.findByEmail(mailModel.getFromAddress())!=null){
            mailModel1.setUser(userRepo.findByEmail(mailModel.getFromAddress()));
        }
        mailModel1.setToAddress(mailModel.getToAddress());
        mailModel1.setFromAddress(mailModel.getFromAddress());
        mailModel1.setSubject(mailModel.getSubject());
        mailModel1.setContent(mailModel.getContent());
        mailModel1.setUnread(true);
        System.out.println(mailModel1);
        mailRepo.save(mailModel1);
        return true;
    }




    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest request){

        HttpSession session=request.getSession(false);

        if(session!=null){

            session.invalidate();

        }

        return  ResponseEntity.ok("Logged out Successfully");
    }



}
