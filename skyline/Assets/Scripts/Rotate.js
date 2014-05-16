#pragma strict

var channel1 : float;
var channel4 : float;

function Start () {

}

function Update () {
	//GetComponent(Light).intensity = .3;
	channel1 = GameObject.Find("Controller").GetComponent(channelSaver).channel1/2;
//		channel2 = GameObject.Find("Controller").GetComponent(channelSaver).channel2 * 5;
//		channel3 = GameObject.Find("Controller").GetComponent(channelSaver).channel3 * 5;
	//channel4 = GameObject.Find("Controller").GetComponent(channelSaver).channel4/2;
//		channel5 = GameObject.Find("Controller").GetComponent(channelSaver).channel5 * 5;
	
	transform.Rotate(Vector3.right * Time.deltaTime * (10 + channel1));
	transform.Rotate(Vector3.up * Time.deltaTime * 5);

	//GetComponent(Light).intensity += channel1;

}