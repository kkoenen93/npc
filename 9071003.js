var choice = 0;
var choicemade = false;
/** 
var warrior[];
var magician[];
var bowman[];
**/

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
    if (status == 0){
        cm.sendSimple("Ahoy Matey! I am the skillmaxer of TroepieMS!\r\n\ I can max your skills, free of charge!\r\n\ What jo ");
    }else if (status == 1){
        if(cm.getChar().getJob() >= 100 && cm.getChar().getJob() <= 132 ){
            cm.teachSkill(1000,3,3); //Three Snails
            cm.teachSkill(1001,3,3); //Recovery
            cm.teachSkill(1002,3,3); //Nimble Feet
            cm.teachSkill(1004,1,1); //Monster Ride
        } else if (cm.getChar().getJob() >= 200 && cm.getChar().getJob() <= 232){
            cm.dispose();
        }
    }else if (status == 2){
        cm.dispose();
    }
}