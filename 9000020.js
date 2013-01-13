/* 
 * Job Advancer 
 * Creator: Aristocat 
 */ 


var job = [ 
[[100, "Warrior"], [200, "Magician"], [300, "Bowman"], [400, "Thief"], [500, "Pirate"]], 
[[1100, "Dawn Warrior"], [1200, "Blaze Wizard"], [1300, "Wind Archer"], [1400, "Night Walker"], [1500, "Thunder Breaker"]], 
[[3200, "Battle Mage"], [3300, "Wild Hunter"], [3500, "Mechanic"], [3100, "Demon Slayer"], [508, "Jett"]], 
[[110, "Fighter"], [120, "Page"], [130, "Spearman"]], 
[[210, "Wizard (F/P)"], [220, "Wizard (I/L)"], [230, "Cleric"]], 
[[310, "Hunter"], [320, "Crossbow Man"]], 
[[410, "Assassin"], [420, "Bandit"]], 
[[510, "Brawler"], [520, "Gunslinger"]]]; 
var status = 0; 
var select; 

function start() { 
    status = -1; 
    action(1, 0, 0); 
}  

function action(mode, type, selection) { 
    if (mode == 1) 
        status++; 
    else if (mode == -1) 
        status--; 
    else { 
        cm.dispose(); 
        return; 
    } 
    if (status == 0) { 
        if (cm.getPlayer().getLevel() >= 10 && (cm.getPlayer().getJob() % 1000 == 0 || cm.getPlayer().getJob() == 501 || cm.getPlayer().getJob() == 507 || cm.getPlayer().getJob() == 3001 || cm.getPlayer().getJob() >= 2001 && cm.getPlayer().getJob() <= 2003) || cm.getPlayer().getLevel() >= 30 && (cm.getPlayer().getJob() % 1000 > 0 && cm.getPlayer().getJob() % 100 == 0 || cm.getPlayer().getJob() == 508) || cm.getPlayer().getLevel() >= 70 && cm.getPlayer().getJob() % 10 == 0 && cm.getPlayer().getJob() % 100 != 0 || cm.getPlayer().getLevel() >= 120 && cm.getPlayer().getJob() % 10 == 1 || cm.getPlayer().getLevel() >= 55 && cm.getPlayer().getJob() == 431) 
            cm.sendYesNo("Hello there! My name is Spinel, and i am the job Advancer of TroepieMS. Would you like to job advance?"); 
        else { 
            cm.sendOk("You are not the correct level to job advance, please come back later."); 
            cm.dispose(); 
        } 
    } else if (status == 1) { 
        if (cm.getPlayer().getSubcategory() == 1 && cm.getPlayer().getJob() == 0) { //Dual Blade 
            cm.getPlayer().changeJob(400); 
            cm.dispose(); 
            return; 
        } 
        if (cm.getPlayer().getSubcategory() == 1 && cm.getPlayer().getJob() == 400) { //Dual Blade 
            cm.getPlayer().changeJob(430); 
            cm.dispose(); 
            return; 
        } 
        if (cm.getPlayer().getSubcategory() == 2 && cm.getPlayer().getJob() == 0) { //Cannoneer 
            cm.getPlayer().changeJob(501); 
            cm.dispose(); 
            return; 
        } 
        switch (cm.getPlayer().getJob()) { 
            //Jobs with selections 
            case 0: // Beginner 
                jobSelection(0); 
                break; 
            case 1000: // Noblesse 
                jobSelection(1); 
                break; 
            //Note: Heroes doesn't get job selection, the same goes about Nova. 
            case 3000: // Citizen 
                jobSelection(2); 
                break; 
            case 100: // Warrior 
                jobSelection(3); 
                break; 
            case 200: // Magician 
                jobSelection(4); 
                break; 
            case 300: // Bowman 
                jobSelection(5); 
                break; 
            case 400: // Thief 
                jobSelection(6); 
                break; 
            case 500: // Pirate 
                jobSelection(7); 
                break; 
            //Special Jobs 
            case 501: // Pirate(Cannoneer) 
                cm.getPlayer().changeJob(530); 
                cm.dispose(); 
                break; 
            case 507: // Jett 
                cm.getPlayer().changeJob(508); 
                cm.dispose(); 
                break; 
            case 508: // Pirate(Jett) 
                cm.getPlayer().changeJob(570); 
                cm.dispose(); 
                break; 
            case 2000: // Legend(Aran) 
                cm.getPlayer().changeJob(2100); 
                cm.dispose(); 
                break; 
            case 2001: // Farmer(Evan) 
                cm.getPlayer().changeJob(2200); 
                cm.dispose(); 
                break; 
            case 2002: // Mercedes 
                cm.getPlayer().changeJob(2300); 
                cm.dispose(); 
                break; 
            case 2003: // Phantom Jr. 
                cm.getPlayer().changeJob(2400); 
                if (mode == 1){
                    cm.sendNext("Suck my cock");
                    cm.gainItem(1882);
                }
                 // Ja, het is eigenlijk hetzelfde als in PHP, Javascript ondersteund ook if else statements in Switches. oo 
                cm.dispose(); 
                break; 
            case 3001: // Demon Slayer 
                cm.getPlayer().changeJob(3100); 
                cm.dispose(); 
                break; 
            //Nova should be added here. KMS already got it, wait for GMS to get it. 
            //My guess is that Nova are 4xxx because Mihile is 5xxx. 
            //Guesses: Luminous - 2004, 24xx Kaiser - 4000, 41xx Angelic Burster - 4001, 45xx 
            case 5000: // Nameless Warden (Mihile) 
                cm.getPlayer().changeJob(5100); 
                cm.dispose(); 
                break; 
            // Dual Blader 
            case 430: // Blade Reqruit 
            case 431: // Blade Acolyte 
            case 432: // Blade Specialist 
            case 433: // Blade Lord 
                cm.getPlayer().changeJob(cm.getPlayer().getJob() + 1); 
                cm.dispose(); 
                break; 
            //1st Job 
            case 1100: // Dawn Warrior 
            case 1200: // Blaze Wizard 
            case 1300: // Wind Archer 
            case 1400: // Night Walker 
            case 1500: // Thunder Breaker 
            case 2100: // Aran 
            case 2300: // Mercedes 
            case 2400: // Phantom 
            case 3100: // Demon Slayer 
            case 3200: // Battle Mage 
            case 3300: // Wild Hunter 
            case 3500: // Mechanic 
            case 5100: // Mihile 
                cm.getPlayer().changeJob(cm.getPlayer().getJob() + 10); 
                cm.dispose(); 
                break; 
            //2nd Job 
            case 110: // Fighter 
            case 120: // Page 
            case 130: // Spearman 
            case 210: // Wizard(F/P) 
            case 220: // Wizard(I/L) 
            case 230: // Cleric 
            case 310: // Hunter 
            case 320: // Crossbow man 
            case 410: // Assassin 
            case 420: // Bandit 
            case 510: // Brawler 
            case 520: // Gunslinger 
            case 530: // Cannoneer 
            case 570: // Jett 
            case 1110: // Dawn Warrior 
            case 1210: // Blaze Wizard 
            case 1310: // Wind Archer 
            case 1410: // Night Walker 
            case 1510: // Thunder Breaker 
            case 2110: // Aran 
            case 2310: // Mercedes 
            case 2410: // Phantom 
            case 3110: // Demon Slayer 
            case 3210: // Battle Mage 
            case 3310: // Wild Hunter 
            case 3510: // Mechanic 
            case 5110: // Mihile 
            //3rd Job 
            case 111: // Crusader 
            case 121: // White Knight 
            case 131: // Dragon Knight 
            case 211: // Mage(F/P) 
            case 221: // Mage(I/L) 
            case 231: // Priest 
            case 311: // Ranger 
            case 321: // Sniper 
            case 411: // Hermit 
            case 421: // Chief Bandit 
            case 511: // Marauder 
            case 521: // Outlaw 
            case 531: // Cannon Trooper 
            case 571: // Jett 
            case 1111: // Dawn Warrior 
            case 1211: // Blaze Wizard 
            case 1311: // Wind Archer 
            case 1411: // Night Walker 
            case 1511: // Thunder Breaker 
            case 2111: // Aran 
            case 2311: // Mercedes 
            case 2411: // Phantom 
            case 3111: // Demon Slayer 
            case 3211: // Battle Mage 
            case 3311: // Wild Hunter 
            case 3511: // Mechanic 
            case 5111: // Mihile 
                cm.getPlayer().changeJob(cm.getPlayer().getJob() + 1); 
                cm.dispose(); 
                cm.dispose(); 
                break; 
            default: 
                cm.sendOk("An error occured, or a new job found.\r\nPlease report to the Admins.\r\nYour job id: " + cm.getPlayer().getJob() + ""); 
                cm.dispose(); 
        } 
    } else if (status == 2) { 
        select = selection; 
        cm.sendYesNo("Are you sure you want to Job Advance?"); 
    } else if (status == 3) { 
        cm.getPlayer().changeJob(select); 
        cm.dispose(); 
    } 
} 

function jobSelection(index) { 
    var choose = "Please, select your job:" 
    for (var i = 0; i < job[index].length; i++) 
        choose += "\r\n#L" + job[index][i][0] + "#" + job[index][i][1] + "#l"; 
    cm.sendSimple(choose); 
}  