function start (mode, type, selection) { // begin van je start functie
    status = -1; // Deze zorgt eigenlijk voor een nieuwe start
    action(1, 0, 0); // Hier wordt action aangeroepen, en geeft de vars 1, 0 en 0 mee. Die eerste is de mode. Die wordt dus op 1 gezet. Juist
} // einde van je start functie

function action(mode, type, selection) { // begin je action functie (roept de gegevens op die je boven heb gedefinieerd)
    // Dit deel als altijd standaard, want deze zorgt dat de status omhoog of omlaag gaat :)
    if (mode == -1) { //als mode -1 is, sluit de npc af
        cm.sendOk("Alright speak to me if you change your mind.");
        cm.dispose();
    }
    else if(mode == 0){ // als mode 0 is, word "end chat" ingedrukt, en sluit de npc met een message af
        cm.sendOk("Alright speak to me if you change your mind.");
        cm.dispose();
    } else {
        if (mode == 1) { // als mode 1 is word status met 1 verhoogd
           status++;  
        } else { 
            status--; // als mode niet 1 is, word status met 1 verlaagd
        }
    }
        if(status == 0){
            cm.sendNext("Hello there! My name is Captain Victoria, and i am in charge of bringing you to Victoria.");
        else if (status == 1){
            cm.sendSimple("Are you ready to go to Victoria Island? #L1#Yes, I would like to go to Victoria Island!#L2#No, I'll stay here for a while..");
        }else if (status == 2){
            if (selection == 1){
                if(cm.haveItem(........,1) && cm.haveItem(.......,1) && cm.haveItem(.......,1)){
                    cm.sendOk("Good luck!");
                    cm.warp(100000000);
                    cm.dispose();
                } else {
                    cm.sendOk("I dont think you have all the required items to go to Victoria Island.\r\nPlease come back later.");
                    cm.dispose();
                }
            }else if (selection == 2){
                cm.sendOk("Allright, speak to me when you're ready!");
                cm.dispose();
            }
        } else if (status == 3){
            cm.dispose();
        }
}