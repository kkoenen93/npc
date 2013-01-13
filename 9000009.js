function start() {
    cm.sendSimple ("Ahoy Matey! I am the skillmaxer of TroepieMS! What would you like me to do?.\r\n\
#L1#Max your current skills\r\n\
#L2#Empty your Skills\r\n");
}

function action(mode, type, selection) {
   switch(selection) {
   case 1:
        cm.maxSkillsByJob(); 
		cm.sendOk("I have maxed your stats by job. Happy Mapling !");
        break;
   case 2:
        cm.clearSkills();
        cm.sendOk("I have cleared your stats. Happy Mapling !");
	break;
	 }
        cm.dispose();
}
