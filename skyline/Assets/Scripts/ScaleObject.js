var oscChannel : int;

function Start () {
	Destroy(gameObject, 5);
}

function Update () {
	var n = OSCReceiver.messages[oscChannel];
	transform.localScale = Vector3(1+ n/5, 1 + n/2, 1+ n/5);

	transform.Translate(Vector3.back * .4, Space.World);
//	Debug.Log(OSCReceiver.messages[oscChannel]);
}