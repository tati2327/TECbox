package com.example.deliveryapp;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.CheckBox;
import android.widget.CompoundButton;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Toast;

public class PackageUpdate extends AppCompatActivity {

    String packageState;
    RadioButton r1;
    RadioButton r2;
    RadioButton r3;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_package_update);

        RadioButton r1=(RadioButton) findViewById(R.id.radioButton1);
        RadioButton r2=(RadioButton) findViewById(R.id.radioButton2);
        RadioButton r3=(RadioButton) findViewById(R.id.radioButton3);

    }
    public void onClick(View view){
        if(view.getId()==R.id.confirmbut){
            validar();
        }
    }
    public void validar(){
        String cad="Seleccionado: \n";

        if(r1.isChecked()==true){
            packageState="Entregado al cliente";
            cad +="Entregado al cliente\n";

        }if(r2.isChecked()==true){
            packageState="Entrega fallida";
            cad +="Entrega fallida\n";

        }if(r3.isChecked()==true){
            packageState="Devuelto a la sucursal";
            cad +="Devuelto a la sucursal\n";
        }
        Toast.makeText(getApplicationContext(),cad,Toast.LENGTH_SHORT).show();
    }
}
