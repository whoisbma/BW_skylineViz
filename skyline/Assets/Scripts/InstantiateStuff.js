
var cube1 : Transform;
var cube2 : Transform;
var cube3 : Transform;
var cube4 : Transform;

var building1 : Transform;
var building2 : Transform;
var building3 : Transform;
var building4 : Transform;
var building5 : Transform;
var building6 : Transform;
var building7 : Transform;

var channel1 : float;
var channel2 : float;
var channel3 : float;
var channel4 : float;
var channel5 : float;

var randomOrder : int; 
var randomPos : int;

var waiting : boolean;

function Start () {
		
	yield StartCoroutine(wait(.2));
	yield StartCoroutine(wait(3)); 
	}

function wait2 (waitTime : float ) {
	while (true) {
		yield WaitForSeconds (waitTime);
		var condo1 : Transform;
		condo1 = Instantiate (building5, new Vector3(-15,0,10), Quaternion.identity);
		condo1.localScale += Vector3(0,0,0);
		Destroy(condo1, 5); 

		var condo2 : Transform;
		condo2 = Instantiate (building7, new Vector3(25,0,5), Quaternion.identity);
		condo2.localScale += Vector3(0,0,0);
		Destroy(condo2, 5); 

		var condo3 : Transform;
		condo3 = Instantiate (building6, new Vector3(35,0,15), Quaternion.identity);
		condo3.localScale += Vector3(0,0,0);
		Destroy(condo3, 5);

	}
}

