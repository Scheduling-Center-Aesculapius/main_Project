package br.com.schedulingcenteraesculapius.controllers.model;

import org.springframework.boot.autoconfigure.domain.EntityScan;

import br.com.schedulingcenteraesculapius.controllers.model.enums.COUNTRY;
import br.com.schedulingcenteraesculapius.controllers.model.enums.SEX;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User {
    
    private String name;

    private String username;

    private String password;

    private SEX sex;

    private String cpf;

    private String email;

    private String phone;

    private String street;

    private int numberStreet;

    private String zipCode;
    
    private String city;

    private String state;

    private COUNTRY coutry; 


    

    




}


