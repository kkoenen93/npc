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
        cm.sendYesNo("Ahoy Matey! I am the skillmaxer of TroepieMS!\r\n\ I can max your skills, free of charge!\r\n\ Do you want to max your skills? ");
    }else if (status == 1){
      if(cm.getChar().getJob() >= 100 && cm.getChar().getJob() <= 132 ){    
//start of explorer skills

//start of beginner skills
cm.teachSkill(1000,3,3); //Three Snails
cm.teachSkill(1001,3,3); //Recovery
cm.teachSkill(1002,3,3); //Nimble Feet
cm.teachSkill(1004,1,1); //Monster Ride
//end of beginner skills

//Start of Swordsman Skills
cm.teachSkill(1000000,16,16); //Improving HP Recovery
cm.teachSkill(1000001,10,10); //Improving MaxHP Increase
cm.teachSkill(1000002,8,8); // Endure
cm.teachSkill(1001003,20,20); //Iron Body
cm.teachSkill(1001004,20,20); //Power Strike
cm.teachSkill(1001005,20,20); //Slash Blast
cm.teachSkill(1000006,10,10); //HP boost
//Start of Fighter Skills
cm.teachSkill(1100000,20,20); //Sword Mastery
cm.teachSkill(1100001,20,20); //Axe Mastery
cm.teachSkill(1100002,30,30); //Final Attack - Sword
cm.teachSkill(1100003,30,30); //Final Attack - Axe
cm.teachSkill(1101004,20,20); //Sword Booster
cm.teachSkill(1101005,20,20); //Axe Booster
cm.teachSkill(1101006,20,20); //Rage
cm.teachSkill(1101007,30,30); //Power Guard
cm.teachSkill(1101008,10,10); //Ground Smash
cm.teachSkill(1100009,10,10); //Physical Training
cm.teachSkill(1101010,10,10); //Slipstream
//End of Fighter Skills
//Start of Crusader Skills
cm.teachSkill(1110000,20,20); //Improving MP recovery
cm.teachSkill(1110001,20,20); //Shield Mastery
cm.teachSkill(1111002,30,30); //Combo Attack
cm.teachSkill(1111003,30,30); //Panic- Sword
cm.teachSkill(1111004,30,30); //Panic- Axe
cm.teachSkill(1111005,30,30); //Coma- Sword
cm.teachSkill(1111006,30,30); //Coma- Axe
cm.teachSkill(1111007,20,20); //Armor Crash
cm.teachSkill(1111008,30,30); //Shout
cm.teachSkill(1111010,20,20); //Brandish
cm.teachSkill(1110009,20,20); //Chance Attack
//End of Crusader Skills
//Start Hero Skills
cm.teachSkill(1121000,30,30); //Maple Warrior
cm.teachSkill(1121001,30,30); //Monster Magnet
cm.teachSkill(1121002,30,30); //Power Stance
cm.teachSkill(1120003,30,30); //Advanced Combo
cm.teachSkill(1120004,30,30); //Achilles
cm.teachSkill(1120005,30,30); //Guardian
cm.teachSkill(1121006,30,30); //Rush
cm.teachSkill(1121008,30,30); //Brandish
cm.teachSkill(1121010,30,30); //Enrage
cm.teachSkill(1121011,5,5); //Hero's Will
cm.teachSkill(1120012,10,10); //Combat Mastery
cm.teachSkill(1120013,10,10); //Advanced Final Attack
//End Hero Skills
//Start of Page Skills
cm.teachSkill(1200000,20,20); //Sword Mastery
cm.teachSkill(1200001,20,20); //BW Mastery
cm.teachSkill(1200002,30,30); //Final Attack - Sword
cm.teachSkill(1200003,30,30); //Final Attack - BW
cm.teachSkill(1201004,20,20); //Sword Booster
cm.teachSkill(1201005,20,20); //BW Booster
cm.teachSkill(1201006,20,20); //Threaten
cm.teachSkill(1201007,30,30); //Power Guard
cm.teachSkill(1201008,10,10); //Ground Smash
cm.teachSkill(1201010,10,10);; //Slipstream
//End of Page Skills
//Start of White Knight Skills
cm.teachSkill(1210000,20,20); //Improving MP recovery
cm.teachSkill(1210001,20,20); //Shield Mastery
cm.teachSkill(1211002,30,30); //Charged Blow
cm.teachSkill(1211003,30,30); //Fire Charge- Sword
cm.teachSkill(1211004,30,30); //Fire Charge- BW
cm.teachSkill(1211005,30,30); //Ice Charge- Sword
cm.teachSkill(1211006,30,30); //Blizzard Charge- BW
cm.teachSkill(1211007,30,30); //Thunder Charge- Sword
cm.teachSkill(1211008,30,30); //Lightning Charge- BW
cm.teachSkill(1211009,20,20); //Magic Crash
cm.teachSkill(1211010,10,10); //HP Recovery
//End of White Knight Skills
//Start Paladin Skills
cm.teachSkill(1221000,30,30); //Maple Warrior
cm.teachSkill(1221001,30,30); //Monster Magnet
cm.teachSkill(1221002,30,30); // Power Stance
cm.teachSkill(1221003,20,20); //Holy Charge
cm.teachSkill(1221004,20,20); //Divine Charge
cm.teachSkill(1220005,30,30); //Achilles
cm.teachSkill(1220006,30,30); //Guardian
cm.teachSkill(1221007,30,30); //Rush
cm.teachSkill(1221009,30,30); //Blast
cm.teachSkill(1220010,10,10); //Advanced Charge
cm.teachSkill(1221011,30,30); //Sanctuary
cm.teachSkill(1221012,5,5); //Hero's Will
cm.teachSkill(1220013,10,10); //Divine Shield
//End of Paladin Skills

//Start of Spearman Skills
cm.teachSkill(1300000,20,20); //Spear Mastery
cm.teachSkill(1300001,20,20); //Pole Arm Mastery
cm.teachSkill(1300002,30,30); //Final Attack - Spear
cm.teachSkill(1300003,30,30); //Final Attack - Pole Arm
cm.teachSkill(1301004,20,20); //Spear Booster
cm.teachSkill(1301005,20,20); //Pole Arm Booster
cm.teachSkill(1301006,20,20); //Iron Will
cm.teachSkill(1301007,30,30); //Hyper Body
cm.teachSkill(1301008,10,10); // Ground Smash
cm.teachSkill(1300009,10,10); //Physical Training
cm.teachSkill(1301010,10,10); //Slipstream
//End of Spearman Skills
//Start of Dragon Knight Skills
cm.teachSkill(1310000,20,20); //Elemental Resistance
cm.teachSkill(1311001,30,30); //Spear Crusher
cm.teachSkill(1311002,30,30); //Pole Arm Crusher
cm.teachSkill(1311003,30,30); //Dragon Fury- Spear
cm.teachSkill(1311004,30,30); //Dragon Fury- Pole Arm
cm.teachSkill(1311005,30,30); //Sacrifice
cm.teachSkill(1311006,30,30); //Dragon Roar
cm.teachSkill(1311007,20,20); //Power Crash
cm.teachSkill(1311008,20,20); //Dragon Blood
cm.teachSkill(1310009,10,10); //Dragon Wisdom
//End of Dragon Knight Skills
//Start of Dark Knight Skills
cm.teachSkill(1321000,30,30); //Maple Warrior
cm.teachSkill(1321001,30,30); //Monster Magnet
cm.teachSkill(1321002,30,30); //Power Stance
cm.teachSkill(1321003,30,30); //Rush
cm.teachSkill(1320005,30,30); //Achilles
cm.teachSkill(1320006,30,30); //Berserk
cm.teachSkill(1321007,10,10); //Beholder
cm.teachSkill(1320008,25,25); //Beholder's Healing
cm.teachSkill(1320009,25,25); //Beholder's Buff
cm.teachSkill(1321010,5,5); //Hero's Will
cm.teachSkill(1320011,10,10); //Revenge of the Beholden
cm.teachSkill(1321012,10,10); //Dark Impale
//End of Dark Knight Skills

//End of Swordsman Skills
        cm.sendOk("Your skills are maxed! Happy Mapling!");
        cm.dispose();
        } else if (cm.getChar().getJob() >= 200 && cm.getChar().getJob() <= 232){
//start of beginner skills
cm.teachSkill(1000,3,3); //Three Snails
cm.teachSkill(1001,3,3); //Recovery
cm.teachSkill(1002,3,3); //Nimble Feet
cm.teachSkill(1004,1,1); //Monster Ride
//end of beginner skills

//Start of Magician Skills
cm.teachSkill(2000000,16,16); //Improving MP recovery
cm.teachSkill(2000001,10,10); //Improving Max MP Increase
cm.teachSkill(2001002,20,20); //Magic Guard
cm.teachSkill(2001003,20,20); //Magic Armor
cm.teachSkill(2001004,20,20); //Energy Bolt
cm.teachSkill(2001005,20,20); //Magic Claw
cm.teachSkill(2000006,10,10); //MP Boost
cm.teachSkill(12000005,10,10); //MP Boost

//Start of FP Wizard Skills
cm.teachSkill(2100000,20,20); //MP Eater
cm.teachSkill(2101001,20,20); //Meditation
cm.teachSkill(2101002,20,20); //Teleport
cm.teachSkill(2101003,20,20); //Slow
cm.teachSkill(2101004,30,30); //Fire Arrow
cm.teachSkill(2101005,30,30); //Poison Breath

//End of FP Wizard Skills

//Start of FP Mage Skills
cm.teachSkill(2110000,20,20); //Partial Resistance
cm.teachSkill(2110001,30,30); //Element Amplification
cm.teachSkill(2111002,30,30); //Explosion
cm.teachSkill(2111003,30,30); //Poison Mist
cm.teachSkill(2111004,20,20); //Seal
cm.teachSkill(2111005,20,20); //Spell Booster
cm.teachSkill(2111006,30,30); //Element Composition
cm.teachSkill(2111007,10,10); //Teleport Mastery
cm.teachSkill(2111008,10,10); //Elemental Decrease
cm.teachSkill(2110009,20,20); //Arcane Overdrive
//End of FP Mage Skills
//Start of FP Arch Mage Skills
cm.teachSkill(2121000,30,30); //Maple Warrior
cm.teachSkill(2121001,30,30); //Big Bang
cm.teachSkill(2121002,30,30); //Mana Reflection
cm.teachSkill(2121003,30,30); //Fire Demon
cm.teachSkill(2121004,30,30); //Infinity
cm.teachSkill(2121005,30,30); //Ifrit
cm.teachSkill(2121006,30,30); //Paralyze
cm.teachSkill(2121007,30,30); //Meteor Shower
cm.teachSkill(2121008,5,5); //Hero's Will
cm.teachSkill(2121009,10,10); //Buff Mastery
cm.teachSkill(2120010,10,10); //Arcane Aim

//End of FP Arch Mage Skills

//Start of IL Wizard Skills
cm.teachSkill(2200000,20,20); //MP Eater
cm.teachSkill(2201001,20,20); //Meditation
cm.teachSkill(2201002,20,20); //Teleport
cm.teachSkill(2201003,20,20); //Slow
cm.teachSkill(2201004,30,30); //Cold Beam
cm.teachSkill(2201005,30,30); //Thunderbolt
cm.teachSkill(2200006,20,20); //Spell Mastery
cm.teachSkill(2200007,10,10); //High Wisdom
//End of IL Wizard Skills

//Start of IL Mage Skills
cm.teachSkill(2210000,20,20); //Partial Resistance
cm.teachSkill(2210001,30,30); //Element Amplification
cm.teachSkill(2211002,30,30); //Ice Strike
cm.teachSkill(2211003,30,30); //Thunder Spear
cm.teachSkill(2211004,20,20); //Seal
cm.teachSkill(2211005,20,20); //Spell Booster
cm.teachSkill(2211006,30,30); //Element Composition
cm.teachSkill(2211007,10,10); //Teleport Mastery
cm.teachSkill(2211008,10,10); //Elemental Decrease
cm.teachSkill(2211009,20,20); //Arcane Overdrive

//End of IL Mage Skills
//Start of IL Arch Mage Skills
cm.teachSkill(2221000,30,30); //Maple Warrior
cm.teachSkill(2221001,30,30); //Big Bang
cm.teachSkill(2221002,30,30); //Mana Reflection
cm.teachSkill(2221003,30,30); //Ice Demon
cm.teachSkill(2221004,30,30); //Infinity
cm.teachSkill(2221005,30,30); //Elquines
cm.teachSkill(2221006,30,30); //Chain Lightning
cm.teachSkill(2221007,30,30); //Blizzard
cm.teachSkill(2221008,5,5); //Hero's Will
cm.teachSkill(2220010,10,10); //Arcane Aim
cm.teachSkill(2221009,10,10); //Buff Mastery
//End of IL Arch Mage Skills

//Start of Cleric Skills
cm.teachSkill(2300000,20,20); //MP Eater
cm.teachSkill(2301001,20,20); //Teleport
cm.teachSkill(2301002,30,30); //Heal
cm.teachSkill(2301003,20,20); //Invincible
cm.teachSkill(2301004,20,20); //Bless
cm.teachSkill(2301005,30,30); //Holy Arrow
cm.teachSkill(2300006,20,20); //Spell Mastery
cm.teachSkill(2300007,10,10); //High Wisdom
//End of Cleric Skills
//Start of Priest Skills
cm.teachSkill(2310000,20,20); //Elemental Resistance
cm.teachSkill(2311001,20,20); //Dispel
cm.teachSkill(2311002,20,20); //Mystic Door
cm.teachSkill(2311003,30,30); //Holy Symbol
cm.teachSkill(2311004,30,30); //Shining Ray
cm.teachSkill(2311005,30,30); //Doom
cm.teachSkill(2311006,30,30); //Summon Dragon
cm.teachSkill(2311007,10,10); //Teleport Mastery
cm.teachSkill(2311009,20,20); //Holy Magic Shell
cm.teachSkill(2311010,20,20); //Arcane overdrive
cm.teachSkill(2310008,20,20); //Holy Focus
cm.teachSkill(2310010,20,20); //Arcane Overdrive
//End of Priest Skills
//Start of Bishop Skills
cm.teachSkill(2321000,30,30); //Maple Warrior
cm.teachSkill(2321001,30,30); //Big Bang
cm.teachSkill(2321002,30,30); //Mana Reflection
cm.teachSkill(2321003,30,30); //Bahamut
cm.teachSkill(2321004,30,30); //Infinity
cm.teachSkill(2321005,30,30); //Holy Shield
cm.teachSkill(2321006,10,10); //Resurrection
cm.teachSkill(2321007,30,30); //Angel's Ray
cm.teachSkill(2321008,30,30); //Genesis
cm.teachSkill(2321009,5,5); //Hero's Will
cm.teachSkill(2321010,10,10); //Buff Mastery
cm.teachSkill(2320011,10,10); //Arcane Aim
//End of Bishop Skills
        cm.sendOk("Your skills are maxed! Happy Mapling!");
        cm.dispose();
//End of Magician Skills//
        } else if (cm.getChar().getJob() >= 300 && cm.getChar().getJob() <= 322){
//start of beginner skills
cm.teachSkill(1000,3,3); //Three Snails
cm.teachSkill(1001,3,3); //Recovery
cm.teachSkill(1002,3,3); //Nimble Feet
cm.teachSkill(1004,1,1); //Monster Ride
//end of beginner skills

//Start of Archer Skills
cm.teachSkill(3000000,16,16); //The Blessing of Amazon
cm.teachSkill(3000001,20,20); //Critical Shot
cm.teachSkill(3000002,15,15); //Archer mastery
cm.teachSkill(3001003,20,20); //Focus
cm.teachSkill(3001004,20,20); //Arrow Blow
cm.teachSkill(3001005,20,20); //Double Shot
//Start of Hunter Skills
cm.teachSkill(3100000,20,20); //Bow Mastery - Bow
cm.teachSkill(3100001,30,30); //Final Attack - Bow
cm.teachSkill(3101002,20,20); //Bow Booster - Bow
cm.teachSkill(3101003,20,20); //Power Knock-Back - Crossbow
cm.teachSkill(3101004,20,20); //Soul Arrow - Bow
cm.teachSkill(3101005,30,30); //Arrow Bomb - Bow
cm.teachSkill(3100006,10,10); //Physical Training
cm.teachSkill(3101007,15,15); //Silver Hawk
//End of Hunter Skills
//Start of Ranger Skills
cm.teachSkill(3110000,20,20); //Thrust - Bow
cm.teachSkill(3110001,20,20); //Mortal Blow - Bow
cm.teachSkill(3111002,20,20); //Puppet - Bow
cm.teachSkill(3111003,30,30); //Inferno - Bow
cm.teachSkill(3111004,30,30); //Arrow Rain - Bow
cm.teachSkill(3111006,30,30); //Strafe - Bow
cm.teachSkill(3111000,20,20); //Concentrate
cm.teachSkill(3110007,15,15); //Evasion Boost
cm.teachSkill(3111008,20,20); //Drain Arrow

//End of Ranger Skills
//Start of Bowmaster Skills
cm.teachSkill(3121000,30,30); //Maple Warrior - Bow
cm.teachSkill(3121002,30,30); //Sharp Eyes - Bow
cm.teachSkill(3121003,30,30); //Dragon Breath - Bow
cm.teachSkill(3121004,30,30); //Hurricane - Bow
cm.teachSkill(3120005,30,30); //Bow Expert - Bow
cm.teachSkill(3121006,30,30); //Phoenix - Bow
cm.teachSkill(3121007,30,30); //Hamstring - Bow
cm.teachSkill(3121009,5,5); //Hero's Will - Bow
cm.teachSkill(3120008,10,10); //Advanced Final Attack
cm.teachSkill(3120010,10,10); //Broiler Shot
cm.teachSkill(3120011,10,10); //Marksmanship
cm.teachSkill(3120012,15,15); //Elite Puppet
cm.teachSkill(3120006,10,10); //Spirit Link:Phoenix
//End of Bowmaster Skills


//Start of Crossbow Man Skills
cm.teachSkill(3200000,20,20); //Crossbow Mastery - Crossbow
cm.teachSkill(3200001,30,30); //Final Attack - Crossbow
cm.teachSkill(3201002,20,20); //Crossbow Booster - Crossbow
cm.teachSkill(3201003,20,20); //Power Knock-Back - Crossbow
cm.teachSkill(3201004,20,20); //Soul Arrow - Crossbow
cm.teachSkill(3201005,30,30); //Iron Arrow - Crossbow
cm.teachSkill(3200006,10,10); //Physical Training - Crossbow
//End of Crossbow Man Skills
//Start of Sniper Skills
cm.teachSkill(3210000,20,20); //Thrust - Crossbow
cm.teachSkill(3210001,20,20); //Mortal Blow - Crossbow
cm.teachSkill(3211002,20,20); //Puppet - Crossbow
cm.teachSkill(3211003,30,30); //Blizzard - Crossbow
cm.teachSkill(3211004,30,30); //Arrow Eruption - Crossbow
cm.teachSkill(3201007,30,30); //Golden Eagle - Crossbow
cm.teachSkill(3211006,30,30); //Strafe - Crossbow
cm.teachSkill(3210007,15,15); //Evasion Boost - Crossbow
cm.teachSkill(3211008,20,20); //Dragon Breath - Crossbow
cm.teachSkill(3211000,20,20); //Concentrate - Crossbow
//End of Sniper Skills
//Start of Marksman Skills
cm.teachSkill(3221000,30,30); //Maple Warrior - Crossbow
cm.teachSkill(3221001,30,30); //Piercing - Crossbow
cm.teachSkill(3221002,30,30); //Sharp Eyes - Crossbow
cm.teachSkill(3220004,30,30); //Crossbow Expertness - Crossbow
cm.teachSkill(3221005,30,30); //Freezer - Crossbow
cm.teachSkill(3221006,30,30); //Blind - Crossbow
cm.teachSkill(3221007,30,30); //Sniping - Crossbow
cm.teachSkill(3221008,5,5); //Hero's Will - Crossbow
cm.teachSkill(3220010,30,30); //Ultimate Strafe - Crossbow
cm.teachSkill(3220005,10,10); //Spirit Link - Frostprey
cm.teachSkill(3220009,10,10); //Marksmanship - Crossbow
cm.teachSkill(3220012,15,15); //Elite Puppet
//End of Marksman Skills
//End of Archer Skills
        cm.sendOk("Your skills are maxed! Happy Mapling!");
        cm.dispose();
        } else if (cm.getChar().getJob() >= 400 && cm.getChar().getJob() <= 422){
//start of beginner skills
cm.teachSkill(1000,3,3); //Three Snails
cm.teachSkill(1001,3,3); //Recovery
cm.teachSkill(1002,3,3); //Nimble Feet
cm.teachSkill(1004,1,1); //Monster Ride
//end of beginner skills

//Start of Thief Skills
cm.teachSkill(4000000,20,20); //Nimble Body
cm.teachSkill(4000001,8,8); //Keen Eyes
cm.teachSkill(4001002,20,20); //Disorder
cm.teachSkill(4001003,20,20); //Dark Sight
cm.teachSkill(4001334,20,20); //Double Stab
cm.teachSkill(4001344,20,20); //Lucky Seven
cm.teachSkill(4001005,20,20); //Haste

//Start of Assassin Skills
cm.teachSkill(4100000,20,20); //Claw Mastery
cm.teachSkill(4100001,30,30); //Critical Throw
cm.teachSkill(4100002,20,20); //Endure
cm.teachSkill(4101003,20,20); //Claw Booster
cm.teachSkill(4101005,30,30); //Drain
cm.teachSkill(4100007,10,10); //Physical Training
cm.teachSkill(4101008,20,20); //Shuriken Burst
cm.teachSkill(4101009,10,10); //Flash Jump
cm.teachSkill(4101010,20,20); //Gust Charm
//End of Assassin Skills
//Start of Hermit Skills
cm.teachSkill(4111002,30,30); //Shadow Partner
cm.teachSkill(4111003,20,20); //Shadow Web
cm.teachSkill(4111007,20,20); //Dark Flare
cm.teachSkill(4110008,20,20); //Enveloping Darkness
cm.teachSkill(4111009,10,10); //Shadow Starts
cm.teachSkill(4111010,20,20); //Triple Throw
cm.teachSkill(4110011,20,20); //Venom
cm.teachSkill(4110012,10,10); //Expert Throwing Star handling
cm.teachSkill(4111013,20,20); //Shade Splitter
cm.teachSkill(4110014,10,10); //Alchemic Adrenaline
//End of Hermit Skills
//Start of Night Lord Skills
cm.teachSkill(4121000,30,30); //Maple Warrior
cm.teachSkill(4120002,30,30); //Shadow Shifter
cm.teachSkill(4121003,30,30); //Taunt
cm.teachSkill(4121004,30,30); //Ninja Ambush
cm.teachSkill(4120011,10,10); //Toxic Venom
cm.teachSkill(4120005,30,30); //Venomous Star
cm.teachSkill(4121006,30,30); //Spirit Claw
cm.teachSkill(4121008,30,30); //Ninja Storm
cm.teachSkill(4121009,5,5); //Hero's Will
cm.teachSkill(4120012,10,10); //Claw Expert
cm.teachSkill(4121013,10,10); //Quad Star
cm.teachSkill(4121014,10,10); //Dark Harmony
cm.teachSkill(4121015,10,10); //Frailty Curse
cm.teachSkill(4121016,10,10); //Sudden Raid
//End of Night Lord Skills


//Start of Bandit Skills
cm.teachSkill(4200000,20,20); //Dagger Mastery
cm.teachSkill(4200001,20,20); //Endure
cm.teachSkill(4201002,20,20); //Dagger Booster
cm.teachSkill(4201003,20,20); //Haste
cm.teachSkill(4201004,30,30); //Steal
cm.teachSkill(4201005,30,30); //Savage Blow
cm.teachSkill(4200007,10,10); //Physical Training
cm.teachSkill(4201008,10,10); //Flash Jump
cm.teachSkill(4201009,20,20); //chanel Karma
cm.teachSkill(4200010,10,10); //Shield Mastery
cm.teachSkill(4201011,10,10); //Meso Guard
//End of Bandit Skills
//Start of Chief Bandit Skills
cm.teachSkill(4210000,20,20); //Shield Mastery
cm.teachSkill(4211001,30,30); //Chakra
cm.teachSkill(4211002,30,30); //Assaulter
cm.teachSkill(4211003,20,20); //Pickpocket
cm.teachSkill(4211004,30,30); //Band of Thieves
cm.teachSkill(4211005,20,20); //Meso Guard
cm.teachSkill(4211006,30,30); //Meso Explosion
cm.teachSkill(4211007,20,20); //Dark Flare
cm.teachSkill(4211008,20,20); //Shadow Partner
cm.teachSkill(4210010,20,20); //Venom
cm.teachSkill(4211011,20,20); //Midnight Carnival
cm.teachSkill(4210012,10,10); //Meso Mastery
cm.teachSkill(4210013,20,20); //Enveloping Darkness

//End of Chief Bandit Skills
//Start of Shadower Skills
cm.teachSkill(4221000,30,30); //Maple Warrior
cm.teachSkill(4220002,30,30); //Shadow Shifter
cm.teachSkill(4221003,30,30); //Taunt
cm.teachSkill(4221004,30,30); //Ninja Ambush
cm.teachSkill(4220005,30,30); //Venomous Stab
cm.teachSkill(4221006,30,30); //Smokescreen
cm.teachSkill(4221007,30,30); //Boomerang Step
cm.teachSkill(4221001,30,30); //Assassinate
cm.teachSkill(4221008,5,5); //Hero's Will
cm.teachSkill(4220011,10,10); //Toxic Venom
cm.teachSkill(4221010,10,10); //Sudden Raid
cm.teachSkill(4220012,10,10); //Dagger Expert
cm.teachSkill(4221013,10,10); //Shadower Instinct
//End of Shadower Skills
//End of Thief Skills
        cm.sendOk("Your skills are maxed! Happy Mapling!");
        cm.dispose();
        } else if (cm.getChar().getJob() >= 500 && cm.getChar().getJob() <= 522){
//start of beginner skills
cm.teachSkill(1000,3,3); //Three Snails
cm.teachSkill(1001,3,3); //Recovery
cm.teachSkill(1002,3,3); //Nimble Feet
cm.teachSkill(1004,1,1); //Monster Ride
//end of beginner skills

//Start of Pirate Skills
cm.teachSkill(5000000,20,20); //Bullet Time
cm.teachSkill(5001001,20,20); //Flash Fist
cm.teachSkill(5001002,20,20); //Sommersault Kick
cm.teachSkill(5001003,20,20); //Double Shot
cm.teachSkill(5001005,10,10); //Dash
cm.teachSkill(5000007,10,10); //Shadow Heart
//End of Pirate Skills


//Start of Gunslinger Skills
cm.teachSkill(5200000,20,20); //Gun Mastery
cm.teachSkill(5201001,20,20); //Invisible Shot
cm.teachSkill(5201002,20,20); //Grenade
cm.teachSkill(5201003,20,20); //Gun Booster
cm.teachSkill(5201004,20,20); //Blank Shot
cm.teachSkill(5201005,10,10); //Wings
cm.teachSkill(5201006,20,20); //Recoil Shot
cm.teachSkill(5201008,10,10); //Infinity Blast
cm.teachSkill(5200009,10,10); //Physical Training
cm.teachSkill(5200010,20,20); //Triple Fire
cm.teachSkill(5201011,5,5); //Wings
//End of Gunslinger Skills
//Start of Outlaw Skills
cm.teachSkill(5211007,20,20); // Roll of the Dice
cm.teachSkill(5211008,20,20); //Blunderbuster
cm.teachSkill(5211009,20,20); //Cross Cut Blast
cm.teachSkill(5211010,20,20); // Blackboot Bill
cm.teachSkill(5211011,20,20); // All Aboard
cm.teachSkill(5210012,20,20); //Outlaw's Code
cm.teachSkill(5210013,20,20); //Fullmetal Jacket
cm.teachSkill(5211014,20,20); //Octo-Cannon
//End of Outlaw Skills
//Start of Crosair Skills
cm.teachSkill(5220001,30,30); //Elemental Boost
cm.teachSkill(5220002,20,20); //Wrath of the Octopi
cm.teachSkill(5220011,20,20); //Bullseye
cm.teachSkill(5221000,30,30); //Maple Warrior
cm.teachSkill(5221003,30,30); //Aerial Strike
cm.teachSkill(5221004,30,30); //Rapid Fire
cm.teachSkill(5221006,10,10); //Battleship
cm.teachSkill(5221007,30,30); //Battleship Cannon
cm.teachSkill(5221008,30,30); //Battleship Torpedo
cm.teachSkill(5221009,20,20); //Hypnotize
cm.teachSkill(5221010,5,5); //Speed Infusion
cm.teachSkill(5220012,10,10); //Pirate's Revenge
cm.teachSkill(5221013,10,10); //Nautilus Strike
cm.teachSkill(5220014,5,5); //Double down
cm.teachSkill(5221015,10,10); //Parrotargetting
cm.teachSkill(5221016,10,10); //Brain Scrambler
cm.teachSkill(5221017,10,10); //Eigt-Legs-Easton
cm.teachSkill(5221018,10,10); //Jolly Roger
cm.teachSkill(5220019,10,10); //Ahoy Mateys
cm.teachSkill(5220020,10,10); //Majestic Presence
//End of Crosair Skills


//Start of Brawler Skills
cm.teachSkill(5100000,10,10); //Improve MaxHP
cm.teachSkill(5100001,20,20); //Knuckler Mastery
cm.teachSkill(5101002,20,20); //Backspin Blow
cm.teachSkill(5101003,20,20); //Double Uppercut
cm.teachSkill(5101004,20,20); //Corkscrew Blow
cm.teachSkill(5101005,10,10); //MP Recovery
cm.teachSkill(5101006,20,20); //Knuckler Booster
cm.teachSkill(5101007,10,10); //Oak Barrel
cm.teachSkill(5100009,10,10); //HP Boost
cm.teachSkill(5100010,10,10); //Physical Training
cm.teachSkill(5101011,20,20); //Dark Clarity
cm.teachSkill(5101012,20,20); //Tornado Uppercut
cm.teachSkill(5100013,10,10); //Perseverance
//End of Brawler Skills
//Start of Marauder Skills
cm.teachSkill(5110000,20,20); //Stun Mastery
cm.teachSkill(5110001,40,40); //Energy Charge
cm.teachSkill(5111002,30,30); //Energy Blast
cm.teachSkill(5111007,20,20); //Roll of the Dice
cm.teachSkill(5111009,20,20); //Spiral Assault
cm.teachSkill(5111010,20,20); //Admiral's Wings
cm.teachSkill(5110011,20,20); //Precision Strikes
cm.teachSkill(5111012,20,20); //Landlubber Blast
//End of Marauder Skills
//Start of Buccaneer Skills
cm.teachSkill(5121000,30,30); //Maple Warrior
cm.teachSkill(5121001,30,30); //Dragon Strike
cm.teachSkill(5121002,30,30); //Energy Orb
cm.teachSkill(5121003,20,20); //Super Transformation
cm.teachSkill(5121004,30,30); //Demolition
cm.teachSkill(5121005,30,30); //Snatch
cm.teachSkill(5121007,30,30); //Octupunch
cm.teachSkill(5121008,5,5); //Pirate's Rage
cm.teachSkill(5121009,20,20); //Speed Infusion
cm.teachSkill(5121010,30,30); //Time Leap
cm.teachSkill(5120011,10,10); //Pirate's Revenge
cm.teachSkill(5120012,5,5); //Double Down
cm.teachSkill(5121013,10,10); //Nautilus Strike
cm.teachSkill(5120014,10,10); //Typhoon Crush
cm.teachSkill(5121015,10,10); //Crossbones
cm.teachSkill(5121016,10,10); //Buccaneer Blast
//End of Buccaneer Skills

//End of Pirate Skills

//End of Explorer skills
        cm.sendOk("Your skills are maxed! Happy Mapling!");
        cm.dispose();
        } else if (cm.getChar().getJob() >= 1100 && cm.getChar().getJob() <= 1112){
//Start of Noblesse Skills
cm.teachSkill(10001001,3,3); //Recovery
cm.teachSkill(10001002,3,3); //Nimble Feet
cm.teachSkill(10001000,3,3); //Three Snails
cm.teachSkill(10001004,1,1); //Monster Rider
cm.teachSkill(10001005,1,1); //Echo of hero
//End of Noblesse Skills

//Start of Dawn Warrior Skills
//Job1
cm.teachSkill(11000000,10,10); // Improving MaxHP Increase
cm.teachSkill(11001001,10,10); // Iron Body
cm.teachSkill(11001002,20,20); // Power Strike
cm.teachSkill(11001003,20,20); // Slash Blast
cm.teachSkill(11001004,20,20); // Soul
cm.teachSkill(11000005,10,10); // HP Boost
//Job2
cm.teachSkill(11100000,20,20); // Sword Mastery
cm.teachSkill(11101001,20,20); // Sword Booster
cm.teachSkill(11101002,30,30); // Final Attack
cm.teachSkill(11101003,20,20); // Rage
cm.teachSkill(11101004,30,30); // Soul Blade
cm.teachSkill(11101005,10,10); // Soul Rush
cm.teachSkill(11101006,20,20); // Power Reflection
cm.teachSkill(11100007,10,10); // Physical Training
//Job3
cm.teachSkill(11110000,20,20); // Improving MP Recovery
cm.teachSkill(11111001,20,20); // Combo Attack
cm.teachSkill(11111002,20,20); // Sword- Panic
cm.teachSkill(11111003,20,20); // Sword- Coma
cm.teachSkill(11111004,30,30); // Brandish
cm.teachSkill(11110005,20,20); // Advance Combo
cm.teachSkill(11111006,30,30); // Soul Blow
cm.teachSkill(11111007,20,20); // Soul Charge
//End of Dawn Warrior Skills
        cm.sendOk("Your skills are maxed! Happy Mapling!");
        cm.dispose();
        } else if (cm.getChar().getJob() >= 1200 && cm.getChar().getJob() <= 1212){
//Start of Noblesse Skills
cm.teachSkill(10001001,3,3); //Recovery
cm.teachSkill(10001002,3,3); //Nimble Feet
cm.teachSkill(10001000,3,3); //Three Snails
cm.teachSkill(10001004,1,1); //Monster Rider
cm.teachSkill(10001005,1,1); //Echo of hero
//End of Noblesse Skills

//Start of Blaze Wizard Skills
//Job1
cm.teachSkill(12000000,10,10); // Improving Max MP Increase
cm.teachSkill(12001001,15,15); // Magic Guard
cm.teachSkill(12001002,15,15); // Magic Armor
cm.teachSkill(12001003,20,20); // Magic Claw
cm.teachSkill(12001004,20,20); // Sprite Summon
//Job2
cm.teachSkill(12101000,20,20); // Meditation
cm.teachSkill(12101001,20,20); // Slow
cm.teachSkill(12101002,20,20); // Fire Arrow
cm.teachSkill(12101003,20,20); // Teleport
cm.teachSkill(12101004,20,20); // Magic Booster
cm.teachSkill(12101005,20,20); // Elemental Reset
cm.teachSkill(12101006,20,20); // Fire Pillar
cm.teachSkill(12100007,20,20); // Spell Mastery
cm.teachSkill(12100008,10,10); // High Wisdom
//Job3
cm.teachSkill(12110000,20,20); // Element Amplification
cm.teachSkill(12110001,20,20); // Elemental Resistance
cm.teachSkill(12111002,20,20); // Seal
cm.teachSkill(12111003,20,20); // Meteor Shower
cm.teachSkill(12111004,20,20); // Ifrit
cm.teachSkill(12111005,30,30); // Flame Gear
cm.teachSkill(12111006,30,30); // Fire Strike
//End of Blaze Wizard Skills
        cm.sendOk("Your skills are maxed! Happy Mapling!");
        cm.dispose();
        } else if (cm.getChar().getJob() >= 1300 && cm.getChar().getJob() <= 1312){
//Start of Cygnus knight skills

//Start of Noblesse Skills
cm.teachSkill(10001001,3,3); //Recovery
cm.teachSkill(10001002,3,3); //Nimble Feet
cm.teachSkill(10001000,3,3); //Three Snails
cm.teachSkill(10001004,1,1); //Monster Rider
cm.teachSkill(10001005,1,1); //Echo of hero
//End of Noblesse Skills

//Start of Wind Breaker skills
cm.teachSkill(13000001,8,8); // The Eye of Amazon 
cm.teachSkill(13001002,10,10); // Focus 
cm.teachSkill(13001003,20,20); // Double Shot 
cm.teachSkill(13000000,20,20); // Critical Shot 
cm.teachSkill(13001004,20,20); // Sprite Summon 
//job2
cm.teachSkill(13100000,20,20); // Bow Mastery 
cm.teachSkill(13101001,20,20); // Bow Booster 
cm.teachSkill(13101002,30,30); // Final Attack 
cm.teachSkill(13101003,20,20); // Soul Arrow 
cm.teachSkill(13101005,20,20); // Storm Breath 
cm.teachSkill(13101006,10,10); // Wind Walk 
cm.teachSkill(13101004,10,10); // Double Jump
cm.teachSkill(13000001,15,15); //Archery Mastery
//Job3
cm.teachSkill(13111000,20,20); // Arrow Rain 
cm.teachSkill(13101007,30,30); // Strafe
cm.teachSkill(13110003,20,20); // Bow Expert 
cm.teachSkill(13111002,30,30); // Hurricane 
cm.teachSkill(13111004,20,20); // Puppet 
cm.teachSkill(13111005,10,10); // Eagle Eye 
cm.teachSkill(13111006,20,20); // Wind Piercing 
cm.teachSkill(13111007,20,20); // Wind Shot 
cm.teachSkill(13100008,10,10); // Physical Training
cm.teachSkill(13110008,10,10); // Evasion Boost
//End of Wind Breaker Skills
        cm.sendOk("Your skills are maxed! Happy Mapling!");
        cm.dispose();
        } else if (cm.getChar().getJob() >= 1400 && cm.getChar().getJob() <= 1412){
//Start of Noblesse Skills
cm.teachSkill(10001001,3,3); //Recovery
cm.teachSkill(10001002,3,3); //Nimble Feet
cm.teachSkill(10001000,3,3); //Three Snails
cm.teachSkill(10001004,1,1); //Monster Rider
cm.teachSkill(10001005,1,1); //Echo of hero
//End of Noblesse Skills

//Start of Night Walker Skills
//Job1
cm.teachSkill(14000000,10,10); // Nimble Body
cm.teachSkill(14000001,8,8); // Keen Eyes
cm.teachSkill(14001002,10,10); // Disorder
cm.teachSkill(14001003,10,10); // Dark Sight
cm.teachSkill(14001004,20,20); // Lucky Seven
cm.teachSkill(14001005,20,20); // Darkness
cm.teachSkill(14001007,20,20); // Haste
//Job2
cm.teachSkill(14100000,20,20); // Claw Mastery
cm.teachSkill(14100001,30,30); // Critical Throw
cm.teachSkill(14101002,20,20); // Claw Booster
cm.teachSkill(14101004,20,20); // Flash Jump
cm.teachSkill(14100005,10,10); // Vanish
cm.teachSkill(14101006,20,20); // Vampire
cm.teachSkill(14100010,10,10); //Phyical Training
cm.teachSkill(14101008,20,20); //Shuriken burst
cm.teachSkill(14101009,20,20); //Gust Charm 
//Job3
cm.teachSkill(14111000,30,30); // Shadow Partner
cm.teachSkill(14111001,20,20); // Shadow Web
cm.teachSkill(14111002,30,30); // Avenger
cm.teachSkill(14110003,20,20); // Alchemist
cm.teachSkill(14110004,20,20); // Venom
cm.teachSkill(14111005,20,20); // Triple Throw
cm.teachSkill(14111006,30,30); // Poison Bomb
cm.teachSkill(14111007,20,20); //Shadow Stars
cm.teachSkill(14111008,20,20); //Shade Splitter
cm.teachSkill(14110009,20,20); //Enveloping Darkness
cm.teachSkill(14110011,20,20); //Alchemic Adrenaline
//End of Night Walker Skills      
        cm.sendOk("Your skills are maxed! Happy Mapling!");
        cm.dispose();
        } else if (cm.getChar().getJob() >= 1500 && cm.getChar().getJob() <= 1512){
//Start of Noblesse Skills
cm.teachSkill(10001001,3,3); //Recovery
cm.teachSkill(10001002,3,3); //Nimble Feet
cm.teachSkill(10001000,3,3); //Three Snails
cm.teachSkill(10001004,1,1); //Monster Rider
cm.teachSkill(10001005,1,1); //Echo of hero
//End of Noblesse Skills

//Start of Thunder Breaker Skills
//Job1
cm.teachSkill(15000000,10,10); // Bullet Time
cm.teachSkill(15001001,20,20); // Flash Fist
cm.teachSkill(15001002,20,20); // Sommersault Kick
cm.teachSkill(15001003,10,10); // Dash
cm.teachSkill(15001004,20,20); // Lightning
cm.teachSkill(15000006,10,10); // Shadow Heart
cm.teachSkill(15000008,10,10); // HP Boost
//Job2
cm.teachSkill(15100000,10,10); // Improve MaxHP
cm.teachSkill(15100001,20,20); // Knuckle Mastery
cm.teachSkill(15100004,20,20); // Energy Charge
cm.teachSkill(15101002,20,20); // Knuckle Booster
cm.teachSkill(15101003,20,20); // Corkscrew Blow
cm.teachSkill(15101005,20,20); // Energy Blast
cm.teachSkill(15101006,20,20); // Lightning Charge
cm.teachSkill(15101008,20,20); // Dark Clarity
cm.teachSkill(15100009,10,10); // Physical Training
cm.teachSkill(15101010,20,20); // Tornado Uppercut
//Job3
cm.teachSkill(15110000,20,20); // Critical Punch
cm.teachSkill(15111001,20,20); // Energy Drain
cm.teachSkill(15111002,10,10); // Transformation
cm.teachSkill(15111003,20,20); // Shockwave
cm.teachSkill(15111004,20,20); // Octopunch
cm.teachSkill(15111005,20,20); // Speed Infusion
cm.teachSkill(15111006,20,20); // Spark
cm.teachSkill(15111007,30,30); // Shark Wave
cm.teachSkill(15111008,20,20); // Buccaneer Blast
cm.teachSkill(15110009,20,20); // Precision Strikes
cm.teachSkill(15110010,20,20); // Opportunistic Fighter
cm.teachSkill(15111012,20,20); // Landlubber Blast

//End of Thunder Breaker Skills

//End of Cygnus Knight skills
        cm.sendOk("Your skills are maxed! Happy Mapling!");
        cm.dispose();
        } else if (cm.getChar().getJob() >= 2000 && cm.getChar().getJob() <= 2112){

//Start of Legend Skills
cm.teachSkill(20001001,3,3); //Recovery
cm.teachSkill(20001002,3,3); //Nimble Feet
cm.teachSkill(20001000,3,3); //Three Snails
cm.teachSkill(20001004,1,1); //Monster Rider
//End of Legend Skills

//Start of Aran Skills
cm.teachSkill(21000000,10,10); //Combo Ability
cm.teachSkill(21000002,20,20); //Double Swing
cm.teachSkill(21001003,20,20); //Aran Polearm Booster
cm.teachSkill(21001001,15,15); //Combo Step
cm.teachSkill(21000004,10,10); //Combo Smasg
//Job2
cm.teachSkill(21100000,20,20); //Polearm Mastery
cm.teachSkill(21100001,20,20); //Triple Swing
cm.teachSkill(21100002,30,30); //Final Charge
cm.teachSkill(21101003,10,10); //Body Pressure
cm.teachSkill(21100004,20,20); //Combo Smash
cm.teachSkill(21100005,20,20); //Combo Drain
cm.teachSkill(21101006,10,10); //Snow Charge
cm.teachSkill(21100007,20,20); //Combo Fenrir
cm.teachSkill(21100008,10,10); //Physical Training
cm.teachSkill(21100010,20,20); //Final Attack
//Job3
cm.teachSkill(21110000,20,20); //Combo Critical
cm.teachSkill(21110003,30,30); //Final Toss
cm.teachSkill(21110004,30,30); //Combo Peril
cm.teachSkill(21110006,20,20); //Rolling Spin
cm.teachSkill(21110002,20,20); //Full Swing
cm.teachSkill(21111001,20,20); //Might
cm.teachSkill(21111009,20,20); //Combo Recharge
cm.teachSkill(21110010,10,10); //Cleaving Blows
cm.teachSkill(21110011,20,20); //Combo Judgement
cm.teachSkill(21111012,10,10); //Maha Blessing
//job4
cm.teachSkill(21120001,30,30); //High Mastery
cm.teachSkill(21120004,30,30); //High Defence
cm.teachSkill(21120005,30,30); //Final Blow
cm.teachSkill(21120006,30,30); //Combo Tempest
cm.teachSkill(21120007,30,30); //Combo Barrier
cm.teachSkill(21120002,30,30); //Over Swing
cm.teachSkill(21121000,30,30); //Aran Maple Warrior
cm.teachSkill(21121003,30,30); //Freeze Standing
cm.teachSkill(21121008,5,5); //Heros Will
cm.teachSkill(21120011,10,10); //Sudden Strike
cm.teachSkill(21120012,10,10); //Advanced Final Attack
//End of Aran Skills
        cm.sendOk("Your skills are maxed! Happy Mapling!");
        cm.dispose();
        } else if (cm.getChar().getJob() >= 2200 && cm.getChar().getJob() <= 2218){
//Start of Beginner Skills
cm.teachSkill(1000,3,3); //Three Snails
cm.teachSkill(1001,3,3); //Recovery
cm.teachSkill(1002,3,3); //Nimble Feet
cm.teachSkill(1004,1,1); //Monster Rider
//End of Beginner Skills

//Start of Evan Skills
//Job 1
cm.teachSkill(22001001,20,20); //Magic Missile
cm.teachSkill(22000000,20,20); //Dragon Soul
//Job 2
cm.teachSkill(22101000,20,20); //Fire Circle
cm.teachSkill(22101001,20,20); //Teleport
//Job 3
cm.teachSkill(22111000,20,20); //Lightning Bolt
cm.teachSkill(22111001,20,20); // Magic Guard
//Job 4
cm.teachSkill(22121000,20,20); //Ice Breath
cm.teachSkill(22120001,10,10); //Spell Mastery
cm.teachSkill(22120002,10,10); //High Wisdom
//Job 5
cm.teachSkill(22131000,20,20); //Magic Flare
cm.teachSkill(22131001,10,10); //Magic Shield
cm.teachSkill(22131002,10,10); //Elemental Decrease
//Job 6
cm.teachSkill(22140000,20,20); //Critical Magic
cm.teachSkill(22141002,20,20); //Magic Booster
cm.teachSkill(22141001,20,20); //Dragon Thrust
cm.teachSkill(22141004,10,10); //Dragon Blink
//Job 7
cm.teachSkill(22150000,15,15); //Magic Amplification
cm.teachSkill(22151001,20,20); //Fire Breath
cm.teachSkill(22151002,10,10); //Killer Wings
cm.teachSkill(22151003,10,10); //Magic Resistance
cm.teachSkill(22150004,10,10); //Dragon Spark
//Job 8
cm.teachSkill(22160000,5,5); //Dragon Fury
cm.teachSkill(22161001,20,20); //Earthquake
cm.teachSkill(22161002,10,10); //Phantom Imprint
cm.teachSkill(22161003,5,5); //Recovery Aura
cm.teachSkill(22161004,15,15); //Onyx Shroud
cm.teachSkill(22161005,10,10); //Teleport Mastery
//Job 9
cm.teachSkill(22171000,10,10); //Maple Warrior
cm.teachSkill(22171002,30,30); //Illusion
//Job 10
cm.teachSkill(22181000,10,10); //Blessing of the Onyx
cm.teachSkill(22181001,10,10); //Blaze
cm.teachSkill(22181004,20,20); //Onyx Will
//End of Evan Skills
        cm.sendOk("Your skills are maxed! Happy Mapling!");
        cm.dispose();
        } else if (cm.getChar().getJob() >= 2400 && cm.getChar().getJob() <= 2412){
//Start of Beginner Skills
cm.teachSkill(1000,3,3); //Three Snails
cm.teachSkill(1001,3,3); //Recovery
cm.teachSkill(1002,3,3); //Nimble Feet
cm.teachSkill(1004,1,1); //Monster Rider
//End of Beginner Skills

//Start of Phantom Skills
//Job 1
cm.teachSkill(24001000,20,20); //Double Entendre
cm.teachSkill(24001001,20,20); //Impeccable Memory I
cm.teachSkill(24001002,15,15); //Phantom Swiftness
cm.teachSkill(24000003,10,10); //Feather Foot
//Job 2
cm.teachSkill(24101000,20,20); //Calling Card
cm.teachSkill(24101001,20,20); //Impeccable Memory II
cm.teachSkill(24101002,20,20); //Mille Cartes
cm.teachSkill(24100003,10,10); //Carte Blanche
cm.teachSkill(24100004,20,20); //Cane Mastery
cm.teachSkill(24101005,20,20); //Cane Booster
cm.teachSkill(24100006,10,10); //Devil's Luck
//Job 3
cm.teachSkill(24111000,20,20); //Blason
cm.teachSkill(24111001,20,20); //Impeccable Memory III
cm.teachSkill(24111002,20,20); //Final Feint
cm.teachSkill(24111003,20,20); //Bad Luck Ward
cm.teachSkill(24110004,20,20); //Mist Mask
cm.teachSkill(24111005,20,20); //Clair de Lune
cm.teachSkill(24111006,20,20); //Rapier Wit
cm.teachSkill(24110007,20,20); //Piercing Vision
//Job 4
cm.teachSkill(24121000,10,10); //Mille Aiguilles
cm.teachSkill(24121001,10,10); //Impeccable Memory IV
cm.teachSkill(24120002,10,10); //Carte Noire
cm.teachSkill(24121003,20,20); //Penombre
cm.teachSkill(24121004.30,30); //Priere D'Aria
cm.teachSkill(24121005,10,10); //Tempest
cm.teachSkill(24120006,10,10); //Cane Expert
cm.teachSkill(24121007,10,10); //Vol D'Ame
cm.teachSkill(24121008,10,10); //Maple Warrior

//End of Phantom Skills
        cm.sendOk("Your skills are maxed! Happy Mapling!");
        cm.dispose();
        } else if (cm.getChar().getJob() >= 5100 && cm.getChar().getJob() <= 5112){
//Start of Beginner Skills
cm.teachSkill(1000,3,3); //Three Snails
cm.teachSkill(1001,3,3); //Recovery
cm.teachSkill(1002,3,3); //Nimble Feet
cm.teachSkill(1004,1,1); //Monster Rider
//End of Beginner Skills

//Start of Mihile Skill

//Job 1
cm.teachSkill(51000001,15,15); //Soul Shield
cm.teachSkill(51001004,20,20); //Soul Blade
cm.teachSkill(51001003,10,10); //Weightless Heart
cm.teachSkill(51000002,10,10); //Soul Devotion
cm.teachSkill(51000000,10,10); //HP Boost
//Job 2
cm.teachSkill(51100001,20,20); //Sword Mastery
cm.teachSkill(51100002,20,20); //Final Attack
cm.teachSkill(51101003,20,20); //Sword Booster
cm.teachSkill(51101004,20,20); //Rage
cm.teachSkill(51101005,20,20); //Soul Driver
cm.teachSkill(51101006,20,20); //Radiant Driver
cm.teachSkill(51100000,10,10); //Physical Training
//Job 3
cm.teachSkill(51111006,20,20); //Trinity Attack
cm.teachSkill(51111007,20,20); //Radiant Buster
cm.teachSkill(51111003,10,10); //Radiant Charge
cm.teachSkill(51111004,20,20); //Enduring Spirit
cm.teachSkill(51111005,20,20); //Magic Crash
cm.teachSkill(51110001,20,20); //Intense Focus
cm.teachSkill(51110002,20,20); //Righteous Indignation
cm.teachSkill(51110000,30,30); //Self Recovery
//Job 4
cm.teachSkill(51120003,20,20); //Soul Asylum
cm.teachSkill(51120001,20,20); //Expert Sword Mastery
cm.teachSkill(51120002,20,20); //Advanced Final Attack
cm.teachSkill(51121007,20,20); //Four-Point Assault
cm.teachSkill(51121006,20,20); //Rolling Soul
cm.teachSkill(51120000,30,30); //Combat Mastery
cm.teachSkill(51121004,20,20); //Stance
cm.teachSkill(51121005,30,30); //Maple Warrior
cm.teachSkill(51121008,20,20); //Radiant Blast
//End of Mihile Skill
        cm.sendOk("Your skills are maxed! Happy Mapling!");
        cm.dispose();
        } else if (cm.getChar().getJob() >= 430 && cm.getChar().getJob() <= 434){
//Start of Beginner Skills
cm.teachSkill(1000,3,3); //Three Snails
cm.teachSkill(1001,3,3); //Recovery
cm.teachSkill(1002,3,3); //Nimble Feet
cm.teachSkill(1004,1,1); //Monster Rider
//End of Beginner Skills

//Start of Dual Blade Skills

//Job 1
cm.teachSkill(4001011,10,10); //Flash Jump
cm.teachSkill(4000012,10,10); //Side Step
cm.teachSkill(4001013,10,10); //Bandit Slash
//job 1+
cm.teachSkill(4300000,20,20); //Katara Mastery
cm.teachSkill(4301003,10,10); //Self Haste
cm.teachSkill(4301004,15,15); //Tornado Spin
//job 2
cm.teachSkill(4311002,20,20); //Fatal Blow
cm.teachSkill(4311003,5,5);   //Slash Storm
cm.teachSkill(4311005,20,20); //Channel Karma
cm.teachSkill(4310006,10,10); //Physical Training
cm.teachSkill(4311009,10,10); //Katara Booster
//job 2+
cm.teachSkill(4321002,5,5);   //Flashbang
cm.teachSkill(4321004,20,20); //Upper Stab
cm.teachSkill(4320005,20,20); //Venom
cm.teachSkill(4321006,5,5);   //Flying Assaulter
//job 3
cm.teachSkill(4331000,20,20); //Bloody Storm
cm.teachSkill(4330001,10,10); //Advanced Dark Site
cm.teachSkill(4331002,10,10); //Mirror Image
cm.teachSkill(4331006,20,20); //Chains of Hell
cm.teachSkill(4330007,10,10); //Life Drain
cm.teachSkill(4330008,20,20); //Enveloping Darkness
cm.teachSkill(4330009,10,10); //Shadow Meld
//job 4
cm.teachSkill(4341000,10,10); //Maple Warrior
cm.teachSkill(4341004,10,10); //Blade Fury
cm.teachSkill(4341006,10,10); //Mirrored Target
cm.teachSkill(4341007,10,10); //Thorns
cm.teachSkill(4340010,10,10); //Sharnpess
cm.teachSkill(4341011,10,10); //Sudden Raid
cm.teachSkill(4340012,10,10); //Toxic Venom
cm.teachSkill(4340013,10,10); //Dual Wield Expert

//End of Dual Blade Skills
        cm.sendOk("Your skills are maxed! Happy Mapling!");
        cm.dispose();
        } else if (cm.getChar().getJob() >= 3500 && cm.getChar().getJob() <= 3512){
//Start of Resistance skills
//Start of Mechanic Skills
//Job 1
cm.teachSkill(35001002,10,10); // Mech:Prototype
cm.teachSkill(35001004,15,15); //Gatling Gun
cm.teachSkill(35001001,20,20); //Flame Launcher
cm.teachSkill(35001003,20,20); //ME-07 Drillhands
//Job 2
cm.teachSkill(35101003,20,20); //Atomic Hammer
cm.teachSkill(35100000,20,20); //Mechanic Mastery
cm.teachSkill(35101006,20,20); //Mechanic Rage
cm.teachSkill(35100008,20,20); //Heavy Weapon Mastery
cm.teachSkill(35101004,10,10); //Rocket Booster
cm.teachSkill(35101005,10,10); //Open Portal GX-9
cm.teachSkill(35101007,20,20); //Perfect Armor
cm.teachSkill(35100011,10,10); //Physical Training
//Job 3
cm.teachSkill(35111015,20,20); //Punch Launcher
cm.teachSkill(35110014,20,20); //Metal Fist Mastery
cm.teachSkill(35111001,20,20); //Satellite
cm.teachSkill(35111004,20,20); //Mech: Siege Mode
cm.teachSkill(35111002,20,20); //Rock 'n Shock
cm.teachSkill(35111011,20,20); //Healing Robot H-LX
cm.teachSkill(35111005,15,15); //Acceleration Bot EX-7
cm.teachSkill(35111013,20,20); //Roll of the Dice
//Job 4
cm.teachSkill(35120000,30,30); //Extreme Mech
cm.teachSkill(35121005,10,10); //Mech: Missle Tank
cm.teachSkill(35121012,10,10); //Laser Blast
cm.teachSkill(35121006,10,10); //Satellite Safety
cm.teachSkill(35121003,10,10); //Giant Robot SG-88
cm.teachSkill(35121009,10,10); //Bots 'n Tots
cm.teachSkill(35121010,10,10); //Amplifier Robot AF-11
cm.teachSkill(35120001,15,15); //Robot Mastery
cm.teachSkill(35121007,10,10); // Maple Warrior
//End of Mechanic Skills
        cm.sendOk("Your skills are maxed! Happy Mapling!");
        cm.dispose();
        } else if (cm.getChar().getJob() >= 3300 && cm.getChar().getJob() <= 3312){
//Start of Wild hunter Skills

//Job 1
cm.teachSkill(33001000,20,20); //Triple Shot
cm.teachSkill(33001001,15,15); //Jaguar Rider
cm.teachSkill(33001002,10,10); //Jag Jump
cm.teachSkill(33001003,20,20); //Crossbow booster
//Job 2
cm.teachSkill(33100000,20,20); //Crossbow Mastery
cm.teachSkill(33101001,20,20); //Ricochet
cm.teachSkill(33101002,20,20); //Jaguar Rawr
cm.teachSkill(33101003,10,10); //Soul Arrow: Crossbow
cm.teachSkill(33101004,20,20); //It's Raining Mines
cm.teachSkill(33101006,10,10); //Jaguar-oshi 1
cm.teachSkill(33101007,10,10); //Jaguar-oshi 2
cm.teachSkill(33100009,20,20); //Final Attack
cm.teachSkill(33100010,10,10); //Physical Training
//Job 3
cm.teachSkill(33110000,20,20); //Jaguar Boost
cm.teachSkill(33111001,30,30); //Enduring Fire
cm.teachSkill(33111002,30,30); //Dash 'n Slash
cm.teachSkill(33111003,20,20); //Wild Trap
cm.teachSkill(33111004,10,10); //Blind
cm.teachSkill(33111005,20,20); //Silver Hawk
cm.teachSkill(33111006,20,20); //Swipe
cm.teachSkill(33111007,30,30); //Feline Berserk
// Job 4
cm.teachSkill(33121009,10,10); //Wild Arrow Blast
cm.teachSkill(33121002,10,10); //Sonic Roar
cm.teachSkill(33121001,10,10); //Exploding Arrows
cm.teachSkill(33120000,10,10); //Crossbow Expert
cm.teachSkill(33121004,10,10); //Sharp Eyes
cm.teachSkill(33121005,10,10); //Stink Bomb Shot
cm.teachSkill(33121007,10,10); //Maple Warrior
cm.teachSkill(33120010,10,10); //Wild Instinct
cm.teachSkill(33120011,10,10); //Advanced Final Attack
// End of Wild Hunter Skills
        cm.sendOk("Your skills are maxed! Happy Mapling!");
        cm.dispose();
        } else if (cm.getChar().getJob() >= 3200 && cm.getChar().getJob() <= 3212){
//Start of Battle Mage
//job 1
cm.teachSkill(32001000,20,20); //Triple Blow
cm.teachSkill(32001001,10,10); //The Finisher
cm.teachSkill(32001002,15,15); //Teleport
cm.teachSkill(32001003,20,20); //Dark Aura
//job 2
cm.teachSkill(32101000,20,20); //Quad Blow
cm.teachSkill(32101001,20,20); //Hyper Dark Chain
cm.teachSkill(32101003,20,20); //Yellow Aura
cm.teachSkill(32101004,20,20); //Blood Drain
cm.teachSkill(32101005,20,20); //Staff Boost
cm.teachSkill(32100006,20,20); //Staff Mastery
cm.teachSkill(32100007,10,10); //High Wisdom
//job 3
cm.teachSkill(32111002,20,20); //Quintuple Blow
cm.teachSkill(32111003,20,20); //Dark Shock 
cm.teachSkill(32110001,20,20); //Battle Mastery
cm.teachSkill(32111012,20,20); //Blue Aura
cm.teachSkill(32111004,10,10); //Conversion
cm.teachSkill(32110000,10,10); //Advanced Blue Aura
cm.teachSkill(32111005,20,20); //Body Boost
cm.teachSkill(32111006,20,20); //Summon Reaper Buff
cm.teachSkill(32111010,10,10); //Teleport Mastery
cm.teachSkill(32111014,10,10); //Stance
//job 4
cm.teachSkill(32121002,10,10); //Finishing Blow
cm.teachSkill(32121003,10,10); //Twister Spin
cm.teachSkill(32121004,10,10); //Dark Genesis
cm.teachSkill(32120000,10,10); //Advanced Dark Aura
cm.teachSkill(32120001,10,10); //Advanced Yellow Aura
cm.teachSkill(32121006,10,10); //Party Shield
cm.teachSkill(32121007,10,10); //Maple Warrior
cm.teachSkill(32120009,10,10); //Energize
//End of Battle Mage
        cm.sendOk("Your skills are maxed! Happy Mapling!");
        cm.dispose();
        } else if (cm.getChar().getJob() >= 3100 && cm.getChar().getJob() <= 3112){
//Start of Demon Slayer
//job 1
cm.teachSkill(31000004,10,10); //Demon Lash
cm.teachSkill(31001000,15,15); //Grim Scythe
cm.teachSkill(31001001,20,20); //Batlle Pact
cm.teachSkill(31000002,10,10); //Shadow Swiftness
cm.teachSkill(31000003,10,10); //HP Boost
//job 2
cm.teachSkill(31100007,1,1);   //Barbed Lash
cm.teachSkill(31101000,20,20); //Soul Eater
cm.teachSkill(31101001,20,20); //Dark Thrust
cm.teachSkill(31101002,15,15); //Chaos Lock
cm.teachSkill(31101003,20,20); //Vengeance
cm.teachSkill(31100004,20,20); //Weapon Mastery
cm.teachSkill(31100006,20,20); //Outrage
cm.teachSkill(31100005,10,10); //Physical Training
//job 3
cm.teachSkill(31110010,1,1)    //Demon Lash Arch
cm.teachSkill(31111000,20,20); //Judgment
cm.teachSkill(31111001,20,20); //Vortex of Doom
cm.teachSkill(31111003,20,20); //Raven Storm
cm.teachSkill(31111005,20,20); //Carrion Breath
cm.teachSkill(31111004,20,20); //Black-Hearted Strength
cm.teachSkill(31110006,15,15); //Insult To Injury
cm.teachSkill(31110007,20,20); //Focused Fury
cm.teachSkill(31110008,15,15); //Possessed Aegis
cm.teachSkill(31110009,5,5);   //Max Fury
//job 4
cm.teachSkill(31120011,1,1);   //Demon Thrash
cm.teachSkill(31121000,10,10); //Infernal Concussion
cm.teachSkill(31121001,10,10); //Demon Impact
cm.teachSkill(31121003,10,10); //Demon Cry
cm.teachSkill(31121006,10,10); //Binding Darkness
cm.teachSkill(31121005,10,10); //Dark Metamorphosis
cm.teachSkill(31121007,15,15); //Boundless Rage
cm.teachSkill(31121002,10,10); //Leech Aura
cm.teachSkill(31121004,10,10); //Maple Warrior
cm.teachSkill(31120008,10,10); //Barricade Mastery
cm.teachSkill(31120009,10,10); //Obsidian Skin
//End of Demon Slayer
//End of Resistance 
        cm.sendOk("Your skills are maxed! Happy Mapling!");
        cm.dispose();
        } else if (cm.getChar().getJob() >= 2300 && cm.getChar().getJob() <= 2312){
//Start of Mercedes Skills
//job 1
cm.teachSkill(23001000,20,20); //Swift Dual Shot
cm.teachSkill(23000001,15,15); //Potential Power
cm.teachSkill(23001002,10,10); //Glide Blast
cm.teachSkill(23000003,20,20); //Sharp Aim
//job 2
cm.teachSkill(23101000,20,20); //Piercing Storm
cm.teachSkill(23101001,15,15); //Rishing Rush
cm.teachSkill(23100004,5,5);   //Parting Shot
cm.teachSkill(23101002,20,20); //Dual Bowguns Boost
cm.teachSkill(23101003,15,15); //Spirit Surge
cm.teachSkill(23100005,20,20); //Dual Bowguns Mastery
cm.teachSkill(23100006,20,20); //Final Attack: Dual Bowguns
cm.teachSkill(23100008,10,10); //Physical Training
//job 3
cm.teachSkill(23111000,20,20); //Stunning Strikes
cm.teachSkill(23111001,20,20); //Leap Tornado
cm.teachSkill(23111002,20,20); //Unicorn Spike
cm.teachSkill(23111003,20,20); //Gust Dive
cm.teachSkill(23110006,15,15); //Aerial Barrage
cm.teachSkill(23111004,20,20); //Ignis Roar
cm.teachSkill(23111005,15,15); //Water Shield
cm.teachSkill(23111008,20,20); //Elemental Knights
//job 4
cm.teachSkill(23121000,10,10); //Ishtar's Ring
cm.teachSkill(23121002,10,10); //Spikes Royale
cm.teachSkill(23121003,10,10); //Lightning Edge
cm.teachSkill(23120011,20,20); //Rolling Moonsault
cm.teachSkill(23121004,10,10); //Acient Warding
cm.teachSkill(23120009,10,10); //Dual Bowguns Expert
cm.teachSkill(23120010,10,10); //Defense Break
cm.teachSkill(23120012,10,10); //Advanced Final Attack
cm.teachSkill(23121005,10,10); //Maple Warrior
//End of Mercedes Skills
        cm.sendOk("Your skills are maxed! Happy Mapling!");
        cm.dispose();
        } else if (cm.getChar().getJob() >= 5080 && cm.getChar().getJob() <= 5722){
//Start of Jett Skills
//job 1
cm.teachSkill(5080000,10,10); //Quick Motion
cm.teachSkill(5081001,20,20); //Tornado Uppercut
cm.teachSkill(5081002,20,20); //Double Shot
cm.teachSkill(5081003,10,10); //Glide Blast
cm.teachSkill(5080004,10,10); //Shadow Heart
//job 2
cm.teachSkill(5700000,20,20); //Gun Mastery
cm.teachSkill(5701005,20,20); //Gun Booster
cm.teachSkill(5700004,20,20); //Triple Fire
cm.teachSkill(5701001,20,20); //Shockwave
cm.teachSkill(5700003,10,10); //Physical Training
cm.teachSkill(5700005,15,15); //Perseverance
cm.teachSkill(5701006,20,20); //Dark Clarity
//job 3
cm.teachSkill(5711000,30,30); //Solar Array
cm.teachSkill(5711001,20,20); //Turret Deployment
cm.teachSkill(5711002,20,20); //Gamma Missle
cm.teachSkill(5710004,20,20); //High Life
cm.teachSkill(5710005,20,20); //Cutting Edge
cm.teachSkill(5711011,20,20); //Roll of the Dice
cm.teachSkill(5711006,30,30); //Drone Blast
//job 4
cm.teachSkill(5721000,10,10); //Maple Warrior
cm.teachSkill(5721001,10,10); //Rapid Fire
cm.teachSkill(5721003,10,10); //Mighty Meteor
cm.teachSkill(5721004,10,10); //Starfall
cm.teachSkill(5720005,5,5);   //Double Down
cm.teachSkill(5721006,10,10); //Brain Scrambler
cm.teachSkill(5721007,10,10); //Suborbital Bombardier
cm.teachSkill(5720008,20,20); //Collateral Damage
cm.teachSkill(5721009,10,10); //Relentless
cm.teachSkill(5720012,10,10); //Counterattack
//End of Jett Skills
        cm.sendOk("Your skills are maxed! Happy Mapling!");
        cm.dispose();
        } else if (cm.getChar().getJob() == 900){
//Start of GM Skills
cm.teachSkill(9001000,1,1); //Haste
cm.teachSkill(9001001,1,1); //GM Roar
cm.teachSkill(9001002,1,1); //GM Teleport
//End of GM Skills
        cm.sendOk("Your skills are maxed! Happy Mapling!");
        cm.dispose();
        } else if (cm.getChar().getJob() == 910){
//Start of SuperGM Skills
cm.teachSkill(9101000,1,1); //Heal Plus Dispel
cm.teachSkill(9101001,1,1); //Haste
cm.teachSkill(9101002,1,1); //Holy Symbol
cm.teachSkill(9101003,1,1); //Bless
cm.teachSkill(9101004,1,1); //Hide
cm.teachSkill(9101005,1,1); //Resurrection
cm.teachSkill(9101006,1,1); //Super Dragon Roar
cm.teachSkill(9101007,1,1); //Teleport
cm.teachSkill(9101008,1,1); //Hyper Body
//End of SuperGM Skills
        cm.sendOk("Your skills are maxed! Happy Mapling!");
        cm.dispose();
    }  else if (status == 2){
        cm.dispose();
    }
}
}