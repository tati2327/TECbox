package com.example.deliveryapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity  {
    EditText tv1;
    EditText tv2;

    int indexValidation;
    String list[]={"Juan Araya","Paco Robles"};
    String PasswordList[]={"1234","1234"};


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button loginBut = (Button) findViewById(R.id.loginBut);
        tv1 = (EditText) findViewById(R.id.editText1);
        tv2 =(EditText)findViewById(R.id.passwordbut);




        //validateUserName();

        loginBut.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent secondView = new Intent(MainActivity.this, PackageUpdate.class);
                //validateUserName();
                if(validateAcces()) {
                    startActivity(secondView);
                }


            }
        });



    }
    private boolean validateUserName() {
        String username = tv1.getText().toString().trim();
        for(int i=0;i<list.length;i++){
            if(username.contains(list[i])){
                indexValidation=i;
                return true;
            }
        }if(username.isEmpty()) {
            tv1.setError("El campo no puede estar vacio");
            return false;
        } else {
            tv1.setError("Usuario incorrecto");
            return false;
        }
    }
    private boolean validatePassword() {
        String password = tv2.getText().toString().trim();
        if(password.contains(PasswordList[indexValidation])){
            return true;
        }if(password.isEmpty()) {
            tv2.setError("El campo no puede estar vacio");
            return false;
        } else {
            tv2.setError("contraseña incorrecta");
            return false;
        }
    }
    private boolean validateAcces(){
        if(validateUserName() & validatePassword()){
            return true;
        }else{
            return false;
        }
    }

}



