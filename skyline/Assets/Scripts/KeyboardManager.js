public var strobeThreshold:Number = 1.0;
public var shakeThreshold:Number = 0.2;

var cameras:Camera[];

private var camId:int = 0;
private var shakeIntensity:Number = 0.0;
private var lastStrobe:Number = 0.0;
function OnGUI() {
    var e : Event = Event.current;
    if (e.isKey && e.type == EventType.KeyDown) {
        keyEvent(e);
    }
}

function Strobe(){
	var v = OSCReceiver.messages[0];
	if(v < strobeThreshold) v = 0;
	else v *= 3;
	cameras[camId].GetComponent("Camera").backgroundColor = Color(v,v,v);
}


function getCam(){
	return cameras[camId];
}

function shakeChange(n){
	shakeIntensity = Mathf.Clamp(shakeIntensity + n,0.0,1.0);	
}

function Start(){
	Screen.showCursor = false;
	cameras[cameras.length-1].GetComponent("Camera").enabled = false;
	cameras[camId].GetComponent("Camera").enabled = true;
}

function Update(){	
	Shake();
	Strobe();

}

function Shake(){
	if(OSCReceiver && OSCReceiver.messages[0] > shakeThreshold && Random.value > .5){
		cameras[camId].transform.position += Vector3(Random.value-.5,Random.value-.5,Random.value-.5) * shakeIntensity * OSCReceiver.messages[0];
	}

}

function keyEvent(e:Event){
	switch(e.keyCode){
		case KeyCode.Alpha1: changeScene(1); break;
		case KeyCode.Alpha2: changeScene(2); break;
		case KeyCode.Alpha3: changeScene(3); break;
		case KeyCode.Alpha4: changeScene(4); break;
		case KeyCode.Alpha5: changeScene(5); break;
		case KeyCode.Alpha6: changeScene(6); break;
		case KeyCode.Alpha7: changeScene(7); break;
		case KeyCode.Alpha8: changeScene(8); break;
		case KeyCode.Alpha9: changeScene(9); break;
		case KeyCode.Alpha0: changeScene(10); break;
		case KeyCode.Minus: changeScene(11); break;
		
		case KeyCode.LeftBracket: shakeChange(-.05); break;
		case KeyCode.RightBracket: shakeChange(.05); break;
		
		case KeyCode.Period: changeCamera(1); break;
		case KeyCode.Comma: changeCamera(-1); break;
	}
}

function changeCamera(n){
	cameras[camId].GetComponent("Camera").enabled = false;
	camId = Mathf.Clamp(camId+n,0,cameras.length -1);
	cameras[camId].GetComponent("Camera").enabled = true;
	
}

function changeScene(n){
	Application.LoadLevel(n-1);	
}