var choice = 0;
var choicemade = false;

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
            cm.sendNext("Hello, Welcome to TroepieMS! \r\nAs you can see, i am the training guide here. \r\nIn order for you to continue to Victoria Island, you will need to complete 3 little quests.");
        } else if (status == 1){
            cm.sendOk("Please explore the 3 portals, In each portal,\r\nthere will be an NPC which needs your help!\r\nIf you have completed all 3 quests, visit Captain Victoria.\r\nGoodluck!");
        } else if (status == 2){
            cm.dipose();
        } 
}


