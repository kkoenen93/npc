// Made by Suck a Cock!!!!!

var choice = 0;
var choicemade = false;

function start (mode, type, selection) { // begin van je start functie
    status = -1; // Deze zorgt eigenlijk voor een nieuwe start
    action(1, 0, 0); // Hier wordt action aangeroepen, en geeft de vars 1, 0 en 0 mee. Die eerste is de mode. Die wordt dus op 1 gezet. Juist
} // einde van je start functie

function action(mode, type, selection) { // begin je action functie (roept de gegevens op die je boven heb gedefinieerd)
  // Dit deel als altijd standaard, want deze zorgt dat de status omhoog of omlaag gaat :)
    if (mode == -1) { // when the mode is -1, the npc closes.
        cm.sendOk("Alright speak to me if you change your mind.");
        cm.dispose();
    }
    else if(mode == 0){ // if mode is 0, which means the player presses "end chat", the npc says and ending sentence, and then closes.
        cm.sendOk("Alright speak to me if you change your mind.");
        cm.dispose();
    } else {
        if (mode == 1) { // when mode gets 1, status will raise with 1
           status++;  
        } else { 
            status--; // when mode isn't 1, status will lower with 1
        }
    }


    // Hier kan je de tekst aanpassen
    if (status == 0) { // als status 0 is geeft die de 1e tekst
        cm.sendSimple("Hello, Welcome to TroepieMS! My task here is to help you start your journey. Just to make sure, what job do you want? \r\n\
#L1#Explorer\r\n\
#L2#Cygnus Knight\r\n\
#L3#Resistance\r\n\
#L4#Aran\r\n\
#L5#Evan\r\n\
#L6#Dual Blade\r\n\
#L7#Jett\r\n ");  // hier word geklikt op een selectie, dus word status 1.

// hierboven word een keuzelijst gemaakt
// als er een keuze word gemaakt, word mode 1, dus gaat status van 0 naar 1.

    } else if (status == 1) { // als status 1 is geeft die 2e tekst      
        if(selection == 1) { // als de 1e optie word aangeklikt, voert die deze uit
          cm.changeJob(0);
          cm.sendNext("Allright you are now an Beginner! As soon as you reach level 10, you can use the player command @advance to job advance.\r\nFor now, i'll give you some items to start the tutorial island with. ");
          choice = 1;
        } else if(selection == 2) { // als de 2e optie word aangeklikt, voert die deze uit
          cm.changeJob(1000);
          cm.sendNext("Allright, You are now a Cygnus Knight. As soon as you reach level 10, use the player command @advance to job advance.\r\nFor now, i'll give you some items to start the tutorial island with. ");
          choice = 2;
        } else if (selection == 3) { // zelfde voor deze.
          cm.changeJob(3000);
          cm.sendNext("Allright, You are now a Citizin! As soon as you reach level 10, you can use the player command @advance to job advance.\r\nFor now, i'll give you some items to start the tutorial island with. ");
          choice = 3;
        } else if (selection == 4){
          cm.changeJob(2000);
          cm.sendNext("Allright, You are now a Legend! As soon as you reach level 10, you can use the player command @advance to job advance.\r\nFor now, i'll give you some items to start the tutorial island with. ");
          choice = 4;
        } else if (selection == 5){
          cm.changeJob(2001);
          cm.sendNext("Allright, You are now a Evan! As soon as you reach level 10, you can use the player command @advance to job advance.\r\nFor now, i'll give you some items to start the tutorial island with.  ");
          choice = 5;
        } else if (selection == 6){
          cm.changeJob(0);
          cm.sendNext("Allright, You are now a temporary Beginner. As soon as you reach leve  l 10, you can use the player command @advance to become a Dual Blade!\r\nFor now, i'll give you some items to start the tutorial island with. ");
          choice = 6;
        } else if (selection == 7){
          cm.changeJob(3000);
          cm.sendNext("Allright, You are now a temporary Citizin. As soon as you reach level 10, you can use the player command @advance to become a Jett!\r\nFor now, i'll give you some items to start the tutorial island with.");
          choice = 7;
        }
        choicemade = true;
    } else if (status == 2){
      if (choicemade && choice == 1){
        cm.warp(0000000001);
        cm.gainItem(1002419,1);
        cm.gainItem(1302024,1);
        cm.sendOk("Good luck!");
      } else if (choicemade && choice == 2){
        cm.warp(0000000001);
        cm.gainItem(1002419,1);
      } else if (choicemade && choice == 3){
        cm.warp(0000000001);
        cm.gainItem(1302024,1);
        cm.gainItem(1002419,1);
      } else if (choicemade && choice == 4){
        cm.warp(0000000001);
        cm.gainItem(1002419,1);
        cm.gainItem(1302024,1);
      } else if (choicemade && choice == 5){
        cm.warp(0000000001);
        cm.gainItem(1002419,1);
        cm.gainItem(1302024,1);
      } else if (choicemade && choice == 6){
        cm.warp(0000000001);
        cm.gainItem(1002419,1);
        cm.gainItem(1302024,1);        
      } else if (choicemade && choice == 7){
        cm.warp(0000000001);
        cm.gainItem(1002419,1);
        cm.gainItem(1302024,1);        
      }
    } else if (status == 3){
      cm.dispose();
    }
} // einde van je action functie

/**
  }  else if(status == 1) {
    if (selection == 1){
      cm.getPlayer().changejob(0);
      cm.sendNext("Allright, you are now an Cygnus Knight! As soon as you reach level 10, you can job advance by using the player command @advance ");
        } else if(selection == 2) {
          cm.getPlayer().changejob(1000);
          cm.sendNext("Allright, you are now an Cygnus Knight! As soon as you reach level 10, you can job advance by using the player command @advance ");
        }
  }  
    
          /**
          else if (selection == 2){
            cm.getPlayer().changejob(1000);
            cm.sendNext("Allright, you are now an Cygnus Knight! As soon as you reach level 10, you can job advance by using the player command @advance ");
              if (mode == 1){
              cm.dispose();
              }
          }
          else if (selection == 3){
            cm.getPlayer().changejob(3000);
            cm.sendNext("Allright, you are now an Citizen! As soon as you reach level 10, you can job advance by using the player command @advance ");
            if (mode == 1){
              cm.dispose();
            }
          else if (selection == 4){
            cm.getPlayer().changejob(2000);
            cm.sendNext("Allright, you are now an Legend! As soon as you reach level 10, you can job advance by using the player command @advance ");
            if (mode == 1){
              cm.dispose();
            }
          }
          else if (selection == 5){
          cm.getPlayer().changeJob(2200);
          cm.sendNext("Allright, you are now an Evan! As soon as you reach level 10, you can job advance by using the player command @advance ");
          if (mode == 1){
            cm.dispose();         
          }
          else if (selection == 6){
            cm.getPlayer().changeJob(0);
            cm.sendNext("Allright, I have temporary made you an Beginner. As soon as you reach level 10, you can use the player command @advance . In the job advance screen, you can select Dual Blade.");
            }
          }
          else if (selection == 7){
          cm.getPlayer().changeJob(3000);
          cm.sendNext("Allright, I have temporary made you an Citizin. As soon as you reach level 10, you can use the player command @advance . In the job advance screen, you can select Jett.");
          }

        } 

        
    }
}

**/
