using UnityEngine;
using System.Collections;

public class InstantiateStuff : MonoBehaviour {

	public Transform building1;
	public Transform building2;
	public Transform building3;
	public Transform building4;
	public Transform building5;
	public Transform building6;
	public Transform building7;

	int rando; 

	public int oscChannel;
	
	// Use this for initialization
	void Start () {
//		float n = OSCReceiver.messages[oscChannel];
//		transform.localScale = Vector3(1, 1 + n, 1);
	//	float chn1 = channelSaver.channel1;
//		float chn2 = channelSaver.channel2;
//		float chn3 = channelSaver.channel3;
//		float chn4 = channelSaver.channel4;
//		float chn5 = channelSaver.channel5;

		//float chn1 = Game.Find("Hand").GetComponent(OtherScript).foo = 2;

		rando = Random.Range(0, 4); 
		if (rando == 0) {
			Instantiate (building1, new Vector3(0, 0, 0), Quaternion.identity);
			Instantiate (building2, new Vector3(5, 0, 0), Quaternion.identity);
			Instantiate (building3, new Vector3(10, 0, 0), Quaternion.identity);
			Instantiate (building4, new Vector3(15, 0, 0), Quaternion.identity);
		}
		else if (rando == 1) {
			Instantiate (building2, new Vector3(0, 0, 0), Quaternion.identity);
			Instantiate (building3, new Vector3(5, 0, 0), Quaternion.identity);
			Instantiate (building4, new Vector3(10, 0, 0), Quaternion.identity);
			Instantiate (building1, new Vector3(15, 0, 0), Quaternion.identity);
		}
		else if (rando == 2) {
			Instantiate (building3, new Vector3(0, 0, 0), Quaternion.identity);
			Instantiate (building4, new Vector3(5, 0, 0), Quaternion.identity);
			Instantiate (building1, new Vector3(10, 0, 0), Quaternion.identity);
			Instantiate (building2, new Vector3(15, 0, 0), Quaternion.identity);
		}
		else if (rando == 3) {
			Instantiate (building4, new Vector3(0, 0, 0), Quaternion.identity);
			Instantiate (building1, new Vector3(5, 0, 0), Quaternion.identity);
			Instantiate (building2, new Vector3(10, 0, 0), Quaternion.identity);
			Instantiate (building3, new Vector3(15, 0, 0), Quaternion.identity);
		}
		Debug.Log (rando);
		//Instantiate (building1, new Vector3(x, 0, z), Quaternion.identity);
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
