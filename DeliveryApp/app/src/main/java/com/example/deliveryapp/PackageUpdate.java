package com.example.deliveryapp;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.CompoundButton;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Toast;

public class PackageUpdate extends AppCompatActivity {

    String packageState;
    RadioGroup radioGroup;
    RadioButton r1;
    RadioButton r2;
    RadioButton r3;
    RadioButton buttonSelected;
    Button confirm;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_package_update);

        radioGroup = (RadioGroup) findViewById(R.id.radioGroup);
        r1 = (RadioButton) findViewById(R.id.radioButton1);
        r2 = (RadioButton) findViewById(R.id.radioButton2);
        r3 = (RadioButton) findViewById(R.id.radioButton3);
        confirm = (Button) findViewById((R.id.confirmbut));

        confirm.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                validation();

            }
        });


    }


    public void validation() {
        //get checked RadioButton(). Return -1 if there is no radiobutton selected.
        int isSelected = radioGroup.getCheckedRadioButtonId();
        buttonSelected =(RadioButton) findViewById(isSelected);

        if (isSelected == -1) {
            Toast.makeText(PackageUpdate.this, "You have not selected any option", Toast.LENGTH_LONG).show();
            return;
        } else {
            Toast.makeText(getBaseContext(),buttonSelected.getText(),Toast.LENGTH_SHORT).show();

        }


    }


}