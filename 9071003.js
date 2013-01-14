function start (mode, type, selection) { // begin van je start functie
    status = -1; // Deze zorgt eigenlijk voor een nieuwe start
    action(1, 0, 0); // Hier wordt action aangeroepen, en geeft de vars 1, 0 en 0 mee. Die eerste is de mode. Die wordt dus op 1 gezet. Juist
} // einde van je start functie

function action(mode, type, selection) { // begin je action functie (roept de gegevens op die je boven heb gedefinieerd)
  // Dit deel als altijd standaard, want deze zorgt dat de status omhoog of omlaag gaat :)
    if (mode == -1) { // when the mode is -1, the npc closes.
        cm.dispose();
    }
    else if(mode == 0){ // if mode is 0, which means the player presses "end chat", the npc says and ending sentence, and then closes.
        cm.dispose();
    } else {
        if (mode == 1) { // when mode gets 1, status will raise with 1
           status++;  
        } else { 
            status--; // when mode isn't 1, status will lower with 1
        }
    }
    if (status == 0){
        cm.sendOk("Hello!\r\nI am the testNPC of troepieMS!\r\nRight now, Unfortunately i have no functionality whatsoever...\r\nPlease come back later! :) ");
    }else if (status == 1){
        cm.dispose();
    }
}