function wait (waitTime : float) {
	while(true) {
		// suspend execution for waitTime seconds
		yield WaitForSeconds (waitTime);
		print ("WaitAndPrint "+ Time.time);;

		randomOrder = Random.Range(0, 4); 
		randomPos = 0;//Random.Range(-5, 5); 
//		channel1 = GameObject.Find("Controller").GetComponent(channelSaver).channel1 * 5;
//		channel2 = GameObject.Find("Controller").GetComponent(channelSaver).channel2 * 5;
//		channel3 = GameObject.Find("Controller").GetComponent(channelSaver).channel3 * 5;
//		channel4 = GameObject.Find("Controller").GetComponent(channelSaver).channel4 * 5;
//		channel5 = GameObject.Find("Controller").GetComponent(channelSaver).channel5 * 5;
	
		var bldg1 : Transform;
		var bldg2 : Transform;
		var bldg3 : Transform;
		var bldg4 : Transform;

		if (channel1 + channel2 + channel3 + channel4 > 16) {
			for (x = 0; x < 5; x+= 1) {
				var cubex : Transform;
				cubex = Instantiate (cube1, new Vector3(x*5, 10, 0), Quaternion.identity);
				cubex.localScale -= Vector3(3, 1, 3);
				Destroy(cubex, 5);
			}
		}
//		else if (channel1 + channel2 + channel3 + channel4 < 4) {
//			for (x = 0; x < 5; x+= 1) {
//				var cubey : Transform;
//				cubey = Instantiate (cube1, new Vector3(x*5, -10, 0), Quaternion.identity);
//				cubey.localScale -= Vector3(1, 10, 1);
//				Destroy(cubey, 5);
//			}
//		}




		if (randomOrder == 0) {
			if ( channel1 >= 5 ) {
				bldg1 = Instantiate (building1, new Vector3(randomPos, 0, 0), Quaternion.identity);
				bldg1.localScale += Vector3(channel1/5,channel1/5,channel1/5);
			} else if (channel1 > 2 && channel1 < 5) {
				bldg1 = Instantiate ( cube1, new Vector3(randomPos, channel1/2, 0), Quaternion.identity);
				bldg1.localScale += Vector3(0,channel1,0);
			} 
			
			if ( channel2 >= 5 ) {
				bldg2 = Instantiate (building2, new Vector3(7+randomPos, 0, 0), Quaternion.identity);
				bldg2.localScale += Vector3(channel2/5,channel2/5,channel2/5);
			} else if (channel2 > 2 && channel2 < 5) {
				bldg2 = Instantiate (cube2, new Vector3(7+randomPos, channel2/2, 0), Quaternion.identity);
				bldg2.localScale += Vector3(0,channel2,0);
			}

			if ( channel3 >= 5 ) {
				bldg3 = Instantiate (building3, new Vector3(14+randomPos, 0, 0), Quaternion.identity);
				bldg3.localScale += Vector3(channel3/5,channel3/5,channel3/5);
			} else if (channel3 > 2 && channel3 < 5) {
				bldg3 = Instantiate (cube3, new Vector3(14+randomPos, channel3/2, 0), Quaternion.identity);
				bldg3.localScale += Vector3(0,channel3,0);
			}

			if ( channel4 >= 5 ) {
				bldg4 = Instantiate (building4, new Vector3(21+randomPos, 0, 0), Quaternion.identity);
				bldg4.localScale += Vector3(channel4/5,channel4/5,channel4/5);
			} else if (channel4 > 2 && channel4 < 5) {
				bldg4 = Instantiate (cube4, new Vector3(21+randomPos, channel4/2, 0), Quaternion.identity);
				bldg4.localScale += Vector3(0,channel4,0);
			}
		}
		else if (randomOrder == 1) {
			if ( channel1 >= 5 ) {
				bldg1 = Instantiate (building2, new Vector3(randomPos, 0, 0), Quaternion.identity);
				bldg1.localScale += Vector3(channel1/5,channel1/5,channel1/5);
			} else if (channel1 > 2 && channel1 < 5) {
				bldg1 = Instantiate ( cube2, new Vector3(randomPos, channel1/2, 0), Quaternion.identity);
				bldg1.localScale += Vector3(0,channel1,0);
			}
			
			if ( channel2 > 4.9 ) {
				bldg2 = Instantiate (building3, new Vector3(7+randomPos, 0, 0), Quaternion.identity);
				bldg2.localScale += Vector3(channel2/5,channel2/5,channel2/5);
			} else if (channel2 > 2 && channel2 <= 4.8) {
				bldg2 = Instantiate (cube3, new Vector3(7+randomPos, channel2/2, 0), Quaternion.identity);
				bldg2.localScale += Vector3(0,channel2,0);
			}

			if ( channel3 >= 5 ) {
				bldg3 = Instantiate (building4, new Vector3(14+randomPos, 0, 0), Quaternion.identity);
				bldg3.localScale += Vector3(channel3/5,channel3/5,channel3/5);
			} else if (channel3 > 2 && channel3 < 5) {
				bldg3 = Instantiate (cube4, new Vector3(14+randomPos, channel3/2, 0), Quaternion.identity);
				bldg3.localScale += Vector3(0,channel3,0);
			}

			if ( channel4 >= 5 ) {
				bldg4 = Instantiate (building1, new Vector3(21+randomPos, 0, 0), Quaternion.identity);
				bldg4.localScale += Vector3(channel4/5,channel4/5,channel4/5);
			} else if (channel4 > 2 && channel4 < 5) {
				bldg4 = Instantiate (cube1, new Vector3(21+randomPos, channel4/2, 0), Quaternion.identity);
				bldg4.localScale += Vector3(0,channel4,0);
			}
		}
		else if (randomOrder == 2) {
			if ( channel1 >= 5 ) {
				bldg1 = Instantiate (building3, new Vector3(randomPos, 0, 0), Quaternion.identity);
				bldg1.localScale += Vector3(channel1/5,channel1/5,channel1/5);
			} else if (channel1 > 2 && channel1 < 5) {
				bldg1 = Instantiate ( cube3, new Vector3(randomPos, channel1/2, 0), Quaternion.identity);
				bldg1.localScale += Vector3(0,channel1,0);
			}
			
			if ( channel2 >= 5 ) {
				bldg2 = Instantiate (building4, new Vector3(7+randomPos, 0, 0), Quaternion.identity);
				bldg2.localScale += Vector3(channel2/5,channel2/5,channel2/5);
			} else if (channel2 > 2 && channel2 < 5) {
				bldg2 = Instantiate (cube4, new Vector3(7+randomPos, channel2/2, 0), Quaternion.identity);
				bldg2.localScale += Vector3(0,channel2,0);
			}

			if ( channel3 >= 5) {
				bldg3 = Instantiate (building1, new Vector3(14+randomPos, 0, 0), Quaternion.identity);
				bldg3.localScale += Vector3(channel3/5,channel3/5,channel3/5);
			} else if (channel3 > 2 && channel3 < 5) {
				bldg3 = Instantiate (cube1, new Vector3(14+randomPos, channel3/2, 0), Quaternion.identity);
				bldg3.localScale += Vector3(0,channel3,0);
			}

			if ( channel4 >= 5) {
				bldg4 = Instantiate (building2, new Vector3(21+randomPos, 0, 0), Quaternion.identity);
				bldg4.localScale += Vector3(channel4/5,channel4/5,channel4/5);
			} else if (channel4 > 2 && channel4 < 5) {
				bldg4 = Instantiate (cube2, new Vector3(21+randomPos, channel4/2, 0), Quaternion.identity);
				bldg4.localScale += Vector3(0,channel4,0);
			}
		}
		else if (randomOrder == 3) {
			if ( channel1 >= 5 ) {
				bldg1 = Instantiate (building4, new Vector3(randomPos, 0, 0), Quaternion.identity);
				bldg1.localScale += Vector3(channel1/5,channel1/5,channel1/5);
			} else if (channel1 > 2 && channel1 < 5) {
				bldg1 = Instantiate ( cube4, new Vector3(randomPos, channel1/2, 0), Quaternion.identity);
				bldg1.localScale += Vector3(0,channel1,0);
			}
			
			if ( channel2 >= 5 ) {
				bldg2 = Instantiate (building1, new Vector3(7+randomPos, 0, 0), Quaternion.identity);
				bldg2.localScale += Vector3(channel2/5,channel2/5,channel2/5);
			} else if (channel2 > 2 && channel2 < 5) {
				bldg2 = Instantiate (cube1, new Vector3(7+randomPos, channel2/2, 0), Quaternion.identity);
				bldg2.localScale += Vector3(0,channel2,0);
			}

			if ( channel3 >= 5) {
				bldg3 = Instantiate (building2, new Vector3(14+randomPos, 0, 0), Quaternion.identity);
				bldg3.localScale += Vector3(channel3/5,channel3/5,channel3/5);
			} else if (channel3 > 2 && channel3 < 5) {
				bldg3 = Instantiate (cube2, new Vector3(14+randomPos, channel3/2, 0), Quaternion.identity);
				bldg3.localScale += Vector3(0,channel3,0);
			}

			if ( channel4 >= 5 ) {
				bldg4 = Instantiate (building3, new Vector3(21+randomPos, 0, 0), Quaternion.identity);
				bldg4.localScale += Vector3(channel4/5,channel4/5,channel4/5);
			} else if (channel4 > 2 && channel4 < 5) {
				bldg4 = Instantiate (cube3, new Vector3(21+randomPos, channel4/2, 0), Quaternion.identity);
				bldg4.localScale += Vector3(0,channel4,0);
			}
		}
	}

	}

function Update () {
		channel1 = GameObject.Find("Controller").GetComponent(channelSaver).channel1 * 5;
		channel2 = GameObject.Find("Controller").GetComponent(channelSaver).channel2 * 5;
		channel3 = GameObject.Find("Controller").GetComponent(channelSaver).channel3 * 5;
		channel4 = GameObject.Find("Controller").GetComponent(channelSaver).channel4 * 5;
		channel5 = GameObject.Find("Controller").GetComponent(channelSaver).channel5 * 5;
}