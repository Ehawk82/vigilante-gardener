var myUI, vGardener;

vGardener = {
    gBool = false
};
myUI =  {
	init: () => {
		LSinit(vGardener);
		myUI.loadout(vGardener);
	},
	loadout: (vGardener) => {
		var startBlock = createEle("div"),
		    newBtn = createEle("button");
        
        newBtn.innerHTML = "NEW GAME";
        newBtn.className = "newBtn";
        newBtn.onclick = myUI.newGameFunc(newBtn);

		startBlock.className = "startBlock";
        startBlock.append(newBtn, vGardener);

		dvContain.append(startBlock);
	},
	newGameFunc: (newBtn, vGardener) => {
		return () => {
			alert(vGardener);
		}
	}
};

window.onload = () => {
	myUI.init();
};