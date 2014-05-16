static var channel1 : float;
static var channel2 : float;
static var channel3 : float;
static var channel4 : float;
static var channel5 : float;


function Update () {
	channel1 = OSCReceiver.messages[0];
	channel2 = OSCReceiver.messages[1];
	channel3 = OSCReceiver.messages[2];
	channel4 = OSCReceiver.messages[3];
	channel5 = OSCReceiver.messages[4];
}